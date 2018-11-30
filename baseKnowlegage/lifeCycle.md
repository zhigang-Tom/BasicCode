####vue生命周期
<p>
Vue所有的生命周期钩子自动绑定在this上下文到实例中，因此你可以访问数据，对属性和方法进行运算。这意味着你不能使用箭头函数来定义一个生命周期方法。这是因为箭头函数绑定了父上下文，因此this与你期待的Vue实例不同。
</p>

#####1. beforeCreate
<p>
此阶段为实例初始化之后，此时的实例中的data和el还是undefined,不可用的。
</p>

```
<div id="app">{{name}}</div>
  <script>
    let app = new Vue({
      el:"#app",
        data:{
         name:"前端"
      },
      beforeCreate(){
         console.log('即将创建');
         console.log(this.$data);
         console.log(this.$el);
      }
    });
 </script>

 result:
 即将创建
 undefined
 undefined
```

#####2. created
<p>
beforeCreate之后紧接着的钩子就是创建完毕created,我们能读取到数据data的值，但是DOM还没生成，所以属性el还不存在
</p>
```
 created(){
    console.log('创建完毕');
    console.log(this.$data);
    console.log(this.$el);
 }
 result:
 创建完毕
 Object
 undefined
```

#####3. beforeMount
<p>
此时的$el不再是undefined，而是成功关联到我们指定的dom节点<div id=”app”></div>，但此时{{ name }}还没有被成功地渲染成我们data中的数据
</p>
```
 beforeMount(){
    console.log('即将挂载');
    console.log(this.$el);
 }
 result:
 即将挂载
<div id="app">{{name}}</div>
```

#####4. mounted
<p>
mounted也就是挂载完毕阶段，到了这个阶段，数据就会被成功渲染出来,此时打印属性el，我们看到{{ name }}已经成功渲染成我们data.name的值：“前端”。
</p>
```
 mounted(){
    console.log('挂载完毕');
    console.log(this.$el);
 }
 result:
 即将挂载
<div id="app">前端</div>
```

#####5. beforeUpdate
<p>
我们知道，当修改vue实例的data时，vue就会自动帮我们更新渲染视图，在这个过程中，vue提供了beforeUpdate的钩子给我们，在检测到我们要修改数据的时候，更新渲染视图之前就会触发钩子beforeUpdate。
</p>

#####6. updated
<p>
此阶段为更新渲染视图之后，此时再读取视图上的内容，已经是最新的内容。
</p>

#####7. beforeDestroy
<p>
调用实例的destroy( )方法可以销毁当前的组件，在销毁前，会触发beforeDestroy钩子。
</p>

#####8. destroyed
<p>
成功销毁之后，会触发destroyed钩子，此时该实例与其他实例的关联已经被清除，它与视图之间也被解绑。
</p>