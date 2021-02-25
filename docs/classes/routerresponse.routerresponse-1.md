# Class: RouterResponse<AdditionalDataType\>

[RouterResponse](../modules/routerresponse.md).RouterResponse

## Type parameters

Name | Type |
:------ | :------ |
`AdditionalDataType` | *any* |

## Table of contents

### Constructors

- [constructor](routerresponse.routerresponse-1.md#constructor)

### Properties

- [request](routerresponse.routerresponse-1.md#request)
- [response](routerresponse.routerresponse-1.md#response)
- [route](routerresponse.routerresponse-1.md#route)

### Methods

- [addTasks](routerresponse.routerresponse-1.md#addtasks)
- [buildResponse](routerresponse.routerresponse-1.md#buildresponse)
- [json](routerresponse.routerresponse-1.md#json)
- [raw](routerresponse.routerresponse-1.md#raw)
- [redirect](routerresponse.routerresponse-1.md#redirect)
- [setCookie](routerresponse.routerresponse-1.md#setcookie)
- [setCustomResponse](routerresponse.routerresponse-1.md#setcustomresponse)
- [setHeader](routerresponse.routerresponse-1.md#setheader)
- [setRoute](routerresponse.routerresponse-1.md#setroute)
- [status](routerresponse.routerresponse-1.md#status)
- [statusCode](routerresponse.routerresponse-1.md#statuscode)
- [text](routerresponse.routerresponse-1.md#text)
- [transformOptions](routerresponse.routerresponse-1.md#transformoptions)

## Constructors

### constructor

\+ **new RouterResponse**<AdditionalDataType\>(`request`: [*RouterRequest*](routerrequest.routerrequest-1.md)<AdditionalDataType\>): [*RouterResponse*](routerresponse.routerresponse-1.md)<AdditionalDataType\>

#### Type parameters:

Name | Type |
:------ | :------ |
`AdditionalDataType` | *unknown* |

#### Parameters:

Name | Type |
:------ | :------ |
`request` | [*RouterRequest*](routerrequest.routerrequest-1.md)<AdditionalDataType\> |

**Returns:** [*RouterResponse*](routerresponse.routerresponse-1.md)<AdditionalDataType\>

Defined in: [RouterResponse.ts:58](https://github.com/Visualizememe/cloudflare-router/blob/65cfc56/src/RouterResponse.ts#L58)

## Properties

### request

• **request**: [*RouterRequest*](routerrequest.routerrequest-1.md)<AdditionalDataType\>

The processed request

Defined in: [RouterResponse.ts:34](https://github.com/Visualizememe/cloudflare-router/blob/65cfc56/src/RouterResponse.ts#L34)

___

### response

• **response**: *object*

Internal data for the RouterResponse, to retrieve as normal data call .buildResponse()

#### Type declaration:

Name | Type | Description |
:------ | :------ | :------ |
`body` | [*BodyType*](../modules/routerresponse.md#bodytype) | - |
`contentType` | *string* | - |
`cookies` | *Record*<string, string\> | - |
`headers` | *Record*<string, string\> | - |
`redirect`? | *undefined* \| { `url`: *string*  } | If we want to redirect   |
`response`? | *undefined* \| Response | If the user wants to provide custom response   |
`status` | *string* | - |
`statusCode` | *number* | - |
`tasks` | *Promise*<unknown\>[] | - |
`type` | *normal* \| *redirect* | - |

Defined in: [RouterResponse.ts:39](https://github.com/Visualizememe/cloudflare-router/blob/65cfc56/src/RouterResponse.ts#L39)

___

### route

• `Optional` **route**: *undefined* \| [*Route*](router.route.md)<AdditionalDataType\>

The route that initiated by the request

Defined in: [RouterResponse.ts:29](https://github.com/Visualizememe/cloudflare-router/blob/65cfc56/src/RouterResponse.ts#L29)

## Methods

### addTasks

▸ **addTasks**(`tasks`: *Promise*<unknown\> \| *Promise*<unknown\>[]): [*RouterResponse*](routerresponse.routerresponse-1.md)<AdditionalDataType\>

#### Parameters:

Name | Type |
:------ | :------ |
`tasks` | *Promise*<unknown\> \| *Promise*<unknown\>[] |

**Returns:** [*RouterResponse*](routerresponse.routerresponse-1.md)<AdditionalDataType\>

Defined in: [RouterResponse.ts:111](https://github.com/Visualizememe/cloudflare-router/blob/65cfc56/src/RouterResponse.ts#L111)

___

### buildResponse

▸ **buildResponse**(): [*BuiltResponse*](../modules/routerresponse.md#builtresponse)<AdditionalDataType\>

**Returns:** [*BuiltResponse*](../modules/routerresponse.md#builtresponse)<AdditionalDataType\>

Defined in: [RouterResponse.ts:162](https://github.com/Visualizememe/cloudflare-router/blob/65cfc56/src/RouterResponse.ts#L162)

___

### json

▸ **json**(`data`: *unknown*): [*RouterResponse*](routerresponse.routerresponse-1.md)<AdditionalDataType\>

#### Parameters:

Name | Type |
:------ | :------ |
`data` | *unknown* |

**Returns:** [*RouterResponse*](routerresponse.routerresponse-1.md)<AdditionalDataType\>

Defined in: [RouterResponse.ts:78](https://github.com/Visualizememe/cloudflare-router/blob/65cfc56/src/RouterResponse.ts#L78)

___

### raw

▸ **raw**(`body`: [*BodyType*](../modules/routerresponse.md#bodytype), `contentType`: *string*): [*RouterResponse*](routerresponse.routerresponse-1.md)<AdditionalDataType\>

#### Parameters:

Name | Type |
:------ | :------ |
`body` | [*BodyType*](../modules/routerresponse.md#bodytype) |
`contentType` | *string* |

**Returns:** [*RouterResponse*](routerresponse.routerresponse-1.md)<AdditionalDataType\>

Defined in: [RouterResponse.ts:85](https://github.com/Visualizememe/cloudflare-router/blob/65cfc56/src/RouterResponse.ts#L85)

___

### redirect

▸ **redirect**(`url`: *string*, `statusCode`: *number*): [*RouterResponse*](routerresponse.routerresponse-1.md)<AdditionalDataType\>

#### Parameters:

Name | Type |
:------ | :------ |
`url` | *string* |
`statusCode` | *number* |

**Returns:** [*RouterResponse*](routerresponse.routerresponse-1.md)<AdditionalDataType\>

Defined in: [RouterResponse.ts:138](https://github.com/Visualizememe/cloudflare-router/blob/65cfc56/src/RouterResponse.ts#L138)

___

### setCookie

▸ **setCookie**(`name`: *string*, `value`: *string*, `options?`: CookieSerializeOptions): [*RouterResponse*](routerresponse.routerresponse-1.md)<AdditionalDataType\>

#### Parameters:

Name | Type |
:------ | :------ |
`name` | *string* |
`value` | *string* |
`options?` | CookieSerializeOptions |

**Returns:** [*RouterResponse*](routerresponse.routerresponse-1.md)<AdditionalDataType\>

Defined in: [RouterResponse.ts:126](https://github.com/Visualizememe/cloudflare-router/blob/65cfc56/src/RouterResponse.ts#L126)

___

### setCustomResponse

▸ **setCustomResponse**(`response`: Response): [*RouterResponse*](routerresponse.routerresponse-1.md)<AdditionalDataType\>

#### Parameters:

Name | Type |
:------ | :------ |
`response` | Response |

**Returns:** [*RouterResponse*](routerresponse.routerresponse-1.md)<AdditionalDataType\>

Defined in: [RouterResponse.ts:148](https://github.com/Visualizememe/cloudflare-router/blob/65cfc56/src/RouterResponse.ts#L148)

___

### setHeader

▸ **setHeader**(`name`: *string*, `value`: *string*): [*RouterResponse*](routerresponse.routerresponse-1.md)<AdditionalDataType\>

#### Parameters:

Name | Type |
:------ | :------ |
`name` | *string* |
`value` | *string* |

**Returns:** [*RouterResponse*](routerresponse.routerresponse-1.md)<AdditionalDataType\>

Defined in: [RouterResponse.ts:118](https://github.com/Visualizememe/cloudflare-router/blob/65cfc56/src/RouterResponse.ts#L118)

___

### setRoute

▸ **setRoute**(`route`: [*Route*](router.route.md)<AdditionalDataType\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`route` | [*Route*](router.route.md)<AdditionalDataType\> |

**Returns:** *void*

Defined in: [RouterResponse.ts:74](https://github.com/Visualizememe/cloudflare-router/blob/65cfc56/src/RouterResponse.ts#L74)

___

### status

▸ **status**(`status`: *string*): [*RouterResponse*](routerresponse.routerresponse-1.md)<AdditionalDataType\>

#### Parameters:

Name | Type |
:------ | :------ |
`status` | *string* |

**Returns:** [*RouterResponse*](routerresponse.routerresponse-1.md)<AdditionalDataType\>

Defined in: [RouterResponse.ts:99](https://github.com/Visualizememe/cloudflare-router/blob/65cfc56/src/RouterResponse.ts#L99)

___

### statusCode

▸ **statusCode**(`statusCode`: *number*): [*RouterResponse*](routerresponse.routerresponse-1.md)<AdditionalDataType\>

#### Parameters:

Name | Type |
:------ | :------ |
`statusCode` | *number* |

**Returns:** [*RouterResponse*](routerresponse.routerresponse-1.md)<AdditionalDataType\>

Defined in: [RouterResponse.ts:105](https://github.com/Visualizememe/cloudflare-router/blob/65cfc56/src/RouterResponse.ts#L105)

___

### text

▸ **text**(`text`: *string*): [*RouterResponse*](routerresponse.routerresponse-1.md)<AdditionalDataType\>

#### Parameters:

Name | Type |
:------ | :------ |
`text` | *string* |

**Returns:** [*RouterResponse*](routerresponse.routerresponse-1.md)<AdditionalDataType\>

Defined in: [RouterResponse.ts:92](https://github.com/Visualizememe/cloudflare-router/blob/65cfc56/src/RouterResponse.ts#L92)

___

### transformOptions

▸ **transformOptions**(): *Record*<string, unknown\>

**Returns:** *Record*<string, unknown\>

Defined in: [RouterResponse.ts:154](https://github.com/Visualizememe/cloudflare-router/blob/65cfc56/src/RouterResponse.ts#L154)
