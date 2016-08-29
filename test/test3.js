var request=require('request');

request({
	url:'http://cnodejs.org',
	method:'get',
	headers:{
		'Accept-Language':'zh-CN,zh;q=0.8',
		'Cookie':'__utma=4454.11221.455353.21.143'
	}
},function(err,response,body){
	if(!err && response.statusCode==200){
		console.log(body);
	}
});