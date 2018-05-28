//遍历显示文件夹中的内容
var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
	//获取请求路径
	var url = req.url; //   /css   =>  './web/css'

	//读取 web 文件夹中的文件列表
	var dir = './web';

	//添加响应头信息
	res.setHeader('content-type','text/html;charset=utf-8');
	//设置 css 样式
	res.write(`
	<link rel="shortcut icon" href="#" />
	<style>
		.directory a{
			color:red
		}
	</style>
		`)

	if(url == '/') {
		fs.readdir(dir, function(err, data){
			if(err) {
				console.log(err);
				return;
			}

			var html = '<ul>';
			for(var i=0;i<data.length;i++){
				var filePath = dir+'/'+data[i];//admin.html   =>   ./web/admin.html
				var stats = fs.statSync(filePath);// statSync('admin.html')
				//如果是文件夹
				if(stats.isDirectory()) {
					html += '<li class="directory">[文件夹]<a href="/'+data[i]+'">'+data[i]+'</a></li>';
				}else{
					html += '<li class="file">[文件]'+data[i]+'</li>';
				}
			}
			html += '</ul>';
			

			res.end(html);

		});
	} else {
		var path = dir + url;
		console.log(path);
		// return;

		//读取子目录中的文件列表
		fs.readdir(path, function(err, data){
			// console.log(data);
			// return;
			var html = '<ul>'
			for(var i=0;i<data.length;i++){
				var filePath = path+'/'+data[i];// ./web/app.css

				var stats = fs.statSync(filePath);// statSync('admin.html')
				//如果是文件夹
				if(stats.isDirectory()) {
					html += '<li class="directory">[文件夹]<a href="/'+data[i]+'">'+data[i]+'</a></li>';
				}else{     var a='<li>[a]<a href="/'+a+'">'+data[i]+'</li>'
					html += '<li class="file">[文件]'+data[i]+'</li>';
				}
			}
			html += '</ul>';

			//输出
			res.end(html);
		});
	}

});

server.listen(8080);
