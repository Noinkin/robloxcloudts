[**robloxcloudts**](../README.md)

***

[robloxcloudts](../globals.md) / DeveloperProductsManager

# Class: DeveloperProductsManager

Defined in: src/developerproducts/developerproducts.ts:275

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

Defined in: src/developerproducts/developerproducts.ts:352

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data` | `any` |

#### Returns

`Promise`\<[`DeveloperProduct`](DeveloperProduct.md)\>

***

### create()

> **create**(`universeId`, `options`): `Promise`\<`any`\>

Defined in: src/developerproducts/developerproducts.ts:368

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `universeId` | `number` |
| `options` | [`developerProductOptions`](../interfaces/developerProductOptions.md) & \{ `name`: `string`; \} |

#### Returns

`Promise`\<`any`\>

***

### deleteLocalizedIcon()

> **deleteLocalizedIcon**(`productId`, `languageCode`): `Promise`\<`any`\>

Defined in: src/developerproducts/developerproducts.ts:432

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

Defined in: src/developerproducts/developerproducts.ts:464

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

Defined in: src/developerproducts/developerproducts.ts:357

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `universeId` | `number` |
| `productId` | `number` |

#### Returns

`Promise`\<[`DeveloperProduct`](DeveloperProduct.md)\>

***

### getAll()

> **getAll**(`universeId`): `Promise`\<`any`\>

Defined in: src/developerproducts/developerproducts.ts:393

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `universeId` | `number` |

#### Returns

`Promise`\<`any`\>

***

### getIcons()

> **getIcons**(`productId`, `options`): `Promise`\<`any`\>

Defined in: src/developerproducts/developerproducts.ts:418

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `productId` | `number` |
| `options` | [`developerProductImageSizeOptions`](../interfaces/developerProductImageSizeOptions.md) |

#### Returns

`Promise`\<`any`\>

***

### getLocalizedInfo()

> **getLocalizedInfo**(`productId`): `Promise`\<[`DeveloperProductLocalizedInfoArray`](../interfaces/DeveloperProductLocalizedInfoArray.md)\>

Defined in: src/developerproducts/developerproducts.ts:455

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `productId` | `number` |

#### Returns

`Promise`\<[`DeveloperProductLocalizedInfoArray`](../interfaces/DeveloperProductLocalizedInfoArray.md)\>

***

### getThumbnailIcons()

> **getThumbnailIcons**(`productIds`, `options`): `Promise`\<[`DeveloperProductLocalizedIconArray`](../interfaces/DeveloperProductLocalizedIconArray.md)\>

Defined in: src/developerproducts/developerproducts.ts:518

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `productIds` | `number`[] |
| `options` | [`developerProductThumbnailOptions`](../interfaces/developerProductThumbnailOptions.md) |

#### Returns

`Promise`\<[`DeveloperProductLocalizedIconArray`](../interfaces/DeveloperProductLocalizedIconArray.md)\>

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

Defined in: src/developerproducts/developerproducts.ts:331

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

Defined in: src/developerproducts/developerproducts.ts:345

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `universeId` | `number` |

#### Returns

`void`

***

### update()

> **update**(`universeId`, `productId`, `options`): `Promise`\<`any`\>

Defined in: src/developerproducts/developerproducts.ts:380

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `universeId` | `number` |
| `productId` | `number` |
| `options` | [`developerProductOptions`](../interfaces/developerProductOptions.md) & \{ `storePageEnabled?`: `boolean`; \} |

#### Returns

`Promise`\<`any`\>

***

### updateLocalizedDescription()

> **updateLocalizedDescription**(`productId`, `languageCode`, `description`): `Promise`\<[`DeveloperProductLocalizedInfo`](../interfaces/DeveloperProductLocalizedInfo.md)\>

Defined in: src/developerproducts/developerproducts.ts:504

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

Defined in: src/developerproducts/developerproducts.ts:442

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

Defined in: src/developerproducts/developerproducts.ts:474

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

Defined in: src/developerproducts/developerproducts.ts:490

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

Defined in: src/developerproducts/developerproducts.ts:276

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `universeId` | `number` |
| `options?` | [`PollingOptions`](../interfaces/PollingOptions.md) |

#### Returns

[`DeveloperProductWatch`](../interfaces/DeveloperProductWatch.md)
