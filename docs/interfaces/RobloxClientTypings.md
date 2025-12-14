[**robloxcloudts**](../README.md)

***

[robloxcloudts](../globals.md) / RobloxClientTypings

# Interface: RobloxClientTypings

Defined in: src/client/client.ts:213

## Methods

### emit()

#### Call Signature

> **emit**\<`K`\>(`event`, ...`args`): `boolean`

Defined in: src/client/client.ts:230

##### Type Parameters

| Type Parameter |
| ------ |
| `K` *extends* keyof [`ClientEvents`](ClientEvents.md) |

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | [`RobloxEvents`](../enumerations/RobloxEvents.md) |
| ...`args` | [`ClientEvents`](ClientEvents.md)\[`K`\] |

##### Returns

`boolean`

#### Call Signature

> **emit**(`event`, ...`args`): `boolean`

Defined in: src/client/client.ts:234

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `string` |
| ...`args` | `any`[] |

##### Returns

`boolean`

***

### off()

#### Call Signature

> **off**\<`K`\>(`event`, `listener`): `this`

Defined in: src/client/client.ts:238

##### Type Parameters

| Type Parameter |
| ------ |
| `K` *extends* keyof [`ClientEvents`](ClientEvents.md) |

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | [`RobloxEvents`](../enumerations/RobloxEvents.md) |
| `listener` | (...`args`) => `void` |

##### Returns

`this`

#### Call Signature

> **off**(`event`, `listener`): `this`

Defined in: src/client/client.ts:242

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `string` |
| `listener` | (...`args`) => `void` |

##### Returns

`this`

***

### on()

#### Call Signature

> **on**\<`K`\>(`event`, `listener`): `this`

Defined in: src/client/client.ts:214

##### Type Parameters

| Type Parameter |
| ------ |
| `K` *extends* keyof [`ClientEvents`](ClientEvents.md) |

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | [`RobloxEvents`](../enumerations/RobloxEvents.md) |
| `listener` | (...`args`) => `void` |

##### Returns

`this`

#### Call Signature

> **on**(`event`, `listener`): `this`

Defined in: src/client/client.ts:218

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `string` |
| `listener` | (...`args`) => `void` |

##### Returns

`this`

***

### once()

#### Call Signature

> **once**\<`K`\>(`event`, `listener`): `this`

Defined in: src/client/client.ts:222

##### Type Parameters

| Type Parameter |
| ------ |
| `K` *extends* keyof [`ClientEvents`](ClientEvents.md) |

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | [`RobloxEvents`](../enumerations/RobloxEvents.md) |
| `listener` | (...`args`) => `void` |

##### Returns

`this`

#### Call Signature

> **once**(`event`, `listener`): `this`

Defined in: src/client/client.ts:226

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `string` |
| `listener` | (...`args`) => `void` |

##### Returns

`this`

***

### removeAllListeners()

#### Call Signature

> **removeAllListeners**\<`K`\>(`event?`): `this`

Defined in: src/client/client.ts:246

##### Type Parameters

| Type Parameter |
| ------ |
| `K` *extends* keyof [`ClientEvents`](ClientEvents.md) |

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event?` | `K` |

##### Returns

`this`

#### Call Signature

> **removeAllListeners**(`event`): `this`

Defined in: src/client/client.ts:247

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `string` |

##### Returns

`this`
