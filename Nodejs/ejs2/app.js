var express = require('express');
var app = express();
app.use(express.static('public'))

//设置模板引擎
app.set('view engine', 'ejs'); // 模板引擎的类型设置
app.set('views', 'views'); // 设置模板的存放位置

app.get('/home', function(req, res) {
    //返回结果
    res.render('home'); // 代码会自动到 views 下寻找一个名为 home.ejs的文件
});

app.get('/admin', function(req, res) {
    //在模板中显示数据
    // var data = {
    //  title: '小商城'
    // };
    // res.render('admin', data);
    //数据解析
    res.render('admin', {title:'大杂货铺'});
});

// 不解析转义 html 字符串
// <%- pages %>
// 转义 html 字符串
// <%= pages %>
app.get('/center', function(req, res) {
    res.render('center', { pages: '<a href="">大</a><a href="">小</a>' })
});

//include(路径,JSON参数) 使用
app.get('/page', function(req, res) {
    res.render('page',{title:'商城网'});
});

//流程控制
app.get('/if', function(req, res) {
    res.render('condition', { vip: 1, hasLogin: 0 });
});

//循环控制
app.get('/for', function(req, res) {
    var users = [
        { name: 'AAAA', age: 20 },
        { name: 'BBB', age: 10 },
        { name: 'CCC', age: 22 },
        { name: 'DDD', age: 18 },
        { name: 'EEE', age: 19 },
    ];

    var goods = [
      {
            "id": 3,
            "title": "碎花连衣裙雪纺中长款秋冬季长袖打底宽松文艺娃娃长裙小清新印花",
            "price": 78.75,
            "pic": "http:\/\/s2.mogucdn.com\/p2\/170116\/upload_7731jih3jdd1871gk7hdei49kai24_640x900.jpg_224x340.jpg",
            "user_id": 3
        },
        {
            "id": 4,
            "title": "秋新款性感修身小香风单露肩裙不规则斜肩连衣裙",
            "price": 128.75,
            "pic": "http:\/\/s2.mogucdn.com\/p2\/170111\/1489163244_5f88c91c5cdf08262k446i4k3ffaa_640x900.jpg_224x340.jpg",
            "user_id": 1
        },
        {
            "id": 5,
            "title": "小番茄定制春装新款绿色碎花连衣裙复古气质显瘦长袖中长款裙子",
            "price": 122.50,
            "pic": "http:\/\/s2.mogucdn.com\/p2\/170116\/upload_4ld75e9jkc4jecl80a7f20k08l9e8_640x900.jpg_224x340.jpg",
            "user_id": 2
        },
        {
            "id": 6,
            "title": "【Lin同款】百搭纯手工亮片连衣裙",
            "price": 225.00,
            "pic": "http:\/\/s2.mogucdn.com\/p2\/170209\/upload_80200eebh97i7lb23jggh4gg0eaai_640x900.jpg_224x340.jpg",
            "user_id": 1
        },
        {
            "id": 7,
            "title": "2017春季新款韩版时尚百搭显瘦系带长袖中长款宽松衬衫连衣裙",
            "price": 106.00,
            "pic": "http:\/\/s2.mogucdn.com\/p2\/170208\/1190070835_1d2hhe6jke349fggk200je9dek29c_640x832.jpg_224x340.jpg",
            "user_id": 1
        },
        {
            "id": 8,
            "title": "【蕾丝公主裙】春新欧美名媛气质长袖蛋糕裙连衣裙",
            "price": 116.47,
            "pic": "http:\/\/s2.mogucdn.com\/p2\/161215\/1492306463_3kh1dgkahadgig344ag5jiec28abc_640x900.jpg_224x340.jpg",
            "user_id": 1
        },
        {
            "id": 9,
            "title": "【金属扣连衣裙】韩国秋冬季新款金属环扣灯芯绒背带连衣裙",
            "price": 61.94,
            "pic": "http:\/\/s2.mogucdn.com\/p2\/161208\/1492306463_0bh3heel54658ihkb4cgebk66jb6e_640x900.jpg_224x340.jpg",
            "user_id": 2
        }
    ];

    res.render('for', { users: users , goods:goods});
})



app.listen(80);