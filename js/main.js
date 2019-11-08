$(document).ready(function(){
	'use strict';

	/* snb 출근/휴식/퇴근 체크 */
	var pst = null, thisWidth = null;
	$(".my_check label").on("click", function(){
		pst = $(this).position();
		$(".radio_bg").css({"left":pst.left});
	});
	/* snb */
	$(".snb_btn").on("click",function(){
		$(".snb").addClass("snb_on");
		$(".mask").fadeIn();
	});
	$(".snb_close_btn").on("click",function(){
		$(".snb").removeClass("snb_on");
		$(".mask, .popup").fadeOut();
	});
	/* 팝업1 */
	$(".pop_call").on("click",function(){
		scroll_no();
		var name = $(this).attr("data-popup");
		$(".popup."+name).fadeIn();
		$(".snb").removeClass("snb_on");
		if( $(window).width() > 640 ){ 	
			$(".mask").fadeIn(); 	
		}else{				
			if( name == "login_pop" || name == "reque_pop" ){ $(".mask").fadeOut(); }else{ $(".mask").fadeIn(); }
		}
	});
	$(".pop_close").on("click",function(){
		$(".popup, .mask").fadeOut();
		scroll_yes();
	});		
	/* 팝업2 */
	$(".pop_call2").on("click",function(){
		scroll_no();
		$(".popup2").fadeIn();
	});
	$(".pop_close2").on("click",function(){
		scroll_yes();
		$(".popup2").fadeOut();
	});
	$(".close_all").on("click",function(){
		scroll_yes();
		$(".popup2, .popup, .mask").fadeOut();
	});
	/* 맵팝업 */
	$(".popup .map_btn").on("click",function(){
		scroll_no();
		$(".map_wrap").fadeIn();
	});
	$(".map_close_btn").on("click",function(){
		scroll_yes();
		$(".map_wrap").fadeOut();
	});
	$(".close_map_popup").on("click",function(){
		$(".map_popup").fadeOut();
	});

	function scroll_no(){
		$("body").addClass("scroll_no");
	}
	function scroll_yes(){
		$("body").removeClass("scroll_no");
	}

});


