####1-1变量声明;
<p>
sass用$定义变量，变量可以定义在css规则之外也可以定在css规则之内，就像js中的全局变量与局部变量
</p>
<p>
sass变量名称可以用中划线也可以用下滑线，中划线定义的变量可以用下滑线来引用，反之亦然
</p>

```
$basic-border: 1px solid black;
$plain-font: "Myriad Pro"、Myriad、"Helvetica Neue"、Helvetica; 
$nav-color: #F90;
nav {
  $width: 100px;
  width: $width;
  color: $nav-color;
}

 /* 编译后 */

nav {
  width: 100px;
  color: #F90;
}
```
```
$highlight-color: #F90;
$highlight-border: 1px solid $highlight-color;
.selected {
  border: $highlight-border;
}

 /* 编译后 */

.selected {
  border: 1px solid #F90;
}
```

####2-1嵌套CSS 规则;

<p>
好像小学学习的乘法分配律
<br>
后代选择器
</p>

```
#content {
  article {
    h1 { color: #333 }
    p { margin-bottom: 1.4em }
  }
  aside { background-color: #EEE }
}
 /* 编译后 */
#content article h1 { color: #333 }
#content article p { margin-bottom: 1.4em }
#content aside { background-color: #EEE }
```
```
#content {
  background-color: #f5f5f5;
  aside { background-color: #eee }
}
 /* 编译后 */
 #content { background-color: #f5f5f5 }
 #content aside { background-color: #eee }
```

####2-2父选择器的标识符&;
<p>
&:父选择器<br/>
当包含父选择器标识符的嵌套规则被打开时，它不会像后代选择器那样进行拼接，而是&被父选择器直接替换：
</p>

```
article a {
  color: blue;
  &:hover { color: red }
}
 /* 编译后 */
 article a { color: blue } /*后代选择器*/
 article a:hover { color: red }/*父选择器*/
```
```
.container {
  h1, h2, h3 {margin-bottom: .8em}/*群组选择器*/
}
 /* 编译后 */
 .container h1, .container h2, .container h3 { margin-bottom: .8em }
```
```
nav, aside {
  a {color: blue}/*群组选择器+后代选择器*/
}
/* 编译后 */
nav a, aside a {color: blue}

```
<p>
>:表示直接子类<br/>
+:只会选择第一个相邻的匹配元素。<br/>
~:匹配所有在元素之后的同级元素。<br>
这些选择器在sass中含义一样
</p>

```
article {
  ~ article { border-top: 1px dashed #ccc }
  > section { background: #eee }
  dl > {
    dt { color: #333 }
    dd { color: #555 }
  }
  nav + & { margin-top: 0 }
}
/* 编译后 */
article ~ article { border-top: 1px dashed #ccc }
article > footer { background: #eee }
article dl > dt { color: #333 }
article dl > dd { color: #555 }
nav + article { margin-top: 0 }
```

####导入sass文件
<p>
css有一个特别不常用的特性，即@import规则，它允许在一个css文件中导入其他css文件。然而，后果是只有执行到@import时，浏览器才会去下载其他css文件，这导致页面加载起来特别慢。
</p>
<p>
sass也有一个@import规则，但不同的是，sass的@import规则在生成css文件时就把相关文件导入进来。这意味着所有相关的样式被归纳到了同一个css文件中，而无需发起额外的下载请求。另外，所有在被导入文件中定义的变量和混合器（参见2.5节）均可在导入文件中使用。
</p>

####导入SASS文件;
#####3-1. 使用SASS部分文件;
<p>
当通过@import把sass样式分散到多个文件时，你通常只想生成少数几个css文件。那些专门为@import命令而编写的sass文件，并不需要生成对应的独立css文件，这样的sass文件称为局部文件。对此，sass有一个特殊的约定来命名这些文件。
</p>
<p>
此约定即，sass局部文件的文件名以下划线开头。这样，sass就不会在编译时单独编译这个文件输出css，而只把这个文件用作导入。当你@import一个局部文件时，还可以不写文件的全名，即省略文件名开头的下划线。举例来说，你想导入themes/_night-sky.scss这个局部文件里的变量，你只需在样式表中写@import "themes/night-sky";。
</p>

#####3-2. 默认变量值;
<p>
!default用于变量，含义是：如果这个变量被声明赋值了，那就用它声明的值，否则就用这个默认值。
</p>

```
$fancybox-width: 400px !default;
.fancybox {
width: $fancybox-width;/*默认值是400*/
}
```
