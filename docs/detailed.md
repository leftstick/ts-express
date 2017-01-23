## How to write view? ##

Take [home](https://github.com/leftstick/ts-express/blob/master/application/views/home) and [about](https://github.com/leftstick/ts-express/blob/master/application/views/about) as reference:

1. a [View](https://github.com/leftstick/ts-express/blob/9620762185e8330c7f52f451be52d04f26ed42e1/application/fw/model/route.ts#L8-L10) described literal shall be returned as [home/index.ts](https://github.com/leftstick/ts-express/blob/master/application/views/home/index.ts)
2. multiple [Route](https://github.com/leftstick/ts-express/blob/9620762185e8330c7f52f451be52d04f26ed42e1/application/fw/model/route.ts#L16-L19)s can be registered. Usually `Routes` are distinguished by [METHOD](https://github.com/leftstick/ts-express/blob/9620762185e8330c7f52f451be52d04f26ed42e1/application/fw/helper/server.ts#L3-L11)
3. `controller` can be `async` if you preferred that syntax, see [home/controller](https://github.com/leftstick/ts-express/blob/master/application/views/home/index.ts#L13)