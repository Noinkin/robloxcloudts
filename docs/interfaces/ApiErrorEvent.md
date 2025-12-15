[**robloxcloudts**](../README.md)

***

[robloxcloudts](../globals.md) / ApiErrorEvent

# Interface: ApiErrorEvent

Defined in: [src/client/client.ts:127](https://github.com/Noinkin/robloxcloudts/blob/d123b68a7b621174076cdb2a986805afc636738e/src/client/client.ts#L127)

Type for API Error Events from the client

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="endpoint"></a> `endpoint` | `string` | The endpoint the error was thrown from | [src/client/client.ts:131](https://github.com/Noinkin/robloxcloudts/blob/d123b68a7b621174076cdb2a986805afc636738e/src/client/client.ts#L131) |
| <a id="error"></a> `error` | `Error` | The error that occurred | [src/client/client.ts:129](https://github.com/Noinkin/robloxcloudts/blob/d123b68a7b621174076cdb2a986805afc636738e/src/client/client.ts#L129) |
| <a id="method"></a> `method` | `string` | The API Method used at the endpoint | [src/client/client.ts:133](https://github.com/Noinkin/robloxcloudts/blob/d123b68a7b621174076cdb2a986805afc636738e/src/client/client.ts#L133) |
| <a id="status"></a> `status?` | `number` | The API Status returned | [src/client/client.ts:135](https://github.com/Noinkin/robloxcloudts/blob/d123b68a7b621174076cdb2a986805afc636738e/src/client/client.ts#L135) |
