[**robloxcloudts**](../README.md)

***

[robloxcloudts](../globals.md) / buildResourceEvent

# Function: buildResourceEvent()

> **buildResourceEvent**(`resource`, `action`, `id?`): `` `DEVELOPER_PRODUCT:${string}:CREATE` `` \| `` `DEVELOPER_PRODUCT:${string}:UPDATE` `` \| `` `DEVELOPER_PRODUCT:${string}:DELETE` `` \| `` `GAMEPASS:${string}:CREATE` `` \| `` `GAMEPASS:${string}:UPDATE` `` \| `` `GAMEPASS:${string}:DELETE` `` \| `"DEVELOPER_PRODUCT:CREATE"` \| `"DEVELOPER_PRODUCT:UPDATE"` \| `"DEVELOPER_PRODUCT:DELETE"` \| `"GAMEPASS:CREATE"` \| `"GAMEPASS:UPDATE"` \| `"GAMEPASS:DELETE"`

Defined in: src/client/polling.ts:27

## Parameters

| Parameter | Type |
| ------ | ------ |
| `resource` | [`ResourceEvents`](../enumerations/ResourceEvents.md) |
| `action` | [`ResourceAction`](../enumerations/ResourceAction.md) |
| `id?` | `string` |

## Returns

`` `DEVELOPER_PRODUCT:${string}:CREATE` `` \| `` `DEVELOPER_PRODUCT:${string}:UPDATE` `` \| `` `DEVELOPER_PRODUCT:${string}:DELETE` `` \| `` `GAMEPASS:${string}:CREATE` `` \| `` `GAMEPASS:${string}:UPDATE` `` \| `` `GAMEPASS:${string}:DELETE` `` \| `"DEVELOPER_PRODUCT:CREATE"` \| `"DEVELOPER_PRODUCT:UPDATE"` \| `"DEVELOPER_PRODUCT:DELETE"` \| `"GAMEPASS:CREATE"` \| `"GAMEPASS:UPDATE"` \| `"GAMEPASS:DELETE"`
