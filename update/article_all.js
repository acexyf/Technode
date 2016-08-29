var request=require('request');
var cheerio=require('cheerio');
var debug=require('debug');

function readArticleList(url,callback){
	request(url,function(err,res){
		if(err)
			return callback(err);
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
		callback(null,articleList);
	});
}



