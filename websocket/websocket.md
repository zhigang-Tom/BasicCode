####Websocket
#####1.Websocket 是什么

<p>
websocket是一种网络通信协议，RFC6455 定义了它的通信标准。
</p>
<p>
WebSocket 是 HTML5 开始提供的一种在单个 TCP 连接上进行全双工通讯的协议。
</p>

#####2.为什么需要 Websocket

<p>
了解计算机网络协议的人，应该都知道：Http协议是一种无状态的，无连接的，单向的应用层协议。它采用了请求/响应模型。通信请求只能由客户端发起，服务端对请求做出应答处理。这种通信模型有一个弊端：HTTP协议无法实现服务器主动向客户端发起消息。
</p>
<p>
这种单向请求的特点注定了如果服务器有连续的状态变化，客户端要获知就非常麻烦，大多数web应用程序将通过频繁的异步Javascript和XML(ajax)请求实现长轮询。轮询的效率低，非常浪费资源(因为必须不停连接，或者 HTTP 连接始终打开)
</p>
<p>
因此，工程师们一直在思考，有没有更好的方法。WebSocket 就是这样发明的。WebSocket 连接允许客户端和服务器之间进行全双工通信，以便任一方都可以通过建立的连接将数据推送到另一端。WebSocket 只需要建立一次连接，就可以一直保持连接状态。这相比于轮询方式的不停建立连接显然效率要大大提高。
</p>

#####3.WebSocket 如何工作？

<p>
Web浏览器和服务器都必须实现 WebSockets 协议来建立和维护连接。由于 WebSockets 连接长期存在，与典型的HTTP连接不同，对服务器有重要的影响。【Websocket是基于HTTP协议的，或者说借用了HTTP的协议来完成一部分握手。】
</p>

#####4.WebSocket 客户端

<p>
在客户端，没有必要为 WebSocket 使用 JavaScript 库。支持 Html5 的浏览器将通过 WebSocket 对象公开所有必需的客户端功能（主要指支持 Html5 的浏览器）。
</p>

#####5.websocket 属性

```
let Socket = new WebSocket(url, [protocol] )
// url, 指定连接的 URL。第二个参数 protocol 是可选的，指定了可接受的子协议。
```

<p>
Socket.readyState:只读属性 readyState 表示连接状态，可以是以下值：0 - 表示连接尚未建立。1 - 表示连接已建立，可以进行通信。2 - 表示连接正在进行关闭。3 - 表示连接已经关闭或者连接不能打开。
</p>
<p>
Socket.bufferedAmount:只读属性 bufferedAmount 已被 send() 放入正在队列中等待传输，但是还没有发出的 UTF-8 文本字节数。
</p>

#####6.websocket 事件

<p>
    Socket.onopen：连接建立时触发
</p>
<p>
    Socket.onmessage：客户端接收服务端数据时触发
</p>
<p>
    Socket.onerror：通信发生错误时触发
</p>
<p>
    Socket.onclose：连接关闭时触发
</p>

#####7.WebSocket 方法

<p>
    Socket.send()：向服务端发送请求数据
</p>
<p>
    Socket.close()：关闭连接
</p>
<p>
以下是一个在客户端上运用websocket的例子
</p>

```
let webSocket
// 利用webSocket获取实时数据
export function wsRealData(url, params, _this) {
  if (!url) {
    return
  }
  webSocket = new WebSocket(url)
  let res
  webSocket.onerror = (event) => {
    console.log(`connection error message:${event.data}`)
  }
  webSocket.onopen = () => {
    console.log('connection established')
    webSocket.send(params)
  }
  webSocket.onmessage = (event) => {
    res = JSON.parse(event.data)
    if (_this.wsdeviceType === AP) {
      res['onlineStatus'] = true
      _this.$action('GetWsData', res)
    }
  }
  webSocket.onclose = (event) => {
    // readyState === 3 - 表示连接已经关闭或者连接不能打开。
    console.log(`websocket is closed${webSocket.readyState}`)
  }
}

export function closeWS() {
  webSocket.close()
}
```

<p></p>
<p></p>
<p></p>
<p></p>
