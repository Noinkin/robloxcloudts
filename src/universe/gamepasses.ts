import {
    ContentTypes,
    RequestTypes,
    ResourceAction,
    ResourceEvents,
    RobloxEvents,
} from "../client/client.js";
import {
    buildResourceEvent,
    type PollingOptions,
    type ResourcePoller,
} from "../client/polling.js";
import { BaseManager } from "../events/base.js";

export interface GamepassData {
    gamePassId: number;
    name: string;
    description: string;
    iconImageAssetId: number;
    universeId: number;
    isForSale: boolean;
    priceInformation: {
        defaultPriceInRobux: number;
        enabledFeatures: string[];
    };
    createdTimestamp: string;
    updatedTimestamp: string;
}

export interface GamepassLocalizedInfoArray {
    data: {
        name: string;
        description: string;
        updateType: string;
        languageCode: string;
    }[];
}

export interface GamepassLocalizedInfo {
    name: string;
    description: string;
}

export interface GamepassLocalizedIconArray {
    data: {
        targetId: number;
        state: string;
        imageUrl: string;
        version: string;
    }[];
}

export interface GamepassOptions {
    name?: string;
    description?: string;
    isForSale?: boolean;
    price?: number;
    imageFile?: Buffer;
    isRegionalPricingEnabled?: boolean;
}

export interface GamepassImageSizeOptions {
    width?: number;
    height?: number;
}

export enum GamepassThumbnailSizes {
    small = "150x150",
    large = "420x420",
}

export enum GamepassThumbnailFormats {
    Png = "Png",
    Webp = "Webp",
}

export interface GamepassWatch {
    onCreate: (callback: (...gamepassData: any[]) => void) => any;
    onUpdate: (callback: (...gamepassData: any[]) => void) => any;
    onDelete: (callback: (...gamepassData: any[]) => void) => any;
    stop: () => void;
}

export class Gamepass {
    public readonly gamePassId: number;
    public name!: string;
    public description!: string;
    public iconImageAssetId!: number;
    public readonly universeId: number;
    public isForSale!: boolean;
    public storePageEnabled!: boolean;
    public priceInformation!: {
        defaultPriceInRobux: number;
        enabledFeatures: string[];
    };
    public readonly createdTimestamp: Date;
    public updatedTimestamp!: Date;

    private readonly manager: GamepassesManager;

    constructor(manager: GamepassesManager, data: GamepassData) {
        this.gamePassId = data.gamePassId;
        this.universeId = data.universeId;
        this.createdTimestamp = new Date(data.createdTimestamp);
        this.manager = manager;
        this._patch(data);
    }

    private _patch(data: GamepassData | Gamepass): void {
        this.name = data.name;
        this.description = data.description;
        this.iconImageAssetId = data.iconImageAssetId;
        this.isForSale = data.isForSale;
        this.priceInformation = data.priceInformation;
        this.updatedTimestamp = new Date(data.updatedTimestamp);
    }

    async fetch(): Promise<this> {
        const data = await this.manager.get(this.universeId, this.gamePassId);
        this._patch(data);
        return this;
    }

    async edit(
        options: GamepassOptions & { storePageEnabled?: boolean },
    ): Promise<this> {
        const data = await this.manager.update(
            this.universeId,
            this.gamePassId,
            options,
        );
        this._patch(data);
        return this;
    }

    async setName(name: string): Promise<this> {
        return this.edit({ name });
    }

    async setDescription(description: string): Promise<this> {
        return this.edit({ description });
    }

    async setPrice(price: number): Promise<this> {
        return this.edit({ price });
    }

    async setForSale(isForSale: boolean): Promise<this> {
        return this.edit({ isForSale });
    }

    async setStorePageEnabled(enabled: boolean): Promise<this> {
        return this.edit({ storePageEnabled: enabled });
    }

    async getLocalizedInfo(): Promise<GamepassLocalizedInfoArray> {
        return this.manager.getLocalizedInfo(this.gamePassId);
    }

    async setLocalizedName(
        languageCode: string,
        name: string,
    ): Promise<GamepassLocalizedInfo> {
        return this.manager.updateLocalizedName(
            this.gamePassId,
            languageCode,
            name,
        );
    }

    async setLocalizedDescription(
        languageCode: string,
        description: string,
    ): Promise<GamepassLocalizedInfo> {
        return this.manager.updateLocalizedDescription(
            this.gamePassId,
            languageCode,
            description,
        );
    }

    async setLocalizedInfo(
        languageCode: string,
        name: string,
        description: string,
    ) {
        return this.manager.updateLocalizedInfo(
            this.gamePassId,
            languageCode,
            name,
            description,
        );
    }

    async setLocalizedIcon(
        languageCode: string,
        imageFile: Buffer,
    ): Promise<any> {
        return this.manager.updateLocalizedIcon(
            this.gamePassId,
            languageCode,
            imageFile,
        );
    }

