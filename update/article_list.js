var request=require('request');
var cheerio=require('cheerio');
var debug=require('debug');
debug('读取博文列表');


function readArticleList(url,callback){
	request(url,function(err,res){
		if(err){
			return;
		}
		var $=cheerio.load(res.body.toString());
		var articleList=[];
		$('.articleList .articleCell').each(function(){
			var $me=$(this);
			var $title=$me.find('.atc_title a');
			var $time=$me.find('.atc_tm');
			var item={
				title:$title.text().trim(),
				url:$title.attr('href'),
				time:$time.text().trim()
			}
			var s=item.url.match(/blog_([a-zA-Z0-9]+)\.html/);
			if(Array.isArray(s)){
				item.id=s[1];
				articleList.push(item);
			}
		});
		
		//检查是否有下一页
		var nextUrl=$('SG_pgnext a').attr('href');
		if(nextUrl){
			readArticleList(nextUrl,function(err,articleList2){
				if(err)
					return;
				callback(null,articleList.concat(articleList2));
			});
		}
		else{
			callback(null,articleList);
		}
	});
}

readArticleList('http://blog.sina.com.cn/s/articlelist_1776757314_0_1.html',function(err,articleList){
	console.log(articleList);
})







