# Module: interfaces

## Table of contents

### Type aliases

- [IncomingEvent](interfaces.md#incomingevent)
- [IncomingRequest](interfaces.md#incomingrequest)

## Type aliases

### IncomingEvent

Ƭ **IncomingEvent**: *object*

#### Type declaration:

Name | Type |
:------ | :------ |
`passThroughOnException` | () => *void* |
`request` | [*IncomingRequest*](interfaces.md#incomingrequest) |
`respondWith` | (`callback`: *Promise*<unknown\> \| *unknown*) => *void* |
`type` | *fetch* |
`waitUntil` | (`tasks`: *Promise*<unknown\>) => *void* |

Defined in: [interfaces.ts:1](https://github.com/Visualizememe/cloudflare-router/blob/65cfc56/src/interfaces.ts#L1)

___

### IncomingRequest

Ƭ **IncomingRequest**: *object*

#### Type declaration:

Name | Type |
:------ | :------ |
`arrayBuffer` | () => *Promise*<ArrayBuffer \| *null*\> |
`blob` | () => *Promise*<Blob \| *null*\> |
`body` | ReadableStream |
`bodyUsed` | *boolean* |
`cf` | *object* |
`cf.apps` | *boolean* |
`cf.asn` | *string* |
`cf.cacheEverything` | *boolean* |
`cf.cacheTtl` | *number* |
`cf.colo` | *string* |
`cf.country` | *string* |
`cf.exclusive` | *number* |
`cf.group` | *unknown* |
`cf.group-weight` | *unknown* |
`cf.minify` | *object* |
`cf.minify.css` | *boolean* |
`cf.minify.html` | *boolean* |
`cf.minify.javascript` | *boolean* |
`cf.mirage` | *boolean* |
`cf.polish` | *lossy* \| *lossless* \| *off* |
`cf.resolveOverride` | *string* |
`cf.scrapeShield` | *boolean* |
`cf.tlsCipher` | *string* |
`cf.tlsClientAUth` | *unknown* |
`cf.tlsVersion` | *string* |
`cf.weight` | *unknown* |
`clone` | () => [*IncomingRequest*](interfaces.md#incomingrequest) |
`fetch` | () => *Promise*<Response\> |
`formData` | () => *Promise*<FormData \| *null*\> |
`headers` | Headers |
`json` | () => *Promise*<Record<string, unknown\> \| unknown[]\> |
`method` | *string* |
`redirect` | *follow* \| *manual* |
`text` | () => *Promise*<string \| *null*\> |
`url` | *string* |

Defined in: [interfaces.ts:9](https://github.com/Visualizememe/cloudflare-router/blob/65cfc56/src/interfaces.ts#L9)
