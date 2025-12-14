[**robloxcloudts**](../README.md)

***

[robloxcloudts](../globals.md) / DeveloperProductsManager

# Class: DeveloperProductsManager

Defined in: src/universe/developerProducts.ts:263

## Extends

- [`BaseManager`](BaseManager.md)

## Constructors

### Constructor

> **new DeveloperProductsManager**(`client`): `DeveloperProductsManager`

Defined in: src/events/base.ts:6

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `client` | [`RobloxClient`](RobloxClient.md) |

#### Returns

`DeveloperProductsManager`

#### Inherited from

[`BaseManager`](BaseManager.md).[`constructor`](BaseManager.md#constructor)

## Properties

### client

> `protected` **client**: [`RobloxClient`](RobloxClient.md)

Defined in: src/events/base.ts:4

#### Inherited from

[`BaseManager`](BaseManager.md).[`client`](BaseManager.md#client)

## Methods

### \_convert()

> **\_convert**(`data`): `Promise`\<[`DeveloperProduct`](DeveloperProduct.md)\>

Defined in: src/universe/developerProducts.ts:340

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data` | `any` |

#### Returns

`Promise`\<[`DeveloperProduct`](DeveloperProduct.md)\>

***

### create()

> **create**(`universeId`, `options`): `Promise`\<`any`\>

Defined in: src/universe/developerProducts.ts:370

**`Beta`**

Creates a new developer product in the specified universe.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `universeId` | `number` | {number} The universe ID |
| `options` | [`DeveloperProductOptions`](../interfaces/DeveloperProductOptions.md) & \{ `name`: `string`; \} | {DeveloperProductOptions & { name: string }} The options for the developer product |

#### Returns

`Promise`\<`any`\>

DeveloperProduct
 This API Endpoint is currently in beta and may change at any time

***

### deleteLocalizedIcon()

> **deleteLocalizedIcon**(`productId`, `languageCode`): `Promise`\<`any`\>

Defined in: src/universe/developerProducts.ts:448

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `productId` | `number` |
| `languageCode` | `string` |

#### Returns

`Promise`\<`any`\>

***

### deleteLocalizedInfo()

> **deleteLocalizedInfo**(`productId`, `languageCode`): `Promise`\<`any`\>

Defined in: src/universe/developerProducts.ts:480

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `productId` | `number` |
| `languageCode` | `string` |

#### Returns

`Promise`\<`any`\>

***

### get()

> **get**(`universeId`, `productId`): `Promise`\<[`DeveloperProduct`](DeveloperProduct.md)\>

Defined in: src/universe/developerProducts.ts:352

**`Beta`**

Gets information about a developer product by its universe ID and product ID.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `universeId` | `number` | {number} The universe ID |
| `productId` | `number` | {number} The product ID |

#### Returns

`Promise`\<[`DeveloperProduct`](DeveloperProduct.md)\>

DeveloperProduct
 This API Endpoint is currently in beta and may change at any time

***

### getAll()

> **getAll**(`universeId`): `Promise`\<[`DeveloperProduct`](DeveloperProduct.md)[]\>

Defined in: src/universe/developerProducts.ts:409

**`Beta`**

Gets all developer products for a given universe.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `universeId` | `number` | {number} The universe ID |

#### Returns

`Promise`\<[`DeveloperProduct`](DeveloperProduct.md)[]\>

DeveloperProduct[]
 This API Endpoint is currently in beta and may change at any time

***

### getIcons()

> **getIcons**(`productId`, `options`): `Promise`\<`any`\>

Defined in: src/universe/developerProducts.ts:434

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `productId` | `number` |
| `options` | [`DeveloperProductImageSizeOptions`](../interfaces/DeveloperProductImageSizeOptions.md) |

#### Returns

`Promise`\<`any`\>

***

### getLocalizedInfo()

> **getLocalizedInfo**(`productId`): `Promise`\<[`DeveloperProductLocalizedInfoArray`](../interfaces/DeveloperProductLocalizedInfoArray.md)\>

Defined in: src/universe/developerProducts.ts:471

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `productId` | `number` |

#### Returns

`Promise`\<[`DeveloperProductLocalizedInfoArray`](../interfaces/DeveloperProductLocalizedInfoArray.md)\>

***

### request()

> `protected` **request**\<`T`\>(`options`): `Promise`\<`T`\>

Defined in: src/events/base.ts:10

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | `any` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`RequestOptions`](../interfaces/RequestOptions.md) |

#### Returns

`Promise`\<`T`\>

#### Inherited from

[`BaseManager`](BaseManager.md).[`request`](BaseManager.md#request)

***

### startPolling()

> **startPolling**(`universeId`, `options?`): [`ResourcePoller`](ResourcePoller.md)

Defined in: src/universe/developerProducts.ts:319

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `universeId` | `number` |
| `options?` | [`PollingOptions`](../interfaces/PollingOptions.md) |

#### Returns

[`ResourcePoller`](ResourcePoller.md)

***

### stopPolling()

> **stopPolling**(`universeId`): `void`

Defined in: src/universe/developerProducts.ts:333

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `universeId` | `number` |

#### Returns

`void`

***

### update()

> **update**(`universeId`, `productId`, `options`): `Promise`\<`any`\>

Defined in: src/universe/developerProducts.ts:390

**`Beta`**

Updates an existing developer product.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `universeId` | `number` | {number} The universe ID |
| `productId` | `number` | {number} The product ID |
| `options` | [`DeveloperProductOptions`](../interfaces/DeveloperProductOptions.md) & \{ `storePageEnabled?`: `boolean`; \} | {DeveloperProductOptions & { storePageEnabled?: boolean }} The options for the developer product |

#### Returns

`Promise`\<`any`\>

DeveloperProduct
 This API Endpoint is currently in beta and may change at any time

***

### updateLocalizedDescription()

> **updateLocalizedDescription**(`productId`, `languageCode`, `description`): `Promise`\<[`DeveloperProductLocalizedInfo`](../interfaces/DeveloperProductLocalizedInfo.md)\>

Defined in: src/universe/developerProducts.ts:520

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `productId` | `number` |
| `languageCode` | `string` |
| `description` | `string` |

#### Returns

`Promise`\<[`DeveloperProductLocalizedInfo`](../interfaces/DeveloperProductLocalizedInfo.md)\>

***

### updateLocalizedIcon()

> **updateLocalizedIcon**(`productId`, `languageCode`, `imageFile`): `Promise`\<`any`\>

Defined in: src/universe/developerProducts.ts:458

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `productId` | `number` |
| `languageCode` | `string` |
| `imageFile` | `Buffer` |

#### Returns

`Promise`\<`any`\>

***

### updateLocalizedInfo()

> **updateLocalizedInfo**(`productId`, `languageCode`, `name`, `description`): `Promise`\<[`DeveloperProductLocalizedInfo`](../interfaces/DeveloperProductLocalizedInfo.md)\>

Defined in: src/universe/developerProducts.ts:490

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `productId` | `number` |
| `languageCode` | `string` |
| `name` | `string` |
| `description` | `string` |

#### Returns

`Promise`\<[`DeveloperProductLocalizedInfo`](../interfaces/DeveloperProductLocalizedInfo.md)\>

***

### updateLocalizedName()

> **updateLocalizedName**(`productId`, `languageCode`, `name`): `Promise`\<[`DeveloperProductLocalizedInfo`](../interfaces/DeveloperProductLocalizedInfo.md)\>

Defined in: src/universe/developerProducts.ts:506

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `productId` | `number` |
| `languageCode` | `string` |
| `name` | `string` |

#### Returns

`Promise`\<[`DeveloperProductLocalizedInfo`](../interfaces/DeveloperProductLocalizedInfo.md)\>

***

### watch()

> **watch**(`universeId`, `options?`): [`DeveloperProductWatch`](../interfaces/DeveloperProductWatch.md)

Defined in: src/universe/developerProducts.ts:264

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `universeId` | `number` |
| `options?` | [`PollingOptions`](../interfaces/PollingOptions.md) |

#### Returns

[`DeveloperProductWatch`](../interfaces/DeveloperProductWatch.md)
