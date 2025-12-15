[**robloxcloudts**](../README.md)

***

[robloxcloudts](../globals.md) / RequestOptions

# Interface: RequestOptions

Defined in: [src/client/client.ts:37](https://github.com/Noinkin/robloxcloudts/blob/d123b68a7b621174076cdb2a986805afc636738e/src/client/client.ts#L37)

Type for sending a request from the client

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="body"></a> `body?` | `any` | Request Body | [src/client/client.ts:43](https://github.com/Noinkin/robloxcloudts/blob/d123b68a7b621174076cdb2a986805afc636738e/src/client/client.ts#L43) |
| <a id="contenttype"></a> `contentType?` | [`ContentTypes`](../enumerations/ContentTypes.md) | Request Content Type | [src/client/client.ts:49](https://github.com/Noinkin/robloxcloudts/blob/d123b68a7b621174076cdb2a986805afc636738e/src/client/client.ts#L49) |
| <a id="endpoint"></a> `endpoint` | `string` | Request Endpoint, must contain full Roblox URL | [src/client/client.ts:41](https://github.com/Noinkin/robloxcloudts/blob/d123b68a7b621174076cdb2a986805afc636738e/src/client/client.ts#L41) |
| <a id="headers"></a> `headers?` | `Record`\<`string`, `string`\> | Request Headers | [src/client/client.ts:47](https://github.com/Noinkin/robloxcloudts/blob/d123b68a7b621174076cdb2a986805afc636738e/src/client/client.ts#L47) |
| <a id="method"></a> `method` | `"GET"` \| `"POST"` \| `"PATCH"` \| `"DELETE"` \| `"PUT"` | Request Method | [src/client/client.ts:39](https://github.com/Noinkin/robloxcloudts/blob/d123b68a7b621174076cdb2a986805afc636738e/src/client/client.ts#L39) |
| <a id="params"></a> `params?` | `Record`\<`string`, `any`\> | Request Params | [src/client/client.ts:45](https://github.com/Noinkin/robloxcloudts/blob/d123b68a7b621174076cdb2a986805afc636738e/src/client/client.ts#L45) |
