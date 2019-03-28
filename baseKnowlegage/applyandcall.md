####apply(), call()

<p>
obj.call(thisObj, arg1, arg2, ...);
</p>

<p>
obj.apply(thisObj, [arg1, arg2, ...]);
</p>

<p>
apply,call两者作用一致，都是把obj(即this)绑定到thisObj，这时候thisObj具备了obj的属性和方法。或者说thisObj『继承』了obj的属性和方法。绑定后会立即执行函数。唯一区别是apply接受的是数组参数，call接受的是连续参数。
</p>

<p>
call 和 apply 都是为了改变某个函数运行时的上下文（context）而存在的，换句话说，就是为了改变函数体内部 this 的指向。
</p>

```
function add(j,k) {
    return j + k;
}
function sub (j,k) {
    return j - k;
}

我们在控制台运行：
add(5,3) //8
sub.call(add, 5,3)//2
sub.apply(add, [5,3])//2
add.call(sub, 5,3)//8
add.apply(sub, [5,3])//8
```

```
调用原生对象的方法
var a = {0:1, 1:"yjc", length: 2};

a.slice(); //TypeError: a.slice is not a function

Array.prototype.slice.call(a);//[1, "yjc"]
```

```
实现继承
let Parent = function () {
    this.name = 'tom',
    this.age = 22
}
let Child = {}
console.log(Child);//{}空对象
Parent.call(Child)
console.log(Child)//{name: 'tom', age: 22}
```
