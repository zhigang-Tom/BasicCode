####Set数据结构
#####1.Set定义与生成
<p>
    ES6 提供了新的数据结构 Set。它类似于数组，但是成员的值都是唯一的，没有重复的值。
</p>

```
Set本身是一个构造函数，用来生成 Set 数据结构。
const s = new Set();

[2, 3, 5, 4, 5, 2, 2].forEach(x => s.add(x));

for (let i of s) {
  console.log(i);
}
// 2 3 5 4
```
<p>
    Set函数可以接受一个数组（或者具有 iterable 接口的其他数据结构）作为参数，用来初始化。
</p>

```
// 例一
const set = new Set([1, 2, 3, 4, 4]);
[...set]
// [1, 2, 3, 4]

// 例二
const items = new Set([1, 2, 3, 4, 5, 5, 5, 5]);
items.size // 5

// 例三
const set = new Set(document.querySelectorAll('div'));
set.size // 56

// 类似于
const set = new Set();
document
 .querySelectorAll('div')
 .forEach(div => set.add(div));
set.size // 56
```
#####2.Set实例的属性与方法
<ul>
    <li>add(value)：添加某个值，返回 Set 结构本身。</li>
    <li>delete(value)：删除某个值，返回一个布尔值，表示删除是否成功。</li>
    <li>has(value)：返回一个布尔值，表示该值是否为Set的成员。</li>
    <li>clear()：清除所有成员，没有返回值。</li>
</ul>

```
s.add(1).add(2).add(2);
// 注意2被加入了两次
s.size // 2
s.has(1) // true
s.has(2) // true
s.has(3) // false
s.delete(2);
s.has(2) // false
```

#####3.Set的遍历
<p>keys()，values()，entries()</p>

```
let set = new Set(['red', 'green', 'blue']);

for (let item of set.keys()) {
  console.log(item);
}
// red
// green
// blue

for (let item of set.values()) {
  console.log(item);
}
// red
// green
// blue

for (let item of set.entries()) {
  console.log(item);
}
// ["red", "red"]
// ["green", "green"]
// ["blue", "blue"]
```
<p>forEach()</p>

```
let set = new Set([1, 4, 9]);
set.forEach((value, key) => console.log(key + ' : ' + value))
// 1 : 1
// 4 : 4
// 9 : 9
```
<p></p>

#####4.Set的应用
<p>
    Set的应用：去除数组重复成员
</p>

```
// 去除数组的重复成员
[...new Set(array)]

let arr = [3, 5, 2, 2, 5, 5];
let unique = [...new Set(arr)];
// // [3, 5, 2]
```

