[**robloxcloudts**](../README.md)

***

[robloxcloudts](../globals.md) / GamepassesManager

# Class: GamepassesManager

Defined in: [src/universe/gamepasses.ts:256](https://github.com/Noinkin/robloxcloudts/blob/d123b68a7b621174076cdb2a986805afc636738e/src/universe/gamepasses.ts#L256)

## Extends

- [`BaseManager`](BaseManager.md)

## Constructors

### Constructor

> **new GamepassesManager**(`client`): `GamepassesManager`

Defined in: [src/events/base.ts:6](https://github.com/Noinkin/robloxcloudts/blob/d123b68a7b621174076cdb2a986805afc636738e/src/events/base.ts#L6)

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

Defined in: [src/events/base.ts:4](https://github.com/Noinkin/robloxcloudts/blob/d123b68a7b621174076cdb2a986805afc636738e/src/events/base.ts#L4)

#### Inherited from

[`BaseManager`](BaseManager.md).[`client`](BaseManager.md#client)

## Methods

### \_convert()

> **\_convert**(`data`): `Promise`\<[`Gamepass`](Gamepass.md)\>

Defined in: [src/universe/gamepasses.ts:333](https://github.com/Noinkin/robloxcloudts/blob/d123b68a7b621174076cdb2a986805afc636738e/src/universe/gamepasses.ts#L333)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data` | `any` |

#### Returns

`Promise`\<[`Gamepass`](Gamepass.md)\>

***

### create()

> **create**(`universeId`, `options`): `Promise`\<`any`\>

Defined in: [src/universe/gamepasses.ts:360](https://github.com/Noinkin/robloxcloudts/blob/d123b68a7b621174076cdb2a986805afc636738e/src/universe/gamepasses.ts#L360)

**`Beta`**

Creates a new gamepass in the specified universe.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `universeId` | `number` | {number} The universe ID |
| `options` | `Omit`\<[`GamepassOptions`](../interfaces/GamepassOptions.md), `"name"`\> & \{ `name`: `string`; \} | {GamepassOptions & { name: string }} The options for the gamepass |

#### Returns

`Promise`\<`any`\>

Gamepass
 This API Endpoint is currently in beta and may change at any time

***

### deleteLocalizedIcon()

> **deleteLocalizedIcon**(`gamePassId`, `languageCode`): `Promise`\<`any`\>

Defined in: [src/universe/gamepasses.ts:440](https://github.com/Noinkin/robloxcloudts/blob/d123b68a7b621174076cdb2a986805afc636738e/src/universe/gamepasses.ts#L440)

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

Defined in: [src/universe/gamepasses.ts:472](https://github.com/Noinkin/robloxcloudts/blob/d123b68a7b621174076cdb2a986805afc636738e/src/universe/gamepasses.ts#L472)

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

Defined in: [src/universe/gamepasses.ts:345](https://github.com/Noinkin/robloxcloudts/blob/d123b68a7b621174076cdb2a986805afc636738e/src/universe/gamepasses.ts#L345)

**`Beta`**

Gets information about a gamepass by its universe ID and gamepass ID.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `universeId` | `number` | {number} The universe ID |
| `gamePassId` | `number` | {number} The gamepass ID |

#### Returns

`Promise`\<[`Gamepass`](Gamepass.md)\>

Gamepass
 This API Endpoint is currently in beta and may change at any time

***

### getAll()

> **getAll**(`universeId`): `Promise`\<[`Gamepass`](Gamepass.md)[]\>

Defined in: [src/universe/gamepasses.ts:401](https://github.com/Noinkin/robloxcloudts/blob/d123b68a7b621174076cdb2a986805afc636738e/src/universe/gamepasses.ts#L401)

**`Beta`**

Gets all gamepasses for a given universe.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `universeId` | `number` | {number} The universe ID |

#### Returns

`Promise`\<[`Gamepass`](Gamepass.md)[]\>

Gamepass[]
 This API Endpoint is currently in beta and may change at any time

***

### getIcons()

> **getIcons**(`gamePassId`, `options`): `Promise`\<`any`\>

Defined in: [src/universe/gamepasses.ts:426](https://github.com/Noinkin/robloxcloudts/blob/d123b68a7b621174076cdb2a986805afc636738e/src/universe/gamepasses.ts#L426)

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

Defined in: [src/universe/gamepasses.ts:463](https://github.com/Noinkin/robloxcloudts/blob/d123b68a7b621174076cdb2a986805afc636738e/src/universe/gamepasses.ts#L463)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `gamePassId` | `number` |

#### Returns

`Promise`\<[`GamepassLocalizedInfoArray`](../interfaces/GamepassLocalizedInfoArray.md)\>

***

### request()

> `protected` **request**\<`T`\>(`options`): `Promise`\<`T`\>

Defined in: [src/events/base.ts:10](https://github.com/Noinkin/robloxcloudts/blob/d123b68a7b621174076cdb2a986805afc636738e/src/events/base.ts#L10)

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

Defined in: [src/universe/gamepasses.ts:312](https://github.com/Noinkin/robloxcloudts/blob/d123b68a7b621174076cdb2a986805afc636738e/src/universe/gamepasses.ts#L312)

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

Defined in: [src/universe/gamepasses.ts:326](https://github.com/Noinkin/robloxcloudts/blob/d123b68a7b621174076cdb2a986805afc636738e/src/universe/gamepasses.ts#L326)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `universeId` | `number` |

#### Returns

`void`

***

### update()

> **update**(`universeId`, `gamePassId`, `options`): `Promise`\<`any`\>

Defined in: [src/universe/gamepasses.ts:382](https://github.com/Noinkin/robloxcloudts/blob/d123b68a7b621174076cdb2a986805afc636738e/src/universe/gamepasses.ts#L382)

**`Beta`**

Updates an existing gamepass.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `universeId` | `number` | {number} The universe ID |
| `gamePassId` | `number` | {number} The gamepass ID |
| `options` | [`GamepassOptions`](../interfaces/GamepassOptions.md) | {GamepassOptions} The options for the gamepass |

#### Returns

`Promise`\<`any`\>

Gamepass
 This API Endpoint is currently in beta and may change at any time

***

### updateLocalizedDescription()

> **updateLocalizedDescription**(`gamePassId`, `languageCode`, `description`): `Promise`\<[`GamepassLocalizedInfo`](../interfaces/GamepassLocalizedInfo.md)\>

Defined in: [src/universe/gamepasses.ts:512](https://github.com/Noinkin/robloxcloudts/blob/d123b68a7b621174076cdb2a986805afc636738e/src/universe/gamepasses.ts#L512)

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

Defined in: [src/universe/gamepasses.ts:450](https://github.com/Noinkin/robloxcloudts/blob/d123b68a7b621174076cdb2a986805afc636738e/src/universe/gamepasses.ts#L450)

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

Defined in: [src/universe/gamepasses.ts:482](https://github.com/Noinkin/robloxcloudts/blob/d123b68a7b621174076cdb2a986805afc636738e/src/universe/gamepasses.ts#L482)

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

Defined in: [src/universe/gamepasses.ts:498](https://github.com/Noinkin/robloxcloudts/blob/d123b68a7b621174076cdb2a986805afc636738e/src/universe/gamepasses.ts#L498)

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

Defined in: [src/universe/gamepasses.ts:257](https://github.com/Noinkin/robloxcloudts/blob/d123b68a7b621174076cdb2a986805afc636738e/src/universe/gamepasses.ts#L257)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `universeId` | `number` |
| `options?` | [`PollingOptions`](../interfaces/PollingOptions.md) |

#### Returns

[`GamepassWatch`](../interfaces/GamepassWatch.md)
