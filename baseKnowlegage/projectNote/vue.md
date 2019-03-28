####项目笔记

<p>在此记录项目中遇到的知识点</p>

######Class

```
    <div class="static"
        v-bind:class="{ active: isActive, 'text-danger': hasError }">
    </div>
```

```
    <div v-bind:class="classObject"></div>
    data: {
        classObject: {
            active: true,
            'text-danger': false
        }
    }
```

```
    <div v-bind:class="[activeClass, errorClass]"></div>
    data: {
        activeClass: 'active',
        errorClass: 'text-danger'
    }
```

```
    <div v-bind:class="[isActive ? activeClass : '', errorClass]"></div>
```

######style

```
    <div v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }"></div>
    data: {
        activeColor: 'red',
        fontSize: 30
    }
```

```
    <div v-bind:style="styleObject"></div>
    data: {
        styleObject: {
            color: 'red',
            fontSize: '13px'
        }
    }
```

######img

```
    <img class="binding-img" :src="require('../assets/images/test.png')" />
```

######background-image

```
    <div :style="{ 'background': 'url(' + require('../img/'+bgDef) + ') no-repeat center center', 'background-size': '100% 100%'}">
```

```
    <div :style="{ background: 'url(' + require('../img/'+ testBg ? testBg : bgDef) + ') no-repeat center center', backgroundSize: '100% 100%'}">
```

######ref & \$refs

<p>
ref 被用来给元素或子组件注册引用信息。引用信息将会注册在父组件的 $refs 对象上。如果在普通的 DOM 元素上使用，引用指向的就是 DOM 元素；如果用在子组件上，引用就指向组件实例：
</p>
<p>
当 v-for 用于元素或组件的时候，引用信息将是包含 DOM 节点或组件实例的数组。
</p>
<p>
关于 ref 注册时间的重要说明：因为 ref 本身是作为渲染结果被创建的，在初始渲染的时候你不能访问它们 - 它们还不存在！$refs 也不是响应式的，因此你不应该试图用它在模板中做数据绑定。
</p>

```
了解Vue中的$refs在Vue中是怎么访问到DOM元素的
<div id="app">
  <h1>{{ message }}</h1>
  <button ref="myButton" @click="clickedButton">点击偶</button>
</div>
let app = new Vue({
    el: '#app',
    data () {
        return {
            message: 'Hi!大漠'
        }
    },
    methods: {
        clickedButton: function () {
            console.log(this.$refs)
            this.$refs.myButton.innerText = this.message
        }
    }
})
```

```
了解Vue中的$refs在Vue中是怎么访问到子组件的
<div id="app">
    <navbar ref="navbar"></navbar>
    <pagefooter ref="pagefooter"></pagefooter>
</div>
new Vue({
    el:'#app',
    mounted:function () {
        //ready,
        //这里怎么直接访问navbar的navs和pagefooter的footer值呢，
        console.log(this.$refs.navbar.navs);
        console.log(this.$refs.pagefooter.footer);
    }
})
```

######Object.assign()

<p>Object.assign()注意浅拷贝问题</p>
