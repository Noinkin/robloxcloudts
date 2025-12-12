[**robloxcloudts**](../README.md)

***

[robloxcloudts](../globals.md) / RobloxClient

# Class: RobloxClient

Defined in: src/client/client.ts:212

## Extends

- `EventEmitter`

## Constructors

### Constructor

> **new RobloxClient**(`options`): `RobloxClient`

Defined in: src/client/client.ts:263

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`ClientOptions`](../interfaces/ClientOptions.md) |

#### Returns

`RobloxClient`

## Properties

### developerProducts

> `readonly` **developerProducts**: [`DeveloperProductsManager`](DeveloperProductsManager.md)

Defined in: src/client/client.ts:261

***

### polling

> `readonly` **polling**: [`PollingManager`](PollingManager.md)

Defined in: src/client/client.ts:258

## Accessors

### ready

#### Get Signature

> **get** **ready**(): `boolean`

Defined in: src/client/client.ts:473

##### Returns

`boolean`

## Methods

### \[captureRejectionSymbol\]()?

> `optional` **\[captureRejectionSymbol\]**(`error`, `event`, ...`args`): `void`

Defined in: node\_modules/@types/node/events.d.ts:118

The `Symbol.for('nodejs.rejection')` method is called in case a
promise rejection happens when emitting an event and
`captureRejections` is enabled on the emitter.
It is possible to use `events.captureRejectionSymbol` in
place of `Symbol.for('nodejs.rejection')`.

```js
import { EventEmitter, captureRejectionSymbol } from 'node:events';

class MyClass extends EventEmitter {
  constructor() {
    super({ captureRejections: true });
  }

  [captureRejectionSymbol](err, event, ...args) {
    console.log('rejection happened for', event, 'with', err, ...args);
    this.destroy(err);
  }

  destroy(err) {
    // Tear the resource down here.
  }
}
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `error` | `Error` |
| `event` | `string` \| `symbol` |
| ...`args` | `any`[] |

#### Returns

`void`

#### Since

v13.4.0, v12.16.0

***

### addListener()

> **addListener**\<`E`\>(`eventName`, `listener`): `this`

Defined in: node\_modules/@types/node/events.d.ts:123

Alias for `emitter.on(eventName, listener)`.

#### Type Parameters

| Type Parameter |
| ------ |
| `E` *extends* `string` \| `symbol` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `eventName` | `string` \| `symbol` |
| `listener` | (...`args`) => `void` |

#### Returns

`this`

#### Since

v0.1.26

***

### destroy()

> **destroy**(): `void`

Defined in: src/client/client.ts:477

#### Returns

`void`

***

### emit()

#### Call Signature

> **emit**\<`K`\>(`event`, ...`args`): `boolean`

Defined in: src/client/client.ts:229

##### Type Parameters

| Type Parameter |
| ------ |
| `K` *extends* keyof [`ClientEvents`](../interfaces/ClientEvents.md) |

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | [`RobloxEvents`](../enumerations/RobloxEvents.md) |
| ...`args` | [`ClientEvents`](../interfaces/ClientEvents.md)\[`K`\] |

##### Returns

`boolean`

#### Call Signature

> **emit**(`event`, ...`args`): `boolean`

Defined in: src/client/client.ts:233

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `string` |
| ...`args` | `any`[] |

##### Returns

`boolean`

***

### eventNames()

> **eventNames**(): (`string` \| `symbol`)[]

Defined in: node\_modules/@types/node/events.d.ts:185

Returns an array listing the events for which the emitter has registered
listeners.

```js
import { EventEmitter } from 'node:events';

const myEE = new EventEmitter();
myEE.on('foo', () => {});
myEE.on('bar', () => {});

const sym = Symbol('symbol');
myEE.on(sym, () => {});

