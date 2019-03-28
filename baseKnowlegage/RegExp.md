####js 中的正则表达式入门
#####1.正则表达式定义

<p>
正则表达式(regular expression)描述了一种字符串匹配的模式，可以用来检查一个字符串是否含有某种子串、将匹配的子串做替换或者从某个字符串中取出符合某个条件的子串等。
</p>

#####2.正则表达式的创建方式

<ul>
    <li>字面量创建方式</li>
    <li>实例创建方式</li>
</ul>
```
let reg = /pattern/flags
// 字面量创建方式
let reg = new RegExp(pattern,flags);
//实例创建方式
pattern:正则表达式  
flags:标识(修饰符)
标识主要包括：
i 忽略大小写匹配
m 多行匹配，即在到达一行文本末尾时还会继续寻常下一行中是否与正则匹配的项
g 全局匹配 模式应用于所有字符串，而非在找到第一个匹配项时停止
```

#####3.元字符 ######代表特殊含义的元字符

<ul>
    <li>\d : 0-9之间的任意一个数字  \d只占一个位置</li>
    <li>\w : 数字，字母 ，下划线 0-9 a-z A-Z _</li>
    <li>\s : 空格或者空白等</li>
    <li>\D : 除了\d</li>
    <li>\W : 除了\w</li>
    <li>\S : 除了\s</li>
    <li> . : 除了\n之外的任意一个字符</li>
    <li> \ : 转义字符</li>
    <li> | : 或者</li>
    <li>() : 分组</li>
    <li>\n : 匹配换行符</li>
    <li>\b : 匹配边界 字符串的开头和结尾 空格的两边都是边界 => 不占用字符串位数</li>
    <li>^ : 限定开始位置 => 本身不占位置</li>
    <li>$ : 限定结束位置 => 本身不占位置</li>
    <li>[a-z] : 任意字母 []中的表示任意一个都可以</li>
    <li>[^a-z] : 非字母 []中^代表除了</li>
    <li>[abc] : abc三个字母中的任何一个 [^abc]除了这三个字母中的任何一个字符</li>
</ul>

######代表次数的量词元字符

<ul>
    <li>* : 0到多个</li>
    <li>+ : 1到多个</li>
    <li>? : 0次或1次 可有可无</li>
    <li>{n} : 正好n次；</li>
    <li>{n,} : n到多次</li>
    <li>{n,m} : n次到m次</li>
</ul>
<p>
量词出现在元字符后面 如\d+，限定出现在前面的元字符的次数
</p>

#####4.正则中的[]和分组
######1.[]

<p>
一般[]中的字符没有特殊含义 如+就表示+  但是像\w这样的还是有特殊含义的
</p>

```
let str1 = 'abc';
let str2 = 'dbc';
let str3 = '.bc';
let reg = /[ab.]bc/; //此时的.就表示.
reg.test(str1)  //true
reg.test(str2)  //false
reg.test(str3)  //true
```

<p>
[]中，不会出现两位数
</p>

```
[12]表示1或者2 不过[0-9]这样的表示0到9 [a-z]表示a到z
// 例如:匹配从18到65年龄段所有的人
let reg = /[18-65]/; // 这样写对么
reg.test('50')
 //Uncaught SyntaxError: Invalid regular expression: /[18-65]/: Range out of order in character class
//聪明的你想可能是8-6这里不对，于是改成[16-85]似乎可以匹配16到85的年龄段的，但实际上发现这也是不靠谱的
// 实际上我们匹配这个18-65年龄段的正则我们要拆开来匹配
// 我们拆成3部分来匹配 18-19  20-59 60-65
reg = /(18|19)|([2-5]\d)|(6[0-5])/;
```

<p>
()的提高优先级功能:凡是有|出现的时候，我们一定要注意是否有必要加上()来提高优先级；
</p>

######2.分组

<p>
分组：就是在正则表达式中用（）包起来的内容代表了一个分组
</p>
```
let reg = /(\d{2})/
reg.test('12');  //true
```
```
let reg = /I come from (hunan|hubei|zhejiang)/;
reg.test('I come from hunan');   //true
reg.test('I come from hubei');   //true
```
<ul>
    <li>分组的分类</li>
    <li>捕获型 ()</li>
    <li>非捕获型 (?:)</li>
    <li>正向前瞻型 (?=)</li>
    <li>反向前瞻型 (?!)</li>
</ul>
<p>
我们使用的比较多的都是捕获型分组，只有这种分组才会暂存匹配到的串
</p>

<p><b>捕获型分组</b></p>
<p>
捕获与引用:被正则表达式捕获(匹配)到的字符串会被暂存起来，其中，由分组捕获到的字符串会从1开始编号，
</p>
```
let reg = /(\d{4})-(\d{2})-(\d{2})/;
let dateStr = '2018-04-18';
reg.test(dateStr);  //true
RegExp.$1   //2018
RegExp.$2   //04
RegExp.$3   //18
```
```
let dateStr = '2018/04/18';
let reg = /(\d{4})\/(\d{2})\/(\d{2})/;
dateStr = dateStr.replace(reg, '$1-$2-$3')
//不过这里需要注意的是/是需要用\转义的
//"2018-04-18"
```
<p>
正则表达式里也能进行引用，这称为反向引用
</p>

