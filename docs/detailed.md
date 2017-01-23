## How to write view? ##

Take [home](https://github.com/leftstick/ts-express/blob/master/application/views/home) and [about](https://github.com/leftstick/ts-express/blob/master/application/views/about) as reference:

1. a [View](https://github.com/leftstick/ts-express/blob/master/application/fw/model/route.ts#L8-L10) described literal shall be returned as [home/index.ts](https://github.com/leftstick/ts-express/blob/master/application/views/home/index.ts)
2. multiple [Route](https://github.com/leftstick/ts-express/blob/master/application/fw/model/route.ts#L16-L19)s can be registered. Usually `Routes` are distinguished by [METHOD](https://github.com/leftstick/ts-express/blob/master/application/fw/helper/server.ts#L3-L11)
3. `controller` can be `async` if you preferred that syntax, see [home/controller](https://github.com/leftstick/ts-express/blob/master/application/views/home/index.ts#L15-L18)

## How to write api? ##

Take [user](https://github.com/leftstick/ts-express/blob/master/application/apis/user)  as reference:

1. an [Api](https://github.com/leftstick/ts-express/blob/master/application/fw/model/route.ts#L12-L14) described literal shall be returned as [user/index.ts](https://github.com/leftstick/ts-express/blob/master/application/apis/user/index.ts)
2. multiple [Route](https://github.com/leftstick/ts-express/blob/master/application/fw/model/route.ts#L16-L19)s can be registered. Usually `Routes` are distinguished by [METHOD](https://github.com/leftstick/ts-express/blob/master/application/fw/helper/server.ts#L3-L11)
3. `controller` can be `async` or not. check [user/controller](https://github.com/leftstick/ts-express/blob/master/application/apis/user/index.ts#L11-L21) for non-async example