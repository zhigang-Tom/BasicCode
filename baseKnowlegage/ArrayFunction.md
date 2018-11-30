####数组常用方法总结
#####1.join()
<p>
Array.join()将数组中所有元素都转化为字符串并连接在一起，最后返回生成的字符串，
可以指定连接符，默认使用逗号作为连接符
</p>
```
var a = [1,2,3];
var b = a.join('-');
// 1-2-3
```
#####2.reverse()
<p>
Array.reverse()将数组中的元素颠倒顺序，返回逆序数组。它不通过重新排列的元素创建
新数组，而是在原数组中重新排列元素顺序
</p>
```
var a = [1,2,3];
var b = a.reverse();
// 3,2,1
```
#####3.sort()
<p>
Array.sort()将数组中的元素排序并返回排序后的数组，当不带参数调用sort()时数组元素
以字母表顺序排序
</p>
<p>
若要按照其他方式对数组元素进行排序，需要给sort函数传入一个比较函数，该函数决定了它的
两个参数在排好序的数组中的的先后顺序，假设第一个参数应该在前，比较函数应该返回一个小
于0的数值，反之，假设第一个参数应该在后，函数应该返回一个大于0的数值，假设两个值相等
函数应该返回0
</p>
```
  var a = ['cat','Dog','ant','tom'];
        a.sort(function (s,t) {
            var n = s.toLowerCase();
            var m = t.toLowerCase();
            if (n < m) {
                return -1;
            }
            if (n > m) {
                return 1
            }
        });

  var d = [92,12,65,41,85,32,10];
        var c = d.sort(function (m,n) {
            console.log(m);
            return m-n;
        });      
```

#####4.concat()
<p>
Array.concat()创建并返回一个新数组,新数组的元素包含原数组的元素和concat的参数，如果
某个参数是数组连接的是数组里面的元素，但是concat不会扁平化数组的数组。concat不改变原
来的数组
</p>

```
 var a = [1,2,3,4];
 var b = a.concat(4,[5,[2,4]]);
 // 1,2,3,4,4,5,[2,4]
 var c = a.concat(6);
 // 1,2,3,4,6
```
#####5.slice()
<p>
Array.slice()返回指定数组的一个片段，它的两个参数分别指定了片段的开始与结束位置，如果
只指定一个参数，则返回从开始到结束的所有数组元素。返回的片段包含第一个参数指定的元素不
包含第二个参数指定的元素，如果参数中出现负数它表示相对于数组中最后一个元素的位置，参数
-1指定了最后一个元素，-3指定了倒数第三个元素。
</p>

```
var a = [1,2,3,4,5,6];
var b = a.slice(1,3);
console.log(b)
// 2,3
var a = [1,2,3,4,5,6];
var b = a.slice(1,-2);
console.log(b)
// 2,3,4
var a = [1,2,3,4,5,6];
var b = a.slice(1);
console.log(b)
// 2,3,4,5,6
```

#####6.splice()
<p>
Array.splice()向数组中插入或删除元素，splice会修改调用它的数组，splice接受三个参数
第一个参数是删除(插入)的起始位置，第二个参数删除元素的个数如果省略将从开始位置一直删除
到数组结尾，如果是给数组插入元素此参数为0，第三个参数是插入的元素
</p>

```
// 插入元素
var a = [1,2,3,4,5];
var b = a.splice(2,0,'a','b');
console.log(a)
// [1, 2, "a", "b", 3, 4, 5]
// 从第三个位置开始插入元素

// 删除元素
var c = [1,2,3,4,5,6];
c.splice(2,3);
// [1, 2, 6]
```
#####7.push()
<p>
Array.push()向数组尾部添加一个或多个元素，返回数组长度，push修改的是调用它的数组
</p>

```
var c = [1,2];
var d = c.push(3,4,5);
console.log(d)
// 5
```
#####8.pop()
<p>
Array.pop()删除数组的最后一个元素，返回删除的元素，pop修改的是调用它的数组
</p>

```
var c = [1,2,3,4,5];
c.pop();
console.log(c)
// [1, 2, 3, 4]

```

#####9.unshift()
<p>
Array.unshift()向数组的头部插入一个或多个元素，返回数组的长度，unshift修改的是调用它的数组
</p>

```
 var c = [1,2];
 c.unshift(3,4,5);
 console.log(c)
// [3, 4, 5, 1, 2]

```

#####10.shift()
<p>
Array.shift()删除数组头部的一个元素，返回被删除的元素，shift修改的是调用它的数组
</p>

```
var c = [1,2,3,4,5];
c.shift();
console.log(c)
// [2, 3, 4, 5]

```
#####11.forEach()
<p>
Array.forEach()从头至尾遍历数组元素，为每个元素调用指定的函数。指定的函数有三个参数
分别是数组元素，元素索引，数组本身，如果只关心数组元素可以只写第一个参数，forEach一旦
开始遍历元素必须将数组中所有元素全部遍历完才会停止。
</p>

```
var c = [1,2,3,4,5,6];
c.forEach(function (v,i,a) {
    console.log(v)//元素
    console.log(i)//索引
    console.log(a)//数组
});

```
#####12.map()
<p>
Array.map()将调用的数组的每个元素传递给指定的函数，并返回一个新数组
</p>

