
//placeholder  兼容ie8 ie9

alert("你的浏览器版本过低,为了正常使用,请升级你的浏览器。");

$(function(){
//	
//	$("input[type='text'],input[type='password']").each(function(){
//	var place=$(this).attr("placeholder");
//	$(this).val(place);
//});
//$("input[type='text'],input[type='password'").focus(function(){
//	var place=$(this).attr("placeholder");
//	var val=$(this).val();
//	if(place==val){
//	$(this).val("");
//	}
//});
//$("input[type='text'],input[type='password'").blur(function(){
//	var place=$(this).attr("placeholder");
//	if($(this).val()==""){
//		$(this).val(place);
//	}
//});


//商品列表 图片列表 左边线条

	var prodlist_len=$(".prodlist-thumbnail .col-xs-2").length;
	for(var i=0 ;i<prodlist_len;i++){
		if(i%5==0){
			var obj=$(".prodlist-thumbnail .col-xs-2").eq(i);
			$(obj).css("border-left","none");
		}
		
	}

 
});







		//首页
		//二级菜单	
		//鼠标hover 移入
//		
//		;(function(){
//		
//		$(".index-cont-menu-down").find("li").mouseenter(function(e){
//			
//					e.preventDefault();
//					e.stopPropagation();
//					$(".index-two-menu-item").hide();//隐藏所有
//					var index_two_attr=	$(this).attr("data-tagget");
//					$(index_two_attr).stop().fadeIn(600);//show(400);
//					
//					//样式
//					$(".index-cont-menu-down  li").removeClass('active');
//					$(".index-cont-menu-down  li a").removeAttr("href");
//					$(this).addClass('active');
//					$(".index-cont-menu-down  li").css("border-right","1px solid #e52c67")
//					$(this).css("border-right","1px solid #fff")
//				});
//				//鼠标hover 移出
//				$(".index-cont-menu-l").mouseleave(function(e){
//			
//					$(".index-two-menu-item").hide();//隐藏所有
//					$(".index-cont-menu-down  li").removeClass('active');
//					$(".index-cont-menu-down  li").css("border-right","1px solid #e6e9ed")
//					
//				});
//				
//					//下拉菜单
//					$(".proddtl-menu-ttl h2").mouseenter(function(e){
//						e.preventDefault();
//						e.stopPropagation();
//						$(".proddtl-menu").show();
//					$(".index-cont-menu-down").stop().slideDown();
//					})
//				
//					$(".proddtl-menu-ttl").mouseleave(function(){
//							$(".proddtl-menu").hide();
//					$(".index-cont-menu-down").stop().slideUp();
//					})
//					
//					
//					
//					//下拉菜单dropmenu1
//					$(".icon-xiala-btn1").click(function(e){
//						
//					$(".index-head-drop2,.index-head-drop3").hide();
//						var p1=$(this).parents(".index-head-l");
//						
//						$(".index-head-drop",p1).toggle();
//						
//						//对document绑定一个影藏Div方法
//						$(document).on("click",function(){
//						
//							$(".index-head-drop",p1).hide();
//						});
//						//阻止事件向上冒泡
//						e.stopPropagation();
//					
//					});
//					
//					//下拉菜单dropmenu2
//					$(".icon-xiala-btn2").click(function(e){
//						$(".index-head-drop,.index-head-drop3").hide();
//						var p1=$(this).parents(".index-head-l");
//						
//						$(".index-head-drop2",p1).toggle();
//						
//						//对document绑定一个影藏Div方法
//						$(document).on("click",function(){
//						
//							$(".index-head-drop2",p1).hide();
//						});
//						//阻止事件向上冒泡
//						e.stopPropagation();
//					
//					});
//					
//					//下拉菜单dropmenu3
//					$(".icon-xiala-btn3").click(function(e){
//						$(".index-head-drop2,.index-head-drop").hide();
//						var p1=$(this).parents(".index-head-r");
//						
//						$(".index-head-drop3",p1).toggle();
//						
//						//对document绑定一个影藏Div方法
//						$(document).on("click",function(){
//						
//							$(".index-head-drop3",p1).hide();
//						});
//						//阻止事件向上冒泡
//						e.stopPropagation();
//					
//					});
//					
//					//搜索框下拉菜单
//					$(".index-search-sl").click(function(e){
//					
//						$(this).find(".droplist").slideToggle();
//						
//						//对document绑定一个影藏Div方法
//						$(document).on("click",function(){
//						
//							$(this).find(".droplist").slideUp();
//						});
//						//阻止事件向上冒泡
//						e.stopPropagation();
//					});
//					
//					$(".droplist").find(" li").click(function(){
//						
//						var p=$(this).parents(".index-search-sl");
//						$("span.cont",p).text($(this).text());
//					});
//					
//					
//					//glyphicon-arrow-right
//					
//					$(".glyphicon-arrow-right").click(function(){
//						
//						var p=$(this).parents(".index-notice");
//						
//					
//						$(p).animate({
//							
//							right:-$(p).outerWidth()
//						
//						},600,function(){
//							
//							$(".iconfont.icon-gonggao").animate({
//							right:5
//							})
//						})
//					});
//					
//					$(".iconfont.icon-gonggao").click(function(){
//						
//						$(this).animate({
//							right:-$(this).outerWidth()
//						},function(){
//								
//							$(".index-notice").animate({
//								
//							right:0
//							
//							});
//						});
//						
//						
//						
//					});
//					
//			
//			
//			//
//			
//			var window_h = $(window).height();
//				
//				$(window).scroll(function() {
//				
//					setTimeout(function() {
//						
//						$(".load-lazy").each(function() {
//						
//							var img_h = parseInt($(this).offset().top) - parseInt(window_h);
//							var img_h2 = parseInt($(this).offset().top)+$(this).height();
//							if($(document).scrollTop() >= img_h&&$(document).scrollTop()<img_h2) {
//
//								$(this).attr("src", $(this).attr("data-src"));
//							
//								/*ie8 不支持
//								 * .animate({
//								"opacity":0.2
//								}).animate({
//								"opacity": 1
//								}, 500);
//								
//								* */
//
//							}
//
//						})
//					}, 100)
//				})
//		
//	
//
//		})(window.jQuery||window.Zepto);	