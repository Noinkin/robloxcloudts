import { EventEmitter } from "events";
import { RateLimitError, RobloxAPIError } from "../util/errors.js";
import { DeveloperProductsManager } from "../developerproducts/developerproducts.js";
import {
    PollingManager,
    type ResourceEventString,
    type ResourceEventIdString,
} from "./polling.js";

/**
 * Type for creating a Roblox API Client
 */
export interface ClientOptions {
    /** API Key to use Roblox API */
    apiKey: string;
    /** The amount of times to retry if any errorr occur */
    retries?: number;
    /** The delay between retries if any errors occur */
    retryDelay?: number;
}

/**
 * Type for displaying rate limits
 */
export interface RateLimitData {
    /** Total limit over selected time period */
    limit: number;
    /** Requests left over selected time period */
    remaining: number;
    /** When time period ends */
    reset: number;
}

/**
 * Type for sending a request from the client
 */
export interface RequestOptions {
    /** Request Method */
    method: "GET" | "POST" | "PATCH" | "DELETE" | "PUT";
    /** Request Endpoint, must contain full Roblox URL */
    endpoint: string;
    /** Request Body */
    body?: any;
    /** Request Params */
    params?: Record<string, any>;
    /** Request Headers */
    headers?: Record<string, string>;
    /** Request Content Type */
    contentType?: ContentTypes;
}

/**
 * Enumeration for Request Types
 */
export enum RequestTypes {
    /** Get Request */
    Get = "GET",
    /** Post Request */
    Post = "POST",
    /** Patch Request */
    Patch = "PATCH",
    /** Delete Request */
    Delete = "DELETE",
    /** Put Request */
    Put = "PUT",
}

/**
 * Enumeration for Content Types
 */
export enum ContentTypes {
    /** application/json Content */
    Json = "application/json",
    /** application/x-www-form-urlencoded Content */
    Form = "application/x-www-form-urlencoded",
    /** multipart/form-data Content */
    MultipartForm = "multipart/form-data",
}

// Events

/**
 * Type for Rate Limit Events from the client
 */
export interface RateLimitEvent {
    /** Endpoint the event came from */
    endpoint: string;
    /** Time before next retry */
    waitTime: number;
    /** Limit of requests over a set time period */
    limit: number;
    /** Requests remaining over set time period */
    remaining: number;
    /** Time remaining of set time period */
    reset: number;
}

/**
 * Type for API Response Events from the client
 */
export interface ApiResponseEvent {
    /** Endpoint the event came from */
    endpoint: string;
    /** API Method used */
    method: string;
    /** API Response Status */
    status: number;
    /** Response Data */
    data: any;
}

/**
 * Type for API Request Events from the client
 */
export interface ApiRequestEvent {
    /** Endpoint the event was sent to */
    endpoint: string;
    /** API Method used */
    method: string;
    /** Request Data */
    body?: any;
}

/**
 * Type for API Error Events from the client
 */
export interface ApiErrorEvent {
    /** The error that occured */
    error: Error;
    /** The endpoint the error was thrown from */
    endpoint: string;
    /** The API Method used at the endpoint */
    method: string;
    /** The API Status returned */
    status?: number;
}

/**
 * Enumeration for general events
 */
export enum RobloxEvents {
    /** Fired when the client is able to send API Requests */
    Ready = "READY",
    /** Fired for debugging on smaller actions */
    Debug = "DEBUG",
    /** Fired when an error occurs */
    Error = "ERROR",
    /** Fired when a rate limit is reached */
    RateLimit = "RATE_LIMIT",
    /** Fired when an API Response is recieved */
    ApiResponse = "API_RESPONSE",
    /** Fired when an API Request is sent */
    ApiRequest = "API_REQUEST",
    /** Fired when there is a minor error */
    Warn = "WARN",
}

/**
 * Enumeration for roblox events
 */
export enum ResourceEvents {
    /** Fired when there is changes made to Developer Products */
    DeveloperProduct = "DEVELOPER_PRODUCT",
}

/**
 * Enumeration for roblox event actions
 */
