[**robloxcloudts**](../README.md)

***

[robloxcloudts](../globals.md) / Gamepass

# Class: Gamepass

Defined in: [src/universe/gamepasses.ts:84](https://github.com/Noinkin/robloxcloudts/blob/d123b68a7b621174076cdb2a986805afc636738e/src/universe/gamepasses.ts#L84)

## Constructors

### Constructor

> **new Gamepass**(`manager`, `data`): `Gamepass`

Defined in: [src/universe/gamepasses.ts:101](https://github.com/Noinkin/robloxcloudts/blob/d123b68a7b621174076cdb2a986805afc636738e/src/universe/gamepasses.ts#L101)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `manager` | [`GamepassesManager`](GamepassesManager.md) |
| `data` | [`GamepassData`](../interfaces/GamepassData.md) |

#### Returns

`Gamepass`

## Properties

### createdTimestamp

> `readonly` **createdTimestamp**: `Date`

Defined in: [src/universe/gamepasses.ts:96](https://github.com/Noinkin/robloxcloudts/blob/d123b68a7b621174076cdb2a986805afc636738e/src/universe/gamepasses.ts#L96)

***

### description

> **description**: `string`

Defined in: [src/universe/gamepasses.ts:87](https://github.com/Noinkin/robloxcloudts/blob/d123b68a7b621174076cdb2a986805afc636738e/src/universe/gamepasses.ts#L87)

***

### gamePassId

> `readonly` **gamePassId**: `number`

Defined in: [src/universe/gamepasses.ts:85](https://github.com/Noinkin/robloxcloudts/blob/d123b68a7b621174076cdb2a986805afc636738e/src/universe/gamepasses.ts#L85)

***

### iconImageAssetId

> **iconImageAssetId**: `number`

Defined in: [src/universe/gamepasses.ts:88](https://github.com/Noinkin/robloxcloudts/blob/d123b68a7b621174076cdb2a986805afc636738e/src/universe/gamepasses.ts#L88)

***

### isForSale

> **isForSale**: `boolean`

Defined in: [src/universe/gamepasses.ts:90](https://github.com/Noinkin/robloxcloudts/blob/d123b68a7b621174076cdb2a986805afc636738e/src/universe/gamepasses.ts#L90)

***

### name

> **name**: `string`

Defined in: [src/universe/gamepasses.ts:86](https://github.com/Noinkin/robloxcloudts/blob/d123b68a7b621174076cdb2a986805afc636738e/src/universe/gamepasses.ts#L86)

***

### priceInformation

> **priceInformation**: \{ `defaultPriceInRobux`: `number`; `enabledFeatures`: `string`[]; \}

Defined in: [src/universe/gamepasses.ts:92](https://github.com/Noinkin/robloxcloudts/blob/d123b68a7b621174076cdb2a986805afc636738e/src/universe/gamepasses.ts#L92)

#### defaultPriceInRobux

> **defaultPriceInRobux**: `number`

#### enabledFeatures

> **enabledFeatures**: `string`[]

***

### storePageEnabled

> **storePageEnabled**: `boolean`

Defined in: [src/universe/gamepasses.ts:91](https://github.com/Noinkin/robloxcloudts/blob/d123b68a7b621174076cdb2a986805afc636738e/src/universe/gamepasses.ts#L91)

***

### universeId

> `readonly` **universeId**: `number`

Defined in: [src/universe/gamepasses.ts:89](https://github.com/Noinkin/robloxcloudts/blob/d123b68a7b621174076cdb2a986805afc636738e/src/universe/gamepasses.ts#L89)

***

### updatedTimestamp

> **updatedTimestamp**: `Date`

Defined in: [src/universe/gamepasses.ts:97](https://github.com/Noinkin/robloxcloudts/blob/d123b68a7b621174076cdb2a986805afc636738e/src/universe/gamepasses.ts#L97)

## Accessors

### createdAt

#### Get Signature

> **get** **createdAt**(): `number`

Defined in: [src/universe/gamepasses.ts:229](https://github.com/Noinkin/robloxcloudts/blob/d123b68a7b621174076cdb2a986805afc636738e/src/universe/gamepasses.ts#L229)

##### Returns

`number`

***

### price

#### Get Signature

> **get** **price**(): `number`

Defined in: [src/universe/gamepasses.ts:225](https://github.com/Noinkin/robloxcloudts/blob/d123b68a7b621174076cdb2a986805afc636738e/src/universe/gamepasses.ts#L225)

##### Returns

`number`

***

### updatedAt

#### Get Signature

> **get** **updatedAt**(): `number`

Defined in: [src/universe/gamepasses.ts:233](https://github.com/Noinkin/robloxcloudts/blob/d123b68a7b621174076cdb2a986805afc636738e/src/universe/gamepasses.ts#L233)

##### Returns

`number`

***

### url

#### Get Signature

> **get** **url**(): `string`

Defined in: [src/universe/gamepasses.ts:221](https://github.com/Noinkin/robloxcloudts/blob/d123b68a7b621174076cdb2a986805afc636738e/src/universe/gamepasses.ts#L221)

##### Returns

`string`

## Methods

### deleteLocalizedIcon()

> **deleteLocalizedIcon**(`languageCode`): `Promise`\<`any`\>

Defined in: [src/universe/gamepasses.ts:206](https://github.com/Noinkin/robloxcloudts/blob/d123b68a7b621174076cdb2a986805afc636738e/src/universe/gamepasses.ts#L206)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `languageCode` | `string` |

#### Returns

`Promise`\<`any`\>

***

### edit()

> **edit**(`options`): `Promise`\<`Gamepass`\>

Defined in: [src/universe/gamepasses.ts:124](https://github.com/Noinkin/robloxcloudts/blob/d123b68a7b621174076cdb2a986805afc636738e/src/universe/gamepasses.ts#L124)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`GamepassOptions`](../interfaces/GamepassOptions.md) & \{ `storePageEnabled?`: `boolean`; \} |

#### Returns

`Promise`\<`Gamepass`\>

***

### equals()

> **equals**(`other`): `boolean`

Defined in: [src/universe/gamepasses.ts:214](https://github.com/Noinkin/robloxcloudts/blob/d123b68a7b621174076cdb2a986805afc636738e/src/universe/gamepasses.ts#L214)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `other` | `Gamepass` |

#### Returns

`boolean`

***

### fetch()

> **fetch**(): `Promise`\<`Gamepass`\>

Defined in: [src/universe/gamepasses.ts:118](https://github.com/Noinkin/robloxcloudts/blob/d123b68a7b621174076cdb2a986805afc636738e/src/universe/gamepasses.ts#L118)

#### Returns

`Promise`\<`Gamepass`\>

***

### getIcon()

> **getIcon**(`options`): `Promise`\<`any`\>

Defined in: [src/universe/gamepasses.ts:210](https://github.com/Noinkin/robloxcloudts/blob/d123b68a7b621174076cdb2a986805afc636738e/src/universe/gamepasses.ts#L210)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`GamepassImageSizeOptions`](../interfaces/GamepassImageSizeOptions.md) |

#### Returns

`Promise`\<`any`\>

***

### getLocalizedInfo()

> **getLocalizedInfo**(): `Promise`\<[`GamepassLocalizedInfoArray`](../interfaces/GamepassLocalizedInfoArray.md)\>

Defined in: [src/universe/gamepasses.ts:156](https://github.com/Noinkin/robloxcloudts/blob/d123b68a7b621174076cdb2a986805afc636738e/src/universe/gamepasses.ts#L156)

#### Returns

`Promise`\<[`GamepassLocalizedInfoArray`](../interfaces/GamepassLocalizedInfoArray.md)\>

***

### setDescription()

> **setDescription**(`description`): `Promise`\<`Gamepass`\>

Defined in: [src/universe/gamepasses.ts:140](https://github.com/Noinkin/robloxcloudts/blob/d123b68a7b621174076cdb2a986805afc636738e/src/universe/gamepasses.ts#L140)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `description` | `string` |

#### Returns

`Promise`\<`Gamepass`\>

***

### setForSale()

> **setForSale**(`isForSale`): `Promise`\<`Gamepass`\>

Defined in: [src/universe/gamepasses.ts:148](https://github.com/Noinkin/robloxcloudts/blob/d123b68a7b621174076cdb2a986805afc636738e/src/universe/gamepasses.ts#L148)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `isForSale` | `boolean` |

#### Returns

`Promise`\<`Gamepass`\>

***

### setLocalizedDescription()

> **setLocalizedDescription**(`languageCode`, `description`): `Promise`\<[`GamepassLocalizedInfo`](../interfaces/GamepassLocalizedInfo.md)\>

Defined in: [src/universe/gamepasses.ts:171](https://github.com/Noinkin/robloxcloudts/blob/d123b68a7b621174076cdb2a986805afc636738e/src/universe/gamepasses.ts#L171)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `languageCode` | `string` |
| `description` | `string` |

#### Returns

`Promise`\<[`GamepassLocalizedInfo`](../interfaces/GamepassLocalizedInfo.md)\>

***

### setLocalizedIcon()

> **setLocalizedIcon**(`languageCode`, `imageFile`): `Promise`\<`any`\>

Defined in: [src/universe/gamepasses.ts:195](https://github.com/Noinkin/robloxcloudts/blob/d123b68a7b621174076cdb2a986805afc636738e/src/universe/gamepasses.ts#L195)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `languageCode` | `string` |
| `imageFile` | `Buffer` |

#### Returns

`Promise`\<`any`\>

***

### setLocalizedInfo()

> **setLocalizedInfo**(`languageCode`, `name`, `description`): `Promise`\<[`GamepassLocalizedInfo`](../interfaces/GamepassLocalizedInfo.md)\>

Defined in: [src/universe/gamepasses.ts:182](https://github.com/Noinkin/robloxcloudts/blob/d123b68a7b621174076cdb2a986805afc636738e/src/universe/gamepasses.ts#L182)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `languageCode` | `string` |
| `name` | `string` |
| `description` | `string` |

#### Returns

`Promise`\<[`GamepassLocalizedInfo`](../interfaces/GamepassLocalizedInfo.md)\>

***

### setLocalizedName()

> **setLocalizedName**(`languageCode`, `name`): `Promise`\<[`GamepassLocalizedInfo`](../interfaces/GamepassLocalizedInfo.md)\>

Defined in: [src/universe/gamepasses.ts:160](https://github.com/Noinkin/robloxcloudts/blob/d123b68a7b621174076cdb2a986805afc636738e/src/universe/gamepasses.ts#L160)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `languageCode` | `string` |
| `name` | `string` |

#### Returns

`Promise`\<[`GamepassLocalizedInfo`](../interfaces/GamepassLocalizedInfo.md)\>

***

### setName()

> **setName**(`name`): `Promise`\<`Gamepass`\>

Defined in: [src/universe/gamepasses.ts:136](https://github.com/Noinkin/robloxcloudts/blob/d123b68a7b621174076cdb2a986805afc636738e/src/universe/gamepasses.ts#L136)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |

#### Returns

`Promise`\<`Gamepass`\>

***

### setPrice()

> **setPrice**(`price`): `Promise`\<`Gamepass`\>

Defined in: [src/universe/gamepasses.ts:144](https://github.com/Noinkin/robloxcloudts/blob/d123b68a7b621174076cdb2a986805afc636738e/src/universe/gamepasses.ts#L144)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `price` | `number` |

#### Returns

`Promise`\<`Gamepass`\>

***

### setStorePageEnabled()

> **setStorePageEnabled**(`enabled`): `Promise`\<`Gamepass`\>

Defined in: [src/universe/gamepasses.ts:152](https://github.com/Noinkin/robloxcloudts/blob/d123b68a7b621174076cdb2a986805afc636738e/src/universe/gamepasses.ts#L152)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `enabled` | `boolean` |

#### Returns

`Promise`\<`Gamepass`\>

***

### toJSON()

> **toJSON**(): [`GamepassData`](../interfaces/GamepassData.md)

Defined in: [src/universe/gamepasses.ts:237](https://github.com/Noinkin/robloxcloudts/blob/d123b68a7b621174076cdb2a986805afc636738e/src/universe/gamepasses.ts#L237)

#### Returns

[`GamepassData`](../interfaces/GamepassData.md)

***

### toString()

> **toString**(): `string`

Defined in: [src/universe/gamepasses.ts:251](https://github.com/Noinkin/robloxcloudts/blob/d123b68a7b621174076cdb2a986805afc636738e/src/universe/gamepasses.ts#L251)

#### Returns

`string`