```
let reg = /(\w{3}) is \1/
//解释:reg中的 \1表示分组匹配到的第一个字符串
reg.test('kid is kid') // true
reg.test('dik is dik') // true
reg.test('kid is dik') // false
reg.test('dik is kid') // false
```

<p>
需要注意的是，如果引用了越界或者不存在的编号的话，就被解析为普通的表达式
</p>

```
let reg = /(\w{3}) is \6/;
reg.test( 'kid is kid' ); // false
reg.test( 'kid is \6' );  // true
```

#####5.正则运算符的优先级

<p>
正则表达式从左到右进行计算，并遵循优先级顺序，这与算术表达式非常类似。
</p>
<p>
相同优先级的会从左到右进行运算，不同优先级的运算先高后低。
</p>
<p>
下面是常见的运算符的优先级排列<br/>
依次从最高到最低说明各种正则表达式运算符的优先级顺序：<br/>
\ : 转义符<br/>
(), (?:), (?=), []  => 圆括号和方括号<br/>
*, +, ?, {n}, {n,}, {n,m}   => 量词限定符<br/>
^, $, \任何元字符、任何字符 <br/>
|       => 替换，"或"操作<br/>
字符具有高于替换运算符的优先级，一般用 | 的时候，为了提高 | 的优先级，我们常用()来提高优先级<br/>
如： 匹配 food或者foot的时候 reg = /foo(t|d)/ 这样来匹配
</p>

#####6.和正则相关的一些方法

<p>
1.reg.test(str) 用来验证字符串是否符合正则 符合返回true 否则返回false
</p>
```
let str = 'abc';
let reg = /\w+/;
console.log(reg.test(str));  //true
```
<p>
2.reg.exec() 用来捕获符合规则的字符串
</p>

```
let str = 'abc123cba456aaa789';
let reg = /\d+/;
console.log(reg.exec(str))
//  ["123", index: 3, input: "abc123cba456aaa789"];
console.log(reg.lastIndex)
// lastIndex : 0

reg.exec捕获的数组中
// [0:"123",index:3,input:"abc123cba456aaa789"]
0:"123" 表示我们捕获到的字符串
index:3 表示捕获开始位置的索引
input 表示原有的字符串
```

<p>
当我们用exec进行捕获时，如果正则没有加'g'标识符，则exec捕获的每次都是同一个，当正则中有'g'标识符时 捕获的结果就不一样了,我们还是来看刚刚的例子
</p>

```
let str = 'abc123cba456aaa789';
let reg = /\d+/g;  //此时加了标识符g
console.log(reg.lastIndex)
// lastIndex : 0

console.log(reg.exec(str))
//  ["123", index: 3, input: "abc123cba456aaa789"]
console.log(reg.lastIndex)
// lastIndex : 6

console.log(reg.exec(str))
// ["456", index: 9, input: "abc123cba456aaa789"]
console.log(reg.lastIndex)
// lastIndex : 12

console.log(reg.exec(str))
// ["789", index: 15, input: "abc123cba456aaa789"]
console.log(reg.lastIndex)
// lastIndex : 18

console.log(reg.exec(str))
// null
console.log(reg.lastIndex)
// lastIndex : 0

每次调用exec方法时,捕获到的字符串都不相同
lastIndex ：这个属性记录的就是下一次捕获从哪个索引开始。
当未开始捕获时，这个值为0。
如果当前次捕获结果为null。那么lastIndex的值会被修改为0.下次从头开始捕获。
而且这个lastIndex属性还支持人为赋值。
```

<p>
exec的捕获还受分组()的影响
</p>

```
let str = '2017-01-05';
let reg = /-(\d+)/g
// ["-01", "01", index: 4, input: "2017-01-05"]
"-01" : 正则捕获到的内容
"01"  : 捕获到的字符串中的小分组中的内容
```

