

$(function(){
		// 图片加载失败
		$('img').each(function() {
			var error = false;
			if(!this.complete) {
				error = true;
			}
			if(typeof this.naturalWidth != "undefined" && this.naturalWidth == 0) {
				error = true;
			}
			if(error) {
				$(this).on("error",function() {
					$(this).attr("src", "images/home/no-img.jpg");
					$(this).off('error');
				});
			}
		});
	
});
