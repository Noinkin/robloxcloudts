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

export interface DeveloperProductData {
    productId: number;
    name: string;
    description: string;
    iconImageAssetId: number;
    universeId: number;
    isForSale: boolean;
    storePageEnabled: boolean;
    priceInformation: {
        defaultPriceInRobux: number;
        enabledFeatures: string[];
    };
    isImmutable: boolean;
    createdTimestamp: string;
    updatedTimestamp: string;
}

export interface DeveloperProductLocalizedInfoArray {
    data: {
        name: string;
        description: string;
        updateType: string;
        languageCode: string;
    }[];
}

export interface DeveloperProductLocalizedInfo {
    name: string;
    description: string;
}

export interface DeveloperProductLocalizedIconArray {
    data: {
        targetId: number;
        state: string;
        imageUrl: string;
        version: string;
    }[];
}

export interface DeveloperProductOptions {
    name?: string;
    description?: string;
    isForSale?: boolean;
    price?: number;
    imageFile?: Buffer;
    isRegionalPricingEnabled?: boolean;
}

export interface DeveloperProductImageSizeOptions {
    width?: number;
    height?: number;
}

export enum DeveloperProductThumbnailSizes {
    small = "150x150",
    large = "420x420",
}

export enum DeveloperProductThumbnailFormats {
    Png = "Png",
    Webp = "Webp",
}

export interface DeveloperProductWatch {
    onCreate: (callback: (...productData: any[]) => void) => any;
    onUpdate: (callback: (...productData: any[]) => void) => any;
    onDelete: (callback: (...productData: any[]) => void) => any;
    stop: () => void;
}

export class DeveloperProduct {
    public readonly productId: number;
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
    public readonly isImmutable: boolean;
    public readonly createdTimestamp: Date;
    public updatedTimestamp!: Date;

    private manager: DeveloperProductsManager;

    constructor(manager: DeveloperProductsManager, data: DeveloperProductData) {
        this.productId = data.productId;
        this.universeId = data.universeId;
        this.isImmutable = data.isImmutable;
        this.createdTimestamp = new Date(data.createdTimestamp);
        this.manager = manager;
        this._patch(data);
    }

    private _patch(data: DeveloperProductData | DeveloperProduct): void {
        this.name = data.name;
        this.description = data.description;
        this.iconImageAssetId = data.iconImageAssetId;
        this.isForSale = data.isForSale;
        this.storePageEnabled = data.storePageEnabled;
        this.priceInformation = data.priceInformation;
        this.updatedTimestamp = new Date(data.updatedTimestamp);
    }

    async fetch(): Promise<this> {
        const data = await this.manager.get(this.universeId, this.productId);
        this._patch(data);
        return this;
    }