<p>
3.str.match(reg) 如果匹配成功，就返回匹配成功的数组，如果匹配不成功，就返回null
</p>
```
//match和exec的用法差不多
let str = 'abc123cba456aaa789';
let reg = /\d+/;
console.log(reg.exec(str));
//["123", index: 3, input: "abc123cba456aaa789"]
console.log(str.match(reg));
//["123", index: 3, input: "abc123cba456aaa789"]
//当我们进行全局匹配时，二者的不同就会显现出来了.
let str = 'abc123cba456aaa789';
let reg = /\d+/g;
console.log(reg.exec(str));
// ["123", index: 3, input: "abc123cba456aaa789"]
console.log(str.match(reg));
// ["123", "456", "789"]
``` 
<p>
当全局匹配时，match方法会一次性把符合匹配条件的字符串全部捕获到数组中,
如果想用exec来达到同样的效果需要执行多次exec方法。
</p>
<p>
match和exec都可以受到分组()的影响，不过match只在没有标识符g的情况下才显示小分组的内容，如果有全局g，则match会一次性全部捕获放到数组中
</p>
```
let str = 'abc';
let reg = /(a)(b)(c)/;
console.log( str.match(reg) );
// ["abc", "a", "b", "c", index: 0, input: "abc"]
console.log( reg.exec(str) );
// ["abc", "a", "b", "c", index: 0, input: "abc"]
当有全局g的情况下
let str = 'abc';
let reg = /(a)(b)(c)/g;
console.log( str.match(reg) );
// ["abc"]
console.log( reg.exec(str) );
// ["abc", "a", "b", "c", index: 0, input: "abc"]
```
<p>
4.string.replace(searchvalue,newvalue)
</p>
<p>
searchvalue 必须。规定子字符串或要替换的模式的 RegExp 对象。请注意，如果该值是一个字符串，则将它作为要检索的直接量文本模式，而不是首先被转换为 RegExp 对象。
</p>
<p>
newvalue 必须。一个字符串值。规定了替换文本或生成替换文本的函数。
</p>
<p>
返回值 String 一个新的字符串，是用 replacement 替换了 regexp 的第一次匹配或所有匹配之后得到的。
</p>

```
let str = '讨论一下正则表达式中的replace的用法';
let reg = str.replace(/正则表达式/g, '');
console.log(reg);
// 讨论一下中的replace的用法
```

<p>
第一个参数searchvalue 这个参数比较好理解，要么是字符串要么是正则表达式。上文说的“请注意，如果该值是一个字符串，则将它作为要检索的直接量文本模式，而不是首先被转换为 RegExp 对象。”，意思是'/abc/gi'不会被解析为正则对象，即使它跟正则写法一样。
</p>
<p>
第二个参数newvalue 这个参数要么是普通字符串，要么是正则替换表达式字符串，说来说去都是字符串，要么是一个函数。
</p>
<p>
正则替换表达式[以下是特殊替换字符]
</p>
<ul>
<li>字符 替换文本</li>
<li>$& 与正则相匹配的字符串</li>
<li>$` 匹配字符串左边的字符</li>
<li>$’ 匹配字符串右边的字符</li>
<li>$1,$2,$,3,…,$n 匹配结果中对应的分组匹配结果</li>
</ul>

```
// $& 适用于没有子表达式的情况
let sStr='讨论一下正则表达式中的replace的用法';
sStr.replace(/正则表达式/,'《$&》');
// 得到："讨论一下《正则表达式》中的replace的用法"
```

```
$`匹配字符串左边的所有字符
let sStr='讨论一下正则表达式中的replace的用法';
sStr.replace(/正则表达式/,'《$`》');
// 得到："讨论一下《讨论一下》中的replace的用法"
```

```
$'匹配字符串右边的所有字符，注意，既然 $' 有单引号，那么外面的引号必须双引号，如果不可以双引号，只能把 $' 的单引号转义
let sStr='讨论一下正则表达式中的replace的用法';
sStr.replace(/正则表达式/,"《$'》");
// 得到："讨论一下《中的replace的用法》中的replace的用法"
```

```
$1, $2, $3, …, $n依次匹配子表达式
let sStr='讨论一下正则表达式中的replace的用法';
sStr.replace(/(正则)(.+?)(式)/,"《$1》$2<$3>");
// 得到："讨论一下《正则》表达<式>中的replace的用法"
```

<p>函数</p>
```
先看arguments的用法：
let sStr='讨论一下正则表达式中的replace的用法';
sStr.replace(/(正则).+?(式)/,function() {
    console.log(arguments);
});
// ["正则表达式", "正则", "式", 4, "讨论一下正则表达式中的replace的用法"]
```
<ul>
<li>参数分别为：</li>
<li>匹配到的字符串（此例为"正则表达式")</li>
<li>如果正则使用了分组匹配就为多个否则无此参数。（此例的参数就分别为 "正则", "式"）</li>
<li>匹配字符串的对应索引位置（也就是"正则表达式"的索引位置，此例为4）</li>
<li>原始字符串</li>
</ul>
<p>如果加上全局标识符g，则是：</p>
```
let sStr='讨论一下正则表达式中的replace的正则表达式用法';
sStr.replace(/(正则).+?(式)/g,function() {
    console.log(arguments);
});
// ["正则表达式", "正则", "式", 4, "讨论一下正则表达式中的replace的正则表达式用法"]
// ["正则表达式", "正则", "式", 19, "讨论一下正则表达式中的replace的正则表达式用法"]
```
<p>
也就是说，arguments是当前函数的内置属性，指代当前匹配的参数伪数组。arguments[0]就是当前匹配的字符串。
</p>
```
let sStr='讨论一下正则表达式中的replace的正则表达式用法';
sStr.replace(/(正则).+?(式)/g,function() {
    console.log(arguments[0]);
    return arguments[0] + 'a';
});
// 正则表达式
// 正则表达式
// "讨论一下正则表达式a中的replace的正则表达式a用法"
```
