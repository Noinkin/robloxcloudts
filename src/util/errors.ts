export class RobloxAPIError extends Error {
    public readonly status: number;
    public readonly endpoint: string;
    public readonly method: string;
    public readonly code?: string | undefined;

    constructor(message: string, status: number, endpoint: string, method: string, code?: string) {
        super(message)
        this.name = "RobloxAPIError"
        this.status = status
        this.endpoint = endpoint
        this.method = method
        this.code = code
        Error.captureStackTrace(this, this.constructor)
    }
}

export class RateLimitError extends RobloxAPIError {
    public readonly retryAfter: number;

    constructor(message: string, endpoint: string, method: string, retryAfter: number) {
        super(message, 429, endpoint, method, 'RATE_LIMITED')
        this.name = 'RateLimitError'
        this.retryAfter = retryAfter
    }
}