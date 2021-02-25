# Class: Router<AdditionalDataType\>

[Router](../modules/router.md).Router

## Type parameters

Name | Type |
:------ | :------ |
`AdditionalDataType` | *unknown* |

## Table of contents

### Constructors

- [constructor](router.router-1.md#constructor)

### Properties

- [basePath](router.router-1.md#basepath)
- [customResponseTransformer](router.router-1.md#customresponsetransformer)
- [isWaterfall](router.router-1.md#iswaterfall)
- [main](router.router-1.md#main)
- [parent](router.router-1.md#parent)
- [routes](router.router-1.md#routes)

### Methods

- [createRoute](router.router-1.md#createroute)
- [createRouteAndAddInternally](router.router-1.md#createrouteandaddinternally)
- [createUrlPattern](router.router-1.md#createurlpattern)
- [delete](router.router-1.md#delete)
- [findMatchingRoutes](router.router-1.md#findmatchingroutes)
- [fixPath](router.router-1.md#fixpath)
- [get](router.router-1.md#get)
- [getMainRouter](router.router-1.md#getmainrouter)
- [head](router.router-1.md#head)
- [options](router.router-1.md#options)
- [post](router.router-1.md#post)
- [serve](router.router-1.md#serve)
- [setBasePath](router.router-1.md#setbasepath)
- [setParentRouter](router.router-1.md#setparentrouter)
- [use](router.router-1.md#use)

## Constructors

### constructor

\+ **new Router**<AdditionalDataType\>(`options?`: *RouterOptions*<AdditionalDataType\>): [*Router*](router.router-1.md)<AdditionalDataType\>

Creates a new Router

#### Type parameters:

Name | Type |
:------ | :------ |
`AdditionalDataType` | *unknown* |

#### Parameters:

Name | Type |
:------ | :------ |
`options` | *RouterOptions*<AdditionalDataType\> |

**Returns:** [*Router*](router.router-1.md)<AdditionalDataType\>

Defined in: [Router.ts:196](https://github.com/Visualizememe/cloudflare-router/blob/65cfc56/src/Router.ts#L196)

## Properties

### basePath

• **basePath**: *string*

Defined in: [Router.ts:183](https://github.com/Visualizememe/cloudflare-router/blob/65cfc56/src/Router.ts#L183)

___

### customResponseTransformer

• `Optional` **customResponseTransformer**: *undefined* \| (`data`: { `body`: [*BodyType*](../modules/routerresponse.md#bodytype) ; `contentType`: *string* ; `cookies`: *Record*<string, string\> ; `headers`: *Record*<string, string\> ; `redirect?`: *undefined* \| { `url`: *string*  } ; `response?`: *undefined* \| Response ; `status`: *string* ; `statusCode`: *number* ; `tasks`: *Promise*<unknown\>[] ; `type`: *normal* \| *redirect*  }) => *unknown*

Defined in: [Router.ts:186](https://github.com/Visualizememe/cloudflare-router/blob/65cfc56/src/Router.ts#L186)

___

### isWaterfall

• **isWaterfall**: *boolean*

Defined in: [Router.ts:184](https://github.com/Visualizememe/cloudflare-router/blob/65cfc56/src/Router.ts#L184)

___

### main

• **main**: [*Router*](router.router-1.md)<AdditionalDataType\>

The main Router

Defined in: [Router.ts:196](https://github.com/Visualizememe/cloudflare-router/blob/65cfc56/src/Router.ts#L196)

___

### parent

• **parent**: *null* \| [*Router*](router.router-1.md)<AdditionalDataType\>

The "parent" of all the routers, which will be processing the incoming requests

Defined in: [Router.ts:191](https://github.com/Visualizememe/cloudflare-router/blob/65cfc56/src/Router.ts#L191)

___

### routes

• **routes**: [*Route*](router.route.md)<AdditionalDataType\>[]

Defined in: [Router.ts:185](https://github.com/Visualizememe/cloudflare-router/blob/65cfc56/src/Router.ts#L185)

## Methods

### createRoute

▸ **createRoute**(`options`: [*RouteOptions*](../interfaces/router.routeoptions.md)<AdditionalDataType\>): [*Route*](router.route.md)<AdditionalDataType\>

Used internally for creating a route with a certain method

#### Parameters:

Name | Type |
:------ | :------ |
`options` | [*RouteOptions*](../interfaces/router.routeoptions.md)<AdditionalDataType\> |

**Returns:** [*Route*](router.route.md)<AdditionalDataType\>

Defined in: [Router.ts:298](https://github.com/Visualizememe/cloudflare-router/blob/65cfc56/src/Router.ts#L298)

___

### createRouteAndAddInternally

▸ **createRouteAndAddInternally**(`options`: [*RouteOptions*](../interfaces/router.routeoptions.md)<AdditionalDataType\>): [*Route*](router.route.md)<AdditionalDataType\>

#### Parameters:

Name | Type |
:------ | :------ |
`options` | [*RouteOptions*](../interfaces/router.routeoptions.md)<AdditionalDataType\> |

**Returns:** [*Route*](router.route.md)<AdditionalDataType\>

Defined in: [Router.ts:311](https://github.com/Visualizememe/cloudflare-router/blob/65cfc56/src/Router.ts#L311)

___

### createUrlPattern

▸ **createUrlPattern**(`path`: *string*): *UrlPattern*

Creating a URLPattern instance based on the input path (NOTE: MUST HAVE WENT THROUGH Router.fixPath first!)

#### Parameters:

Name | Type |
:------ | :------ |
`path` | *string* |

**Returns:** *UrlPattern*

Defined in: [Router.ts:406](https://github.com/Visualizememe/cloudflare-router/blob/65cfc56/src/Router.ts#L406)

___

### delete

▸ **delete**(`path`: *string*, `handler`: [*RouteFunctionHandler*](../modules/router.md#routefunctionhandler)<AdditionalDataType\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`path` | *string* |
`handler` | [*RouteFunctionHandler*](../modules/router.md#routefunctionhandler)<AdditionalDataType\> |

**Returns:** *void*

Defined in: [Router.ts:376](https://github.com/Visualizememe/cloudflare-router/blob/65cfc56/src/Router.ts#L376)

___

### findMatchingRoutes

▸ **findMatchingRoutes**(`request`: [*RouterRequest*](routerrequest.routerrequest-1.md)<AdditionalDataType\>): *MatchingRoute*<AdditionalDataType\>[]

#### Parameters:

Name | Type |
:------ | :------ |
`request` | [*RouterRequest*](routerrequest.routerrequest-1.md)<AdditionalDataType\> |

**Returns:** *MatchingRoute*<AdditionalDataType\>[]

Defined in: [Router.ts:225](https://github.com/Visualizememe/cloudflare-router/blob/65cfc56/src/Router.ts#L225)

___

### fixPath

▸ **fixPath**(`path`: *string*): *string*

Fixing the input path to make sure it's consistent in regards of the slashes (/)

#### Parameters:

Name | Type |
:------ | :------ |
`path` | *string* |

**Returns:** *string*

Defined in: [Router.ts:391](https://github.com/Visualizememe/cloudflare-router/blob/65cfc56/src/Router.ts#L391)

___

### get

▸ **get**(`path`: *string*, `handler`: [*RouteHandler*](../modules/router.md#routehandler)<AdditionalDataType\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`path` | *string* |
`handler` | [*RouteHandler*](../modules/router.md#routehandler)<AdditionalDataType\> |

**Returns:** *void*

Defined in: [Router.ts:340](https://github.com/Visualizememe/cloudflare-router/blob/65cfc56/src/Router.ts#L340)

___

### getMainRouter

▸ **getMainRouter**(): [*Router*](router.router-1.md)<AdditionalDataType\>

Recursively goes up and finds the main router

**Returns:** [*Router*](router.router-1.md)<AdditionalDataType\>

Defined in: [Router.ts:217](https://github.com/Visualizememe/cloudflare-router/blob/65cfc56/src/Router.ts#L217)

___

### head

▸ **head**(`path`: *string*, `handler`: [*RouteFunctionHandler*](../modules/router.md#routefunctionhandler)<AdditionalDataType\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`path` | *string* |
`handler` | [*RouteFunctionHandler*](../modules/router.md#routefunctionhandler)<AdditionalDataType\> |

**Returns:** *void*

Defined in: [Router.ts:367](https://github.com/Visualizememe/cloudflare-router/blob/65cfc56/src/Router.ts#L367)

___

### options

▸ **options**(`path`: *string*, `handler`: [*RouteFunctionHandler*](../modules/router.md#routefunctionhandler)<AdditionalDataType\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`path` | *string* |
`handler` | [*RouteFunctionHandler*](../modules/router.md#routefunctionhandler)<AdditionalDataType\> |

**Returns:** *void*

Defined in: [Router.ts:358](https://github.com/Visualizememe/cloudflare-router/blob/65cfc56/src/Router.ts#L358)

___

### post

▸ **post**(`path`: *string*, `handler`: [*RouteHandler*](../modules/router.md#routehandler)<AdditionalDataType\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`path` | *string* |
`handler` | [*RouteHandler*](../modules/router.md#routehandler)<AdditionalDataType\> |

**Returns:** *void*

Defined in: [Router.ts:349](https://github.com/Visualizememe/cloudflare-router/blob/65cfc56/src/Router.ts#L349)

___

### serve

▸ **serve**(`request`: [*IncomingRequest*](../modules/interfaces.md#incomingrequest) \| [*RouterRequest*](routerrequest.routerrequest-1.md)<AdditionalDataType\>, `additionalData?`: AdditionalDataType, `response?`: [*RouterResponse*](routerresponse.routerresponse-1.md)<AdditionalDataType\>): *Promise*<[*BuiltResponse*](../modules/routerresponse.md#builtresponse)<AdditionalDataType\>\>

#### Parameters:

Name | Type |
:------ | :------ |
`request` | [*IncomingRequest*](../modules/interfaces.md#incomingrequest) \| [*RouterRequest*](routerrequest.routerrequest-1.md)<AdditionalDataType\> |
`additionalData?` | AdditionalDataType |
`response?` | [*RouterResponse*](routerresponse.routerresponse-1.md)<AdditionalDataType\> |

**Returns:** *Promise*<[*BuiltResponse*](../modules/routerresponse.md#builtresponse)<AdditionalDataType\>\>

Defined in: [Router.ts:247](https://github.com/Visualizememe/cloudflare-router/blob/65cfc56/src/Router.ts#L247)

___

### setBasePath

▸ `Private`**setBasePath**(`path?`: *string*, `fixRoutes?`: *boolean*): *string*

Sets the base path for the Router, and updates all the belonging routes with the new base path
Returns a string with the new base path

#### Parameters:

Name | Type |
:------ | :------ |
`path?` | *string* |
`fixRoutes?` | *boolean* |

**Returns:** *string*

Defined in: [Router.ts:418](https://github.com/Visualizememe/cloudflare-router/blob/65cfc56/src/Router.ts#L418)

___

### setParentRouter

▸ `Private`**setParentRouter**(`parent`: [*Router*](router.router-1.md)<AdditionalDataType\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`parent` | [*Router*](router.router-1.md)<AdditionalDataType\> |

**Returns:** *void*

Defined in: [Router.ts:445](https://github.com/Visualizememe/cloudflare-router/blob/65cfc56/src/Router.ts#L445)

___

### use

▸ **use**(`path`: *string*, `handler`: [*RouteHandler*](../modules/router.md#routehandler)<AdditionalDataType\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`path` | *string* |
`handler` | [*RouteHandler*](../modules/router.md#routehandler)<AdditionalDataType\> |

**Returns:** *void*

Defined in: [Router.ts:319](https://github.com/Visualizememe/cloudflare-router/blob/65cfc56/src/Router.ts#L319)
