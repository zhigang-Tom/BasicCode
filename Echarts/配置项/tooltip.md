####tooltip提示框
<ul>
    <p>提示框组件可以设置在多种地方：</p>
    <li>可以设置在全局，即 tooltip</li>
    <li>可以设置在坐标系中，即 grid.tooltip、polar.tooltip、single.tooltip</li>
    <li>可以设置在系列中，即 series.tooltip</li>
    <li>可以设置在系列的每个数据项中，即 series.data.tooltip</li>
</ul>
<p>
    1.show boolean [ default: true ] 是否显示提示框组件，包括提示框浮层和 axisPointer。
</p>
<p>
    2.position string, Array, Function 提示框浮层的位置，默认不设置时位置会跟随鼠标的位置。
</p>
<p>
    Array 通过数组表示提示框浮层的位置，支持数字设置绝对位置，百分比设置相对位置。
<pre>
    // 绝对位置，相对于容器左侧 10px, 上侧 10 px
    position: [10, 10]
    // 相对位置，放置在容器正中间
    position: ['50%', '50%']
</pre>
</p>
<p>
    formatter string, Function 提示框浮层内容格式器，支持字符串模板和回调函数两种形式。
</p>
<p>
    backgroundColor Color [ default: 'rgba(50,50,50,0.7)' ] 提示框浮层的背景颜色。
</p>
<p>
    borderColor Color [ default: '#333' ] 提示框浮层的边框颜色。
</p>
<p>
    borderWidth number [ default: 0 ] 提示框浮层的边框宽。
</p>
<p>
    padding number [ default: 5 ] 提示框浮层内边距，单位px，默认各方向内边距为5，接受数组分别设定上右下左边距。
</p>
<pre>
    // 设置内边距为 5
    padding: 5
    // 设置上下的内边距为 5，左右的内边距为 10
    padding: [5, 10]
    // 分别设置四个方向的内边距
    padding: [
        5,  // 上
        10, // 右
        5,  // 下
        10, // 左
    ]
</pre>
<p>
    textStyle Object 提示框浮层的文本样式。详细内容与其他textStyle一样
</p>
