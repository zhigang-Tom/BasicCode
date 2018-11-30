####1.弹性布局[Flexible Box]
<p>
任何一个容器都可以指定为Flex布局。
</p>
```
.box{
  display: flex;
}
```
<p>
行内元素也可以使用 Flex 布局。
</p>

```
.box{
  display: inline-flex;
}
```
<p>
Webkit 内核的浏览器，必须加上-webkit前缀。
</p>

```
.box{
  display: -webkit-flex; /* Safari */
  display: flex;
}
```
<p style="color:red;">
注意，设为 Flex 布局以后，子元素的float、clear和vertical-align属性将失效。
</p>


####2.基本概念
<p>
采用 Flex 布局的元素，称为 Flex 容器（flex container），简称"容器"。它的所有子元素自动成为容器成员，称为 Flex 项目（flex item），简称"项目"。
</p>
<img src="../image/flex1.png"/>
<p>
容器默认存在两根轴：水平的主轴（main axis）和垂直的交叉轴（cross axis）。主轴的开始位置（与边框的交叉点）叫做main start，结束位置叫做main end；交叉轴的开始位置叫做cross start，结束位置叫做cross end。
</p>
<p>
项目默认沿主轴排列。单个项目占据的主轴空间叫做main size，占据的交叉轴空间叫做cross size。
</p>


####3.容器的属性
<p>
以下6个属性设置在容器上。
</p>
<ul>
  <li>flex-direction</li>
  <li>flex-wrap</li>
  <li>flex-flow</li>
  <li>justify-content</li>
  <li>align-items</li>
  <li>align-content</li>
</ul>
<p>
3.1 flex-direction属性
</p>
<p>
flex-direction属性决定主轴的方向（即项目的排列方向）。
</p>
```
.box {
  flex-direction: row | row-reverse | column | column-reverse;
}
```
<img src="../image/flex2.png"/>
<p>
它可能有4个值。
</p>
<ul>
  <li>row（默认值）：主轴为水平方向，起点在左端。</li>
  <li>row-reverse：主轴为水平方向，起点在右端。</li>
  <li>column：主轴为垂直方向，起点在上沿。</li>
  <li>column-reverse：主轴为垂直方向，起点在下沿。</li>
</ul>
<p>
3.2 flex-wrap属性
</p>
<p>
默认情况下，项目都排在一条线（又称"轴线"）上。flex-wrap属性定义，如果一条轴线排不下，如何换行。
</p>
```
.box{
  flex-wrap: nowrap | wrap | wrap-reverse;
}
```
<img src="../image/flex3.png"/>
<p>
它可能取三个值。
</p>
<p>（1）nowrap（默认）：不换行</p>
<img src="../image/flex4.png"/>
<p>
（2）wrap：换行，第一行在上方。
</p>
<img src="../image/flex5.jpg"/>
<p>
（3）wrap-reverse：换行，第一行在下方。
</p>
<img src="../image/flex6.jpg"/>
<p>
3.3 flex-flow
</p>
<p>
flex-flow属性是flex-direction属性和flex-wrap属性的简写形式，默认值为row nowrap。
</p>

```
.box {
  flex-flow: <flex-direction> || <flex-wrap>;
}
```
<p>
3.4 justify-content属性
</p>
<p>
justify-content属性定义了项目在主轴上的对齐方式。
</p>
```
.box {
  justify-content: flex-start | flex-end | center | space-between | space-around;
}
```
<img src="../image/flex7.png"/>
<p>
它可能取5个值，具体对齐方式与轴的方向有关。下面假设主轴为从左到右。
</p>
<ul>
  <li>flex-start（默认值）：左对齐</li>
  <li>flex-end：右对齐</li>
  <li>center： 居中</li>
  <li>space-between：两端对齐，项目之间的间隔都相等。</li>
  <li>space-around：每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍.</li>
</ul>
<p>
3.5 align-items属性
</p>
<p>
align-items属性定义项目在交叉轴上如何对齐。
</p>
```
.box {
  align-items: flex-start | flex-end | center | baseline | stretch;
}
```
<img src="../image/flex8.png"/>
<p>
它可能取5个值。具体的对齐方式与交叉轴的方向有关，下面假设交叉轴从上到下。
</p>
<ul>
  <li>flex-start：交叉轴的起点对齐。</li>
  <li>flex-end：交叉轴的终点对齐。</li>
  <li>center：交叉轴的中点对齐。</li>
  <li>baseline: 项目的第一行文字的基线对齐。</li>
  <li>stretch（默认值）：如果项目未设置高度或设为auto，将占满整个容器的高度。</li>
</ul>
<p>
3.6 align-content属性
</p>
<p>
align-content属性定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。
</p>
```
.box {
  align-content: flex-start | flex-end | center | space-between | space-around | stretch;
}
```
<img src="../image/flex9.png"/>
<p>
该属性可能取6个值。
</p>
<ul>
  <li>flex-start：与交叉轴的起点对齐。</li>
  <li>flex-end：与交叉轴的终点对齐。</li>
  <li>center：与交叉轴的中点对齐。</li>
  <li>space-between：与交叉轴两端对齐，轴线之间的间隔平均分布。</li>
  <li>space-around：每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍</li>
  <li>stretch（默认值）：轴线占满整个交叉轴。</li>
</ul>
<p>
四、项目的属性
</p>
<p>
以下6个属性设置在项目上。
</p>
<ul>
  <li>order</li>
  <li>flex-grow</li>
  <li>flex-shrink</li>
  <li>flex-basis</li>
  <li>flex</li>
  <li>align-self</li>
</ul>
<p>
4.1 order属性
</p>
<p>
order属性定义项目的排列顺序。数值越小，排列越靠前，默认为0。
</p>
```
.item {
  order: <integer>;
}
```
<img src="../image/flex10.png"/>
<p>
4.2 flex-grow属性
</p>
<p>
flex-grow属性定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大。
</p>
```
.item {
  flex-grow: <number>; /* default 0 */
}
```
<img src="../image/flex11.png"/>
<p>
如果所有项目的flex-grow属性都为1，则它们将等分剩余空间（如果有的话）。如果一个项目的flex-grow属性为2，其他项目都为1，则前者占据的剩余空间将比其他项多一倍。
</p>
<p>
4.3 flex-shrink属性
</p>
<p>
flex-shrink属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。
</p>
```
.item {
  flex-shrink: <number>; /* default 1 */
}
```
<img src="../image/flex12.jpg"/>
<p>
如果所有项目的flex-shrink属性都为1，当空间不足时，都将等比例缩小。如果一个项目的flex-shrink属性为0，其他项目都为1，则空间不足时，前者不缩小。负值对该属性无效。
</p>
<p>
4.4 flex-basis属性
</p>
<p>
flex-basis属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为auto，即项目的本来大小。
</p>
```
.item {
  flex-basis: <length> | auto; /* default auto */
}
```
<p>
它可以设为跟width或height属性一样的值（比如350px），则项目将占据固定空间。
</p>
<p>
4.5 flex属性
</p>
<p>
flex属性是flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto。后两个属性可选。
</p>
<p>
建议优先使用这个属性，而不是单独写三个分离的属性，因为浏览器会推算相关值。
</p>
<p>
4.6 align-self属性
</p>
<p>
align-self属性允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。默认值为auto，表示继承父元素的align-items属性，如果没有父元素，则等同于stretch。
</p>
```
.item {
  align-self: auto | flex-start | flex-end | center | baseline | stretch;
}
```
<img src="../image/flex13.png"/>
<p>
该属性可能取6个值，除了auto，其他都与align-items属性完全一致。
</p>
