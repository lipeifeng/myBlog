let express=require('express');
let app=express();

app.use(express.static('public'));

app.use('/',require('./routes/home.js'));
app.use('/',require('./routes/admin.js'));


// 带参数 :id 
// https://i.cnblogs.com/Preferences.aspx
// /:id.aspx
// app.get('/:id.aspx',function(req,res){
//   //获取请求的参数
//   let num=req.params.id;
//   res.setHeader('content-type','text/html;charset=utf-8');
//   res.end('文章操作页面,请求参数:  '+num);
// });

// // 正则路由  
// // /12345.html
// app.get(/^\/\d+\.html$/,function(req,res){
//   res.setHeader('content-type','text/html;charset=utf-8');
//   res.end('RegEXp');
// });


app.listen(80);