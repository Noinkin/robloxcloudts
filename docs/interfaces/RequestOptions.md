[**robloxcloudts**](../README.md)

***

[robloxcloudts](../globals.md) / RequestOptions

# Interface: RequestOptions

Defined in: src/client/client.ts:37

Type for sending a request from the client

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="body"></a> `body?` | `any` | Request Body | src/client/client.ts:43 |
| <a id="contenttype"></a> `contentType?` | [`ContentTypes`](../enumerations/ContentTypes.md) | Request Content Type | src/client/client.ts:49 |
| <a id="endpoint"></a> `endpoint` | `string` | Request Endpoint, must contain full Roblox URL | src/client/client.ts:41 |
| <a id="headers"></a> `headers?` | `Record`\<`string`, `string`\> | Request Headers | src/client/client.ts:47 |
| <a id="method"></a> `method` | `"GET"` \| `"POST"` \| `"PATCH"` \| `"DELETE"` \| `"PUT"` | Request Method | src/client/client.ts:39 |
| <a id="params"></a> `params?` | `Record`\<`string`, `any`\> | Request Params | src/client/client.ts:45 |