    async deleteLocalizedIcon(languageCode: string): Promise<any> {
        return this.manager.deleteLocalizedIcon(this.gamePassId, languageCode);
    }

    async getIcon(options: GamepassImageSizeOptions): Promise<any> {
        return this.manager.getIcons(this.gamePassId, options);
    }

    equals(other: Gamepass): boolean {
        return (
            this.gamePassId === other.gamePassId &&
            this.updatedTimestamp.getTime() === other.updatedTimestamp.getTime()
        );
    }

    get url(): string {
        return `https://www.roblox.com/game-pass/${this.gamePassId}`;
    }

    get price(): number {
        return this.priceInformation.defaultPriceInRobux;
    }

    get createdAt(): number {
        return this.createdTimestamp.getTime();
    }

    get updatedAt(): number {
        return this.updatedTimestamp.getTime();
    }

    toJSON(): GamepassData {
        return {
            gamePassId: this.gamePassId,
            name: this.name,
            description: this.description,
            iconImageAssetId: this.iconImageAssetId,
            universeId: this.universeId,
            isForSale: this.isForSale,
            priceInformation: this.priceInformation,
            createdTimestamp: this.createdTimestamp.toISOString(),
            updatedTimestamp: this.updatedTimestamp.toISOString(),
        };
    }

    toString(): string {
        return `Gamepass[${this.gamePassId}] ${this.name}`;
    }
}

export class GamepassesManager extends BaseManager {
    watch(universeId: number, options?: PollingOptions): GamepassWatch {
        const universeStr = universeId.toString();

        const watcherSetup = () => {
            this.client.polling.startPolling(
                ResourceEvents.Gamepass,
                universeStr,
                () => this.getAll(universeId),
                {
                    interval: options?.interval ?? 10000,
                    immediate: options?.immediate ?? true,
                    compareBy: "gamePassId",
                    ...options,
                },
            );
        };

        if (this.client.ready) {
            watcherSetup();
        } else {
            this.client.once(RobloxEvents.Ready, watcherSetup);
        }

        return {
            onCreate: (callback: (...gamepassData: any) => void) => {
                const event = buildResourceEvent(
                    ResourceEvents.Gamepass,
                    ResourceAction.Create,
                    universeStr,
                );
                this.client.on(event, callback);
                return this;
            },
            onUpdate: (callback: (...gamepassData: any) => void) => {
                const event = buildResourceEvent(
                    ResourceEvents.Gamepass,
                    ResourceAction.Update,
                    universeStr,
                );
                this.client.on(event, callback);
                return this;
            },
            onDelete: (callback: (...gamepassData: any) => void) => {
                const event = buildResourceEvent(
                    ResourceEvents.Gamepass,
                    ResourceAction.Delete,
                    universeStr,
                );
                this.client.on(event as string, callback);
                return this;
            },
            stop: () => this.stopPolling(universeId),
        };
    }

    startPolling(universeId: number, options?: PollingOptions): ResourcePoller {
        return this.client.polling.startPolling(
            ResourceEvents.Gamepass,
            universeId.toString(),
            () => this.getAll(universeId),
            {
                interval: options?.interval ?? 30000,
                immediate: options?.immediate ?? true,
                compareBy: "gamePassId",
                ...options,
            },
        );
    }

    stopPolling(universeId: number): void {
        this.client.polling.stopPolling(
            ResourceEvents.Gamepass,
            universeId.toString(),
        );
    }

    async _convert(data: any) {
        const gamepass = new Gamepass(this, data);
        return gamepass;
    }

    /**
     * Gets information about a gamepass by its universe ID and gamepass ID.
     * @param universeId {number} The universe ID
     * @param gamePassId {number} The gamepass ID
     * @returns Gamepass
     * @beta This API Endpoint is currently in beta and may change at any time
     */
    async get(universeId: number, gamePassId: number): Promise<Gamepass> {
        const data = await this.request({
            method: RequestTypes.Get,
            endpoint: `https://apis.roblox.com/game-passes/v1/universes/${universeId}/game-passes/${gamePassId}/creator`,
        });
        return this._convert(data);
    }

    /**
     * Creates a new gamepass in the specified universe.
     * @param universeId {number} The universe ID
     * @param options {GamepassOptions & { name: string }} The options for the gamepass
     * @returns Gamepass
     * @beta This API Endpoint is currently in beta and may change at any time
     */
    async create(
        universeId: number,
        options: Omit<GamepassOptions, "name"> & {
            name: string;
        },
    ): Promise<any> {
        const data = await this.request({
            method: RequestTypes.Post,
            endpoint: `https://apis.roblox.com/game-passes/v1/universes/${universeId}/game-passes`,
            body: options,
        });
        return this._convert(data);
    }

