####字符串常用方法

#####1.charAt
<p>
stringObject.charAt(index)返回指定位置字符
</p>

```
var str = 'hello world';
var res = str.charAt(1);
console.log(res);
// e
```

#####2.concat()
<p>
stringObject.concat(stringX,stringX,...,stringX)用于连接两个或多个字符串生成
一个新的字符串，原来的字符串不变
</p>

```
var str = 'hello world';
var res = str.concat(' I am ','Tom');
console.log(res);
// hello world I am Tom
```

#####3.indexOf()
<p>
stringObject.indexOf(searchvalue,fromindex)方法可返回某个指定的字符串值在字符
串中首次出现的位置。若未检索到则返回-1此函数有两个参数，第一个是需要检索的字符串
【必填】，第二个参数指定从何处开始检索【可选】若无第二个参数则从字符串的开头开始检
索。
</p>

```
var str = 'hello world';
var res = str.indexOf('o');
console.log(res);
// 4
```

#####4.lastIndexOf() 
<p>
stringObject.lastIndexOf(searchvalue,fromindex) 该方法将从尾到头检索字符串stringObject
看它是否含有子串 searchvalue。开始检索的位置在字符串的 fromindex 处或字符串的结尾（没有指定 fromindex 时）。如果找到一个 searchvalue，则返回 searchvalue 的第一个字符在 stringObject
中的位置。stringObject 中的字符位置是从 0 开始的。位置从后向前搜索。
</p>

```
var str = 'hello world';
var res = str.lastIndexOf('o');
console.log(res);
// 7


var str = 'hello world';
var res = str.lastIndexOf('o',6);
console.log(res);
// 4
```

#####5.substring()
<p>
stringObject.substring(start[, end]) 用于截取字符串片段，返回从start到end【不包括】之间的字符串，start、end均为非负整数，若结束参数省略，则表示从start位置开始一直截取到最后
</p>

```
let str = 'hello world';
let res = str.substring(1,7);
console.log(res);
// ello w

```
#####6.slice()
<p>
stringObject.slice(start[, end]) 用于截取字符串片段，返回从start到end【不包括】之间的字
符串，可以传负数，若结束参数省略，则表示从start位置开始一直截取到最后
</p>

```
let str = 'hello world';
let res = str.slice(-3,-1);
console.log(res);
// rl

```

#####7.substr()
<p>
stringObject.substr(start, [length]) 用于截取字符串片段，返回一个从指定位置开始的指定长度
的子字符串。若省略length参数则返回从开始位置到最后的子字符串。
</p>

```
let str = 'hello world';
let res = str.substr(-5,5);
console.log(res);
// world

```

#####8.split()
<p>
stringObject.split([separator][, limit]) 根据指定的分隔符将字符串进行分隔并生成一个数组，返
回这个数组，limit限制返回数组的元素个数
</p>

```
let str = 'h-e-l-l-o-w-o-r-l-d';
let res = str.split('-',3);
console.log(res);
// ["h", "e", "l"]

```

#####9.trim()
<p>
stringObject.trim()去除str开头结尾的空白字符返回str的一个副本，不影响字符串本身的值
</p>
```
let str = '  h-e-l-l-o-w-o-r-l-d  ';
let res = str.trim();
console.log(str.length);
console.log(res.length);
// 23
// 19
```

#####10.toLowerCase()
<p>
stringObject.toLowerCase()将字符串转换为小写，返回一个字符串副本，不改变原字符串的值
</p>

```
let str = 'I LOVE YOU!';
let res = str.toLowerCase();
console.log(res);
// i love you!

```

#####11.toUpperCase()
<p>
stringObject.toUpperCase()将字符串转换为大写，返回一个字符串副本，不改变原字符串的值
</p>

```
let str = 'i love you!';
let res = str.toUpperCase();
console.log(res);
// I LOVE YOU!

```

#####12.match()
<p>
stringObject.match()返回一个包含匹配结果的数组，如果没有匹配项则返回null，如果参数传入
的是一个非正则表达式对象，则会使用 new RegExp(obj) 隐式地将其转换为正则表达式对象，不改
变原字符串的值
</p>

```
let str = 'Hello world I love you!';
let res = str.match(/o/gi);
console.log(res);
// ["o", "o", "o", "o"]

```

#####13.replace()
<p>
stringObject.replace(regexp/substr,replacement)regexp/substr 必需。规定子字符串或要替换的模式的 RegExp 对象，请注意，如果该值是一个字符串，则将它作为要检索的直接量文本模式，而不是首先被转
换为 RegExp 对象。replacement 必需。一个字符串值。规定了替换文本或生成替换文本的函数。  
</p>

```
let str = 'Hello world I love you!';
let res = str.replace('Hello','Hi');
console.log(res);
// Hi world I love you!

```

#####14.search()
<p>
stringObject.search(regexp)查找 str 与一个正则表达式是否匹配。如果匹配成功，则返回正则表达式在字符串中首次匹配项的索引；否则，返回 -1。如果参数传入的是一个非正则表达式对象，则会使用 new RegExp(obj) 隐式地将其转换为正则表达式对象
</p>

```
let str = 'Hello world I love you!';
let res = str.search(/o/);
console.log(res);
// 4

```

####ES6字符串新方法

#####15.模板字符串
<p>
模板字符串能够减少双引号和加号的使用频率，取而代之的用反引号和${}，变量放在${}中显示,${}中可以放任何js的变量
</p>

```
let name = '张三';
console.log(`我的名字是${name}`);
// 我的名字是张三
```

#####16.repeat()
<p>
stringObject.repeat(N)函数将目标字符串重复N次返回新的字符串，目标字符串不受影响
</p>

```
let str = 'love';
let res = str.repeat(3) 
console.log(res);
// lovelovelove
```

#####17.includes()
<p>
stringObject.includes(str,[index])判断字符串中是否有指定的字符串，如果有则返回true
如果没有则返回false，第二个参数选填表示开始搜素的位置【从0开始】,如果省略第二个参数将
从头开始检索字符串
</p>

```
let str = 'love';
let res = str.includes('l',2) 
console.log(res);
// false
```

#####18.startsWith(),endsWith()
<p>
stringObject.startsWith()判断子字符串是否出现在目标字符串的开头，如果是则返回true，如果
不是则返回false第二个参数选填表示开始搜索的位置
</p>

<p>
stringObject.endsWith()判断子字符串是否出现在目标字符串的尾部，如果是则返回true，如果不是
则返回false，第二个参数表示对前N个字符.
</p>
```
let str = 'world';
let resStart = str.startsWith('H',1);
let resEnd = str.endsWith('d',4);
console.log(resEnd);
console.log(resEnd);
// false
// false
```