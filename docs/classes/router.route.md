# Class: Route<AdditionalDataType\>

[Router](../modules/router.md).Route

## Type parameters

Name | Type |
:------ | :------ |
`AdditionalDataType` | *unknown* |

## Table of contents

### Constructors

- [constructor](router.route.md#constructor)

### Properties

- [handler](router.route.md#handler)
- [isMiddleware](router.route.md#ismiddleware)
- [isRouterHandler](router.route.md#isrouterhandler)
- [method](router.route.md#method)
- [path](router.route.md#path)
- [router](router.route.md#router)

### Methods

- [match](router.route.md#match)
- [matchPath](router.route.md#matchpath)

## Constructors

### constructor

\+ **new Route**<AdditionalDataType\>(`router`: [*Router*](router.router-1.md)<AdditionalDataType\>, `options`: [*RouteOptions*](../interfaces/router.routeoptions.md)<AdditionalDataType\>): [*Route*](router.route.md)<AdditionalDataType\>

Creates a new Route

#### Type parameters:

Name | Type |
:------ | :------ |
`AdditionalDataType` | *unknown* |

#### Parameters:

Name | Type |
:------ | :------ |
`router` | [*Router*](router.router-1.md)<AdditionalDataType\> |
`options` | [*RouteOptions*](../interfaces/router.routeoptions.md)<AdditionalDataType\> |

**Returns:** [*Route*](router.route.md)<AdditionalDataType\>

Defined in: [Router.ts:111](https://github.com/Visualizememe/cloudflare-router/blob/65cfc56/src/Router.ts#L111)

## Properties

### handler

• **handler**: [*RouteHandler*](../modules/router.md#routehandler)<AdditionalDataType\>

The function that will be called if the incoming request matches the criteria for this route

Defined in: [Router.ts:101](https://github.com/Visualizememe/cloudflare-router/blob/65cfc56/src/Router.ts#L101)

___

### isMiddleware

• **isMiddleware**: *boolean*

If the route provided is a middleware or not, this will affect how the incoming request will be processed
by this route.

Defined in: [Router.ts:107](https://github.com/Visualizememe/cloudflare-router/blob/65cfc56/src/Router.ts#L107)

___

### isRouterHandler

• **isRouterHandler**: *boolean*

If the handler is a Router

Defined in: [Router.ts:111](https://github.com/Visualizememe/cloudflare-router/blob/65cfc56/src/Router.ts#L111)

___

### method

• **method**: [*Methods*](../modules/router.md#methods)

The method this route accepts

Defined in: [Router.ts:82](https://github.com/Visualizememe/cloudflare-router/blob/65cfc56/src/Router.ts#L82)

___

### path

• **path**: *object*

#### Type declaration:

Name | Type | Description |
:------ | :------ | :------ |
`formattedPath` | *string* | The path the library has parsed and formatted / fixed accordingly   |
`inputPath` | *string* | The path provided to the library   |
`pattern` | *UrlPattern* | The URL pattern used for matching incoming requests   |

Defined in: [Router.ts:83](https://github.com/Visualizememe/cloudflare-router/blob/65cfc56/src/Router.ts#L83)

___

### router

• **router**: [*Router*](router.router-1.md)<AdditionalDataType\>

The router that created this route

Defined in: [Router.ts:77](https://github.com/Visualizememe/cloudflare-router/blob/65cfc56/src/Router.ts#L77)

## Methods

### match

▸ **match**(`request`: [*RouterRequest*](routerrequest.routerrequest-1.md)<AdditionalDataType\>): *object*

#### Parameters:

Name | Type |
:------ | :------ |
`request` | [*RouterRequest*](routerrequest.routerrequest-1.md)<AdditionalDataType\> |

**Returns:** *object*

Name | Type |
:------ | :------ |
`doesMatch` | *boolean* |
`pathMatch` | *unknown* |

Defined in: [Router.ts:140](https://github.com/Visualizememe/cloudflare-router/blob/65cfc56/src/Router.ts#L140)

___

### matchPath

▸ **matchPath**(`request`: [*RouterRequest*](routerrequest.routerrequest-1.md)<AdditionalDataType\>): *unknown*

#### Parameters:

Name | Type |
:------ | :------ |
`request` | [*RouterRequest*](routerrequest.routerrequest-1.md)<AdditionalDataType\> |

**Returns:** *unknown*

Defined in: [Router.ts:136](https://github.com/Visualizememe/cloudflare-router/blob/65cfc56/src/Router.ts#L136)
