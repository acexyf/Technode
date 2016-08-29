var cheerio=require('cheerio');
var $ =cheerio.load('<h2 class="title">Hello World</h2>');
console.log($('.title').html());

