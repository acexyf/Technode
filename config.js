var mysql=require('mysql');
exports.db=mysql.createConnection({
	host:'127.0.0.1',
	port:3306,
	database:'sina_blog',
	user:'root',
	password:'root'
});

exports.sinaBlog={
	url:'http://blog.sina.com.cn/u/1776757314'
}

// Web服务器端口
exports.port = 3000;

// 定时更新
exports.autoUpdate = '* */30 * * *';  // 任务执行规则，参考 cron 语法







