var express =require('express');
var session = require('express-session');

var app = express();

app.use(session({
  secret: 'dsfadsafdassadfasdf', //加密 ，必填参数
  resave: false, //选填参数  不加会报警告（重写）
  //resave:true 强制将session数据进行重写，反之亦然
  saveUninitialized: false,// 选填参数  不加会报警告（初始化）
  //saveUninitialized: false 用到session时才会去初始化 
  //saveUninitialized: true 不管用不用到session都会初始化 
  cookie: { maxAge: 600000 },//session 的实现是默认依赖 cookie
  name: 'niubibu'
}));

//设置静态资源目录
app.use(express.static('public'));

app.set('view engine','ejs');
app.set('views','views');

//路由
app.get('/setSession', function(req,res){
  //设置session
  req.session.username = 'admin';

  res.end('set session');
})

//读取session
app.get('/getSession', function(req, res){
  console.log(req.session.username);
  res.end('get session');
})

app.listen(80);