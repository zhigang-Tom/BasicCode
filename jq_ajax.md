####JQuery ajax参数与get post方法

#####1.参数
<p>
$.ajax(options)该方法只有一个参数options,但是该参数包含此方法请求时的所有参数，以键/值的形式展现,具体如下所示
</p>

<p>
1.url 要求为String类型的参数，默认为当前地址[发送请求的页面]
</p>

<p>
2.type 要求为String类型的参数，请求方式，默认为get 其他http请求方法[put,detele]仅部分浏览器支持
</p>

<p>
3.timeout 要求为Number类型的参数，设置请求超时时间[毫秒]
</p>

<p>
4.async 要求为Boolean类型的参数，默认设置为true，所有请求均为异步，如果需要同步请求，此参数设置为false，同步请求会锁住浏览器，用户其他操作须等待请求完成才可执行
</p>

<p>
5. cache 要求为Boolean类型参数，默认为true[当dataType为script时默认为false] ，设置为false将不会从浏览器缓存中加载请求信息
</p>

<p>
6.data 要求为Object或String类型的参数，发送到服务器的数据。如果不是字符串，将自动转换为字符串格式。get请求中将附加在URL后。防止这种自动转换，对象必须为key/value格式，例如{foo1:"bar1",foo2:"bar2"}转换为&foo1=bar1&foo2=bar2。如果是数组JQuery将自动为不同值对应同一个名称。例如{foo:["bar1","bar2"]}转换为&foo=bar1&foo=bar2。
</p>

<p>
7.dataType 要求为String类型的参数，预期服务器返回的数据类型,如果不指定，jQuery将自动根据HTTP包的MIME信息返回responseXML或responseText，并作为回调函数参数传递。可用的类型如下：
</p>

<p>
json：返回JSON数据。
text：返回纯文本字符串.
xml：返回XML文档，可用jQuery处理。
html：返回纯文本HTML信息；包含的script标签会在插入DOM时执行。
script：返回纯文本javascript代码。不会自动缓存结果，除非设置了cache参数。注意在远程请求时（不在同一个域下），所有post请求都将转为get请求。
jsonp:JSON格式。使用JSONP形式调用函数时，例如myurl?callback=?，JQuery将自动替换后一个“?”为正确的函数名，以执行回调函数。
</p>

<p>
8.beforeSend 要求为function类型的参数，发送请求前可以修改XMLHttpRequest对象的函数，例如添加自定义HTTP头。在beforeSend中如果返回false可以取消本次ajax请求。XMLHttpRequest对象是唯一的参数。
</p>

<p>
9.complete 要求为function类型的参数，请求完成后调用的回调函数（请求成功或失败均调用。参数：XMLHttpRequest对象和一个描述成功请求类型的字符串
</p>

```
function(XMLHttpRequest,textStatus){
　　tihs;//调用本次ajax请求时传递的options参数
}

```
<p>
10.success 要求为Function类型的参数，请求成功后调用的回调函数，有两个参数。1.由服务器返回，并根据dataType参数进行处理后的数据。2.描述状态的字符串.
</p>

```
function(data,textStatus){
　//data可能是xmlDoc、jsonObj、html、text等
　this;//调用本次ajax请求时传递的options参数
}
```
<p>
 11.error 要求为Function类型的参数，请求失败时被调用的函数。该函数有3个参数，XMLHttpRequest对象、错误信息、捕获的错误对象[可选].
</p>

```
function(XMLHttpRequest,textStatus,errorThrown)
{
//通常情况下textStatus和errorThrown只有其中一个包含信息
this;//调用本次ajax请求时传递的options参数　　
}

```
<p>
12..contentType 要求为String类型的参数，当发送信息至服务器时。内容编码类型默认为"application/x-www-form-urlencoded"。该默认值适合大多数应用场合。
</p>

#####2.get请求
```
$.ajax({
    type:'GET',
    url: SERVER_URL + 'v1/device/list',
    dataType: 'json',
    data: par ,//par为对象
    beforeSend: function(request) {
            request.setRequestHeader("Authorization", Token);
        },
    success:function(result) {       
        // result 为获取的数据                 
        },
        error:function(error) {
            console.log( 'error', error)
        }
    });
```
#####3.post请求

```
$.ajax({
    type:'PUT',
    url: SERVER_URL + 'v1/device/update',
    dataType: 'json',
    contentType: 'application/json',
    data: JSON.stringify(obj),
    beforeSend: function(request) {
            request.setRequestHeader("Authorization", Token);
        },
    success:function(result) {
        // result 为请求的结果
        }，			               
        error:function(error) {
            console.log( 'error', error)
        }
  	  });	

```