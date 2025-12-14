[**robloxcloudts**](../README.md)

***

[robloxcloudts](../globals.md) / DeveloperProduct

# Class: DeveloperProduct

Defined in: src/universe/developerProducts.ts:86

## Constructors

### Constructor

> **new DeveloperProduct**(`manager`, `data`): `DeveloperProduct`

Defined in: src/universe/developerProducts.ts:104

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

Defined in: src/universe/developerProducts.ts:99

***

### description

> **description**: `string`

Defined in: src/universe/developerProducts.ts:89

***

### iconImageAssetId

> **iconImageAssetId**: `number`

Defined in: src/universe/developerProducts.ts:90

***

### isForSale

> **isForSale**: `boolean`

Defined in: src/universe/developerProducts.ts:92

***

### isImmutable

> `readonly` **isImmutable**: `boolean`

Defined in: src/universe/developerProducts.ts:98

***

### name

> **name**: `string`

Defined in: src/universe/developerProducts.ts:88

***

### priceInformation

> **priceInformation**: \{ `defaultPriceInRobux`: `number`; `enabledFeatures`: `string`[]; \}

Defined in: src/universe/developerProducts.ts:94

#### defaultPriceInRobux

> **defaultPriceInRobux**: `number`

#### enabledFeatures

> **enabledFeatures**: `string`[]

***

### productId

> `readonly` **productId**: `number`

Defined in: src/universe/developerProducts.ts:87

***

### storePageEnabled

> **storePageEnabled**: `boolean`

Defined in: src/universe/developerProducts.ts:93

***

### universeId

> `readonly` **universeId**: `number`

Defined in: src/universe/developerProducts.ts:91

***

### updatedTimestamp

> **updatedTimestamp**: `Date`

Defined in: src/universe/developerProducts.ts:100

## Accessors

### createdAt

#### Get Signature

> **get** **createdAt**(): `number`

Defined in: src/universe/developerProducts.ts:234

##### Returns

`number`

***

### price

#### Get Signature

> **get** **price**(): `number`

Defined in: src/universe/developerProducts.ts:230

##### Returns

`number`

***

### updatedAt

#### Get Signature

> **get** **updatedAt**(): `number`

Defined in: src/universe/developerProducts.ts:238

##### Returns

`number`

***

### url

#### Get Signature

> **get** **url**(): `string`

Defined in: src/universe/developerProducts.ts:226

##### Returns

`string`

## Methods

### deleteLocalizedIcon()

> **deleteLocalizedIcon**(`languageCode`): `Promise`\<`any`\>

Defined in: src/universe/developerProducts.ts:211

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `languageCode` | `string` |

#### Returns

`Promise`\<`any`\>

***

### edit()

> **edit**(`options`): `Promise`\<`DeveloperProduct`\>

Defined in: src/universe/developerProducts.ts:129

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`DeveloperProductOptions`](../interfaces/DeveloperProductOptions.md) & \{ `storePageEnabled?`: `boolean`; \} |

#### Returns

`Promise`\<`DeveloperProduct`\>

***

### equals()

> **equals**(`other`): `boolean`

Defined in: src/universe/developerProducts.ts:219

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `other` | `DeveloperProduct` |

#### Returns

`boolean`

***

### fetch()

> **fetch**(): `Promise`\<`DeveloperProduct`\>

Defined in: src/universe/developerProducts.ts:123

#### Returns

`Promise`\<`DeveloperProduct`\>

***

### getIcon()

> **getIcon**(`options`): `Promise`\<`any`\>

Defined in: src/universe/developerProducts.ts:215

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`DeveloperProductImageSizeOptions`](../interfaces/DeveloperProductImageSizeOptions.md) |

#### Returns

`Promise`\<`any`\>

***

### getLocalizedInfo()

> **getLocalizedInfo**(): `Promise`\<[`DeveloperProductLocalizedInfoArray`](../interfaces/DeveloperProductLocalizedInfoArray.md)\>

Defined in: src/universe/developerProducts.ts:161

#### Returns

`Promise`\<[`DeveloperProductLocalizedInfoArray`](../interfaces/DeveloperProductLocalizedInfoArray.md)\>

***

### setDescription()

> **setDescription**(`description`): `Promise`\<`DeveloperProduct`\>

Defined in: src/universe/developerProducts.ts:145

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `description` | `string` |

#### Returns

`Promise`\<`DeveloperProduct`\>

***

### setForSale()

> **setForSale**(`isForSale`): `Promise`\<`DeveloperProduct`\>

Defined in: src/universe/developerProducts.ts:153

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `isForSale` | `boolean` |

#### Returns

`Promise`\<`DeveloperProduct`\>

***

### setLocalizedDescription()

> **setLocalizedDescription**(`languageCode`, `description`): `Promise`\<[`DeveloperProductLocalizedInfo`](../interfaces/DeveloperProductLocalizedInfo.md)\>

Defined in: src/universe/developerProducts.ts:176

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

Defined in: src/universe/developerProducts.ts:200

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

Defined in: src/universe/developerProducts.ts:187

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

Defined in: src/universe/developerProducts.ts:165

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

Defined in: src/universe/developerProducts.ts:141

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |

#### Returns

`Promise`\<`DeveloperProduct`\>

***

### setPrice()

> **setPrice**(`price`): `Promise`\<`DeveloperProduct`\>

Defined in: src/universe/developerProducts.ts:149

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `price` | `number` |

#### Returns

`Promise`\<`DeveloperProduct`\>

***

### setStorePageEnabled()

> **setStorePageEnabled**(`enabled`): `Promise`\<`DeveloperProduct`\>

Defined in: src/universe/developerProducts.ts:157

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `enabled` | `boolean` |

#### Returns

`Promise`\<`DeveloperProduct`\>

***

### toJSON()

> **toJSON**(): [`DeveloperProductData`](../interfaces/DeveloperProductData.md)

Defined in: src/universe/developerProducts.ts:242

#### Returns

[`DeveloperProductData`](../interfaces/DeveloperProductData.md)

***

### toString()

> **toString**(): `string`

Defined in: src/universe/developerProducts.ts:258

#### Returns

`string`
