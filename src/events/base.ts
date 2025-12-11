import type { RobloxClient, RequestOptions } from "../client/client.js";

export abstract class BaseManager {
    protected client: RobloxClient;

    constructor(client: RobloxClient) {
        this.client = client;
    }

    protected request<T = any>(options: RequestOptions): Promise<T> {
        return this.client.request<T>(options);
    }
}
