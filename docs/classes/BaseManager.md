[**robloxcloudts**](../README.md)

***

[robloxcloudts](../globals.md) / BaseManager

# Abstract Class: BaseManager

Defined in: [src/events/base.ts:3](https://github.com/Noinkin/robloxcloudts/blob/d123b68a7b621174076cdb2a986805afc636738e/src/events/base.ts#L3)

## Extended by

- [`DeveloperProductsManager`](DeveloperProductsManager.md)
- [`GamepassesManager`](GamepassesManager.md)

## Constructors

### Constructor

> **new BaseManager**(`client`): `BaseManager`

Defined in: [src/events/base.ts:6](https://github.com/Noinkin/robloxcloudts/blob/d123b68a7b621174076cdb2a986805afc636738e/src/events/base.ts#L6)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `client` | [`RobloxClient`](RobloxClient.md) |

#### Returns

`BaseManager`

## Properties

### client

> `protected` **client**: [`RobloxClient`](RobloxClient.md)

Defined in: [src/events/base.ts:4](https://github.com/Noinkin/robloxcloudts/blob/d123b68a7b621174076cdb2a986805afc636738e/src/events/base.ts#L4)

## Methods

### request()

> `protected` **request**\<`T`\>(`options`): `Promise`\<`T`\>

Defined in: [src/events/base.ts:10](https://github.com/Noinkin/robloxcloudts/blob/d123b68a7b621174076cdb2a986805afc636738e/src/events/base.ts#L10)

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
