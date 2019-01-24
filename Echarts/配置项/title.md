
####title
<p>
title组件包含如下配置项：
</p>
<p>
1.id: string
</p>
<p>
组件 ID。默认不指定。指定则可用于在 option 或者 API 中引用组件。
</p>
<p>
2.show: boolean [ default: true ]
</p>
<p>
是否显示标题组件。
</p>
<p>
3.text: string [ default: '' ]
</p>
<p>
主标题文本，支持使用 \n 换行。
</p>
<p>
4.link: string [ default: '' ]
</p>
<p>
主标题文本超链接。
</p>
<p>
5.target: string [ default: 'blank' ]
</p>
<p>
指定窗口打开主标题超链接。'self' 当前窗口打开,'blank' 新窗口打开
</p>
<p>
6.textStyle: 标题样式，包含如下项：
</p>
<ul>
    <li>color:Color,[ default: '#333' ]主标题文字的颜色</li>
    <li>
        fontStyle:string,[ default: 'normal' ],主标题文字字体的风格
       <p> [可选：'normal'，'italic'，'oblique'] </p>
    </li>
    <li>
        fontWeight：string，[ default: normal ]主标题文字字体的粗细
        <p>[可选：'normal','bold','bolder','lighter',100 | 200 | 300 | 400...]</p>
    </li>
    <li>
        fontFamily:string,[ default: 'sans-serif' ]主标题文字的字体系列
        <p>
            [可选：'serif' , 'monospace', 'Arial', 'Courier New', 'Microsoft YaHei', ...]
        </p>
    </li>
    <li>fontSize：number,[ default: 18 ]主标题文字的字体大小</li>
    <li>align:string,文字水平对齐方式，默认自动。[可选：'left','right','center']</li>
    <li>verticalAlign:string,文字垂直对齐方式，默认自动。[可选:'top','middle','bottom']</li>
    <li>lineHeight :number</li>
    <li>width :number,string,文字块的 width 和 height 指定的是内容高宽，不包含 padding。</li>
    <li>height:number,string, </li>
    <li>textBorderColor:string,[ default: 'transparent' ]文字本身的描边颜色。</li>
    <li>textBorderWidth :number,[ default: 0 ],文字本身的描边宽度。</li>
    <li>textShadowColor :string,[ default: 'transparent' ],文字本身的阴影颜色。</li>
    <li>textShadowBlur :number,[ default: 0 ]文字本身的阴影长度</li>
    <li>textShadowOffsetX :number,[ default: 0 ]，文字本身的阴影 X 偏移。</li>
    <li>textShadowOffsetY：number，[ default: 0 ]，文字本身的阴影 Y 偏移。</li>
</ul>
<p>7.subtext：string,[ default: '' ]，副标题文本，支持使用 \n 换行。</p>
<p>8.sublink：string，[ default: '' ]，副标题文本超链接。</p>
<p>
    9.subtarget：string，[ default: 'blank' ]指定窗口打开副标题超链接,<br/>
    [可选：'self' 当前窗口打开，'blank' 新窗口打开]
</p>
<p>10.subtextStyle:副标题样式，其中包含的配置项与textStyle一样</p>
<p>11.triggerEvent：boolean，[ default: false ]，是否触发事件</p>
<p>
    12.padding：number，[ default: 5 ]标题内边距，单位px，<br/>
    默认各方向内边距为5，接受数组分别设定上右下左边距。
    <ul>
        <li>设置内边距为5: padding: 5</li>
        <li>设置上下的内边距为 5，左右的内边距为 10: padding: [5, 10]</li>
        <li>分别设置四个方向的内边距:</li>
        <li>
            padding: [5, // 上 10, // 右 5,  // 下 10, // 左]
        </li>
    </ul>
</p>
<p>
13.itemGap:number,[ default: 10 ],主副标题之间的间距。
</p>
<p>
14.left :string, number [ default: 'auto' ] grid 组件离容器左侧的距离。
</p>
<p>
left 的值可以是像 20 这样的具体像素值，可以是像 '20%' 这样相对于容器高宽的百分比，也可以是 'left', 'center', 'right'。
</p>
<p>
15.top :string, number,[ default: 'auto' ],grid 组件离容器上侧的距离。
</p>
<p>
top 的值可以是像 20 这样的具体像素值，可以是像 '20%' 这样相对于容器高宽的百分比，也可以是 'top', 'middle', 'bottom'。
</p>
<p>
16.right string, number,[ default: 'auto' ],grid 组件离容器右侧的距离。
</p>
<p>right 的值可以是像 20 这样的具体像素值，可以是像 '20%' 这样相对于容器高宽的百分比。</p>
<p>17.bottom:string, number,[ default: 'auto' ],grid 组件离容器下侧的距离。</p>
<p>bottom 的值可以是像 20 这样的具体像素值，可以是像 '20%' 这样相对于容器高宽的百分比。</p>
<p>18.backgroundColor:Color,[ default: 'transparent' ],标题背景色，默认透明。</p>
<p>
颜色可以使用 RGB 表示，比如 'rgb(128, 128, 128)' ，如果想要加上 alpha 通道，可以使用 RGBA，比如 'rgba(128, 128, 128, 0.5)'，也可以使用十六进制格式，比如 '#ccc'
</p>
<p>
    19.borderColor: Color,[ default: '#ccc' ],标题的边框颜色。支持的颜色格式同 backgroundColor。
</p>
<p>
    20.borderWidth :number,[ default: 0 ],标题的边框线宽。
</p>
<p>
    21.borderRadius: number, Array,[ default: 0 ],圆角半径，单位px，<br/>
    支持传入数组分别指定 4 个圆角半径。 如:<br/>
    borderRadius: 5, // 统一设置四个角的圆角大小<br/>
    borderRadius: [5, 5, 0, 0] //（顺时针左上，右上，右下，左下）
</p>
<p>
22.shadowBlur:number,图形阴影的模糊大小。该属性配合 shadowColor,shadowOffsetX, shadowOffsetY 一起设置图形的阴影效果。
<br/>
示例：
<br/>
{<br/>
    shadowColor: 'rgba(0, 0, 0, 0.5)',<br/>
    shadowBlur: 10<br/>
}<br/>
注意：此配置项生效的前提是，设置了 show: true 以及值不为 tranparent 的背景色 backgroundColor。
</p>
<p>
23.shadowColor :Color,阴影颜色。支持的格式同color。<br/>
注意：此配置项生效的前提是，设置了 show: true。
</p>
<p>
24.shadowOffsetX :number,[ default: 0 ],阴影水平方向上的偏移距离。<br/>
注意：此配置项生效的前提是，设置了 show: true。
</p>
<p>
25.shadowOffsetY: number,[ default: 0 ],阴影垂直方向上的偏移距离。<br/>
注意：此配置项生效的前提是，设置了 show: true。
</p>
