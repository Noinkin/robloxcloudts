import {
    RobloxEvents,
    ResourceAction as PollingEvents,
    type RobloxClient,
    ResourceEvents,
} from "./client.js";

export interface PollingOptions {
    interval?: number;
    immediate?: boolean;
    compareBy?: string | ((item: any) => string);
    filter?: (item: any) => boolean;
}

export interface PollingConfig<T = any> {
    key: string;
    fetchFunction: () => Promise<T[]>;
    options: PollingOptions;
    cache: Map<string, T>;
    interval?: NodeJS.Timeout | undefined;
}

export type ResourceEventIdString =
    `${ResourceEvents}:${string}:${PollingEvents}`;
export type ResourceEventString = `${ResourceEvents}:${PollingEvents}`;

export function buildResourceEvent(
    resource: ResourceEvents,
    action: PollingEvents,
    id?: string,
): ResourceEventString | ResourceEventIdString {
    if (id) return `${resource}:${id}:${action}`;
    return `${resource}:${action}`;
}

export class ResourcePoller<T = any> {
    private readonly config: PollingConfig<T>;
    private readonly client: RobloxClient;
    private isPolling: boolean = false;

    constructor(
        client: RobloxClient,
        config: Omit<PollingConfig<T>, "cache" | "interval">,
    ) {
        this.client = client;
        this.config = {
            ...config,
            cache: new Map(),
            interval: undefined,
        };
    }

    start(): void {
        if (this.isPolling) {
            this.client.emit(
                RobloxEvents.Warn,
                `Poller "${this.config.key}" is already running`,
            );
            return;
        }

        this.isPolling = true;
        const interval = this.config.options.interval ?? 60000;

        if (this.config.options.immediate !== false) {
            this.poll();
        }

        this.config.interval = setInterval(() => this.poll(), interval);

        this.client.emit(
            RobloxEvents.Debug,
            `Started Polling "${this.config.key}" every ${interval}ms`,
        );
    }

    stop(): void {
        if (this.config.interval) {
            clearInterval(this.config.interval);
            this.config.interval = undefined;
            this.isPolling = false;
            this.client.emit(
                RobloxEvents.Debug,
                `Stopped Polling "${this.config.key}"`,
            );
        }
    }

    private async poll(): Promise<void> {
        try {
            let items = await this.config.fetchFunction();

            if (this.config.options.filter) {
                items = items.filter(this.config.options.filter);
            }

            const getItemId = this.getIdFunction();

            const currentIds = new Set<string>();

            for (const item of items) {
                const id = getItemId(item);
                currentIds.add(id);

                const cached = this.config.cache.get(id);

                if (!cached) {
                    this.config.cache.set(id, item);
                    this.emitEvent(PollingEvents.Create, item);
                } else if (this.hasChanged(cached, item)) {
                    this.config.cache.set(id, item);
                    this.emitEvent(PollingEvents.Update, {
                        old: cached,
                        new: item,
                    });
                }
            }

            for (const [id, item] of this.config.cache.entries()) {
                if (!currentIds.has(id)) {
                    this.config.cache.delete(id);
                    this.emitEvent(PollingEvents.Delete, item);
                }
            }
        } catch (error) {
            this.client.emit(RobloxEvents.Error, {
                error: error as Error,
                endpoint: `polling:${this.config.key}`,
                method: "POLL",
            });
        }
    }

    private getIdFunction(): (item: T) => string {
        const compareBy = this.config.options.compareBy;

        if (typeof compareBy === "function") return compareBy;

        const key = compareBy ?? "id";
        return (item: any) => String(item[key]);
    }

    private hasChanged(oldItem: T, newItem: T): boolean {
        return JSON.stringify(oldItem) !== JSON.stringify(newItem);
    }

    private emitEvent(event: PollingEvents, data: any) {
        const eventName = `${this.config.key}:${event.toLowerCase()}`;
        this.client.emit(eventName as any, data);
    }

    getCache(): Map<string, T> {
        return new Map(this.config.cache);
    }

    clearCache(): void {
        this.config.cache.clear();
    }

    get active(): boolean {
        return this.isPolling;
    }
}

export class PollingManager {
    private readonly client: RobloxClient;
    private readonly pollers: Map<string, ResourcePoller> = new Map();

    constructor(client: RobloxClient) {
        this.client = client;
    }

    startPolling<T = any>(
        resource: ResourceEvents,
        resourceId: string,
        fetchFunction: () => Promise<T[]>,
        options: PollingOptions,
    ): ResourcePoller<T> {
        if (!options) options = {};
        const key = `${resource}:${resourceId}`;

        if (this.pollers.has(key)) {
            const existing = this.pollers.get(key);
            if (existing?.active) {
                throw new Error(`Poller with key "${key}" is already active`);
            }
            existing?.start();
            return existing as ResourcePoller<T>;
        }

        const poller = new ResourcePoller<T>(this.client, {
            key,
            fetchFunction,
            options,
        });

        this.pollers.set(key, poller);
        poller.start();

        return poller;
    }

    stopPolling(resource: ResourceEvents, resourceId: string): void {
        const key = `${resource}:${resourceId}`;
        const poller = this.pollers.get(key);
        if (poller) {
            poller.stop();
        }
    }

    stopAll(): void {
        for (const poller of this.pollers.values()) {
            poller.stop();
        }
    }

    getPoller(key: string): ResourcePoller | undefined {
        return this.pollers.get(key);
    }

    getActivePollers(): string[] {
        return Array.from(this.pollers.entries())
            .filter(([_, poller]) => poller.active)
            .map(([key]) => key);
    }

    removePoller(key: string): void {
        const poller = this.pollers.get(key);
        if (poller) {
            poller.stop();
            poller.clearCache();
            this.pollers.delete(key);
        }
    }

    destroy(): void {
        this.stopAll();
        this.pollers.clear();
    }
}
