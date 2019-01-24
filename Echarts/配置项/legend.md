####legend
<p>
    1.type string 图例的类型
</p>
<ul>
    可选值：
    <li>
        'plain'：普通图例。缺省就是普通图例。
    </li>
    <li>
        'scroll'：可滚动翻页的图例。当图例数量较多时可以使用。
    </li>
</ul>
<p>
    2.id string 组件 ID。默认不指定。指定则可用于在 option 或者 API 中引用组件。
</p>
<p>
    3.show boolean [ default: true ] 设定是否显示图例
</p>
<p>
    4.left string, number [ default: 'auto' ] 图例组件离容器左侧的距离。
</p>
<p>
    left 的值可以是像 20 这样的具体像素值，可以是像 '20%' 这样相对于容器高宽的百分比，也可以是 'left', 'center', 'right'。
</p>
<p>
    5.top string, number [ default: 'auto' ] 图例组件离容器上侧的距离。
</p>
<p> 
    top 的值可以是像 20 这样的具体像素值，可以是像 '20%' 这样相对于容器高宽的百分比，也可以是 'top', 'middle', 'bottom'。
</p>
<p> 
    6.right string, number [ default: 'auto' ] 图例组件离容器右侧的距离。
</p>
<p>
    right 的值可以是像 20 这样的具体像素值，可以是像 '20%' 这样相对于容器高宽的百分比。
</p>
<p>
    7.bottom string, number [ default: 'auto' ] 图例组件离容器下侧的距离。
</p>
<p>
    bottom 的值可以是像 20 这样的具体像素值，可以是像 '20%' 这样相对于容器高宽的百分比。
</p>
<p>
   8. width string, number [ default: 'auto' ] 图例组件的宽度。默认自适应。
</p>
<p>
    9.height string, number [ default: 'auto' ] 图例组件的高度。默认自适应。
</p>
<p>
    10.orient string [ default: 'horizontal' ] 图例列表的布局朝向。
</p>
<ul>
    可选：
    <li>'horizontal'</li>
    <li>'vertical'</li>
</ul>
<p>
    11.align string [ default: 'auto' ] 图例标记和文本的对齐。默认自动，<br/>根据组件的位置和 orient 决定，当组件的 left 值为 'right' 以及纵向布局（orient 为 'vertical'）的时候为右对齐，及为 'right'。
</p>
<ul>
    可选：
    <li>'auto'</li>
    <li>'left'</li>
    <li>'right'</li>
</ul>
<p>
    12.padding number [ default: 5 ] 图例内边距，单位px，默认各方向内边距为5，接受数组分别设定上右下左边距。
</p>
<ul>
    例子：
    <li>// 设置内边距为 5</li>
    <li>padding: 5</li>
    <li>// 设置上下的内边距为 5，左右的内边距为 10</li>
    <li>padding: [5, 10]</li>
    <li>// 分别设置四个方向的内边距</li>
    <li>padding: [ 5,  // 上 10, // 右 5,  // 下 10, // 左 ]</li>
</ul>
<p>
    13.itemGap number [ default: 10 ] 图例每项之间的间隔。横向布局时为水平间隔，纵向布局时为纵向间隔。
</p>
<p>
    14.itemWidth number [ default: 25 ] 图例标记的图形宽度
</p>
<p>
    15.itemHeight number [ default: 14 ] 图例标记的图形高度。
</p>
<p>
    16.formatter string, Function [ default: null ] 用来格式化图例文本，支持字符串模板和回调函数两种形式。
</p>
<pre>
    // 使用字符串模板，模板变量为图例名称 {name}
    formatter: 'Legend {name}'
    // 使用回调函数
    formatter: function (name) {
        return 'Legend ' + name;
    }
</pre>
<p>
    17.selectedMode string, boolean [ default: true ]
</p>
<p>
    图例选择的模式，控制是否可以通过点击图例改变系列的显示状态。默认开启图例选择，可以设成 false 关闭。<br/>
    除此之外也可以设成 'single' 或者 'multiple' 使用单选或者多选模式。
</p>
<p>
    18.inactiveColor Color [ default: '#ccc' ] 图例关闭时的颜色。
</p>
<p>
    19.textStyle Object 图例的公用文本样式。以下为详情：
</p>
<ul>
    <li>
        color Color [ default: #333 ] 文字的颜色。
    </li>
    <li>
        fontStyle string [ default: 'normal' ] 文字字体的风格<br/>
        可选：'normal', 'italic','oblique'
    </li>
    <li>
        fontWeight string [ default: normal ] 文字字体的粗细<br/>
        可选：'normal','bold','bolder','lighter',100 | 200 | 300 | 400
    </li>
    <li>
        fontFamily string [ default: 'sans-serif' ] 文字的字体系列
    </li>
    <li>
        fontSize number [ default: 12 ] 文字的字体大小
    </li>
    <li>
        lineHeight number 行高。
    </li>
    <li>
        backgroundColor string, Object [ default: 'transparent' ] 文字块背景色。<br/>
        可以是直接的颜色值，例如：'#123234', 'red', rgba(0,23,11,0.3)'。<br/>
        可以支持使用图片，例如：
        <pre>
        backgroundColor: {
            image: 'xxx/xxx.png'
            // 这里可以是图片的 URL，
            // 或者图片的 dataURI，
            // 或者 HTMLImageElement 对象，
            // 或者 HTMLCanvasElement 对象。
        }
        当使用图片的时候，可以使用 width 或 height 指定高宽，也可以不指定自适应。
        </pre>
    </li>
    <li>
        borderColor string [ default: 'transparent' ] 文字块边框颜色。
    </li>
    <li>
        borderWidth number [ default: 0 ] 文字块边框宽度。
    </li>
    <li>
        borderRadius number, Array [ default: 0 ] 文字块的圆角。
    </li>
    <li>
        padding number, Array [ default: 0 ] 文字块的内边距。例如：<br/>
        padding: [3, 4, 5, 6]：表示 [上, 右, 下, 左] 的边距。
    </li>
    <li>还有文字阴影的设置这里不描述了</li>
</ul>
<p>
    20.backgroundColor Color [ default: 'transparent' ] 图例背景色，默认透明。
</p>
<p>
    21.borderColor Color [ default: '#ccc' ] 图例的边框颜色。
</p>
<p>
    22.backgroundColor,borderColor颜色可以使用 RGB 表示，比如 'rgb(128, 128, 128)' ，如果想要加上 alpha 通道，可以使用 RGBA，比如 'rgba(128, 128, 128, 0.5)'，也可以使用十六进制格式，比如 '#ccc'
</p>
<p>
    23.borderWidth number [ default: 1 ] 图例的边框线宽。
</p>
<p>
    24.borderRadius number, Array [ default: 0 ] 圆角半径，单位px 例如：
    <pre>
        borderRadius: 5, // 统一设置四个角的圆角大小
        borderRadius: [5, 5, 0, 0] //（顺时针左上，右上，右下，左下）
    </pre>
</p>
<p>
    25.animation boolean 图例翻页是否使用动画。
</p>
<p>
    26.animationDurationUpdate number [ default: 800 ] 图例翻页时的动画时长。
</p>