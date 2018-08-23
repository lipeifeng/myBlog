var express = require('express');
var app = express();
//引入cookie-parser
var cookieParser = require('cookie-parser');
var formidable = require('formidable');
//设置
app.use(cookieParser());
//模板
app.set('view engine', 'ejs');
app.set('views','views');

// 没有登陆可以访问   
//  /home   /list 

// 必须之后之后才可以访问 
//  /admin

//  登陆页面 
//  GET /login    
// 实现登陆  （账号：admin  密码：admin） 为后台管理员账号密码
// //检测用户是否登陆  cookie.id 有值  cookie.admin = 1
//  POST /login

app.get('/home',function(req,res){
  res.setHeader('content-type','text/html;charset=utf-8');
  res.end('网站首页!!!');
});

app.get('/list',function(req,res){
  res.setHeader('content-type','text/html;charset=utf-8');
  res.end('网站列表页!!!');
});

//网站后台
app.get('/admin',function(req,res){
  //检测用户是否登陆  cookie.id 有值  cookie.admin = 1
  if(req.cookies.id && req.cookies.admin == 1){
    res.setHeader('content-type','text/html;charset=utf-8');
    res.end('网站后台!!!');
  }else{
    res.redirect('/login');
  }
});

//登陆页面
app.get('/login', function(req,res){
  //显示表单
  res.render('login');
});

//登陆操作
app.post('/login', function(req,res){
  //获取参数
  var form = new formidable.IncomingForm();
    form.parse(req, function(err, fields, files) {
      //fields 对象
      if(fields.username == 'admin' && fields.password == 'admin'){
        //参数正确  写入cookie
        res.setHeader('content-type','text/html;charset=utf-8');
        res.cookie('id', 100, {maxAge: 600000});
        res.cookie('admin', 1, {maxAge: 600000});
        res.end('登陆成功');
      }else{
        //参数错误 跳转到 登陆页面
        res.redirect('/login');
      }
    });
});

app.listen(80);