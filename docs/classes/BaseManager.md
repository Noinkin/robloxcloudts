[**robloxcloudts**](../README.md)

***

[robloxcloudts](../globals.md) / BaseManager

# Abstract Class: BaseManager

Defined in: src/events/base.ts:3

## Extended by

- [`DeveloperProductsManager`](DeveloperProductsManager.md)
- [`GamepassesManager`](GamepassesManager.md)

## Constructors

### Constructor

> **new BaseManager**(`client`): `BaseManager`

Defined in: src/events/base.ts:6

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `client` | [`RobloxClient`](RobloxClient.md) |

#### Returns

`BaseManager`

## Properties

### client

> `protected` **client**: [`RobloxClient`](RobloxClient.md)

Defined in: src/events/base.ts:4

## Methods

### request()

> `protected` **request**\<`T`\>(`options`): `Promise`\<`T`\>

Defined in: src/events/base.ts:10

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | `any` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`RequestOptions`](../interfaces/RequestOptions.md) |

#### Returns

`Promise`\<`T`\>
