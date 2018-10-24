####什么是webServer？？
<p>
首先我们来了解什么是服务器（server）,一般来说，server 有两重意思,有时候 server 表示硬件，也就是一台机器。它还有另一个名字：「主机」。更多时候，server 表示软件程序，这种程序主要用来对外提供某些服务，比如邮件服务、FTP 服务、数据库服务、网页服务等。作为开发者，我们说 server 的时候，一般指的后者，也就是一个 24 小时运行的软件程序。一台主机上面可以运行多个这样的程序。
</p>

<p>
什么是 Web Server？顾名思义，Web Server 就是提供 Web 服务的 Server。比如我们访问 
http://baidu.com，其实就是在使用百度的 Server 提供的服务。一般来说， Web Server 对外提供的是 HTTP 服务（也可以是其他服务），这就是为什么我们的网址都以「http://」开头。
</p>

<p>
如何提供 HTTP 服务？下面是有 Node.js 写的一个最简单的 HTTP server
// 文件名 index.js
// 使用 node index.js 可运行本程序
</p>

```
var http = require('http')
var server = http.createServer( function (request, response){
    response.end('这是页面内容，你请求的路径是：' + request.url)
})
server.listen(8080, function(){
    console.log("正在监听 %s 端口", 8080);
});

```
<p>
这段程序监听了当前机器的 8080 端口。一旦外部访问当前机器的 8080 端口，这段程序就会返回一段文字。
这就是一个最简单的 HTTP server。
</p>

<p>
web服务器分类：
提供 HTTP 服务的 server 分为两类。
1. 静态文件服务器
这种服务器简单地根据访问路径，返回对应的文件。
比如用户访问 http:// 123.123.123.123:8080/a/b/c/d.html，那么这种服务器就会在网站根目录找到 a/b/c/d.html 文件，原样返回给用户。

2. 动态内容服务器
这种服务器返回的内容一般不是文件，而是动态生成的字符串（比如从数据库中获取的字符串）。
比如用户访问 http://weibo.com/home，那么这种 http://weibo.com 的服务器则会返回当前用户最新的微博消息。显然每个用户得到的内容是不一样的。
以上，就是 Web 服务器的简单描述。
</p>

<p>
请求一个网页的过程：在浏览器中输入网址或者IP，浏览器会发送Http请求到资源服务器【例如我们平时将html、css、images等资源目录放在apache下，apache就是我们的资源服务器】，资源服务器接受请求响应，返回相应的资源到浏览器，浏览器渲染资源。页面渲染成功后就可以通过页面与后台服务器交互,从而获取数据库数据【Cloud项目在本地虚拟机运行的原理：通过npm  命令会创建并开启一个前端服务器，所以在浏览器中输入localhost:9528能够访问到页面】
</p>