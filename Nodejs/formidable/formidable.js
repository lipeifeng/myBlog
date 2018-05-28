var http = require('http');
var formidable = require('formidable');
var fs = require('fs');

var server = http.createServer(function(req, res){
	// GET  /form
	if(req.method == 'GET' && req.url == '/form') {
		fs.readFile('./form.html', function(err, data){
			res.setHeader('content-type','text/html;charset=utf-8');
			res.end(data);
		});
	}else if(req.method=="POST" && req.url=="/form") {
		//
		var form = new formidable.IncomingForm();
 		//设置要存储的文件夹位置  这里要手动创建一个
 		form.uploadDir = "./uploads";
 		//保留文件后缀名
 		form.keepExtensions = true;
	    form.parse(req, function(err, fields, files) {
	      console.log({fields: fields, files: files})
	      res.end('ok');
	    });
	}else{
		res.end('404');
	}


	// POST /form

});

server.listen(80);