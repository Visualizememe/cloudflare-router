# Interface: RouteOptions<AdditionalDataType\>

[Router](../modules/router.md).RouteOptions

Options for creating a new Route

## Type parameters

Name | Type |
:------ | :------ |
`AdditionalDataType` | *unknown* |

## Table of contents

### Properties

- [handler](router.routeoptions.md#handler)
- [isMiddleware](router.routeoptions.md#ismiddleware)
- [method](router.routeoptions.md#method)
- [path](router.routeoptions.md#path)

## Properties

### handler

• **handler**: [*RouteHandler*](../modules/router.md#routehandler)<AdditionalDataType\>

The function that will be called if the incoming request matches the Route's criteria

Defined in: [Router.ts:43](https://github.com/Visualizememe/cloudflare-router/blob/65cfc56/src/Router.ts#L43)

___

### isMiddleware

• `Optional` **isMiddleware**: *undefined* \| *boolean*

Whether this route is a middleware or not
NOTE: If the provided handler is instance of Router, this value will be ignored

Defined in: [Router.ts:53](https://github.com/Visualizememe/cloudflare-router/blob/65cfc56/src/Router.ts#L53)

___

### method

• `Optional` **method**: *undefined* \| *ANY* \| *GET* \| *POST* \| *PUT* \| *PATCH* \| *OPTIONS* \| *HEAD* \| *DELETE*

The specified method that this Route will be "accepting"
Use "ANY" if it's any method, default is "GET"

Defined in: [Router.ts:48](https://github.com/Visualizememe/cloudflare-router/blob/65cfc56/src/Router.ts#L48)

___

### path

• **path**: *string*

The path that this Route will be "listening" for, raw

Defined in: [Router.ts:39](https://github.com/Visualizememe/cloudflare-router/blob/65cfc56/src/Router.ts#L39)
