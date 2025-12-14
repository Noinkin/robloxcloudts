[**robloxcloudts**](../README.md)

***

[robloxcloudts](../globals.md) / GamepassesManager

# Class: GamepassesManager

Defined in: src/universe/gamepasses.ts:256

## Extends

- [`BaseManager`](BaseManager.md)

## Constructors

### Constructor

> **new GamepassesManager**(`client`): `GamepassesManager`

Defined in: src/events/base.ts:6

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `client` | [`RobloxClient`](RobloxClient.md) |

#### Returns

`GamepassesManager`

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

> **\_convert**(`data`): `Promise`\<[`Gamepass`](Gamepass.md)\>

Defined in: src/universe/gamepasses.ts:333

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data` | `any` |

#### Returns

`Promise`\<[`Gamepass`](Gamepass.md)\>

***

### create()

> **create**(`universeId`, `options`): `Promise`\<`any`\>

Defined in: src/universe/gamepasses.ts:360

**`Beta`**

Creates a new developer gamepass in the specified universe.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `universeId` | `number` | {number} The universe ID |
| `options` | [`GamepassOptions`](../interfaces/GamepassOptions.md) & \{ `name`: `string`; \} | {GamepassOptions & { name: string }} The options for the developer gamepass |

#### Returns

`Promise`\<`any`\>

DeveloperProduct
 This API Endpoint is currently in beta and may change at any time

***

### deleteLocalizedIcon()

> **deleteLocalizedIcon**(`gamePassId`, `languageCode`): `Promise`\<`any`\>

Defined in: src/universe/gamepasses.ts:438

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `gamePassId` | `number` |
| `languageCode` | `string` |

#### Returns

`Promise`\<`any`\>

***

### deleteLocalizedInfo()

> **deleteLocalizedInfo**(`gamePassId`, `languageCode`): `Promise`\<`any`\>

Defined in: src/universe/gamepasses.ts:470

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `gamePassId` | `number` |
| `languageCode` | `string` |

#### Returns

`Promise`\<`any`\>

***

### get()

> **get**(`universeId`, `gamePassId`): `Promise`\<[`Gamepass`](Gamepass.md)\>

Defined in: src/universe/gamepasses.ts:345

**`Beta`**

Gets information about a developer gamepass by its universe ID and gamepass ID.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `universeId` | `number` | {number} The universe ID |
| `gamePassId` | `number` | {number} The gamepass ID |

#### Returns

`Promise`\<[`Gamepass`](Gamepass.md)\>

DeveloperProduct
 This API Endpoint is currently in beta and may change at any time

***

### getAll()

> **getAll**(`universeId`): `Promise`\<[`Gamepass`](Gamepass.md)[]\>

Defined in: src/universe/gamepasses.ts:399

**`Beta`**

Gets all developer products for a given universe.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `universeId` | `number` | {number} The universe ID |

#### Returns

`Promise`\<[`Gamepass`](Gamepass.md)[]\>

DeveloperProduct[]
 This API Endpoint is currently in beta and may change at any time

***

### getIcons()

> **getIcons**(`gamePassId`, `options`): `Promise`\<`any`\>

Defined in: src/universe/gamepasses.ts:424

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `gamePassId` | `number` |
| `options` | [`GamepassImageSizeOptions`](../interfaces/GamepassImageSizeOptions.md) |

#### Returns

`Promise`\<`any`\>

***

### getLocalizedInfo()

> **getLocalizedInfo**(`gamePassId`): `Promise`\<[`GamepassLocalizedInfoArray`](../interfaces/GamepassLocalizedInfoArray.md)\>

Defined in: src/universe/gamepasses.ts:461

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `gamePassId` | `number` |

#### Returns

`Promise`\<[`GamepassLocalizedInfoArray`](../interfaces/GamepassLocalizedInfoArray.md)\>

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

Defined in: src/universe/gamepasses.ts:312

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

Defined in: src/universe/gamepasses.ts:326

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `universeId` | `number` |

#### Returns

`void`

***

### update()

> **update**(`universeId`, `gamePassId`, `options`): `Promise`\<`any`\>

Defined in: src/universe/gamepasses.ts:380

**`Beta`**

Updates an existing developer gamepass.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `universeId` | `number` | {number} The universe ID |
| `gamePassId` | `number` | {number} The gamepass ID |
| `options` | [`GamepassOptions`](../interfaces/GamepassOptions.md) & \{ `storePageEnabled?`: `boolean`; \} | {GamepassOptions & { storePageEnabled?: boolean }} The options for the developer gamepass |

#### Returns

`Promise`\<`any`\>

DeveloperProduct
 This API Endpoint is currently in beta and may change at any time

***

### updateLocalizedDescription()

> **updateLocalizedDescription**(`gamePassId`, `languageCode`, `description`): `Promise`\<[`GamepassLocalizedInfo`](../interfaces/GamepassLocalizedInfo.md)\>

Defined in: src/universe/gamepasses.ts:510

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `gamePassId` | `number` |
| `languageCode` | `string` |
| `description` | `string` |

#### Returns

`Promise`\<[`GamepassLocalizedInfo`](../interfaces/GamepassLocalizedInfo.md)\>

***

### updateLocalizedIcon()

> **updateLocalizedIcon**(`gamePassId`, `languageCode`, `imageFile`): `Promise`\<`any`\>

Defined in: src/universe/gamepasses.ts:448

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `gamePassId` | `number` |
| `languageCode` | `string` |
| `imageFile` | `Buffer` |

#### Returns

`Promise`\<`any`\>

***

### updateLocalizedInfo()

> **updateLocalizedInfo**(`gamePassId`, `languageCode`, `name`, `description`): `Promise`\<[`GamepassLocalizedInfo`](../interfaces/GamepassLocalizedInfo.md)\>

Defined in: src/universe/gamepasses.ts:480

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `gamePassId` | `number` |
| `languageCode` | `string` |
| `name` | `string` |
| `description` | `string` |

#### Returns

`Promise`\<[`GamepassLocalizedInfo`](../interfaces/GamepassLocalizedInfo.md)\>

***

### updateLocalizedName()

> **updateLocalizedName**(`gamePassId`, `languageCode`, `name`): `Promise`\<[`GamepassLocalizedInfo`](../interfaces/GamepassLocalizedInfo.md)\>

Defined in: src/universe/gamepasses.ts:496

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `gamePassId` | `number` |
| `languageCode` | `string` |
| `name` | `string` |

#### Returns

`Promise`\<[`GamepassLocalizedInfo`](../interfaces/GamepassLocalizedInfo.md)\>

***

### watch()

> **watch**(`universeId`, `options?`): [`GamepassWatch`](../interfaces/GamepassWatch.md)

Defined in: src/universe/gamepasses.ts:257

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `universeId` | `number` |
| `options?` | [`PollingOptions`](../interfaces/PollingOptions.md) |

#### Returns

[`GamepassWatch`](../interfaces/GamepassWatch.md)
