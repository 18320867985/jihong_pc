var proddtl = (function($) {

	var _init = function() {
		
		$(".proddtl-ls-r-list li a").click(function(e) {
			e.preventDefault();
			$(".proddtl-ls-r-list li a").removeClass("btn-danger");
			$(this).removeClass("btn-default").addClass(" btn-danger");
		})

		//缩列图
		$(".proddtl-cont-l .list-imgs img").hover(function() {

			$(" .proddtl-cont-l .jqzoom img").attr("src", $(this).attr("src")).hide().show();

		});
		

		//型号与单位选择
		$(".proddtl-cont-r-list strong.pull-left a").click(function() {

			var p = $(this).parents(".pull-left");
			$("a", p).removeClass("btn-danger").addClass("btn-default");
			$(this).removeClass("btn-default").addClass("btn-danger");

		});

		// 缩列图
		var list = {};
		list.index = 0;

		list.df = 3;
		list.size = $(".list-imgs li").size();


		list.wdith = $(".list-imgs li").outerWidth(true);
		$(".list-imgs").width(list.size * list.wdith);

		$(".list-imgs-big").on("mouseenter", function() {

			if(list.size > list.df) {

				lr_btn_ff();
			}

		});

		function lr_btn_ff() {

			if(list.index === 0) {
				$(".left-btn").hide();
			} else {
				$(".left-btn").show();
			}

			if(list.index + list.df >= list.size) {
				$(".right-btn").hide();
			} else {
				$(".right-btn").show();
			}
		}
		$(".list-imgs-big").on("mouseleave", function() {

			$(this).find(".btn").hide();

		});

		$(".right-btn").click(function() {
			if(list.index + list.df >= list.size) {
				return;
			}
			list.index++;
			$(".list-imgs").animate({

				left: "-=" + list.wdith
			}, 400)

			lr_btn_ff();
		});

		$(".left-btn").click(function() {
			if(list.index === 0) {
				return;
			}
			list.index--;
			$(".list-imgs").animate({

				left: "+=" + list.wdith
			}, 400)

			lr_btn_ff();
		});

	}

	return {
		init: _init
	}

})(window.jQuery);