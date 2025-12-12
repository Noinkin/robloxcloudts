[**robloxcloudts**](../README.md)

***

[robloxcloudts](../globals.md) / PollingManager

# Class: PollingManager

Defined in: src/client/polling.ts:165

## Constructors

### Constructor

> **new PollingManager**(`client`): `PollingManager`

Defined in: src/client/polling.ts:169

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `client` | [`RobloxClient`](RobloxClient.md) |

#### Returns

`PollingManager`

## Methods

### destroy()

> **destroy**(): `void`

Defined in: src/client/polling.ts:236

#### Returns

`void`

***

### getActivePollers()

> **getActivePollers**(): `string`[]

Defined in: src/client/polling.ts:221

#### Returns

`string`[]

***

### getPoller()

> **getPoller**(`key`): [`ResourcePoller`](ResourcePoller.md)\<`any`\> \| `undefined`

Defined in: src/client/polling.ts:217

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `key` | `string` |

#### Returns

[`ResourcePoller`](ResourcePoller.md)\<`any`\> \| `undefined`

***

### removePoller()

> **removePoller**(`key`): `void`

Defined in: src/client/polling.ts:227

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `key` | `string` |

#### Returns

`void`

***

### startPolling()

> **startPolling**\<`T`\>(`resource`, `resourceId`, `fetchFunction`, `options`): [`ResourcePoller`](ResourcePoller.md)\<`T`\>

Defined in: src/client/polling.ts:173

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | `any` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `resource` | [`DeveloperProduct`](../enumerations/ResourceEvents.md#developerproduct) |
| `resourceId` | `string` |
| `fetchFunction` | () => `Promise`\<`T`[]\> |
| `options` | [`PollingOptions`](../interfaces/PollingOptions.md) |

#### Returns

[`ResourcePoller`](ResourcePoller.md)\<`T`\>

***

### stopAll()

> **stopAll**(): `void`

Defined in: src/client/polling.ts:211

#### Returns

`void`

***

### stopPolling()

> **stopPolling**(`resource`, `resourceId`): `void`

Defined in: src/client/polling.ts:203

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `resource` | [`DeveloperProduct`](../enumerations/ResourceEvents.md#developerproduct) |
| `resourceId` | `string` |

#### Returns

`void`
