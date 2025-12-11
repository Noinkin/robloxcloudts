import { EventEmitter } from "events";
import { RateLimitError, RobloxAPIError } from "../util/errors.js";
import { DeveloperProductsManager } from "../developerproducts/developerproducts.js";
import { PollingManager } from "./polling.js";

export interface ClientOptions {
    apiKey: string,
    retries: number,
    retryDelay: number
}

export interface RateLimitData {
    limit: number,
    remaining: number,
    reset: number
}

export interface RequestOptions {
    method: 'GET' | 'POST' | 'PATCH' | 'DELETE' | 'PUT';
    endpoint: string;
    body?: any;
    params?: Record<string, any>;
    headers?: Record<string, string>;
    contentType?: ContentTypes 
}

export enum RequestTypes {
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Delete = "DELETE",
    Put = "PUT"
}

export enum ContentTypes {
    Json = "application/json",
    Form = "application/x-www-form-urlencoded",
    MultipartForm = "multipart/form-data"
}

// Events

export interface RateLimitEvent {
    endpoint: string;
    waitTime: number;
    limit: number;
    remaining: number;
    reset: number;
}

export interface ApiResponseEvent {
    endpoint: string;
    method: string;
    status: number;
    data: any;
}

export interface ApiRequestEvent {
    endpoint: string;
    method: string;
    body?: any;
}

export interface ApiErrorEvent {
    error: Error;
    endpoint: string;
    method: string;
    status?: number;
}

export enum RobloxEvents {
    Ready = "READY",
    Debug = "DEBUG",
    Error = "ERROR",
    RateLimit = "RATE_LIMIT",
    ApiResponse = 'API_RESPONSE',
    ApiRequest = 'API_REQUEST',
    Warn = 'WARN'
}

export enum ResourceEvents {
    DeveloperProduct = "DEVELOPER_PRODUCT"
}

export enum ResourceAction {
    Create = "CREATE",
    Update = "UPDATE",
    Delete = "DELETE"
}

export interface ClientEvents {
    ready: [];
    debug: [message: string];
    error: [error: ApiErrorEvent];
    rateLimit: [data: RateLimitEvent];
    apiResponse: [data: ApiResponseEvent];
    apiRequest: [data: ApiRequestEvent];
    warn: [message: string];
    [key: `${ResourceEvents}:${string}:${ResourceAction}`]: [data: any]
}

export declare interface RobloxClient {
    on<K extends keyof ClientEvents>(event: RobloxEvents, listener: (...args: ClientEvents[K]) => void): this;
    once<K extends keyof ClientEvents>(event: RobloxEvents, listener: (...args: ClientEvents[K]) => void): this;
    emit<K extends keyof ClientEvents>(event: RobloxEvents, ...args: ClientEvents[K]): boolean;
    off<K extends keyof ClientEvents>(event: RobloxEvents, listener: (...args: ClientEvents[K]) => void): this;
    removeAllListeners<K extends keyof ClientEvents>(event?: K): this;
}

export class RobloxClient extends EventEmitter {
    private apiKey: string
    private rateLimits: Map<string, RateLimitData>
    private retries: number;
    private retryDelay: number;
    private _ready: boolean = false;
    
    public readonly polling: PollingManager;

    // Managers
    public readonly developerProducts: DeveloperProductsManager

    constructor(options: ClientOptions) {
        super()

        this.apiKey = options.apiKey
        this.rateLimits = new Map()
        this.retries = options.retries ?? 3
        this.retryDelay = options.retryDelay ?? 1000

        this.polling = new PollingManager(this)

        // Manager initialisation
        this.developerProducts = new DeveloperProductsManager(this)

        process.nextTick(() => {
            this._ready = true
            this.emit(RobloxEvents.Ready)
        })
    }

