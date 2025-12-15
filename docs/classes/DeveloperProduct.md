[**robloxcloudts**](../README.md)

***

[robloxcloudts](../globals.md) / DeveloperProduct

# Class: DeveloperProduct

Defined in: [src/universe/developerProducts.ts:87](https://github.com/Noinkin/robloxcloudts/blob/d123b68a7b621174076cdb2a986805afc636738e/src/universe/developerProducts.ts#L87)

## Constructors

### Constructor

> **new DeveloperProduct**(`manager`, `data`): `DeveloperProduct`

Defined in: [src/universe/developerProducts.ts:105](https://github.com/Noinkin/robloxcloudts/blob/d123b68a7b621174076cdb2a986805afc636738e/src/universe/developerProducts.ts#L105)

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

Defined in: [src/universe/developerProducts.ts:100](https://github.com/Noinkin/robloxcloudts/blob/d123b68a7b621174076cdb2a986805afc636738e/src/universe/developerProducts.ts#L100)

***

### description

> **description**: `string`

Defined in: [src/universe/developerProducts.ts:90](https://github.com/Noinkin/robloxcloudts/blob/d123b68a7b621174076cdb2a986805afc636738e/src/universe/developerProducts.ts#L90)

***

### iconImageAssetId

> **iconImageAssetId**: `number`

Defined in: [src/universe/developerProducts.ts:91](https://github.com/Noinkin/robloxcloudts/blob/d123b68a7b621174076cdb2a986805afc636738e/src/universe/developerProducts.ts#L91)

***

### isForSale

> **isForSale**: `boolean`

Defined in: [src/universe/developerProducts.ts:93](https://github.com/Noinkin/robloxcloudts/blob/d123b68a7b621174076cdb2a986805afc636738e/src/universe/developerProducts.ts#L93)

***

### isImmutable

> `readonly` **isImmutable**: `boolean`

Defined in: [src/universe/developerProducts.ts:99](https://github.com/Noinkin/robloxcloudts/blob/d123b68a7b621174076cdb2a986805afc636738e/src/universe/developerProducts.ts#L99)

***

### name

> **name**: `string`

Defined in: [src/universe/developerProducts.ts:89](https://github.com/Noinkin/robloxcloudts/blob/d123b68a7b621174076cdb2a986805afc636738e/src/universe/developerProducts.ts#L89)

***

### priceInformation

> **priceInformation**: \{ `defaultPriceInRobux`: `number`; `enabledFeatures`: `string`[]; \}

Defined in: [src/universe/developerProducts.ts:95](https://github.com/Noinkin/robloxcloudts/blob/d123b68a7b621174076cdb2a986805afc636738e/src/universe/developerProducts.ts#L95)

#### defaultPriceInRobux

> **defaultPriceInRobux**: `number`

#### enabledFeatures

> **enabledFeatures**: `string`[]

***

### productId

> `readonly` **productId**: `number`

Defined in: [src/universe/developerProducts.ts:88](https://github.com/Noinkin/robloxcloudts/blob/d123b68a7b621174076cdb2a986805afc636738e/src/universe/developerProducts.ts#L88)

***

### storePageEnabled

> **storePageEnabled**: `boolean`

Defined in: [src/universe/developerProducts.ts:94](https://github.com/Noinkin/robloxcloudts/blob/d123b68a7b621174076cdb2a986805afc636738e/src/universe/developerProducts.ts#L94)

***

### universeId

> `readonly` **universeId**: `number`

Defined in: [src/universe/developerProducts.ts:92](https://github.com/Noinkin/robloxcloudts/blob/d123b68a7b621174076cdb2a986805afc636738e/src/universe/developerProducts.ts#L92)

***

### updatedTimestamp

> **updatedTimestamp**: `Date`

Defined in: [src/universe/developerProducts.ts:101](https://github.com/Noinkin/robloxcloudts/blob/d123b68a7b621174076cdb2a986805afc636738e/src/universe/developerProducts.ts#L101)

## Accessors

### createdAt

#### Get Signature

> **get** **createdAt**(): `number`

Defined in: [src/universe/developerProducts.ts:235](https://github.com/Noinkin/robloxcloudts/blob/d123b68a7b621174076cdb2a986805afc636738e/src/universe/developerProducts.ts#L235)

##### Returns

`number`

***

### price

#### Get Signature

> **get** **price**(): `number`

Defined in: [src/universe/developerProducts.ts:231](https://github.com/Noinkin/robloxcloudts/blob/d123b68a7b621174076cdb2a986805afc636738e/src/universe/developerProducts.ts#L231)

##### Returns

`number`

***

### updatedAt

#### Get Signature

> **get** **updatedAt**(): `number`

Defined in: [src/universe/developerProducts.ts:239](https://github.com/Noinkin/robloxcloudts/blob/d123b68a7b621174076cdb2a986805afc636738e/src/universe/developerProducts.ts#L239)

##### Returns

`number`

***

### url

#### Get Signature

> **get** **url**(): `string`

Defined in: [src/universe/developerProducts.ts:227](https://github.com/Noinkin/robloxcloudts/blob/d123b68a7b621174076cdb2a986805afc636738e/src/universe/developerProducts.ts#L227)

##### Returns

`string`

## Methods

### deleteLocalizedIcon()

> **deleteLocalizedIcon**(`languageCode`): `Promise`\<`any`\>

Defined in: [src/universe/developerProducts.ts:212](https://github.com/Noinkin/robloxcloudts/blob/d123b68a7b621174076cdb2a986805afc636738e/src/universe/developerProducts.ts#L212)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `languageCode` | `string` |

#### Returns

`Promise`\<`any`\>

***

### edit()

> **edit**(`options`): `Promise`\<`DeveloperProduct`\>

Defined in: [src/universe/developerProducts.ts:130](https://github.com/Noinkin/robloxcloudts/blob/d123b68a7b621174076cdb2a986805afc636738e/src/universe/developerProducts.ts#L130)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`DeveloperProductOptions`](../interfaces/DeveloperProductOptions.md) & \{ `storePageEnabled?`: `boolean`; \} |

#### Returns

`Promise`\<`DeveloperProduct`\>

***

### equals()

> **equals**(`other`): `boolean`

Defined in: [src/universe/developerProducts.ts:220](https://github.com/Noinkin/robloxcloudts/blob/d123b68a7b621174076cdb2a986805afc636738e/src/universe/developerProducts.ts#L220)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `other` | `DeveloperProduct` |

#### Returns

`boolean`

***

### fetch()

> **fetch**(): `Promise`\<`DeveloperProduct`\>

Defined in: [src/universe/developerProducts.ts:124](https://github.com/Noinkin/robloxcloudts/blob/d123b68a7b621174076cdb2a986805afc636738e/src/universe/developerProducts.ts#L124)

#### Returns

`Promise`\<`DeveloperProduct`\>

***

### getIcon()

> **getIcon**(`options`): `Promise`\<`any`\>

Defined in: [src/universe/developerProducts.ts:216](https://github.com/Noinkin/robloxcloudts/blob/d123b68a7b621174076cdb2a986805afc636738e/src/universe/developerProducts.ts#L216)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`DeveloperProductImageSizeOptions`](../interfaces/DeveloperProductImageSizeOptions.md) |

#### Returns

`Promise`\<`any`\>

***

### getLocalizedInfo()

> **getLocalizedInfo**(): `Promise`\<[`DeveloperProductLocalizedInfoArray`](../interfaces/DeveloperProductLocalizedInfoArray.md)\>

Defined in: [src/universe/developerProducts.ts:162](https://github.com/Noinkin/robloxcloudts/blob/d123b68a7b621174076cdb2a986805afc636738e/src/universe/developerProducts.ts#L162)

#### Returns

`Promise`\<[`DeveloperProductLocalizedInfoArray`](../interfaces/DeveloperProductLocalizedInfoArray.md)\>

***

### setDescription()

> **setDescription**(`description`): `Promise`\<`DeveloperProduct`\>

Defined in: [src/universe/developerProducts.ts:146](https://github.com/Noinkin/robloxcloudts/blob/d123b68a7b621174076cdb2a986805afc636738e/src/universe/developerProducts.ts#L146)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `description` | `string` |

#### Returns

`Promise`\<`DeveloperProduct`\>

***

### setForSale()

> **setForSale**(`isForSale`): `Promise`\<`DeveloperProduct`\>

Defined in: [src/universe/developerProducts.ts:154](https://github.com/Noinkin/robloxcloudts/blob/d123b68a7b621174076cdb2a986805afc636738e/src/universe/developerProducts.ts#L154)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `isForSale` | `boolean` |

#### Returns

`Promise`\<`DeveloperProduct`\>

***

### setLocalizedDescription()

> **setLocalizedDescription**(`languageCode`, `description`): `Promise`\<[`DeveloperProductLocalizedInfo`](../interfaces/DeveloperProductLocalizedInfo.md)\>

Defined in: [src/universe/developerProducts.ts:177](https://github.com/Noinkin/robloxcloudts/blob/d123b68a7b621174076cdb2a986805afc636738e/src/universe/developerProducts.ts#L177)

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

Defined in: [src/universe/developerProducts.ts:201](https://github.com/Noinkin/robloxcloudts/blob/d123b68a7b621174076cdb2a986805afc636738e/src/universe/developerProducts.ts#L201)

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

Defined in: [src/universe/developerProducts.ts:188](https://github.com/Noinkin/robloxcloudts/blob/d123b68a7b621174076cdb2a986805afc636738e/src/universe/developerProducts.ts#L188)

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

Defined in: [src/universe/developerProducts.ts:166](https://github.com/Noinkin/robloxcloudts/blob/d123b68a7b621174076cdb2a986805afc636738e/src/universe/developerProducts.ts#L166)

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

Defined in: [src/universe/developerProducts.ts:142](https://github.com/Noinkin/robloxcloudts/blob/d123b68a7b621174076cdb2a986805afc636738e/src/universe/developerProducts.ts#L142)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |

#### Returns

`Promise`\<`DeveloperProduct`\>

***

### setPrice()

> **setPrice**(`price`): `Promise`\<`DeveloperProduct`\>

Defined in: [src/universe/developerProducts.ts:150](https://github.com/Noinkin/robloxcloudts/blob/d123b68a7b621174076cdb2a986805afc636738e/src/universe/developerProducts.ts#L150)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `price` | `number` |

#### Returns

`Promise`\<`DeveloperProduct`\>

***

### setStorePageEnabled()

> **setStorePageEnabled**(`enabled`): `Promise`\<`DeveloperProduct`\>

Defined in: [src/universe/developerProducts.ts:158](https://github.com/Noinkin/robloxcloudts/blob/d123b68a7b621174076cdb2a986805afc636738e/src/universe/developerProducts.ts#L158)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `enabled` | `boolean` |

#### Returns

`Promise`\<`DeveloperProduct`\>

***

### toJSON()

> **toJSON**(): [`DeveloperProductData`](../interfaces/DeveloperProductData.md)

Defined in: [src/universe/developerProducts.ts:243](https://github.com/Noinkin/robloxcloudts/blob/d123b68a7b621174076cdb2a986805afc636738e/src/universe/developerProducts.ts#L243)

#### Returns

[`DeveloperProductData`](../interfaces/DeveloperProductData.md)

***

### toString()

> **toString**(): `string`

Defined in: [src/universe/developerProducts.ts:259](https://github.com/Noinkin/robloxcloudts/blob/d123b68a7b621174076cdb2a986805afc636738e/src/universe/developerProducts.ts#L259)

#### Returns

`string`