export enum ResourceAction {
    /** Fired when an item is created */
    Create = "CREATE",
    /** Fired when an item is updated */
    Update = "UPDATE",
    /** Fired when an item is deleted */
    Delete = "DELETE",
}

/**
 * Type for event handler args
 */
export interface ClientEvents {
    /**
     * Ready event defined in {@link RobloxEvents}
     */
    ready: [];
    /**
     * Debug event defined in {@link RobloxEvents}
     */
    debug: [message: string];
    /**
     * Error event defined in {@link RobloxEvents}
     */
    error: [error: ApiErrorEvent];
    /**
     * Ratelimit event defined in {@link RobloxEvents}
     */
    rateLimit: [data: RateLimitEvent];
    /**
     * API Response event defined in {@link RobloxEvents}
     */
    apiResponse: [data: ApiResponseEvent];
    /**
     * API Request event defined in {@link RobloxEvents}
     */
    apiRequest: [data: ApiRequestEvent];
    /**
     * Warn event defined in {@link RobloxEvents}
     */
    warn: [message: string];
}

export declare interface RobloxClient {
    on<K extends keyof ClientEvents>(
        event: RobloxEvents,
        listener: (...args: ClientEvents[K]) => void,
    ): this;
    on(
        event: ResourceEventIdString | ResourceEventString | string,
        listener: (...args: any[]) => void,
    ): this;
    once<K extends keyof ClientEvents>(
        event: RobloxEvents,
        listener: (...args: ClientEvents[K]) => void,
    ): this;
    once(
        event: ResourceEventIdString | ResourceEventString | string,
        listener: (...args: any[]) => void,
    ): this;
    emit<K extends keyof ClientEvents>(
        event: RobloxEvents,
        ...args: ClientEvents[K]
    ): boolean;
    emit(
        event: ResourceEventIdString | ResourceEventString | string,
        ...args: any[]
    ): boolean;
    off<K extends keyof ClientEvents>(
        event: RobloxEvents,
        listener: (...args: ClientEvents[K]) => void,
    ): this;
    off(
        event: ResourceEventIdString | ResourceEventString | string,
        listener: (...args: any[]) => void,
    ): this;
    removeAllListeners<K extends keyof ClientEvents>(event?: K): this;
    removeAllListeners(
        event: ResourceEventIdString | ResourceEventString | string,
    ): this;
}

export class RobloxClient extends EventEmitter {
    private apiKey: string;
    private rateLimits: Map<string, RateLimitData>;
    private retries: number;
    private retryDelay: number;
    private _ready: boolean = false;

    public readonly polling: PollingManager;

    // Managers
    public readonly developerProducts: DeveloperProductsManager;

    constructor(options: ClientOptions) {
        super();

        this.apiKey = options.apiKey;
        this.rateLimits = new Map();
        this.retries = options.retries ?? 3;
        this.retryDelay = options.retryDelay ?? 1000;

        this.polling = new PollingManager(this);

        // Manager initialisation
        this.developerProducts = new DeveloperProductsManager(this);

        process.nextTick(() => {
            this._ready = true;
            this.emit(RobloxEvents.Ready);
        });
    }

