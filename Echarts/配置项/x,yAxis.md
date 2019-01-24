####x,y轴
<p>
    直角坐标系 grid 中的 x 轴，一般情况下单个 grid 组件最多只能放上下两个 x 轴，多于两个 x 轴需要通过配置 offset 属性防止同个位置多个 x 轴的重叠。
</p>
<p>
    1.id string 组件 ID。默认不指定。指定则可用于在 option 或者 API 中引用组件。
</p>
<p>
    2.show boolean [ default: true ] 是否显示 x 轴。
</p>
<p>
    3.position string x 轴的位置。<br/>
    可选：'top','bottom'<br/>
    默认 grid 中的第一个 x 轴在 grid 的下方（'bottom'），第二个 x 轴视第一个 x 轴的位置放在另一侧。
</p>
<p>
    4.offset number [ default: 0 ]<br/>
    X 轴相对于默认位置的偏移，在相同的 position 上有多个 X 轴的时候有用。
</p>
<p>
    5.type string [ default: 'category' ] 坐标轴类型,可选
</p>
<ul>
    <li>'value' 数值轴，适用于连续数据。</li>
    <li>'category' 类目轴，适用于离散的类目数据，为该类型时必须通过 data 设置类目数据。</li>
    <li>'time' 时间轴，适用于连续的时序数据，与数值轴相比时间轴带有时间的格式化，在刻度计算上也有所不同，例如会根据跨度的范围来决定使用月，星期，日还是小时范围的刻度。</li>
    <li>'log' 对数轴。适用于对数数据。</li>
</ul>
<p>
    6.name string 坐标轴名称。
</p>
<p>
    7.nameLocation string [ default: 'end' ] 坐标轴名称显示位置。可选：
</p>
<ul>
    <li>'start'</li>
    <li>'middle' 或者 'center'</li>
    <li>'end'</li>
</ul>
<p>
    8.nameTextStyle Object 坐标轴名称的文字样式，与其他的textStyle样式一样
</p>
<p>
    9.nameGap number [ default: 15 ] 坐标轴名称与轴线之间的距离。
</p>
<p>
    10.min number, string, function [ default: null ] 坐标轴刻度最小值。<br/>
    可以设置成特殊值 'dataMin'，此时取数据在该轴上的最小值作为最小刻度。不设置时会自动计算最小值保证坐标轴刻度的均匀分布。<br/>
    在类目轴中，也可以设置为类目的序数（如类目轴 data: ['类A', '类B', '类C'] 中，序数 2 表示 '类C'。也可以设置为负数，如 -3）。<br/>
    当设置成 function 形式时，可以根据计算得出的数据最大最小值设定坐标轴的最小值。如：
    <pre>
    min: function(value) {
        return value.min - 20;
    }
    </pre>
    其中 value 是一个包含 min 和 max 的对象，分别表示数据的最大最小值，这个函数应该返回坐标轴的最小值。
</p>
<p>
    11.max number, string [ default: null ] 坐标轴刻度最大值,<br/>
    可以设置成特殊值 'dataMax'，此时取数据在该轴上的最大值作为最大刻度。不设置时会自动计算最大值保证坐标轴刻度的均匀分布。<br/>
    在类目轴中，也可以设置为类目的序数（如类目轴 data: ['类A', '类B', '类C'] 中，序数 2 表示 '类C'。也可以设置为负数，如 -3）。<br/>
    当设置成 function 形式时，可以根据计算得出的数据最大最小值设定坐标轴的最小值。如：
    <pre>
    max: function(value) {
        return value.max - 20;
    }
    </pre>
    其中 value 是一个包含 min 和 max 的对象，分别表示数据的最大最小值，这个函数应该返回坐标轴的最大值。
</p>
<p>
    12.splitNumber number [ default: 5 ] 坐标轴的分割段数，<br/>
    需要注意的是这个分割段数只是个预估值，最后实际显示的段数会在这个基础上根据分割后坐标轴刻度显示的易读程度作调整。 在类目轴中无效。
</p>
<p>
    13.minInterval number [ default: 0 ] 自动计算的坐标轴最小间隔大小。<br/>
    例如可以设置成1保证坐标轴分割刻度显示成整数。
    <pre>
    {
        minInterval: 1
    }
    </pre>
    <br/>
    只在数值轴或时间轴中（type: 'value' 或 'time'）有效。
</p>
<p>
    14.maxInterval number 自动计算的坐标轴最大间隔大小。
    例如，在时间轴（（type: 'time'））可以设置成 3600 * 24 * 1000 保证坐标轴分割刻度最大为一天。<br/>
    <pre>
    {
        maxInterval: 3600 * 24 * 1000
    }
    </pre>
    只在数值轴或时间轴中（type: 'value' 或 'time'）有效。
</p>
<p>
    15.interval number 强制设置坐标轴分割间隔。
    因为 splitNumber 是预估的值，实际根据策略计算出来的刻度可能无法达到想要的效果，这时候可以使用 interval 配合 min、max 强制设定刻度划分，一般不建议使用。<br/>
    无法在类目轴中使用。在时间轴（type: 'time'）中需要传时间戳，在对数轴（type: 'log'）中需要传指数值。
</p>
<p>
    16.
</p>
