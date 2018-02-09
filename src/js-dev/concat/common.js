/*
 *	公共类库
*/
	
	
var  common=(function($){
	
	/***url对象***/
	var url_fn={
			//采用正则表达式获取地址栏参数：（ 强烈推荐，既实用又方便！）
			GetQueryString:function GetQueryString(name) {
			    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
			    var r = window.location.search.substr(1).match(reg);
			    if (r != null) return unescape(r[2]); return null;
			},
			
			//从WebAPI获取日期json数据 转换成日期时间戳
			jsonToDate:function jsonToDate(apidate) {
	  		  var txts = apidate.replace("/Date(", "").replace(")/");
	   		 return parseInt(txts.trim());
	
			},
			
			
			// 取当前页面名称(不带后缀名)
   			getPageName:function getPageName() {
	  		  var a = location.href;
	  		  var b = a.split("/");
	 		  var c = b.slice(b.length - 1, b.length).toString(String).split(".");
	  		  return c.slice(0, 1);
			},

			//取当前页面名称(带后缀名)
			getPageNameExention:function getPageNameExention() {
	  		  var strUrl = location.href;
	  		  var arrUrl = strUrl.split("/");
	  		  var strPage = arrUrl[arrUrl.length - 1];
	  		  return strPage;
			},
			
	}
	
	/**
	 * 延迟加载
	 *  * <img class="load-lazy"
	 * 	src="images/Home/lazy.jpg"
	 * alt="新品上市图片"
	 * data-src="images/Home/板块图片1.png"
	 * > 
	 * */
	// 延迟加载
	var jqlazy_fn=function(){
		
		var window_h = $(window).height();
				
				$(window).scroll(function() {
				
					setTimeout(function() {
						
						$(".load-lazy").each(function() {
						
							var img_h = parseInt($(this).offset().top) - parseInt(window_h);
							var img_h2 = parseInt($(this).offset().top)+$(this).height();
							if($(window).scrollTop() >= img_h&&$(window).scrollTop()<img_h2) {

								$(this).attr("src", $(this).attr("data-src"));
							
								/*ie8 不支持
								 * .animate({
								"opacity":0.2
								}).animate({
								"opacity": 1
								}, 500);
								
								* */

							}
							
						})
					}, 100)
				})
			};
	
	/*自动消失框*/
	var alert_fn={
			/*成功自动消失框*/
		success:function success(title){
				var ttl="成功自动消失框";
				if(arguments[0]){
					ttl=title;
				}
					var temp_html='<div class="auto-box auto-box-success v-hide"><a class="btn btn-success btn-lg">'+ttl+'</a></div>';
								
							$(document.body).append(temp_html);
							
							$(".auto-box-success").fadeIn();
							$(".auto-box-success").css("margin-left","-"+$(".auto-box-success").width()/2+"px")
							setTimeout(function(){
								$(".auto-box-success").fadeOut(600).queue(function(){
								$(document.body).find(".auto-box-success").remove();
								});
							
							},2000);
							
							
			},
			
				/*警告自动消失框*/
				warning:function warning(title){
				var ttl="警告自动消失框";
				if(arguments[0]){
					ttl=title;
				}
					var temp_html='<div class="auto-box auto-box-warning v-hide"><a class="btn btn-warning btn-lg">'+ttl+'</a></div>';
								
							$(document.body).append(temp_html);
							
							$(".auto-box-warning").fadeIn();
							
							$(".auto-box-warning").css("margin-left","-"+$(".auto-box-warning").width()/2+"px")
							setTimeout(function(){
								$(".auto-box-warning").fadeOut(600).queue(function(){
									
									$(document.body).find(".auto-box-warning").remove();
								});
								
							},2000);
							
							
				},
			
			/*危险自动消失框*/
			danger:function danger(title){
				var ttl="危险自动消失框";
				if(arguments[0]){
					ttl=title;
				}
					var temp_html='<div class="auto-box auto-box-danger v-hide"><a class="btn btn-danger btn-lg">'+ttl+'</a></div>';
								
							$(document.body).append(temp_html);
							
							$(".auto-box-danger").fadeIn();
							$(".auto-box-danger").css("margin-left","-"+$(".auto-box-danger").width()/2+"px")
							setTimeout(function(){
								$(".auto-box-danger").fadeOut(600).queue(function(){
								$(document.body).find(".auto-box-danger").remove();
								});
							
							},2000);
							
							
				},
	
	
	
	
	}
	
	//dialog弹出框 
	
	var dialog_open=function(target){
		$(".dialog-big .dialog-modal").hide();
		$(".dialog-big .dialog-cont").hide();
	
		
		var p=$(target).attr("data-target");
		$(".dialog-modal",p).show(600);
		$(".dialog-cont",p).show(600);
		
	}
	
	var dialog_close=function(target){
		$(".dialog-big .dialog-modal").hide(600);
		$(".dialog-big .dialog-cont").hide(600);
		
		
	}
	
	
	
	/*返回对象*/
	 return{
	 	
	 	url:url_fn,
		lazy:{
			jqlazy:jqlazy_fn
		},
		
		alert:alert_fn,
		
		dialog:{
			open:dialog_open,
			close:dialog_close
		},
		
			
		}
	 
	
})(window.jQuery||window.Zepto);


