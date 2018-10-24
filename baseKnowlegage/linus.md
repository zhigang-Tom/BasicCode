####linus 常用知识收集

#####linus常用命令
<p>
pwd:查看当前文件夹路径
</p>

<p>
cp:复制
</p>

<p>
mv:重命名
</p>

<p>
cat:
</p>

<p>
mkdir:
</p>

#####scp远程上传下载文件命令

######1.scp从服务器下载文件到本地
<p>
scp cloud@192.168.99.253:/home/cloud/work/cloud/package.json /home/fengzhigang/work
从192.168.99.253服务器上下载package.json文件到本地work目录下，其中cloud是服务器用户名
</p>


######2.scp上传本地文件到服务器
<p>
scp /home/fengzhigang/work/cloud/tenantapp/app.apk
cloud@192.168.99.253:/home/cloud/work/cloud_dist/tenantapp
将本地tenantapp目录下的app.apk文件上传到服务器tenantapp目录下
</p>


######3.scp从服务器下载整个目录

<p>
 scp -r cloud@192.168.99.253:/home/cloud/work/cloud/tenantapp/project
 /home/fengzhigang/work 
 将服务器上tenantapp目录下的project目录下载到本地work目录下
</p>


######4.scp上传目录到服务器

<p>
scp  -r local_dir username@servername:remote_dir
例如：scp -r test  codinglog@192.168.0.101:/var/www/   
把当前目录下的test目录上传到服务器的/var/www/ 目录
</p>

####linus软连接

<p>
软连接，以路径形式存在，类似于windows系统中的快捷方式
</p>

<p>
 ln是linux中又一个非常重要命令，它的功能是为某一个文件在另外一个位置建立一个同步的链接.当我们需要在不同的目录，用到相同的文件时，我们不需要在每一个需要的目录下都放一个必须相同的文件，我们只要在某个固定的目录，放上该文件，然后在 其它的目录下用ln命令链接（link）它就可以，不必重复的占用磁盘空间。
</p>

#####创建软连接
<p>
ln -s /home/fengzhigang/work/cloud/tenantapp /home/fengzhigang/work/test
ln -s命令用于创建软连接，
上面例子解释：从/home/fengzhigang/work/cloud/tenantapp目录连接到/home/fengzhigang/work/test
test是软连接
</p>

#####查看软连接
<p>
用命令ls到指定目录查看软连接
</p>

#####修改软连接
<p>
ln -snf /home/fengzhigang/work/cloud/app /home/fengzhigang/work/test
ln -snf 命令用于修改软连接, 修改原文件路径
上面的例子解释：将原来/home/fengzhigang/work/cloud/tenantapp目录改为
/home/fengzhigang/work/cloud/app
</p>

#####删除软连接
<p>
rm -rf test
rm -rf 用于删除软连接
</p>