####模块

#####1.模块输出与引入
```
// 第一组
export default function crc32() { // 输出
  // ...
}

import crc32 from 'crc32'; // 输入

// 第二组
export function crc32() { // 输出
  // ...
};

import {crc32} from 'crc32'; // 输入
```
<p>
上面代码的两组写法，第一组是使用export default时，对应的import语句不需要使用大括号；第二组是不使用export default时，对应的import语句需要使用大括号。
</p>

#####2.模块的加载实现
######浏览器异步加载脚本
<p>
如果脚本体积很大，下载和执行的时间就会很长，因此造成浏览器堵塞，用户会感觉到浏览器“卡死”了，没有任何响应。这显然是很不好的体验，所以浏览器允许脚本异步加载，下面就是两种异步加载的语法。
</p>

```
<script src="path/to/myModule.js" defer></script>
<script src="path/to/myModule.js" async></script>
```
<p>
defer与async的区别是：defer要等到整个页面在内存中正常渲染结束（DOM 结构完全生成，以及其他脚本执行完成），才会执行；async一旦下载完，渲染引擎就会中断渲染，执行这个脚本以后，再继续渲染。一句话，defer是“渲染完再执行”，async是“下载完就执行”。另外，如果有多个defer脚本，会按照它们在页面出现的顺序加载，而多个async脚本是不能保证加载顺序的。
</p>

######浏览器加载ES6模块

<p>
浏览器加载 ES6 模块，也使用script标签，但是要加入type="module"属性
</p>

```
<script type="module" src="./foo.js"></script>
```
<p>
浏览器对于带有type="module"的script，都是异步加载，不会造成堵塞浏览器，即等到整个页面渲染完，再执行模块脚本，等同于打开了script标签的defer属性
</p>

```
<script type="module" src="./foo.js"></script>
<!-- 等同于 -->
<script type="module" src="./foo.js" defer></script>
```
<p>
如果网页有多个 script type="module"，它们会按照在页面出现的顺序依次执行。
</p>
<p>
script标签的async属性也可以打开，这时只要加载完成，渲染引擎就会中断渲染立即执行。执行完成后，再恢复渲染。
</p>

```
<script type="module" src="./foo.js" async></script>
```
<p>
一旦使用了async属性，script type="module" 就不会按照在页面出现的顺序执行，而是只要该模块加载完成，就执行该模块。
</p>
<p>
ES6 模块也允许内嵌在网页中，语法行为与加载外部脚本完全一致。
</p>

```
<script type="module">
  import utils from "./utils.js";
</script>
```
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>