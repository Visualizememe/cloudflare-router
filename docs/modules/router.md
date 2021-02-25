# Module: Router

## Table of contents

### Classes

- [Route](../classes/router.route.md)
- [Router](../classes/router.router-1.md)

### Interfaces

- [RouteOptions](../interfaces/router.routeoptions.md)

### Type aliases

- [Methods](router.md#methods)
- [RouteFunctionHandler](router.md#routefunctionhandler)
- [RouteHandler](router.md#routehandler)

## Type aliases

### Methods

Ƭ **Methods**: *ANY* \| *GET* \| *POST* \| *PUT* \| *PATCH* \| *OPTIONS* \| *HEAD* \| *DELETE*

Methods that can be used for the Route, use "ANY" for any methods
Default is "GET"

Defined in: [Router.ts:29](https://github.com/Visualizememe/cloudflare-router/blob/65cfc56/src/Router.ts#L29)

___

### RouteFunctionHandler

Ƭ **RouteFunctionHandler**<AdditionalDataType\>: (`request`: [*RouterRequest*](../classes/routerrequest.routerrequest-1.md)<AdditionalDataType\>, `response`: [*RouterResponse*](../classes/routerresponse.routerresponse-1.md)<AdditionalDataType\>, `additionalData?`: AdditionalDataType) => *void*

The function that will be called if the incoming request matches a route's criteria

#### Type parameters:

Name |
:------ |
`AdditionalDataType` |

#### Type declaration:

▸ (`request`: [*RouterRequest*](../classes/routerrequest.routerrequest-1.md)<AdditionalDataType\>, `response`: [*RouterResponse*](../classes/routerresponse.routerresponse-1.md)<AdditionalDataType\>, `additionalData?`: AdditionalDataType): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`request` | [*RouterRequest*](../classes/routerrequest.routerrequest-1.md)<AdditionalDataType\> |
`response` | [*RouterResponse*](../classes/routerresponse.routerresponse-1.md)<AdditionalDataType\> |
`additionalData?` | AdditionalDataType |

**Returns:** *void*

Defined in: [Router.ts:60](https://github.com/Visualizememe/cloudflare-router/blob/65cfc56/src/Router.ts#L60)

___

### RouteHandler

Ƭ **RouteHandler**<AdditionalDataType\>: [*Router*](../classes/router.router-1.md)<AdditionalDataType\> \| [*RouteFunctionHandler*](router.md#routefunctionhandler)<AdditionalDataType\>

The handler that will be used if the request matches the route's criteria

#### Type parameters:

Name | Type |
:------ | :------ |
`AdditionalDataType` | *unknown* |

Defined in: [Router.ts:66](https://github.com/Visualizememe/cloudflare-router/blob/65cfc56/src/Router.ts#L66)