    /**
     * Updates an existing gamepass.
     * @param universeId {number} The universe ID
     * @param gamePassId {number} The gamepass ID
     * @param options {GamepassOptions} The options for the gamepass
     * @returns Gamepass
     * @beta This API Endpoint is currently in beta and may change at any time
     */
    async update(
        universeId: number,
        gamePassId: number,
        options: GamepassOptions,
    ): Promise<any> {
        const data = await this.request({
            method: RequestTypes.Patch,
            endpoint: `https://apis.roblox.com/game-passes/v1/universes/${universeId}/game-passes/${gamePassId}`,
            body: options,
        });
        return this._convert(data);
    }

    /**
     * Gets all gamepasses for a given universe.
     * @param universeId {number} The universe ID
     * @returns Gamepass[]
     * @beta This API Endpoint is currently in beta and may change at any time
     */
    async getAll(universeId: number): Promise<Gamepass[]> {
        const allGamepasses: GamepassData[] | Gamepass[] = [];

        let pageToken: string | undefined = undefined;

        do {
            const params: Record<string, string> = {};
            if (pageToken) params["pageToken"] = pageToken;

            const response = await this.request<{
                gamePasses: any[];
                nextPageToken?: string;
            }>({
                method: RequestTypes.Get,
                endpoint: `https://apis.roblox.com/game-passes/v1/universes/${universeId}/game-passes/creator`,
                params,
            });

            allGamepasses.push(...response.gamePasses);
            pageToken = response.nextPageToken;
        } while (pageToken);

        return Promise.all(allGamepasses.map((data) => this._convert(data)));
    }

    async getIcons(
        gamePassId: number,
        options: GamepassImageSizeOptions,
    ): Promise<any> {
        const params: Record<string, number> = {};
        if (options.width) params["width"] = options.width;
        if (options.height) params["height"] = options.height;
        return this.request({
            method: RequestTypes.Get,
            endpoint: `https://apis.roblox.com/legacy-game-internationalization/v1/game-passes/${gamePassId}/icons`,
            params,
        });
    }

    async deleteLocalizedIcon(
        gamePassId: number,
        languageCode: string,
    ): Promise<any> {
        return this.request({
            method: RequestTypes.Delete,
            endpoint: `https://apis.roblox.com/legacy-game-internationalization/v1/game-passes/${gamePassId}/icons/language-codes/${languageCode}`,
        });
    }

    async updateLocalizedIcon(
        gamePassId: number,
        languageCode: string,
        imageFile: Buffer,
    ): Promise<any> {
        return this.request({
            method: RequestTypes.Post,
            endpoint: `https://apis.roblox.com/legacy-game-internationalization/v1/game-passes/${gamePassId}/icons/language-codes/${languageCode}`,
            body: imageFile,
            contentType: ContentTypes.MultipartForm,
        });
    }

    async getLocalizedInfo(
        gamePassId: number,
    ): Promise<GamepassLocalizedInfoArray> {
        return this.request({
            method: RequestTypes.Get,
            endpoint: `https://apis.roblox.com/legacy-game-internationalization/v1/game-passes/${gamePassId}/name-description`,
        });
    }

    async deleteLocalizedInfo(
        gamePassId: number,
        languageCode: string,
    ): Promise<any> {
        return this.request({
            method: RequestTypes.Delete,
            endpoint: `https://apis.roblox.com/legacy-game-internationalization/v1/game-passes/${gamePassId}/name-description/language-codes/${languageCode}`,
        });
    }

    async updateLocalizedInfo(
        gamePassId: number,
        languageCode: string,
        name: string,
        description: string,
    ): Promise<GamepassLocalizedInfo> {
        return this.request({
            method: RequestTypes.Patch,
            endpoint: `https://apis.roblox.com/legacy-game-internationalization/v1/game-passes/${gamePassId}/name-description/language-codes/${languageCode}`,
            body: {
                name,
                description,
            },
        });
    }

    async updateLocalizedName(
        gamePassId: number,
        languageCode: string,
        name: string,
    ): Promise<GamepassLocalizedInfo> {
        return this.request({
            method: RequestTypes.Patch,
            endpoint: `https://apis.roblox.com/legacy-game-internationalization/v1/game-passes/${gamePassId}/name/language-codes/${languageCode}`,
            body: {
                name,
            },
        });
    }

    async updateLocalizedDescription(
        gamePassId: number,
        languageCode: string,
        description: string,
    ): Promise<GamepassLocalizedInfo> {
        return this.request({
            method: RequestTypes.Patch,
            endpoint: `https://apis.roblox.com/legacy-game-internationalization/v1/game-passes/${gamePassId}/description/language-codes/${languageCode}`,
            body: {
                description,
            },
        });
    }
}
