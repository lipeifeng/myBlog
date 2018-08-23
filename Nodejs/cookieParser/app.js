var express = require('express');
var app = express();

//引入cookie-parser
var cookieParser = require('cookie-parser');
//设置
app.use(cookieParser());

//路由
app.get('/setCookie', function(req,res){
  //写入cookie
  res.cookie('name','slig');//响应头中
  res.end('ok');
});

//获取cookie
app.get('/getCookie', function(req,res){
  //获取
  console.log(req.cookies.name);
  res.setHeader('content-type','text/html;charset=utf-8');
  res.end('获取cookie')
});

//删除cookie
app.get('/delCookie', function(req, res){
  res.clearCookie('name');
  res.end('clear cookie');
});

app.listen(80);