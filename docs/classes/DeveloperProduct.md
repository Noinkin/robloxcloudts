[**robloxcloudts**](../README.md)

***

[robloxcloudts](../globals.md) / DeveloperProduct

# Class: DeveloperProduct

Defined in: src/developerproducts/developerproducts.ts:92

## Constructors

### Constructor

> **new DeveloperProduct**(`manager`, `data`): `DeveloperProduct`

Defined in: src/developerproducts/developerproducts.ts:110

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `manager` | [`DeveloperProductsManager`](DeveloperProductsManager.md) |
| `data` | [`DeveloperProductData`](../interfaces/DeveloperProductData.md) |

#### Returns

`DeveloperProduct`

## Properties

### createdTimestamp

> `readonly` **createdTimestamp**: `Date`

Defined in: src/developerproducts/developerproducts.ts:105

***

### description

> **description**: `string`

Defined in: src/developerproducts/developerproducts.ts:95

***

### iconImageAssetId

> **iconImageAssetId**: `number`

Defined in: src/developerproducts/developerproducts.ts:96

***

### isForSale

> **isForSale**: `boolean`

Defined in: src/developerproducts/developerproducts.ts:98

***

### isImmutable

> `readonly` **isImmutable**: `boolean`

Defined in: src/developerproducts/developerproducts.ts:104

***

### name

> **name**: `string`

Defined in: src/developerproducts/developerproducts.ts:94

***

### priceInformation

> **priceInformation**: \{ `defaultPriceInRobux`: `number`; `enabledFeatures`: `string`[]; \}

Defined in: src/developerproducts/developerproducts.ts:100

#### defaultPriceInRobux

> **defaultPriceInRobux**: `number`

#### enabledFeatures

> **enabledFeatures**: `string`[]

***

### productId

> `readonly` **productId**: `number`

Defined in: src/developerproducts/developerproducts.ts:93

***

### storePageEnabled

> **storePageEnabled**: `boolean`

Defined in: src/developerproducts/developerproducts.ts:99

***

### universeId

> `readonly` **universeId**: `number`

Defined in: src/developerproducts/developerproducts.ts:97

***

### updatedTimestamp

> **updatedTimestamp**: `Date`

Defined in: src/developerproducts/developerproducts.ts:106

## Accessors

### createdAt

#### Get Signature

> **get** **createdAt**(): `number`

Defined in: src/developerproducts/developerproducts.ts:246

##### Returns

`number`

***

### price

#### Get Signature

> **get** **price**(): `number`

Defined in: src/developerproducts/developerproducts.ts:242

##### Returns

`number`

***

### updatedAt

#### Get Signature

> **get** **updatedAt**(): `number`

Defined in: src/developerproducts/developerproducts.ts:250

##### Returns

`number`

***

### url

#### Get Signature

> **get** **url**(): `string`

Defined in: src/developerproducts/developerproducts.ts:238

##### Returns

`string`

## Methods

### deleteLocalizedIcon()

> **deleteLocalizedIcon**(`languageCode`): `Promise`\<`any`\>

Defined in: src/developerproducts/developerproducts.ts:223

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `languageCode` | `string` |

#### Returns

`Promise`\<`any`\>

***

### edit()

> **edit**(`options`): `Promise`\<`DeveloperProduct`\>

Defined in: src/developerproducts/developerproducts.ts:135

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`developerProductOptions`](../interfaces/developerProductOptions.md) & \{ `storePageEnabled?`: `boolean`; \} |

#### Returns

`Promise`\<`DeveloperProduct`\>

***

### equals()

> **equals**(`other`): `boolean`

Defined in: src/developerproducts/developerproducts.ts:231

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `other` | `DeveloperProduct` |

#### Returns

`boolean`

***

### fetch()

> **fetch**(): `Promise`\<`DeveloperProduct`\>

Defined in: src/developerproducts/developerproducts.ts:129

#### Returns

`Promise`\<`DeveloperProduct`\>

***

### getIcon()

> **getIcon**(`options`): `Promise`\<`any`\>

Defined in: src/developerproducts/developerproducts.ts:227

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`developerProductImageSizeOptions`](../interfaces/developerProductImageSizeOptions.md) |

#### Returns

`Promise`\<`any`\>

***

### getLocalizedInfo()

> **getLocalizedInfo**(): `Promise`\<[`DeveloperProductLocalizedInfoArray`](../interfaces/DeveloperProductLocalizedInfoArray.md)\>