    async request<T = any>(options: RequestOptions): Promise<T> {
        const { method, endpoint, body, params, headers = {} } = options;

        const url = new URL(endpoint);

        if (params) {
            Object.entries(params).forEach(([key, value]) => {
                url.searchParams.append(key, value);
            });
        }

        await this.checkRateLimit(endpoint);

        let lastError: Error | null = null;

        for (let attempt = 0; attempt <= this.retries; attempt++) {
            try {
                this.emit(
                    RobloxEvents.Debug,
                    `[Attempt ${attempt + 1}/${this.retries + 1}] ${method} ${endpoint}`,
                );
                this.emit(RobloxEvents.ApiRequest, { endpoint, method, body });

                const response = await fetch(url.toString(), {
                    method,
                    headers: {
                        "x-api-key": this.apiKey,
                        "Content-Type":
                            options.contentType || "application/json",
                        ...headers,
                    },
                    body: body ? JSON.stringify(body) : "",
                });

                this.updateRateLimit(endpoint, response);

                if (response.status === 429) {
                    const retryAfter = this.getRetryAfter(response);
                    const error = new RateLimitError(
                        "Rate Limit Exceeded",
                        endpoint,
                        method,
                        retryAfter,
                    );

                    this.emit(RobloxEvents.RateLimit, {
                        endpoint,
                        waitTime: retryAfter,
                        limit: parseInt(
                            response.headers.get("x-ratelimit-limit") || "0",
                        ),
                        remaining: 0,
                        reset: Date.now() + retryAfter,
                    });

                    if (attempt < this.retries) {
                        await this.sleep(retryAfter);
                        continue;
                    }

                    throw error;
                }

                if (!response.ok) {
                    const error = await this.handleError(
                        response,
                        endpoint,
                        method,
                    );

                    if (response.status >= 500 && attempt < this.retries) {
                        lastError = error;
                        await this.sleep(
                            this.retryDelay * Math.pow(2, attempt),
                        );
                        continue;
                    }

                    throw error;
                }

                const data = await response.json();
                this.emit(RobloxEvents.ApiResponse, {
                    endpoint,
                    method,
                    status: response.status,
                    data,
                });

                return data as T;
            } catch (error) {
                lastError = error as Error;

                if (error instanceof RobloxAPIError && error.status < 500) {
                    this.emit(RobloxEvents.Error, {
                        error: error as Error,
                        endpoint,
                        method,
                        status: error.status,
                    });
                    throw error;
                }
                if (attempt === this.retries) {
                    this.emit(RobloxEvents.Error, {
                        error: error as Error,
                        endpoint,
                        method,
                    });
                    throw error;
                }
                this.emit(
                    RobloxEvents.Warn,
                    `Request Failed, retrying... (${attempt + 1}/${this.retries})`,
                );
                await this.sleep(this.retryDelay * Math.pow(2, attempt));
            }
        }

        throw lastError || new Error("Request failed after all retries");
    }

    private async checkRateLimit(endpoint: string): Promise<void> {
        const limit = this.rateLimits.get(endpoint);

        if (limit && limit.remaining === 0) {
            const now = Date.now();
            const waitTime = limit.reset - now;

            if (waitTime > 0) {
                this.emit(RobloxEvents.RateLimit, {
                    endpoint,
                    waitTime,
                    limit: limit.limit,
                    remaining: limit.remaining,
                    reset: limit.reset,
                });
                await this.sleep(waitTime);
            }
        }
    }

    private updateRateLimit(endpoint: string, response: Response): void {
        const limit = response.headers.get("x-ratelimit-limit");
        const remaining = response.headers.get("x-ratelimit-remaining");
        const reset = response.headers.get("x-ratelimit-reset");

        if (limit && remaining && reset) {
            this.rateLimits.set(endpoint, {
                limit: parseInt(limit),
                remaining: parseInt(remaining),
                reset: parseInt(reset) * 1000,
            });
        }
    }

    private getRetryAfter(response: Response): number {
        const retryAfter = response.headers.get("retry-after");
        if (retryAfter) {
            const seconds = parseInt(retryAfter);
            return isNaN(seconds) ? 10000 : seconds * 1000;
        }
        return 10000;
    }

    private async handleError(
        response: Response,
        endpoint: string,
        method: string,
    ): Promise<RobloxAPIError> {
        let errorMessage = `HTTP ${response.status}: ${response.statusText}`;
        let errorCode: string | undefined;

        try {
            const errorData: any = await response.json();
            errorMessage = errorData.message || errorData.error || errorMessage;
            errorCode = errorData.code;
        } catch {}

        return new RobloxAPIError(
            errorMessage,
            response.status,
            endpoint,
            method,
            errorCode,
        );
    }

    private sleep(ms: number): Promise<void> {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }

    get ready(): boolean {
        return this._ready;
    }

    destroy(): void {
        this.polling.destroy();
        this.removeAllListeners();
        this.rateLimits.clear();
        this._ready = false;
    }
}