    async request<T = any>(options: RequestOptions): Promise<T> {
        const { method, endpoint, body, params, headers = {}} = options;

        const url = new URL(endpoint)

        if(params) {
            Object.entries(params).forEach(([key, value]) => {
                url.searchParams.append(key, value)
            })
        }

        await this.checkRateLimit(endpoint);

        let lastError: Error | null = null;

        for (let attempt = 0; attempt <= this.retries; attempt++) {
            try {
                this.emit(RobloxEvents.Debug, `[Attempt ${attempt + 1}/${this.retries + 1}] ${method} ${endpoint}`)
                this.emit(RobloxEvents.ApiRequest, {endpoint, method, body})

                const response = await fetch(url.toString(), {
                    method,
                    headers: {
                        'x-api-key': this.apiKey,
                        'Content-Type': options.contentType || 'application/json',
                        ...headers
                    },
                    body: body ? JSON.stringify(body) : ''
                })

                this.updateRateLimit(endpoint, response)

                if(response.status === 429) {
                    const retryAfter = this.getRetryAfter(response)
                    const error = new RateLimitError(
                        'Rate Limit Exceeded',
                        endpoint,
                        method,
                        retryAfter
                    )

                    this.emit(RobloxEvents.RateLimit, {
                        endpoint,
                        waitTime: retryAfter,
                        limit: parseInt(response.headers.get('x-ratelimit-limit') || '0'),
                        remaining: 0,
                        reset: Date.now() + retryAfter
                    })

                    if(attempt < this.retries) {
                        await this.sleep(retryAfter)
                        continue
                    }

                    throw error
                }

                if(!response.ok) {
                    const error = await this.handleError(response, endpoint, method)

                    if(response.status >= 500 && attempt < this.retries) {
                        lastError = error
                        await this.sleep(this.retryDelay * Math.pow(2, attempt))
                        continue
                    }

                    throw error
                }

                const data = await response.json()
                this.emit(RobloxEvents.ApiResponse, {
                    endpoint,
                    method,
                    status: response.status,
                    data
                })

                return data as T
            } catch(error) {
                lastError = error as Error

                if (error instanceof RobloxAPIError && error.status < 500 ) {
                    this.emit(RobloxEvents.Error, {
                        error: error as Error,
                        endpoint,
                        method,
                        status: error.status
                    })
                    throw error
                }
                if(attempt === this.retries) {
                    this.emit(RobloxEvents.Error, {
                        error: error as Error,
                        endpoint,
                        method
                    })
                    throw error
                }
                this.emit(RobloxEvents.Warn, `Request Failed, retrying... (${attempt + 1}/${this.retries})`)
                await this.sleep(this.retryDelay * Math.pow(2, attempt))
            }
        }

        throw lastError || new Error('Request failed after all retries')
    }

    private async checkRateLimit(endpoint: string): Promise<void> {
        const limit = this.rateLimits.get(endpoint);

        if(limit && limit.remaining === 0) {
            const now = Date.now();
            const waitTime = limit.reset - now;

            if(waitTime > 0) {
                this.emit(RobloxEvents.RateLimit, {
                    endpoint,
                    waitTime,
                    limit: limit.limit,
                    remaining: limit.remaining,
                    reset: limit.reset
                })
                await this.sleep(waitTime)
            }
        }
    }

    private updateRateLimit(endpoint: string, response: Response): void {
        const limit = response.headers.get('x-ratelimit-limit')
        const remaining = response.headers.get('x-ratelimit-remaining')
        const reset = response.headers.get('x-ratelimit-reset')

        if(limit && remaining && reset) {
            this.rateLimits.set(endpoint, {
                limit: parseInt(limit),
                remaining: parseInt(remaining),
                reset: parseInt(reset) * 1000,
            })
        }
    }


    private getRetryAfter(response: Response): number {
        const retryAfter = response.headers.get('retry-after');
        if(retryAfter) {
            const seconds = parseInt(retryAfter)
            return isNaN(seconds) ? 10000 : seconds * 1000
        }
        return 10000
    }

    private async handleError(response: Response, endpoint: string, method: string): Promise<RobloxAPIError> {
        let errorMessage = `HTTP ${response.status}: ${response.statusText}`;
        let errorCode: string | undefined;
        
        try {
            const errorData: any = await response.json();
            errorMessage = errorData.message || errorData.error || errorMessage
            errorCode = errorData.code
        } catch {}

        return new RobloxAPIError(errorMessage, response.status, endpoint, method, errorCode)
    }

    private sleep(ms: number): Promise<void> {
        return new Promise(resolve => setTimeout(resolve, ms))
    }

    get ready(): boolean {
        return this._ready
    }

    destroy(): void {
        this.polling.destroy()
        this.removeAllListeners()
        this.rateLimits.clear()
        this._ready = false
    }
}