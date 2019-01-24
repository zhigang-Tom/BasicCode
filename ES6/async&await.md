####async & await
#####1.含义
<p>
    async 函数，它就是 Generator 函数的语法糖。
</p>

```
// 对比Generator函数与async函数
const fs = require('fs');
const readFile = function (fileName) {
  return new Promise(function (resolve, reject) {
    fs.readFile(fileName, function(error, data) {
      if (error) return reject(error);
      resolve(data);
    });
  });
};
 // Generator
const gen = function* () {
  const f1 = yield readFile('/etc/fstab');
  const f2 = yield readFile('/etc/shells');
  console.log(f1.toString());
  console.log(f2.toString());
};
  // async
  const asyncReadFile = async function () {
  const f1 = await readFile('/etc/fstab');
  const f2 = await readFile('/etc/shells');
  console.log(f1.toString());
  console.log(f2.toString());
};

```
<ul>
    <li>async函数对 Generator 函数的改进，体现在以下四点。</li>
    <li>内置执行器。</li>
    <li>更好的语义。</li>
    <li>
        更广的适用性。co模块约定，yield命令后面只能是 Thunk 函数或 Promise 对象，而async函数的await命令后面，可以是 Promise 对象和原始类型的值（数值、字符串和布尔值，但这时会自动转成立即 resolved 的 Promise 对象）。
    </li>
    <li>
        返回值是 Promise，async函数的返回值是 Promise 对象，这比 Generator 函数的返回值是 Iterator 对象方便多了。你可以用then方法指定下一步的操作。
    </li>
</ul>

#####2.基本用法
<p>
async函数返回一个 Promise 对象，可以使用then方法添加回调函数。当函数执行的时候，一旦遇到await就会先返回，等到异步操作完成，再接着执行函数体内后面的语句。
</p>

```
async function getStockPriceByName(name) {
  const symbol = await getStockSymbol(name);
  const stockPrice = await getStockPrice(symbol);
  return stockPrice;
}

getStockPriceByName('goog').then(function (result) {
  console.log(result);
});
```
<p>
async 函数有多种使用形式。
</p>

```
// 函数声明
async function foo() {}

// 函数表达式
const foo = async function () {};

// 对象的方法
let obj = { async foo() {} };
obj.foo().then(...)

// Class 的方法
class Storage {
  constructor() {
    this.cachePromise = caches.open('avatars');
  }

  async getAvatar(name) {
    const cache = await this.cachePromise;
    return cache.match(`/avatars/${name}.jpg`);
  }
}

const storage = new Storage();
storage.getAvatar('jake').then(…);

// 箭头函数
const foo = async () => {};
```
#####3.语法
######返回 Promise 对象
<p>
    async函数返回一个 Promise 对象。async函数内部return语句返回的值，会成为then方法回调函数的参数。
</p>

```
async function f() {
  return 'hello world';
}

f().then(v => console.log(v))
// "hello world"
```
<p>
    async函数内部抛出错误，会导致返回的 Promise 对象变为reject状态。抛出的错误对象会被catch方法回调函数接收到
</p>

```
async function f() {
        throw new Error('there is a error')
    }
f().then(v => console.log(v))
    .catch(e => console.log(e))
// there is a error
```
######Promise 对象的状态变化
<p>
async函数返回的 Promise 对象，必须等到内部所有await命令后面的 Promise 对象执行完，才会发生状态改变，除非遇到return语句或者抛出错误。也就是说，只有async函数内部的异步操作执行完，才会执行then方法指定的回调函数。
</p>

```
async function getTitle(url) {
  let response = await fetch(url);
  let html = await response.text();
  return html.match(/<title>([\s\S]+)<\/title>/i)[1];
}
getTitle('https://tc39.github.io/ecma262/').then(console.log)
// "ECMAScript 2017 Language Specification"
```
<p>
上面代码中，函数getTitle内部有三个操作：抓取网页、取出文本、匹配页面标题。只有这三个操作全部完成，才会执行then方法里面的console.log。
</p>

