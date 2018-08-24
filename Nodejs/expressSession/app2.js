var express =require('express');
var session = require('express-session');
var formidable = require('formidable');

var app = express();

app.set('view engine','ejs');
app.set('views','views');

app.use(session({
  secret: 'dsfadsafdassadfasdf', //加密 ，必填参数
  resave: false, //选填参数  不加会报警告（重写）
  //resave:true 强制将session数据进行重写，反之亦然
  saveUninitialized: false,// 选填参数  不加会报警告（初始化）
  //saveUninitialized: false 用到session时才会去初始化 
  //saveUninitialized: true 不管用不用到session都会初始化 
  cookie: { maxAge: 600000,httpOnly: false },//session 的实现是默认依赖 cookie
  name: 'niubibu'//session名称
}));

// GET /home 网站首页   /detail 商品详情页    不需要登陆
// GET /admin 网站后台  必须要登陆
// GET /login  显示登陆页面
// POST /login  检测用户参数  账号：admin  密码：admin

//首页
app.get('/home', function(req,res){
  res.setHeader('content-type','text/html;charset=utf-8');
  res.end('网站首页!!!');
});

//详情页
app.get('/detail', function(req,res){
  res.setHeader('content-type','text/html;charset=utf-8');
  res.end('商品详情页!!!');
});

//后台首页
app.get('/admin', function(req,res){
  //检测用户的身份  设置session：admin=1&id=19
  if(req.session.admin == 1 && req.session.id) {
    res.setHeader('content-type','text/html;charset=utf-8');
    res.end('网站后台!!!');
    return;
  }

  res.redirect('/login');
});

//显示登陆
app.get('/login', function(req, res){
  res.render('login');
});

//登陆操作
app.post('/login', function(req, res){
  //获取用户参数
  var form = new formidable.IncomingForm();
    form.parse(req, function(err, fields, files) {
      //判断
      if(fields.username == 'admin' && fields.password == 'admin'){
      res.setHeader('content-type','text/html;charset=utf-8');
        //登陆成功
        //写入session
        req.session.admin = 1;
        req.session.id = 20;

        //3秒后跳转后台页面：第一种方法
        // res.redirect('/admin');
        // res.end(`登陆成功<script>setTimeout(function(){
        //  location.href= "/admin";
        // },3000)</script>`);
        // 
        //3秒后跳转后台页面：第二种方法
        res.render('success',{info: '登陆成功', time: 10000, url: '/admin'});
      } else {
        res.redirect('/login');
      } 
    });
}); 


//设置静态资源目录
app.use(express.static('public'));

app.set('view engine','ejs');
app.set('views','views');


app.listen(80);