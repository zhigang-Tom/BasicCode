#####1.for...of 与 for ....in
<p>
对于普通的对象，for...of结构不能直接使用，会报错，必须部署了 Iterator 接口后才能使用。但是，这样情况下，for...in循环依然可以用来遍历键名。
</p>
<p>
for...of循环可以使用的范围包括数组、Set 和 Map 结构、某些类似数组的对象（比如arguments对象、DOM NodeList 对象）、后文的 Generator 对象，以及字符串。for...of循环内部调用的是数据结构的Symbol.iterator方法。
</p>
<p>
数组的键名是数字，但是for...in循环是以字符串作为键名“0”、“1”、“2”等等。
for...in循环不仅遍历数字键名，还会遍历手动添加的其他键，甚至包括原型链上的键。
</p>

```
let es6 = {
  edition: 6,
  committee: "TC39",
  standard: "ECMA-262"
};

for (let e in es6) {
  console.log(e);
}
// edition
// committee
// standard

for (let e of es6) {
  console.log(e);
}
// TypeError: es6[Symbol.iterator] is not a function
```
#####2.forEach
<p>
break命令或return命令都不能中断循环
</p>

#####JS的数据结构
<p>
JavaScript 原有的表示“集合”的数据结构，主要是数组（Array）和对象（Object），ES6 又添加了Map和Set。这样就有了四种数据集合
</p>