######await 命令
<p>
正常情况下，await命令后面是一个 Promise 对象，返回该对象的结果。如果不是 Promise 对象，就直接返回对应的值。
</p>

```
async function f() {
  // 等同于
  // return 123;
  return await 123;
}
f().then(v => console.log(v))
// 123
```
<p>
await命令后面的 Promise 对象如果变为reject状态，即使reject的参数不用return也会被catch方法的回调函数接收到,但是Promise对象的resolve状态必须要用return才能将参数传给then的回调函数
</p>

```
async function f() {
  await Promise.reject('出错了');
}
f()
.then(v => console.log(v))
.catch(e => console.log(e))
// 出错了
```
<p>
注意，上面代码中，await语句前面没有return，但是reject方法的参数依然传入了catch方法的回调函数。这里如果在await前面加上return，效果是一样的。
</p>
<p>
任何一个await语句后面的 Promise 对象变为reject状态，那么整个async函数都会中断执行
</p>

```
async function f() {
  await Promise.reject('出错了');
  await Promise.resolve('hello world'); // 不会执行
}
```
<p>
上面代码中，第二个await语句是不会执行的，因为第一个await语句状态变成了reject。
</p>
<p>
有时，我们希望即使前一个异步操作失败，也不要中断后面的异步操作。这时可以将第一个await放在try...catch结构里面，这样不管这个异步操作是否成功，第二个await都会执行。
</p>

```
async function f() {
  try {
    await Promise.reject('出错了');
  } catch(e) {
  }
  return await Promise.resolve('hello world');
}

f()
.then(v => console.log(v))
// hello world
```
<p>
另一种方法是await后面的 Promise 对象再跟一个catch方法，处理前面可能出现的错误。
</p>

```
async function f() {
  await Promise.reject('出错了')
    .catch(e => console.log(e));
  return await Promise.resolve('hello world');
}

f()
.then(v => console.log(v))
// 出错了
// hello world
```
######错误处理
<p>
如果await后面的异步操作出错，那么等同于async函数返回的 Promise 对象被reject。
</p>

```
async function f() {
  await new Promise(function (resolve, reject) {
    throw new Error('出错了');
  });
}

f()
.then(v => console.log(v))
.catch(e => console.log(e))
// Error：出错了
```
<p>
防止出错的方法，也是将其放在try...catch代码块之中。
</p>

```
async function f() {
  try {
    await new Promise(function (resolve, reject) {
      throw new Error('出错了');
    });
  } catch(e) {
  }
  return await('hello world');
}
```

######使用注意点
<p>
第一点，前面已经说过，await命令后面的Promise对象，运行结果可能是rejected，所以最好把await命令放在try...catch代码块中。
</p>

```
async function myFunction() {
  try {
    await somethingThatReturnsAPromise();
  } catch (err) {
    console.log(err);
  }
}

// 另一种写法

async function myFunction() {
  await somethingThatReturnsAPromise()
  .catch(function (err) {
    console.log(err);
  });
}
```
<p>
第二点，多个await命令后面的异步操作，如果不存在继发关系，最好让它们同时触发。
</p>

```
// 写法一
let [foo, bar] = await Promise.all([getFoo(), getBar()]);

// 写法二
let fooPromise = getFoo();
let barPromise = getBar();
let foo = await fooPromise;
let bar = await barPromise;
```
<p>
第三点，await命令只能用在async函数之中，如果用在普通函数，就会报错。在async函数里慎用forEach所有遍历最好都用for循环
</p>

#####4.实例：按顺序完成异步操作

```
async function logInOrder(urls) {
  // 并发读取远程URL
  const textPromises = urls.map(async url => {
    const response = await fetch(url);
    return response.text();
  });

  // 按次序输出
  for (const textPromise of textPromises) {
    console.log(await textPromise);
  }
}
```
<p>
上面代码中，虽然map方法的参数是async函数，但它是并发执行的，因为只有async函数内部是继发执行，外部不受影响。后面的for..of循环内部使用了await，因此实现了按顺序输出。
</p>