Defined in: src/developerproducts/developerproducts.ts:167

#### Returns

`Promise`\<[`DeveloperProductLocalizedInfoArray`](../interfaces/DeveloperProductLocalizedInfoArray.md)\>

***

### getThumbnail()

> **getThumbnail**(`options`): `Promise`\<[`DeveloperProductLocalizedIconArray`](../interfaces/DeveloperProductLocalizedIconArray.md)\>

Defined in: src/developerproducts/developerproducts.ts:206

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`developerProductThumbnailOptions`](../interfaces/developerProductThumbnailOptions.md) |

#### Returns

`Promise`\<[`DeveloperProductLocalizedIconArray`](../interfaces/DeveloperProductLocalizedIconArray.md)\>

***

### setDescription()

> **setDescription**(`description`): `Promise`\<`DeveloperProduct`\>

Defined in: src/developerproducts/developerproducts.ts:151

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `description` | `string` |

#### Returns

`Promise`\<`DeveloperProduct`\>

***

### setForSale()

> **setForSale**(`isForSale`): `Promise`\<`DeveloperProduct`\>

Defined in: src/developerproducts/developerproducts.ts:159

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `isForSale` | `boolean` |

#### Returns

`Promise`\<`DeveloperProduct`\>

***

### setLocalizedDescription()

> **setLocalizedDescription**(`languageCode`, `description`): `Promise`\<[`DeveloperProductLocalizedInfo`](../interfaces/DeveloperProductLocalizedInfo.md)\>

Defined in: src/developerproducts/developerproducts.ts:182

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `languageCode` | `string` |
| `description` | `string` |

#### Returns

`Promise`\<[`DeveloperProductLocalizedInfo`](../interfaces/DeveloperProductLocalizedInfo.md)\>

***

### setLocalizedIcon()

> **setLocalizedIcon**(`languageCode`, `imageFile`): `Promise`\<`any`\>

Defined in: src/developerproducts/developerproducts.ts:212

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `languageCode` | `string` |
| `imageFile` | `Buffer` |

#### Returns

`Promise`\<`any`\>

***

### setLocalizedInfo()

> **setLocalizedInfo**(`languageCode`, `name`, `description`): `Promise`\<[`DeveloperProductLocalizedInfo`](../interfaces/DeveloperProductLocalizedInfo.md)\>

Defined in: src/developerproducts/developerproducts.ts:193

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `languageCode` | `string` |
| `name` | `string` |
| `description` | `string` |

#### Returns

`Promise`\<[`DeveloperProductLocalizedInfo`](../interfaces/DeveloperProductLocalizedInfo.md)\>

***

### setLocalizedName()

> **setLocalizedName**(`languageCode`, `name`): `Promise`\<[`DeveloperProductLocalizedInfo`](../interfaces/DeveloperProductLocalizedInfo.md)\>

Defined in: src/developerproducts/developerproducts.ts:171

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `languageCode` | `string` |
| `name` | `string` |

#### Returns

`Promise`\<[`DeveloperProductLocalizedInfo`](../interfaces/DeveloperProductLocalizedInfo.md)\>

***

### setName()

> **setName**(`name`): `Promise`\<`DeveloperProduct`\>

Defined in: src/developerproducts/developerproducts.ts:147

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |

#### Returns

`Promise`\<`DeveloperProduct`\>

***

### setPrice()

> **setPrice**(`price`): `Promise`\<`DeveloperProduct`\>

Defined in: src/developerproducts/developerproducts.ts:155

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `price` | `number` |

#### Returns

`Promise`\<`DeveloperProduct`\>

***

### setStorePageEnabled()

> **setStorePageEnabled**(`enabled`): `Promise`\<`DeveloperProduct`\>

Defined in: src/developerproducts/developerproducts.ts:163

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `enabled` | `boolean` |

#### Returns

`Promise`\<`DeveloperProduct`\>

***

### toJSON()

> **toJSON**(): [`DeveloperProductData`](../interfaces/DeveloperProductData.md)

Defined in: src/developerproducts/developerproducts.ts:254

#### Returns

[`DeveloperProductData`](../interfaces/DeveloperProductData.md)

***

### toString()

> **toString**(): `string`

Defined in: src/developerproducts/developerproducts.ts:270

#### Returns

`string`
