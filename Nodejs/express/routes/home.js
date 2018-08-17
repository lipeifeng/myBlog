let express=require('express');
let router=express.Router();

// GET  /home 显示 网站首页
router.get('/home',function(req,res){
  res.setHeader('content-type','text/html;charset=utf-8');
  res.end('网站首页');
});

// GET  /login  显示 登陆页面
router.get('/login',function(req,res){
  res.setHeader('content-type','text/html;charset=utf-8');
  res.end('登陆页面');
});

// POST /login 登陆操作
router.post('/login',function(req,res){
  res.setHeader('content-type','text/html;charset=utf-8');
  res.end('登陆操作');
});

// get /index.html 
// router.post('/index.html',function(req,res){
//   res.setHeader('content-type','text/html;charset=utf-8');
//   res.end('主页面666');
// });

module.exports=router;