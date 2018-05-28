var axios = require('axios');
var fs = require('fs');

//发送 get 请求
// axios.get('http://www.xiaohigh.com').then(function(response){
	// console.log(response.status);
	// console.log(response.headers);
	// console.log(response.data);
// });

//发送 POST 请求
// axios.post('http://localhost:3000/message',{mobile:'13683133490',code: '5211314'}).then(function(response){
// 	console.log(response.data);
// })

//头信息请求
// axios.get('http://www.aliyun.com/mail?code=156764', {
// 	headers:{
// 		'auth': 'xiaohigh developer'
// 	}
// })

//抓取数据
axios.get('http://tech.sina.com.cn/i/2018-03-16/doc-ifyshfuq1951840.shtml').then(function(response){
	// fs.writeFile('./1.html', response.data, function(err){

	// })  123
  //正则 () => 增加子组 
	var reg = /<h1 class="main-title">(.*?)<\/h1>/;

	var title = reg.exec(response.data)

	console.log(title[1]);
});

