[**robloxcloudts**](../README.md)

***

[robloxcloudts](../globals.md) / RateLimitEvent

# Interface: RateLimitEvent

Defined in: src/client/client.ts:85

Type for Rate Limit Events from the client

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="endpoint"></a> `endpoint` | `string` | Endpoint the event came from | src/client/client.ts:87 |
| <a id="limit"></a> `limit` | `number` | Limit of requests over a set time period | src/client/client.ts:91 |
| <a id="remaining"></a> `remaining` | `number` | Requests remaining over set time period | src/client/client.ts:93 |
| <a id="reset"></a> `reset` | `number` | Time remaining of set time period | src/client/client.ts:95 |
| <a id="waittime"></a> `waitTime` | `number` | Time before next retry | src/client/client.ts:89 |
