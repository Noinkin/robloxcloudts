[**robloxcloudts**](../README.md)

***

[robloxcloudts](../globals.md) / ResourcePoller

# Class: ResourcePoller\<T\>

Defined in: [src/client/polling.ts:36](https://github.com/Noinkin/robloxcloudts/blob/d123b68a7b621174076cdb2a986805afc636738e/src/client/polling.ts#L36)

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | `any` |

## Constructors

### Constructor

> **new ResourcePoller**\<`T`\>(`client`, `config`): `ResourcePoller`\<`T`\>

Defined in: [src/client/polling.ts:41](https://github.com/Noinkin/robloxcloudts/blob/d123b68a7b621174076cdb2a986805afc636738e/src/client/polling.ts#L41)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `client` | [`RobloxClient`](RobloxClient.md) |
| `config` | `Omit`\<[`PollingConfig`](../interfaces/PollingConfig.md)\<`T`\>, `"cache"` \| `"interval"`\> |

#### Returns

`ResourcePoller`\<`T`\>

## Accessors

### active

#### Get Signature

> **get** **active**(): `boolean`

Defined in: [src/client/polling.ts:160](https://github.com/Noinkin/robloxcloudts/blob/d123b68a7b621174076cdb2a986805afc636738e/src/client/polling.ts#L160)

##### Returns

`boolean`

## Methods

### clearCache()

> **clearCache**(): `void`

Defined in: [src/client/polling.ts:156](https://github.com/Noinkin/robloxcloudts/blob/d123b68a7b621174076cdb2a986805afc636738e/src/client/polling.ts#L156)

#### Returns

`void`

***

### getCache()

> **getCache**(): `Map`\<`string`, `T`\>

Defined in: [src/client/polling.ts:152](https://github.com/Noinkin/robloxcloudts/blob/d123b68a7b621174076cdb2a986805afc636738e/src/client/polling.ts#L152)

#### Returns

`Map`\<`string`, `T`\>

***

### start()

> **start**(): `void`

Defined in: [src/client/polling.ts:53](https://github.com/Noinkin/robloxcloudts/blob/d123b68a7b621174076cdb2a986805afc636738e/src/client/polling.ts#L53)

#### Returns

`void`

***

### stop()

> **stop**(): `void`

Defined in: [src/client/polling.ts:77](https://github.com/Noinkin/robloxcloudts/blob/d123b68a7b621174076cdb2a986805afc636738e/src/client/polling.ts#L77)

#### Returns

`void`
