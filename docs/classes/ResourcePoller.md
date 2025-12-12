[**robloxcloudts**](../README.md)

***

[robloxcloudts](../globals.md) / ResourcePoller

# Class: ResourcePoller\<T\>

Defined in: src/client/polling.ts:36

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | `any` |

## Constructors

### Constructor

> **new ResourcePoller**\<`T`\>(`client`, `config`): `ResourcePoller`\<`T`\>

Defined in: src/client/polling.ts:41

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

Defined in: src/client/polling.ts:160

##### Returns

`boolean`

## Methods

### clearCache()

> **clearCache**(): `void`

Defined in: src/client/polling.ts:156

#### Returns

`void`

***

### getCache()

> **getCache**(): `Map`\<`string`, `T`\>

Defined in: src/client/polling.ts:152

#### Returns

`Map`\<`string`, `T`\>

***

### start()

> **start**(): `void`

Defined in: src/client/polling.ts:53

#### Returns

`void`

***

### stop()

> **stop**(): `void`

Defined in: src/client/polling.ts:77

#### Returns

`void`
