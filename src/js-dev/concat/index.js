/////首页


var index = (function($) {

	//划梯
	var jqhuitingff = function() {

		//划梯位置
		var index_left = parseInt($('.container-12').offset().left);
		$("#huating").css("left", index_left - 43);

		$("#zhiding").click(function() {

			$('html,body').animate({
				scrollTop: '0px'
			}, 500);
		});

		$("#huating  li a").click(function(e) {

			e.preventDefault();

			var id = $(this).attr("href");

			var top = $(id).offset().top;

			$('html,body').animate({
				scrollTop: top
			}, 500);

		});

		//划梯scroll
		$(window).scroll(function() {

			var index_top = parseInt($("#xinpinshangshi").offset().top);

			if($(window).scrollTop() >= index_top) {
				$("#huating").show('clip');

			} else {
				$("#huating").hide("clip");
			}
		});

		////划梯windows大小改变

		$(window).resize(function() {

			var index_left = parseInt($('.container-12').offset().left);
			$("#huating").css("left", index_left - 43);

		});
		
		// 每当一个新条目被激活后都将由滚动监听插件触发此事件。
//			$('#huating').on('activate.bs.scrollspy', function () {
//			  // do something…
//				//  alert($(this).find("li.active").html())
//			})

	}

	//二级菜单
	var jqmenuff = function() {

		//鼠标hover 移入
		$(".index-cont-menu-down").find("li").mouseenter(function(e) {
			e.preventDefault();
			e.stopPropagation();
			var top = $(this).position().top;

			var h2 = $(".index-cont-menu-down li").outerHeight();

			var h = 396;

			$(".index-two-menu-item").hide(); //隐藏所有
			
			var index_two_attr = $(this).attr("data-tagget");
			
			
		//	$(".glyphicon-triangle-left").css("top",	 $(this).position().top+"px");
			
			var c_h = $(index_two_attr).outerHeight();

//			if(h - c_h + h2 * index_count > top) {
//
//				$(index_two_attr).css("top", top - (index_count * h2) + "px");
//			} else {
//				//$(index_two_attr).css("top", h - c_h + "px");
//			}
			$(index_two_attr).css("top", top - (index_count * h2) + "px");
			$(index_two_attr).stop().show(); //show(400);

			//样式
			$(".index-cont-menu-down  li").removeClass('active');
			$(".index-cont-menu-down  li a").removeAttr("href");
			$(this).addClass('active');
			//$(".index-cont-menu-down  li").css("border-right", "1px solid #e52c67");
		//	$(this).css("border-right", "1px solid #fff");
			
		});
		//鼠标hover 移出
		$(".index-cont-menu-l").mouseleave(function(e) {

			 menuHide(); //菜单 鼠标hover 移出

		});
		
		//鼠标hover 移出 方法 
		function menuHide(){
			$(".index-two-menu-item").stop().hide(); //隐藏所有
			$(".index-cont-menu-down  li").removeClass('active');
			//$(".index-cont-menu-down  li").css("border-right", "1px solid #e52c67");
		}


		// 引入显示2 3 级菜单
		$(".index-two-menu").on("mouseenter", ".index-two-menu-item dt", function() {
//
//			var top = $(this).parents("dl").position().top;
//			var h = $(this).parents(".index-two-menu-item").outerHeight();
//			var c_h = $(this).next("dd").outerHeight();
//			 //console.log(top)
//			if(h >(c_h+top)) {
//				$(this).next("dd").css("top", "-5px");
//			} else {
//
//				$(this).next("dd").css("top",$(this).outerHeight()-c_h+8+"px");
//			}

			$(this).next("dd").stop().show();
		});

		$(".index-two-menu").on("mouseleave", ".index-two-menu-item dl", function() {

			$(this).find("dd").hide();
		});

		// 引入显示4 级菜单
		$(".index-two-menu").on("mouseenter", ".index-two-menu-item dd>.ttl", function() {

			$(".index-two-menu-item .leve-4").hide();
			var p = $(this);
			var h = p.outerHeight();
			var $lv4 = p.find(".leve-4");
			//var h1=p.position().top;
			var h2 = $lv4.outerHeight();
			var h3 = p.parents(".index-two-menu-item").position().top;
			var h4 = p.parents("dl").position().top;

			if(h2 + h3 + h4 < 400) {
				$lv4.css("top", h + "px");
			} else {
				$lv4.css("top", -(h2) + "px");
			}

			$lv4.stop().show(400);

		});

		$(".index-two-menu").on("mouseleave", ".index-two-menu-item dd>.ttl", function() {

			var p = $(this);
			var $lv4 = p.find(".leve-4");
			$lv4.hide();

		});

		//btn top bottom
		var index_count = 0;

		$(".index-cont-menu-down li").mouseenter(function() {
		

			var s = $(".index-cont-menu-down li").size();
			var h = $(".index-cont-menu-down li").outerHeight();
			var s_h = $(this).outerHeight();
			if(s_h * s > 396) {

				var h_big = h * index_count + 396;
				var h2 = s * h;
				if(h_big >= h2) {
					$(".index-cont-menu-down li").blur();
					$(".bottom-btn").hide();

				} else {
					$(".bottom-btn").show();
				}

				if(index_count > 0) {
					$(".top-btn").show();
				} else {
					$(".top-btn").hide();
				}

			}

		});

		$(".index-cont-menu-cont,.top-btn,.bottom-btn").mouseleave(function() {

			$(".bottom-btn").hide();
			clearInterval(bottom_btn_set);
			$(".top-btn").hide();
			clearInterval(top_btn_set);

		});

		//bottom

		function bottom_btn_ff() {

 		
			var s = $(".index-cont-menu-down li").size();
			var h = $(".index-cont-menu-down li").outerHeight();
			var h_big = h * index_count + 396;
			var h2 = s * h;
			if(h_big >= h2) {

				$(".bottom-btn").hide();

			} else {
				$(".bottom-btn").show();
			}
		}

		var bottom_btn_set = null;
		$(".bottom-btn").mouseenter(function() {
			menuHide(); //菜单 鼠标hover 移出
			
			bottom_btn_set = setInterval(function() {

				var s = $(".index-cont-menu-down li").size();
				var h = $(".index-cont-menu-down li").outerHeight();
				var h_big = h * index_count + 396;
				var h2 = s * h;
				if(h_big >= h2) {

					$(".bottom-btn").hide();
					clearInterval(bottom_btn_set);

					return;
				}
				index_count++;

				$(".index-cont-menu-down").stop().animate({
					top: "-" + index_count * h + "px"
				});

				bottom_btn_ff();

			}, 300);

		});

		function top_btn_ff() {
			var s = $(".index-cont-menu-down li").size();
			var h = $(".index-cont-menu-down li").outerHeight();
			var h_big = h * index_count + 396;

			if(index_count > 0) {
				$(".top-btn").show();
			} else {
				$(".top-btn").hide();
			}
		}

		var top_btn_set = null;
		$(".top-btn").mouseenter(function() {
			menuHide(); //菜单 鼠标hover 移出
			
			top_btn_set = setInterval(function() {

				if(index_count == 0) {
					clearInterval(top_btn_set);
					return;
				}
				index_count--;
				bottom_btn_ff();

				var h = $(".index-cont-menu-down li").outerHeight();
				$(".index-cont-menu-down").stop().animate({
					top: "-" + index_count * h + "px"
				});

				top_btn_ff();

			}, 300);
		});

		//下拉菜单
		$(".proddtl-menu-ttl h2").mouseenter(function(e) {
			e.preventDefault();
			e.stopPropagation();
			$(".index-cont-menu-cont").stop().show();
			$(".index-cont-menu-down").stop().show();
		})

		$(".proddtl-menu-ttl").mouseleave(function() {
			$(".index-cont-menu-cont").hide();
			$(".index-cont-menu-down").hide();
		})

		//下拉菜单dropmenu1
		$(".icon-xiala-btn1").click(function(e) {

			$(".index-head-drop2,.index-head-drop3").hide();
			var p1 = $(this).parents(".index-head-l");

			$(".index-head-drop", p1).toggle();

			//对document绑定一个影藏Div方法
			$(document).on("click", function() {

				$(".index-head-drop", p1).hide();
			});
			//阻止事件向上冒泡
			e.stopPropagation();

		});

		//下拉菜单dropmenu2
		$(".icon-xiala-btn2").click(function(e) {
			$(".index-head-drop,.index-head-drop3").hide();
			var p1 = $(this).parents(".index-head-l");

			$(".index-head-drop2", p1).toggle();

			//对document绑定一个影藏Div方法
			$(document).on("click", function() {

				$(".index-head-drop2", p1).hide();
			});
			//阻止事件向上冒泡
			e.stopPropagation();

		});

		//下拉菜单dropmenu3
		$(".icon-xiala-btn3").click(function(e) {
			$(".index-head-drop2,.index-head-drop").hide();
			var p1 = $(this).parents(".index-head-r");

			$(".index-head-drop3", p1).toggle();

			//对document绑定一个影藏Div方法
			$(document).on("click", function() {

				$(".index-head-drop3", p1).hide();
			});
			//阻止事件向上冒泡
			e.stopPropagation();

		});

		//搜索框下拉菜单
		$(".index-search-sl").click(function(e) {

			$(this).find(".droplist").slideToggle();

			//对document绑定一个影藏Div方法
			$(document).on("click", function() {

				$(this).find(".droplist").slideUp();
			});
			//阻止事件向上冒泡
			e.stopPropagation();
		});

		$(".droplist").find(" li").click(function() {

			var p = $(this).parents(".index-search-sl");
			$("span.cont", p).text($(this).text());
		});

		//搜索框下拉菜单2
		$(".index-search-sl2").click(function(e) {

			$(this).find(".droplist").slideToggle();

			//对document绑定一个影藏Div方法
			$(document).on("click", function() {

				$(this).find(".droplist").slideUp();
			});
			//阻止事件向上冒泡
			e.stopPropagation();

		});

		$(".droplist").find(" li").click(function() {

			var p = $(this).parents(".index-search-sl2");
			$("ul li", p).removeClass("active");
			$(this).addClass("active");
			$(".select-city", p).text($(this).text());
			$(".select-city", p).attr("data-id", $(this).attr("data-id"));

			//点击触发自定义事件
			$(this).trigger("select_city_click", [this]);
		});

		//glyphicon-arrow-right

		$(".glyphicon-arrow-right").click(function() {

			var p = $(this).parents(".index-notice");

			$(p).animate({

				right: -$(p).outerWidth()

			}, 600, function() {

				$(".iconfont.icon-gonggao").animate({
					right: 5
				})
			})
		});

		$(".iconfont.icon-gonggao").click(function() {

			$(this).animate({
				right: -$(this).outerWidth()
			}, function() {

				$(".index-notice").animate({

					right: 0

				});
			});

		});

	};

	return {

		huiting: jqhuitingff,
		jqmenu: jqmenuff
	}

})(window.jQuery || window.Zepto);