# Class: RouterRequest<AdditionalDataType\>

[RouterRequest](../modules/routerrequest.md).RouterRequest

## Type parameters

Name | Type |
:------ | :------ |
`AdditionalDataType` | *unknown* |

## Table of contents

### Constructors

- [constructor](routerrequest.routerrequest-1.md#constructor)

### Properties

- [additionalData](routerrequest.routerrequest-1.md#additionaldata)
- [body](routerrequest.routerrequest-1.md#body)
- [bodyUsed](routerrequest.routerrequest-1.md#bodyused)
- [cookies](routerrequest.routerrequest-1.md#cookies)
- [data](routerrequest.routerrequest-1.md#data)
- [headers](routerrequest.routerrequest-1.md#headers)
- [method](routerrequest.routerrequest-1.md#method)
- [params](routerrequest.routerrequest-1.md#params)
- [path](routerrequest.routerrequest-1.md#path)
- [query](routerrequest.routerrequest-1.md#query)
- [request](routerrequest.routerrequest-1.md#request)
- [route](routerrequest.routerrequest-1.md#route)
- [url](routerrequest.routerrequest-1.md#url)
- [urlData](routerrequest.routerrequest-1.md#urldata)

### Methods

- [parseHeaders](routerrequest.routerrequest-1.md#parseheaders)
- [setParams](routerrequest.routerrequest-1.md#setparams)
- [setRoute](routerrequest.routerrequest-1.md#setroute)
- [fixRequestUrl](routerrequest.routerrequest-1.md#fixrequesturl)

## Constructors

### constructor

\+ **new RouterRequest**<AdditionalDataType\>(`request`: [*IncomingRequest*](../modules/interfaces.md#incomingrequest), `additionalData?`: AdditionalDataType): [*RouterRequest*](routerrequest.routerrequest-1.md)<AdditionalDataType\>

#### Type parameters:

Name | Type |
:------ | :------ |
`AdditionalDataType` | *unknown* |

#### Parameters:

Name | Type |
:------ | :------ |
`request` | [*IncomingRequest*](../modules/interfaces.md#incomingrequest) |
`additionalData?` | AdditionalDataType |

**Returns:** [*RouterRequest*](routerrequest.routerrequest-1.md)<AdditionalDataType\>

Defined in: [RouterRequest.ts:38](https://github.com/Visualizememe/cloudflare-router/blob/65cfc56/src/RouterRequest.ts#L38)

## Properties

### additionalData

• **additionalData**: *null* \| AdditionalDataType

Defined in: [RouterRequest.ts:9](https://github.com/Visualizememe/cloudflare-router/blob/65cfc56/src/RouterRequest.ts#L9)

___

### body

• `Optional` **body**: *unknown*

The body if existent

Defined in: [RouterRequest.ts:32](https://github.com/Visualizememe/cloudflare-router/blob/65cfc56/src/RouterRequest.ts#L32)

___

### bodyUsed

• **bodyUsed**: *boolean*

Defined in: [RouterRequest.ts:15](https://github.com/Visualizememe/cloudflare-router/blob/65cfc56/src/RouterRequest.ts#L15)

___

### cookies

• **cookies**: *Record*<string, string\>

Defined in: [RouterRequest.ts:17](https://github.com/Visualizememe/cloudflare-router/blob/65cfc56/src/RouterRequest.ts#L17)

___

### data

• **data**: *Map*<any, any\>

Allows for middlewares to add data to the request type-safe

Defined in: [RouterRequest.ts:22](https://github.com/Visualizememe/cloudflare-router/blob/65cfc56/src/RouterRequest.ts#L22)

___

### headers

• **headers**: *Record*<string, string\>

Defined in: [RouterRequest.ts:16](https://github.com/Visualizememe/cloudflare-router/blob/65cfc56/src/RouterRequest.ts#L16)

___

### method

• **method**: [*Methods*](../modules/router.md#methods)

Defined in: [RouterRequest.ts:14](https://github.com/Visualizememe/cloudflare-router/blob/65cfc56/src/RouterRequest.ts#L14)

___

### params

• `Optional` **params**: *undefined* \| *Record*<string, string\>

The params for the route, if any
NOTE: This will be set by the Router once the fitting route has been found

Defined in: [RouterRequest.ts:38](https://github.com/Visualizememe/cloudflare-router/blob/65cfc56/src/RouterRequest.ts#L38)

___

### path

• **path**: *string*

Defined in: [RouterRequest.ts:12](https://github.com/Visualizememe/cloudflare-router/blob/65cfc56/src/RouterRequest.ts#L12)

___

### query

• **query**: *ParsedUrlQuery*

Defined in: [RouterRequest.ts:13](https://github.com/Visualizememe/cloudflare-router/blob/65cfc56/src/RouterRequest.ts#L13)

___

### request

• **request**: [*IncomingRequest*](../modules/interfaces.md#incomingrequest)

Defined in: [RouterRequest.ts:8](https://github.com/Visualizememe/cloudflare-router/blob/65cfc56/src/RouterRequest.ts#L8)

___

### route

• `Optional` **route**: *undefined* \| [*Route*](router.route.md)<AdditionalDataType\>

The route that was found with the request

Defined in: [RouterRequest.ts:27](https://github.com/Visualizememe/cloudflare-router/blob/65cfc56/src/RouterRequest.ts#L27)

___

### url

• **url**: *string*

Defined in: [RouterRequest.ts:10](https://github.com/Visualizememe/cloudflare-router/blob/65cfc56/src/RouterRequest.ts#L10)

___

### urlData

• **urlData**: URL

Defined in: [RouterRequest.ts:11](https://github.com/Visualizememe/cloudflare-router/blob/65cfc56/src/RouterRequest.ts#L11)

## Methods

### parseHeaders

▸ `Private`**parseHeaders**(): *void*

**Returns:** *void*

Defined in: [RouterRequest.ts:72](https://github.com/Visualizememe/cloudflare-router/blob/65cfc56/src/RouterRequest.ts#L72)

___

### setParams

▸ **setParams**(`params`: *Record*<string, string\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`params` | *Record*<string, string\> |

**Returns:** *void*

Defined in: [RouterRequest.ts:68](https://github.com/Visualizememe/cloudflare-router/blob/65cfc56/src/RouterRequest.ts#L68)

___

### setRoute

▸ **setRoute**(`route`: [*Route*](router.route.md)<AdditionalDataType\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`route` | [*Route*](router.route.md)<AdditionalDataType\> |

**Returns:** *void*

Defined in: [RouterRequest.ts:64](https://github.com/Visualizememe/cloudflare-router/blob/65cfc56/src/RouterRequest.ts#L64)

___

### fixRequestUrl

▸ `Static`**fixRequestUrl**(`url`: *string*): *string*

#### Parameters:

Name | Type |
:------ | :------ |
`url` | *string* |

**Returns:** *string*

Defined in: [RouterRequest.ts:57](https://github.com/Visualizememe/cloudflare-router/blob/65cfc56/src/RouterRequest.ts#L57)
