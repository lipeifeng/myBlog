var express =require('express');
var formidable = require('formidable');
var router = express.Router();

var util = require('util');
var app = express();
var fs = require('fs');

//设置模板引擎
app.set('view engine', 'ejs');
app.set('views','views');

//路由    GET /form  显示表单    POST /form 处理表单数据
app.get('/form', function(req,res){
  //显示表单
  res.render('form');
});

//处理表单
app.post('/form', function(req,res){
  // console.log(req);
  var form = new formidable.IncomingForm();
  var dir = './public/uploads'
  // 如果文件夹不存在
  if(!fs.existsSync(dir)){
    fs.mkdirSync(dir);
  }
  
  //上传的文件夹位置
  form.uploadDir = dir;
  //设置保留文件后缀
  form.keepExtensions = true;

    form.parse(req, function(err, fields, files) {
      res.writeHead(200, {'content-type': 'text/plain'});
      res.write('received upload:\n\n');
      res.end(util.inspect({fields: fields, files: files}));

      //单个参数的获取
      // var username = fields.username;
      // console.log(username);
      // res.end('over');
    });

    return;
  
});

//启动
app.listen(3000);