[**robloxcloudts**](../README.md)

***

[robloxcloudts](../globals.md) / PollingConfig

# Interface: PollingConfig\<T\>

Defined in: [src/client/polling.ts:15](https://github.com/Noinkin/robloxcloudts/blob/d123b68a7b621174076cdb2a986805afc636738e/src/client/polling.ts#L15)

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | `any` |

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="cache"></a> `cache` | `Map`\<`string`, `T`\> | [src/client/polling.ts:19](https://github.com/Noinkin/robloxcloudts/blob/d123b68a7b621174076cdb2a986805afc636738e/src/client/polling.ts#L19) |
| <a id="fetchfunction"></a> `fetchFunction` | () => `Promise`\<`T`[]\> | [src/client/polling.ts:17](https://github.com/Noinkin/robloxcloudts/blob/d123b68a7b621174076cdb2a986805afc636738e/src/client/polling.ts#L17) |
| <a id="interval"></a> `interval?` | `Timeout` | [src/client/polling.ts:20](https://github.com/Noinkin/robloxcloudts/blob/d123b68a7b621174076cdb2a986805afc636738e/src/client/polling.ts#L20) |
| <a id="key"></a> `key` | `string` | [src/client/polling.ts:16](https://github.com/Noinkin/robloxcloudts/blob/d123b68a7b621174076cdb2a986805afc636738e/src/client/polling.ts#L16) |
| <a id="options"></a> `options` | [`PollingOptions`](PollingOptions.md) | [src/client/polling.ts:18](https://github.com/Noinkin/robloxcloudts/blob/d123b68a7b621174076cdb2a986805afc636738e/src/client/polling.ts#L18) |
