//  GET  /home    显示HTML页面

var express = require('express');

var app = express();

//静态资源

//路由
app.get('/home', function(req,res){
  var isVip = true;
  var title = '商城';
  var type = isVip ? 'VIP 用户' : '普通用户';

  //显示html文档
  res.end(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>`+title+`</title>
</head>
<body>
  `+type+`
  <span style="color:red">网站首页</span>
</body>
</html>`);
});

app.get('/list', function(req,res){
  var isVip = true;
  var title = '商城';
  var type = isVip ? 'VIP 用户' : '普通用户';

  //显示html文档
  res.end(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>`+title+`</title>
</head>
<body>
  `+type+`
  <span style="color:red">网站首页</span>
</body>
</html>`);
});


app.listen(8080);