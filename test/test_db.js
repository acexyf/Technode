var request = require('request');
var cheerio = require('cheerio');
var mysql = require('mysql');
var debug = require('debug')('blog:update');

var db = mysql.createConnection({
	host: '127.0.0.1',
	port: 3306,
	database: 'sina_blog',
	user: 'root',
	password: 'root'
});
db.query('show tables',function(err,tables){
	console.log(tables);
	db.end();
});

