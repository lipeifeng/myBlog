//添加名字导出
//
//随机数
function rand(m,n) {
	return Math.ceil(Math.random() * (n-m+1)) +m-1;
}

var obj = {
	name: 'jackie',
	age: 22,
	height: '180cm',

	teach: function(){
		console.log('我可以讲课啊!!');
	}
}

//导出
module.exports.rand = rand;
module.exports.obj = obj;
