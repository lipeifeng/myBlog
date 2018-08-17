let express=require('express');
let router=express.Router();

// GET  /admin 显示 后台首页
router.get('/admin',function(req,res){
  res.setHeader('content-type','text/html;charset=utf-8');
  res.end('后台首页');
});

module.exports=router;