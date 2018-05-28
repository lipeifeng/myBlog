//导入
var tool = require('./tool.js');

//添加名字的
var m = tool.rand(0,10);
var me = tool.obj;

//直接导入
var fan = require('./tool-2.js');

//使用 exports 导出
var lei = require('./tool-3.js');

//导入文件夹
var abc = require('./abc');


console.log(abc());