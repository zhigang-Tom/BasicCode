####grid
<p>grid:直角坐标系内绘图网格</p>
<p>
    1.id string 组件 ID。默认不指定。指定则可用于在 option 或者 API 中引用组件。
</p>
<p>
    2.show boolean [ default: false ] 是否显示直角坐标系网格。
</p>
<p>
    3.left string, number [ default: '10%' ] grid 组件离容器左侧的距离。<br/>
    left 的值可以是像 20 这样的具体像素值，可以是像 '20%' 这样相对于容器高宽的百分比，也可以是 'left', 'center', 'right'。
</p>
<p>
    4.top string, number [ default: 60 ] grid 组件离容器上侧的距离。<br/>
    top 的值可以是像 20 这样的具体像素值，可以是像 '20%' 这样相对于容器高宽的百分比，也可以是 'top', 'middle', 'bottom'。
</p>
<p>
    5.right string, number [ default: '10%' ] grid 组件离容器右侧的距离。<br/>
    right 的值可以是像 20 这样的具体像素值，可以是像 '20%' 这样相对于容器高宽的百分比。
</p>
<p>
    6.width string, number [ default: 'auto' ] grid 组件的宽度。默认自适应。
</p>
<p>
    7.height string, number [ default: 'auto' ] grid 组件的高度。默认自适应。
</p>
<p>
    8.containLabel boolean [ default: false ] grid 区域是否包含坐标轴的刻度标签。
</p>
<p>
    9.backgroundColor Color [ default: 'transparent' ] 网格背景色，默认透明。<br/>
    颜色可以使用 RGB 表示，比如 'rgb(128, 128, 128)' ，如果想要加上 alpha 通道，可以使用 <br/>RGBA，比如 'rgba(128, 128, 128, 0.5)'，也可以使用十六进制格式，比如 '#ccc'<br/>
    注意：此配置项生效的前提是，设置了 show: true。
</p>
<p>
    10.borderWidth number [ default: 1 ] 网格的边框线宽。<br/>
    注意：此配置项生效的前提是，设置了 show: true。
</p>