```
var c = [1,2,3,4,5];
var d =  c.map(function (v) {
    return v*v;
});
console.log(d)
// [1, 4, 9, 16, 25]
});

```
#####12.filter()
<p>
Array.filter()将调用的数组的每个元素传递给指定的函数，此函数用于过滤数组元素。filter返回
符合过滤条件的数组片段
</p>

```
var c = [1,2,3,4,5];
var d =  c.filter(function (v) {
    return v > 3;
});
console.log(d)
// [4, 5]
});

```
#####13.every() && some()
<p>
Array.every() && Array.some()是数组的逻辑判断，它们对数组元素应用指定的函数进行判断返回
true或false。every()当且仅当针对数组中的所有元素调用判断函数都返回true，它才返回true
</p>
<p>
Array.some()当数组中至少有一个元素调用判断函数返回true，它就返回true，并且当且仅当数组中的
所有元素调用判断函数都返回false，它才返回false
</p>

```
var c = [1,2,3,4,5];
var d =  c.every(function (v) {
    return v < 10;
});
console.log(d)
// true 

var c = [1,2,3,4,5];
var d =  c.some(function (v) {
    return v % 2 === 0;
});
console.log(d)
// true
```
#####14.indexOf() && lastIndexOf()
<p>
Array.indexOf() && Array.lastIndexOf()搜索整个数组中是否具有给定值的元素，返回找到的第一
个元素的索引，如果没有找到就返回-1，indexOf从头至尾搜索，lastIndexOf从尾至头搜索，indexOf和
lastIndexOf接受两个参数，第一个参数是需要查找的元素，第二个参数是可选的，它指定数组的一个索引
从哪里开始搜索，如果省略indexOf从头开始搜索，lastIndexOf从尾部开始搜索，第二个参数也可以是负
数，它代表相对数组尾部的偏移量，-1指定数组的最后一个元素
</p>

```
function findAll(a,x) {
    var results = [],
        len = a.length,
        pos = 0;
    while(pos < len){
        pos = a.indexOf(x, pos);
        if (pos == -1) break ;
        results.push(pos);
        pos+=1
    }
    return results;
}
var c = [1,2,1,5,1];
var res = findAll(c, 1);
console.log(res);
// [0,2,4]
```

####ES6中新添加的数组方法

#####15. includes()
<p>
Array.includes()判断数组是否包含某一元素，如果包含则返回true，否则返回false
</p>

```
let arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', NaN];
let res = arr.includes('a');
let resN = arr.includes(NaN);
console.log(res);// true
console.log(resN);// true
```

#####16. entries(),key(),values()
<p>
entries(), keys(),values()用于遍历数组，它们都返回一个遍历器对象，可以用for of
遍历，keys()是对键名的遍历，values()是对键值的遍历，entries()是对键值对的遍历
</p>

```

for (let index of ['a', 'b'].keys()) {
console.log(index);
}
// 0
// 1
for (let elem of ['a', 'b'].values()) {
console.log(elem);
}
// 'a'
// 'b'
for (let [index, elem] of ['a', 'b'].entries()) {
console.log(index, elem);
}
// 0 "a"

```

#####17. fill()
<p>
Array.fill()用指定的值替换数组中的元素，fill接受三个参数，第一个参数【必填】是替换值，第
二个参数指定从何处开始替换，第三个参数指定到何处停止，但是替换不包含此项。
</p>

```
let arr = [1,2,3,5,6];
let arr2 = arr.fill(4)
console.log(arr2)
//[4,4,4,4,4]


let arr = [1,2,3,5,6];
let arr3 = arr.fill(0,2,4);
console.log(arr3)
//[1, 2, 0, 0, 6]

```

#####18.find()
<p>
返回数组中符合条件的第一个元素，若未找到则返回undefined、
</p>
```
let arr = [1,2,3,4,5,6,7,8]
let res = arr.find((value)=>{
    return value > 3
});
console.log(res)
//4
let res2 = arr.find((val) => {
    return val > 8
})
console.log(res2)
//undefined
```

#####19.findIndex()
<p>
返回符合条件的第一个元素的位置如果没有则返回-1
</p>
```
let arr = [1,2,3,4,5,6,7,8]
let res = arr.findIndex((value)=>{
    return value > 3
});
console.log(res)
//3
let res2 = arr.findIndex((val) => {
    return val > 8
})
console.log(res2)
//-1
```

#####20.Array.of()
<p>
Array.of()函数传进去一串值以逗号分开返回一个数组
</p>
```
let arr1 = Array.of(1,2,3,4,5);
console.log(arr1);
//[1, 2, 3, 4, 5]
let arr2 = Array.of("hello");
console.log(arr2)
//["hello"]
```
#####21.获取数组最大值的四种方法
```
let arr = [7,2,0,-3,5];
let max1 = Math.max.apply(null,arr);
console.log(max1) // 7
```
```
let arr = [7,2,0,-3,5];
// 注意参数格式
let max2 = Math.max.call(null, 7,2,0,-3,5);
console.log(max2) // 7
```
```
let arr = [7,2,0,-3,5];
// sort()默认是升序排列
var max3 = arr.sort().reverse()[0];
console.log(max3) // 7
```
```
let arr = [7,2,0,-3,5];
let max4 = arr.sort((a,b) => {
    return b-a;
})[0];
console.log(max4) // 7
```