console.log(myEE.eventNames());
// Prints: [ 'foo', 'bar', Symbol(symbol) ]
```

#### Returns

(`string` \| `symbol`)[]

#### Since

v6.0.0

***

### getMaxListeners()

> **getMaxListeners**(): `number`

Defined in: node\_modules/@types/node/events.d.ts:192

Returns the current max listener value for the `EventEmitter` which is either
set by `emitter.setMaxListeners(n)` or defaults to
`events.defaultMaxListeners`.

#### Returns

`number`

#### Since

v1.0.0

***

### listenerCount()

> **listenerCount**\<`E`\>(`eventName`, `listener?`): `number`

Defined in: node\_modules/@types/node/events.d.ts:201

Returns the number of listeners listening for the event named `eventName`.
If `listener` is provided, it will return how many times the listener is found
in the list of the listeners of the event.

#### Type Parameters

| Type Parameter |
| ------ |
| `E` *extends* `string` \| `symbol` |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `eventName` | `string` \| `symbol` | The name of the event being listened for |
| `listener?` | (...`args`) => `void` | The event handler function |

#### Returns

`number`

#### Since

v3.2.0

***

### listeners()

> **listeners**\<`E`\>(`eventName`): (...`args`) => `void`[]

Defined in: node\_modules/@types/node/events.d.ts:214

Returns a copy of the array of listeners for the event named `eventName`.

```js
server.on('connection', (stream) => {
  console.log('someone connected!');
});
console.log(util.inspect(server.listeners('connection')));
// Prints: [ [Function] ]
```

#### Type Parameters

| Type Parameter |
| ------ |
| `E` *extends* `string` \| `symbol` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `eventName` | `string` \| `symbol` |

#### Returns

(...`args`) => `void`[]

#### Since

v0.1.26

***

### off()

#### Call Signature

> **off**\<`K`\>(`event`, `listener`): `this`

Defined in: src/client/client.ts:237

##### Type Parameters

| Type Parameter |
| ------ |
| `K` *extends* keyof [`ClientEvents`](../interfaces/ClientEvents.md) |

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | [`RobloxEvents`](../enumerations/RobloxEvents.md) |
| `listener` | (...`args`) => `void` |

##### Returns

`this`

#### Call Signature

> **off**(`event`, `listener`): `this`

Defined in: src/client/client.ts:241

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

Defined in: src/client/client.ts:213

##### Type Parameters

| Type Parameter |
| ------ |
| `K` *extends* keyof [`ClientEvents`](../interfaces/ClientEvents.md) |

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | [`RobloxEvents`](../enumerations/RobloxEvents.md) |
| `listener` | (...`args`) => `void` |

##### Returns

`this`

#### Call Signature

> **on**(`event`, `listener`): `this`

Defined in: src/client/client.ts:217

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

Defined in: src/client/client.ts:221

##### Type Parameters

| Type Parameter |
| ------ |
| `K` *extends* keyof [`ClientEvents`](../interfaces/ClientEvents.md) |

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | [`RobloxEvents`](../enumerations/RobloxEvents.md) |
| `listener` | (...`args`) => `void` |

##### Returns

`this`

#### Call Signature

> **once**(`event`, `listener`): `this`

Defined in: src/client/client.ts:225

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `string` |
| `listener` | (...`args`) => `void` |

##### Returns

`this`

***

### prependListener()

> **prependListener**\<`E`\>(`eventName`, `listener`): `this`

Defined in: node\_modules/@types/node/events.d.ts:303

Adds the `listener` function to the _beginning_ of the listeners array for the
event named `eventName`. No checks are made to see if the `listener` has
already been added. Multiple calls passing the same combination of `eventName`
and `listener` will result in the `listener` being added, and called, multiple
times.

```js
server.prependListener('connection', (stream) => {
  console.log('someone connected!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

#### Type Parameters

| Type Parameter |
| ------ |
| `E` *extends* `string` \| `symbol` |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `eventName` | `string` \| `symbol` | The name of the event. |
| `listener` | (...`args`) => `void` | The callback function |

#### Returns

`this`

#### Since

v6.0.0

***

### prependOnceListener()

> **prependOnceListener**\<`E`\>(`eventName`, `listener`): `this`

Defined in: node\_modules/@types/node/events.d.ts:320

Adds a **one-time** `listener` function for the event named `eventName` to the
_beginning_ of the listeners array. The next time `eventName` is triggered, this
listener is removed, and then invoked.

```js
server.prependOnceListener('connection', (stream) => {
  console.log('Ah, we have our first user!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

#### Type Parameters

| Type Parameter |
| ------ |
| `E` *extends* `string` \| `symbol` |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `eventName` | `string` \| `symbol` | The name of the event. |
| `listener` | (...`args`) => `void` | The callback function |

#### Returns

`this`

#### Since

v6.0.0

***

### rawListeners()

> **rawListeners**\<`E`\>(`eventName`): (...`args`) => `void`[]

Defined in: node\_modules/@types/node/events.d.ts:351

Returns a copy of the array of listeners for the event named `eventName`,
including any wrappers (such as those created by `.once()`).

```js
import { EventEmitter } from 'node:events';
const emitter = new EventEmitter();
emitter.once('log', () => console.log('log once'));

// Returns a new Array with a function `onceWrapper` which has a property
// `listener` which contains the original listener bound above
const listeners = emitter.rawListeners('log');
const logFnWrapper = listeners[0];

// Logs "log once" to the console and does not unbind the `once` event
logFnWrapper.listener();

// Logs "log once" to the console and removes the listener
logFnWrapper();

emitter.on('log', () => console.log('log persistently'));
// Will return a new Array with a single function bound by `.on()` above
const newListeners = emitter.rawListeners('log');

// Logs "log persistently" twice
newListeners[0]();
emitter.emit('log');
```

#### Type Parameters

| Type Parameter |
| ------ |
| `E` *extends* `string` \| `symbol` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `eventName` | `string` \| `symbol` |

#### Returns

(...`args`) => `void`[]

#### Since

v9.4.0

***

### removeAllListeners()

#### Call Signature

> **removeAllListeners**\<`K`\>(`event?`): `this`

Defined in: src/client/client.ts:245

##### Type Parameters

| Type Parameter |
| ------ |
| `K` *extends* keyof [`ClientEvents`](../interfaces/ClientEvents.md) |

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event?` | `K` |

##### Returns

`this`

#### Call Signature

> **removeAllListeners**(`event`): `this`

Defined in: src/client/client.ts:246

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `string` |

##### Returns

`this`

***

### removeListener()

> **removeListener**\<`E`\>(`eventName`, `listener`): `this`

Defined in: node\_modules/@types/node/events.d.ts:449

Removes the specified `listener` from the listener array for the event named
`eventName`.

```js
const callback = (stream) => {
  console.log('someone connected!');
};
server.on('connection', callback);
// ...
server.removeListener('connection', callback);
```

`removeListener()` will remove, at most, one instance of a listener from the
listener array. If any single listener has been added multiple times to the
listener array for the specified `eventName`, then `removeListener()` must be
called multiple times to remove each instance.

Once an event is emitted, all listeners attached to it at the
time of emitting are called in order. This implies that any
`removeListener()` or `removeAllListeners()` calls _after_ emitting and
_before_ the last listener finishes execution will not remove them from
`emit()` in progress. Subsequent events behave as expected.

```js
import { EventEmitter } from 'node:events';
class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();

const callbackA = () => {
  console.log('A');
  myEmitter.removeListener('event', callbackB);
};

const callbackB = () => {
  console.log('B');
};

myEmitter.on('event', callbackA);

myEmitter.on('event', callbackB);

// callbackA removes listener callbackB but it will still be called.
// Internal listener array at time of emit [callbackA, callbackB]
myEmitter.emit('event');
// Prints:
//   A
//   B

// callbackB is now removed.
// Internal listener array [callbackA]
myEmitter.emit('event');
// Prints:
//   A
```

Because listeners are managed using an internal array, calling this will
change the position indexes of any listener registered _after_ the listener
being removed. This will not impact the order in which listeners are called,
but it means that any copies of the listener array as returned by
the `emitter.listeners()` method will need to be recreated.

When a single function has been added as a handler multiple times for a single
event (as in the example below), `removeListener()` will remove the most
recently added instance. In the example the `once('ping')`
listener is removed:

```js
import { EventEmitter } from 'node:events';
const ee = new EventEmitter();

function pong() {
  console.log('pong');
}

ee.on('ping', pong);
ee.once('ping', pong);
ee.removeListener('ping', pong);

ee.emit('ping');
ee.emit('ping');
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

#### Type Parameters

| Type Parameter |
| ------ |
| `E` *extends* `string` \| `symbol` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `eventName` | `string` \| `symbol` |
| `listener` | (...`args`) => `void` |

#### Returns

`this`

#### Since

v0.1.26

***

### request()

> **request**\<`T`\>(`options`): `Promise`\<`T`\>

Defined in: src/client/client.ts:282

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

***

### setMaxListeners()

> **setMaxListeners**(`n`): `this`

Defined in: node\_modules/@types/node/events.d.ts:460

By default `EventEmitter`s will print a warning if more than `10` listeners are
added for a particular event. This is a useful default that helps finding
memory leaks. The `emitter.setMaxListeners()` method allows the limit to be
modified for this specific `EventEmitter` instance. The value can be set to
`Infinity` (or `0`) to indicate an unlimited number of listeners.

Returns a reference to the `EventEmitter`, so that calls can be chained.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `n` | `number` |

#### Returns

`this`

#### Since

v0.3.5
