#####1.什么是webpack
<p>
webpack是一个模块打包工具。什么是模块？？模块就是程序中离散的功能块。
</p>
<p>
安装webpack-cli这个包是为了能够在命令行中执行webpack这个命令
</p>

#####2.Loader
<p>
webpack是js打包工具如果需要打包非js文件需要安装相应的loader，这样webpack才可以打包其他类型的文件
</p>
<p>
loader的执行顺序：从下到上，从右到左
</p>

#####3.Plugin
<p>
plugin 可以在webpack运行到某个时刻的时候，帮你做一些事情。比如htmlWebopackPlugin插件会在webpack打包完成后帮助你创建一个html文件并把打包生成的js文件自动引入到这个html文件中 
</p>
<p>
htmlWebpackPlugin插件会在打包结束后，自动生成一个html文件，并把打包生成的js文件自动引入到这个html文件中 
</p>
<p>clean-webpack-plugin帮助我们在打包之前清空dist目录</p>

#####4.source-map
<p>
source-map是一种映射关系，映射源码与打包后的代码之间的关系，主要用于查找错误在源代码中得位置
</p>
<p>
在mode:development配置:devtool:'cheap-module-eval-source-map'<br>
在mode:production配置devtool:'cheap-module-source-map'
</p>

#####5. webpack-dev-server
<p>
配置 webpack-dev-server将启动一个服务器，前端代码将在此服务器上运行，当修改前端代码后，webpack-dev-server会重新刷新浏览器。
</p>
<p>
我们之所以能够使用'代理'来解决跨域问题是因为webpack-dev-server能够转发我们的请求
</p>

#####6. hot-module-replace
<p>
与webpack-dev-server配合使用实现局部刷新，只刷新修改的部分而不是刷新整个页面
</p>

#####7. Tree-shaking
<p>
Tree-shaking中文翻译为‘摇树’，开启这个功能后在production 模式下webpack打包时只会引入用到的模块，未用到的模块不会被打包，在development模式下开启此功能只会在打包生成的文件中添加类似如下的注释
<br>
/*! exports provided: add, minus */
/*! exports used: add */
</p>

#####8. code splitting
<p>
代码分隔是一个单独的概念，代码分隔能够提高性能。webpack也支持代码分隔
</p>

#####9. Lazy Loading(懒加载)
<p>
懒加载就是异步加载模块即：用到某个模块时才去加载某个模块，可以用async await import来实现
</p>

#####10. chunks
<p>
打包完成后dist文件夹下的每一个js文件就是一个chunk
</p>

#####11. 前端代码优化
<p>
前端代码优化的重点在于：代码利用率，可以将页面上的一些逻辑运用懒加载即用到的时候再加载，如果担心用到的时候再加载会影响用户体验可以用webpack提供的prefetch功能。一旦开启prefetch功能页面会在页面上主要的js文件加载完成后直接加载需要懒加载的内容。下面举个例子
</p>
<p>
假设现在的网站是这样子的：点击首页上面的登录按钮跳出登录模态框进行登陆。假设首页需要加载a.js与b.js
还有登录的login.js，那么我们可以先加载a.js与b.js将login.js封装成一个模块点击登录按钮后再加载，这是如果对login.js开启prefetch那么首页会在加载完a.js与b.js后等到页面带宽闲置时加载login.js而不是点击再加载
</p>
<p>
谷歌浏览器调试工具ctrl + shift + p 出来输入框，在输入框中输入cover查找Show Coverage。Show Coverage可以查看文件的利用率
</p>