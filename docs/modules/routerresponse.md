# Module: RouterResponse

## Table of contents

### Classes

- [RouterResponse](../classes/routerresponse.routerresponse-1.md)

### Type aliases

- [BodyType](routerresponse.md#bodytype)
- [BuiltResponse](routerresponse.md#builtresponse)

## Type aliases

### BodyType

Ƭ **BodyType**: *string* \| Blob \| ArrayBufferView \| ArrayBuffer \| FormData \| URLSearchParams \| *ReadableStream*<Uint8Array\> \| *null* \| *undefined*

Defined in: [RouterResponse.ts:6](https://github.com/Visualizememe/cloudflare-router/blob/65cfc56/src/RouterResponse.ts#L6)

___

### BuiltResponse

Ƭ **BuiltResponse**<AdditionalDataType\>: *object*

#### Type parameters:

Name |
:------ |
`AdditionalDataType` |

#### Type declaration:

Name | Type |
:------ | :------ |
`response` | *unknown* |
`routerRequest` | [*RouterRequest*](../classes/routerrequest.routerrequest-1.md)<AdditionalDataType\> |
`routerResponse` | [*RouterResponse*](../classes/routerresponse.routerresponse-1.md)<AdditionalDataType\> |
`tasks` | *Promise*<unknown\>[] |

Defined in: [RouterResponse.ts:17](https://github.com/Visualizememe/cloudflare-router/blob/65cfc56/src/RouterResponse.ts#L17)
