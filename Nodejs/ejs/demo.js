var http=require('http');

var fs=require('fs');

var ejs=require('ejs');

http.createServer(function(req,res){
  var dataList={"list":[{"name":"张三","age":20},{"name":"李四","age":21}]};  
  // console.log(req.url);
  fs.readFile('demo.html',function(err,data){
    // console.log(data);
    var datas=data.toString();
    var html=ejs.render(datas,dataList);
    res.end(html);
  });

}).listen(80);