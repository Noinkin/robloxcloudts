[**robloxcloudts**](../README.md)

***

[robloxcloudts](../globals.md) / PollingConfig

# Interface: PollingConfig\<T\>

Defined in: src/client/polling.ts:15

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | `any` |

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="cache"></a> `cache` | `Map`\<`string`, `T`\> | src/client/polling.ts:19 |
| <a id="fetchfunction"></a> `fetchFunction` | () => `Promise`\<`T`[]\> | src/client/polling.ts:17 |
| <a id="interval"></a> `interval?` | `Timeout` | src/client/polling.ts:20 |
| <a id="key"></a> `key` | `string` | src/client/polling.ts:16 |
| <a id="options"></a> `options` | [`PollingOptions`](PollingOptions.md) | src/client/polling.ts:18 |
