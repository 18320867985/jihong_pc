
//经销商中心
var admin=(function($){
	
		var start_ff=function(){
			
				//替换右边ttl值
				$(".admin-cont-l .cont  .link-url").click(function(e){
					e.preventDefault(); 
					$(".admin-cont-l .cont .link-url").removeClass("active");
					$(this).addClass("active");
					
					$(".admin-iframe").attr("src",$(this).attr("href"));
					
					$(".admin-iframe").css("height","550px");
				});
				
			
			// admin 左菜单
			
			$(".ttl").click(function(){
				
				//$(".cont").slideUp();
				$(this).toggleClass("active");
				$(this).next(".cont").stop().slideToggle();
			});
			
			// 第一次点击的
			$(".ttl.now").click();
			


			//大导航栏选择状态
			$(".admin-nav-list li").click(function(e){
				e.preventDefault();
				$(".admin-nav-list li").removeClass('active');
				$(this).addClass('active');
			})
		
		//模糊订购
		$(".dropdown-menu li a").click(function(){
			var v=$(this).text();
			var p=$(this).parents(".admin-nav-btn");
			$(".btn-default",p).html(v+"<span class='iconfont icon-xiala'></span>");
			
		});
		
		}
		
		var iframe=function (){
			
		//admin模板
		var windows_h=	$(document).height()+5;
		$(window.parent.document).find(".admin-iframe").css("height",windows_h);
		
		}
	
		//返回对象
		return{
			
			start:start_ff,
			iframe:iframe
		}
	
	})(window.jQuery||window.Zepto)