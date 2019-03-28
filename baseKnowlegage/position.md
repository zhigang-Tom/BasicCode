####position

#####static

<p>
static默认值，元素不会被定位
</p>

#####relative

<p>
relative：表现的和 static 一样，除非你添加了一些额外的属性。
</p>

<p>
在一个相对定位（position属性的值为relative）的元素上设置 top 、 right 、 bottom 和 left 属性会使其偏离其正常位置。其他的元素的位置则不会受该元素的影响发生位置改变来弥补它偏离后剩下的空隙。[不脱离文档流]
</p>

#####fixed

<p>
一个固定定位（position属性的值为fixed）元素会相对于视窗来定位，这意味着即便页面滚动，它还是会停留在相同的位置。和 relative 一样， top 、 right 、 bottom 和 left 属性都可用。
</p>
<p>
一个固定定位元素不会保留它原本在页面应有的空隙（脱离文档流）。
令人惊讶地是移动浏览器对 fixed 的支持很差。
</p>

#####absolute

<p>
absolute是相对于距离自己最近的被定位的祖先元素来定位的，如果找不到被定位的祖先元素会相对于body来定位
</p>
