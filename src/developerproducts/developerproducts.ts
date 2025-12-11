import { ContentTypes, RequestTypes, ResourceEvents, RobloxEvents } from "../client/client.js";
import type { PollingOptions, ResourcePoller } from "../client/polling.js";
import { BaseManager } from "../events/base.js";

export interface developerProductOptions {
    name?: string;
    description?: string;
    isForSale?: boolean;
    price?: number;
    imageFile?: Buffer;
    isRegionalPricingEnabled: boolean
}

export interface developerProductImageSizeOptions {
    width?: number;
    height?: number
}

export interface developerProductThumbnailOptions {
    size?: DeveloperProductThumbnailSizes;
    format?: DeveloperProductThumbnailFormats;
    isCircular?: boolean
}

export enum DeveloperProductThumbnailSizes {
    small = '150x150',
    large = '420x420'
}

export enum DeveloperProductThumbnailFormats {
    Png = 'Png',
    Webp = 'Webp'
}

export class DeveloperProductsManager extends BaseManager {
    startPolling(universeId: number, options?: PollingOptions): ResourcePoller {
        return this.client.polling.startPolling(ResourceEvents.DeveloperProduct, universeId.toString(), () => this.getAll(universeId), {
            interval: options?.interval || 30000,
            immediate: options?.immediate ?? true,
            compareBy: 'productId',
            ...options
        })
    }

    stopPolling(universeId: number): void {
        this.client.polling.stopPolling(ResourceEvents.DeveloperProduct, universeId.toString())
    }

    async get(universeId: number, productId: number): Promise<any> {
        return this.request({
            method: RequestTypes.Get,
            endpoint: `https://apis.roblox.com/developer-products/v2/universes/${universeId}/developer-products/${productId}/creator`
        })
    }

    async create(universeId: number, options: developerProductOptions & {name: string }): Promise<any> {
        return this.request({
            method: RequestTypes.Post,
            endpoint: `https://apis.roblox.com/developer-products/v2/universes/${universeId}/developer-products`,
            body: options
        })
    }

    async update(universeId: number, productId: number, options: developerProductOptions & {storePageEnabled?: boolean}): Promise<any> {
        return this.request({
            method: RequestTypes.Patch,
            endpoint: `https://apis.roblox.com/developer-products/v2/universes/${universeId}/developer-products/${productId}`,
            body: options
        })
    }

    async getAll(universeId: number): Promise<any> {
        const allProducts: any[] = []

        let pageToken: string | undefined = undefined

        do {
            const params: Record<string, string> = {}
            if(pageToken) params['pageToken'] = pageToken

            const response = await this.request<{
                developerProducts: any[],
                nextPageToken?: string
            }>({
                method: RequestTypes.Get,
                endpoint: `https://apis.roblox.com/developer-products/v2/universes/${universeId}/developer-products/creator`,
                params
            })

            allProducts.push(...response.developerProducts)
            pageToken = response.nextPageToken
        } while(pageToken)

        return allProducts
    }

    async getIcons(productId: number, options: developerProductImageSizeOptions): Promise<any> {
        const params: Record<string, number> = {}
        if(options.width) params['width'] = options.width
        if(options.height) params['height'] = options.height
        return this.request({
            method: RequestTypes.Get,
            endpoint: `https://apis.roblox.com/legacy-game-internationalization/v1/developer-products/${productId}/icons`,
            params
        })
    }

    async deleteLocalizedIcon(productId: number | string, languageCode: string): Promise<any> {
        return this.request({
            method: RequestTypes.Delete,
            endpoint: `https://apis.roblox.com/legacy-game-internationalization/v1/developer-products/${productId}/icons/language-codes/${languageCode}`
        })
    }

    async updateLocalizedIcon(productId: number | string, languageCode: string, imageFile: Buffer): Promise<any> {
        return this.request({
            method: RequestTypes.Post,
            endpoint: `https://apis.roblox.com/legacy-game-internationalization/v1/developer-products/${productId}/icons/language-codes/${languageCode}`,
            body: imageFile,
            contentType: ContentTypes.MultipartForm
        })
    }

    async getLocalizedInfo(productId: number | string): Promise<any> {
        return this.request({
            method: RequestTypes.Get,
            endpoint: `https://apis.roblox.com/legacy-game-internationalization/v1/developer-products/${productId}/name-description`
        })
    }

    async deleteLocalizedInfo(productId: number | string, languageCode: string): Promise<any> {
        return this.request({
            method: RequestTypes.Delete,
            endpoint: `https://apis.roblox.com/legacy-game-internationalization/v1/developer-products/${productId}/name-description/language-codes/${languageCode}`
        })
    }

    async updateLocalizedInfo(productId: number | string, languageCode: string, name: string, description: string): Promise<any> {
        return this.request({
            method: RequestTypes.Patch,
            endpoint: `https://apis.roblox.com/legacy-game-internationalization/v1/developer-products/${productId}/name-description/language-codes/${languageCode}`,
            body: { 
                name, 
                description 
            }
        })
    }

    async updateLocalizedName(productId: number | string, languageCode: string, name: string): Promise<any> {
        return this.request({
            method: RequestTypes.Patch,
            endpoint: `https://apis.roblox.com/legacy-game-internationalization/v1/developer-products/${productId}/name/language-codes/${languageCode}`,
            body: {
                name
            }
        })
    }

    async updateLocalizedDescription(productId: number, languageCode: string, description: string): Promise<any> {
        return this.request({
            method: RequestTypes.Patch,
            endpoint: `https://apis.roblox.com/legacy-game-internationalization/v1/developer-products/${productId}/description/language-codes/${languageCode}`,
            body: {
                description
            }
        })
    }

    async thumbnailIcons(productIds: number[], options: developerProductThumbnailOptions): Promise<any> {
        const params: Record<string, string | boolean | number[]> = {}
        params['developerProductIds'] = productIds
        if(options.size) params['size'] = options.size
        if(options.format) params['format'] = options.format
        if(options.isCircular) params['isCircular'] = options.isCircular

        return this.request({
            method: RequestTypes.Get,
            endpoint: `https://thumbnails.roblox.com/v1/developer-products/icons`,
            params
        })
    }
}