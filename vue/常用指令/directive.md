####此文档主要用来记录常用指令的特殊之处

#####1.v-bind
<p>
v-bind指令在布尔特性的情况下，布尔特性的存在即暗示为 true，
</p>

```
<button v-bind:disabled="isButtonDisabled">clickTxt</button>
```
<p>
上面例子中disabled即为“布尔特性”，如果 isButtonDisabled 的值是 null、undefined 或 false，则 disabled 特性甚至不会被包含在渲染出来的 <button> 元素中。
</p>

#####2.v-if && v-show
<p>
v-if 是“真正”的条件渲染，因为它会确保在切换过程中条件块内的事件监听器和子组件适当地被销毁和重建。
<br/>
v-if 也是惰性的：如果在初始渲染时条件为假，则什么也不做——直到条件第一次变为真时，才会开始渲染条件块。
</p>
<p>
相比之下，v-show 就简单得多——不管初始条件是什么，元素总是会被渲染，并且只是简单地基于 CSS 进行切换。
<br/>
一般来说，v-if 有更高的切换开销，而 v-show 有更高的初始渲染开销。因此，如果需要非常频繁地切换，则使用 v-show 较好；如果在运行时条件很少改变，则使用 v-if 较好。
</p>

#####3.用 key 管理可复用的元素
<p>
Vue 会尽可能高效地渲染元素，通常会复用已有元素而不是从头开始渲染。这么做除了使 Vue 变得非常快之外，还有其它一些好处。例如，如果你允许用户在不同的登录方式之间切换：
</p>

```
<template v-if="loginType === 'username'">
  <label>Username</label>
  <input placeholder="Enter your username">
</template>
<template v-else>
  <label>Email</label>
  <input placeholder="Enter your email address">
</template>
```
<p>
那么在上面的代码中切换 loginType 将不会清除用户已经输入的内容。因为两个模板使用了相同的元素，[input] 不会被替换掉仅仅是替换了它的 placeholder。
</p>
<p>
这样也不总是符合实际需求，所以 Vue 为你提供了一种方式来表达“这两个元素是完全独立的，不要复用它们”。只需添加一个具有唯一值的 key 属性即可：
</p>

```
<template v-if="loginType === 'username'">
  <label>Username</label>
  <input placeholder="Enter your username" key="username-input">
</template>
<template v-else>
  <label>Email</label>
  <input placeholder="Enter your email address" key="email-input">
</template>
```
<p>注意，[label] 元素仍然会被高效地复用，因为它们没有添加 key 属性。</p>

#####4.v-if && v-for
<p>永远不要把 v-if 和 v-for 同时用在同一个元素上。</p>
<ul>
    <p>一般我们在两种常见的情况下会倾向于这样做：</p>
    <li>
        为了过滤一个列表中的项目 (比如 v-for="user in users" v-if="user.isActive")。在这种情形下，请将 users 替换为一个计算属性 (比如 activeUsers)，让其返回过滤后的列表。
    </li>
    <li>
    为了避免渲染本应该被隐藏的列表 (比如 v-for="user in users" v-if="shouldShowUsers")。这种情形下，请将 v-if 移动至容器元素上 (比如 ul, ol)。
    </li>
</ul>

```
// 示例一：
<ul>
  <li
    v-for="user in activeUsers"
    :key="user.id"
  >
    {{ user.name }}
  </li>
</ul>
computed: {
  activeUsers: function () {
    return this.users.filter(function (user) {
      return user.isActive
    })
  }
}
```
```
// 示例二：
<ul>
  <li
    v-for="user in activeUsers"
    :key="user.id"
  >
    {{ user.name }}
  </li>
</ul>
<ul v-if="shouldShowUsers">
  <li
    v-for="user in users"
    :key="user.id"
  >
    {{ user.name }}
  </li>
</ul>
```
#####5.v-for
<p>v-for主要用于遍历数组但是也可以遍历对象例子如下:</p>

```
<div v-for="(value, key, index) in object">
  {{ index }}. {{ key }}: {{ value }}
</div>

new Vue({
  el: '#v-for-object',
  data: {
    object: {
      firstName: 'John',
      lastName: 'Doe',
      age: 30
    }
  }
})
//  0. firstName: John
//  1. lastName: Doe
//  2. age: 30
```
<p>
参数:index:索引，key：键名，value：键值
</p>

```
<ul id="example-2">
  <li v-for="(item, index) in items">
    {{ parentMessage }} - {{ index }} - {{ item.message }}
  </li>
</ul>

var example2 = new Vue({
  el: '#example-2',
  data: {
    parentMessage: 'Parent',
    items: [
      { message: 'Foo' },
      { message: 'Bar' }
    ]
  }
})
```
#####6.v-on
<p>
有时也需要在内联语句处理器中访问原始的 DOM 事件。可以用特殊变量 $event 把它传入方法：
</p>

```
<button v-on:click="warn('Form cannot be submitted yet.', $event)">
  Submit
</button>
methods: {
  warn: function (message, event) {
    // 现在我们可以访问原生事件对象
    if (event) event.preventDefault()
    alert(message)
  }
}
```
######事件修饰符

```
<!-- 阻止单击事件继续传播 -->
<a v-on:click.stop="doThis"></a>

<!-- 提交事件不再重载页面 -->
<form v-on:submit.prevent="onSubmit"></form>

<!-- 修饰符可以串联 -->
<a v-on:click.stop.prevent="doThat"></a>


<!-- 只有修饰符 -->
<form v-on:submit.prevent></form>
<!-- 点击事件将只会触发一次 -->
<a v-on:click.once="doThis"></a>
<!-- 添加事件监听器时使用事件捕获模式 -->
<!-- 即元素自身触发的事件先在此处理，然后才交由内部元素进行处理 -->
<div v-on:click.capture="doThis">...</div>


<!-- 只当在 event.target 是当前元素自身时触发处理函数 -->
<!-- 即事件不是从内部元素触发的 -->
<div v-on:click.self="doThat">...</div>
```

######按键修饰符

```
<!-- 同上 -->
<input v-on:keyup.enter="submit">
```

```
.enter
.tab
.delete (捕获“删除”和“退格”键)
.esc
.space
.up
.down
.left
.right
```
#####7.v-model[修饰符]
<p>
.lazy: 在默认情况下，v-model 在每次 input 事件触发后将输入框的值与数据进行同步你可以添加 lazy 修饰符，从而转变为使用 change 事件进行同步：
</p>

```
<!-- 在“change”时而非“input”时更新 -->
<input v-model.lazy="msg" >
```
<p>
.number 如果想自动将用户的输入值转为数值类型，可以给 v-model 添加 number 修饰符：
</p>

```
<input v-model.number="age" type="number">
```
<p>
.trim 如果要自动过滤用户输入的首尾空白字符，可以给 v-model 添加 trim 修饰符：
</p>

```
<input v-model.trim="msg">
```
<p></p>