    async edit(
        options: DeveloperProductOptions & { storePageEnabled?: boolean },
    ): Promise<this> {
        const data = await this.manager.update(
            this.universeId,
            this.productId,
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

    async getLocalizedInfo(): Promise<DeveloperProductLocalizedInfoArray> {
        return this.manager.getLocalizedInfo(this.productId);
    }

    async setLocalizedName(
        languageCode: string,
        name: string,
    ): Promise<DeveloperProductLocalizedInfo> {
        return this.manager.updateLocalizedName(
            this.productId,
            languageCode,
            name,
        );
    }

    async setLocalizedDescription(
        languageCode: string,
        description: string,
    ): Promise<DeveloperProductLocalizedInfo> {
        return this.manager.updateLocalizedDescription(
            this.productId,
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
            this.productId,
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
            this.productId,
            languageCode,
            imageFile,
        );
    }

    async deleteLocalizedIcon(languageCode: string): Promise<any> {
        return this.manager.deleteLocalizedIcon(this.productId, languageCode);
    }

    async getIcon(options: DeveloperProductImageSizeOptions): Promise<any> {
        return this.manager.getIcons(this.productId, options);
    }

    equals(other: DeveloperProduct): boolean {
        return (
            this.productId === other.productId &&
            this.updatedTimestamp.getTime() === other.updatedTimestamp.getTime()
        );
    }

    get url(): string {
        return `https://www.roblox.com/game-pass/${this.productId}`;
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

    toJSON(): DeveloperProductData {
        return {
            productId: this.productId,
            name: this.name,
            description: this.description,
            iconImageAssetId: this.iconImageAssetId,
            universeId: this.universeId,
            isForSale: this.isForSale,
            storePageEnabled: this.storePageEnabled,
            priceInformation: this.priceInformation,
            isImmutable: this.isImmutable,
            createdTimestamp: this.createdTimestamp.toISOString(),
            updatedTimestamp: this.updatedTimestamp.toISOString(),
        };
    }

    toString(): string {
        return `DeveloperProduct[${this.productId}] ${this.name}`;
    }
}

export class DeveloperProductsManager extends BaseManager {
    watch(universeId: number, options?: PollingOptions): DeveloperProductWatch {
        const universeStr = universeId.toString();

        const watcherSetup = () => {
            this.client.polling.startPolling(
                ResourceEvents.DeveloperProduct,
                universeStr,
                () => this.getAll(universeId),
                {
                    interval: options?.interval || 10000,
                    immediate: options?.immediate ?? true,
                    compareBy: "productId",
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
            onCreate: (callback: (...productData: any) => void) => {
                const event = buildResourceEvent(
                    ResourceEvents.DeveloperProduct,
                    ResourceAction.Create,
                    universeStr,
                );
                this.client.on(event, callback);
                return this;
            },
            onUpdate: (callback: (...productData: any) => void) => {
                const event = buildResourceEvent(
                    ResourceEvents.DeveloperProduct,
                    ResourceAction.Update,
                    universeStr,
                );
                this.client.on(event, callback);
                return this;
            },
            onDelete: (callback: (...productData: any) => void) => {
                const event = buildResourceEvent(
                    ResourceEvents.DeveloperProduct,
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
            ResourceEvents.DeveloperProduct,
            universeId.toString(),
            () => this.getAll(universeId),
            {
                interval: options?.interval || 30000,
                immediate: options?.immediate ?? true,
                compareBy: "productId",
                ...options,
            },
        );
    }

    stopPolling(universeId: number): void {
        this.client.polling.stopPolling(
            ResourceEvents.DeveloperProduct,
            universeId.toString(),
        );
    }

    async _convert(data: any) {
        const product = new DeveloperProduct(this, data);
        return product;
    }

    /**
     * Gets information about a developer product by its universe ID and product ID.
     * @param universeId {number} The universe ID
     * @param productId {number} The product ID
     * @returns DeveloperProduct
     * @beta This API Endpoint is currently in beta and may change at any time
     */
    async get(
        universeId: number,
        productId: number,
    ): Promise<DeveloperProduct> {
        const data = await this.request({
            method: RequestTypes.Get,
            endpoint: `https://apis.roblox.com/developer-products/v2/universes/${universeId}/developer-products/${productId}/creator`,
        });
        return this._convert(data);
    }

    /**
     * Creates a new developer product in the specified universe.
     * @param universeId {number} The universe ID
     * @param options {DeveloperProductOptions & { name: string }} The options for the developer product
     * @returns DeveloperProduct
     * @beta This API Endpoint is currently in beta and may change at any time
     */
    async create(
        universeId: number,
        options: DeveloperProductOptions & { name: string },
    ): Promise<any> {
        const data = await this.request({
            method: RequestTypes.Post,
            endpoint: `https://apis.roblox.com/developer-products/v2/universes/${universeId}/developer-products`,
            body: options,
        });
        return this._convert(data);
    }

    /**
     * Updates an existing developer product.
     * @param universeId {number} The universe ID
     * @param productId {number} The product ID
     * @param options {DeveloperProductOptions & { storePageEnabled?: boolean }} The options for the developer product
     * @returns DeveloperProduct
     * @beta This API Endpoint is currently in beta and may change at any time
     */
    async update(
        universeId: number,
        productId: number,
        options: DeveloperProductOptions & { storePageEnabled?: boolean },
    ): Promise<any> {
        const data = await this.request({
            method: RequestTypes.Patch,
            endpoint: `https://apis.roblox.com/developer-products/v2/universes/${universeId}/developer-products/${productId}`,
            body: options,
        });
        return this._convert(data);
    }

    /**
     * Gets all developer products for a given universe.
     * @param universeId {number} The universe ID
     * @returns DeveloperProduct[]
     * @beta This API Endpoint is currently in beta and may change at any time
     */
    async getAll(universeId: number): Promise<DeveloperProduct[]> {
        const allProducts: DeveloperProductData[] | DeveloperProduct[] = [];

        let pageToken: string | undefined = undefined;

        do {
            const params: Record<string, string> = {};
            if (pageToken) params["pageToken"] = pageToken;

            const response = await this.request<{
                developerProducts: any[];
                nextPageToken?: string;
            }>({
                method: RequestTypes.Get,
                endpoint: `https://apis.roblox.com/developer-products/v2/universes/${universeId}/developer-products/creator`,
                params,
            });

            allProducts.push(...response.developerProducts);
            pageToken = response.nextPageToken;
        } while (pageToken);

        return Promise.all(allProducts.map((data) => this._convert(data)));
    }

    async getIcons(
        productId: number,
        options: DeveloperProductImageSizeOptions,
    ): Promise<any> {
        const params: Record<string, number> = {};
        if (options.width) params["width"] = options.width;
        if (options.height) params["height"] = options.height;
        return this.request({
            method: RequestTypes.Get,
            endpoint: `https://apis.roblox.com/legacy-game-internationalization/v1/developer-products/${productId}/icons`,
            params,
        });
    }

    async deleteLocalizedIcon(
        productId: number,
        languageCode: string,
    ): Promise<any> {
        return this.request({
            method: RequestTypes.Delete,
            endpoint: `https://apis.roblox.com/legacy-game-internationalization/v1/developer-products/${productId}/icons/language-codes/${languageCode}`,
        });
    }

    async updateLocalizedIcon(
        productId: number,
        languageCode: string,
        imageFile: Buffer,
    ): Promise<any> {
        return this.request({
            method: RequestTypes.Post,
            endpoint: `https://apis.roblox.com/legacy-game-internationalization/v1/developer-products/${productId}/icons/language-codes/${languageCode}`,
            body: imageFile,
            contentType: ContentTypes.MultipartForm,
        });
    }

    async getLocalizedInfo(
        productId: number,
    ): Promise<DeveloperProductLocalizedInfoArray> {
        return this.request({
            method: RequestTypes.Get,
            endpoint: `https://apis.roblox.com/legacy-game-internationalization/v1/developer-products/${productId}/name-description`,
        });
    }

    async deleteLocalizedInfo(
        productId: number,
        languageCode: string,
    ): Promise<any> {
        return this.request({
            method: RequestTypes.Delete,
            endpoint: `https://apis.roblox.com/legacy-game-internationalization/v1/developer-products/${productId}/name-description/language-codes/${languageCode}`,
        });
    }

    async updateLocalizedInfo(
        productId: number,
        languageCode: string,
        name: string,
        description: string,
    ): Promise<DeveloperProductLocalizedInfo> {
        return this.request({
            method: RequestTypes.Patch,
            endpoint: `https://apis.roblox.com/legacy-game-internationalization/v1/developer-products/${productId}/name-description/language-codes/${languageCode}`,
            body: {
                name,
                description,
            },
        });
    }

    async updateLocalizedName(
        productId: number,
        languageCode: string,
        name: string,
    ): Promise<DeveloperProductLocalizedInfo> {
        return this.request({
            method: RequestTypes.Patch,
            endpoint: `https://apis.roblox.com/legacy-game-internationalization/v1/developer-products/${productId}/name/language-codes/${languageCode}`,
            body: {
                name,
            },
        });
    }

    async updateLocalizedDescription(
        productId: number,
        languageCode: string,
        description: string,
    ): Promise<DeveloperProductLocalizedInfo> {
        return this.request({
            method: RequestTypes.Patch,
            endpoint: `https://apis.roblox.com/legacy-game-internationalization/v1/developer-products/${productId}/description/language-codes/${languageCode}`,
            body: {
                description,
            },
        });
    }
}
