/*页面底部生成*/
$(function () {
	$("#right_fixed").load("data/right_fixed.php", function () {
		if(sessionStorage['LoginUid']){
			console.log(sessionStorage['LoginUpic']);
			$("#right_fixed div.login>a>img").attr("src",sessionStorage['LoginUpic']);
		}
	});
	$("#footer").load("data/footer.php");
});
/*顶部广告动画 打开关闭*/
$(function () {
	$("#open_close").click(function(){
		var $top_hidden=$("#top_hidden");
		var $span_open=$("#open_close>span");
		var $u_open=$("#open_close>u");
		if($u_open.is(".close")){
			$span_open.text("关闭");
			$u_open.text("x").removeClass("close");
			$top_hidden.removeClass("hgh-0").addClass("hgh-1");
		}
		else{
			$span_open.text("王牌御史大电影");
			$u_open.text("").addClass("close");
			$top_hidden.removeClass("hgh-1").addClass("hgh-0");
		}
	});
});


/*banner广告轮播*/
	//自动轮播
	function spell_1(){
		var $zIndex_1=$("#banner_main div.banner_img>div.zIndex_1");
		$zIndex_1.removeClass("zIndex_1").addClass("zIndex_0");
		if(!$zIndex_1.is('#banner_main div.banner_img>div:last'))
			$zIndex_1.next().removeClass("zIndex_0").addClass("zIndex_1");
		else
			$zIndex_1.parent().children("#banner_main div.banner_img>div:first").removeClass("zIndex_0").addClass("zIndex_1");
	};
	var timer=setInterval(spell_1,3000);
	$("#banner_main div.banner_img").hover(
		function(){clearInterval(timer);	},
		function(){timer=setInterval(spell_1,3000);}
	);
	//点击按钮轮播
	$("#banner_main a.next").click(function(){
		var $zIndex_1=$("#banner_main div.banner_img>div.zIndex_1");
			if($zIndex_1.is('#banner_main div.banner_img>div:last')){
				$zIndex_1.removeClass("zIndex_1").addClass("zIndex_0");
				$("#banner_main div.banner_img>div:first").removeClass("zIndex_0").addClass("zIndex_1");
			}else{
				$zIndex_1.removeClass("zIndex_1").addClass("zIndex_0");
				$zIndex_1.next().removeClass("zIndex_0").addClass("zIndex_1");
			}
	});
	$("#banner_main a.prevr").click(function(){
		var $zIndex_1=$("#banner_main div.banner_img>div.zIndex_1");
			if($zIndex_1.is('#banner_main div.banner_img>div:first')){
				$zIndex_1.removeClass("zIndex_1").addClass("zIndex_0");
				$("#banner_main div.banner_img>div:last").removeClass("zIndex_0").addClass("zIndex_1");
			}else{
				$zIndex_1.removeClass("zIndex_1").addClass("zIndex_0");
				$zIndex_1.prev().removeClass("zIndex_0").addClass("zIndex_1");	
			}		
	});
	
/*热门排行*/
$("#hot_title>ul>li").mouseover(function(){
	$a_pitch=$(this);	
	$a_pitch.children("a").addClass("pitch");
	$a_pitch.siblings().children("a").removeClass();
	$("#hot_text>div").eq($a_pitch.index()).removeClass().addClass("in").siblings().removeClass().addClass("fide");
});
	
/*fixedLayer 悬浮窗显示*/
	var fixedLayer=$("#fixedLayer");
	$(window).scroll(function(){
				if(document.body.scrollTop>=800)
					fixedLayer.removeClass("hgh-0").addClass("hgh-2");
				else
					fixedLayer.removeClass("hgh-2").addClass("hgh-0");
			});
/*#rec_main 强档推荐部分无缝滚动*/
	$(function(){
		var num=0;
		$("#rec_main a.move_right").click(function(){
			num+=608;
			if(num<=3648){
				$("#rec_main div.box_son").stop().animate({
					marginLeft:-num
				}, function(){
					if(num>=3648){
						num=0;
						$("#rec_main div.box_son").css("marginLeft",0);
					}
				});
			}
		});
	}());
	
/*VIP动漫社 强品推荐*/
	$("#VIPshe_main div.VIPshe_main_top div.lf a").mouseover(function(){
		var $a_active=$(this);
		$a_active.addClass("active").siblings().removeClass();
		$("#VIPshe_main div.VIPshe_main_left_main>div").eq($a_active.index()).removeClass("zIndex_0").addClass("zIndex_1").siblings().removeClass("zIndex_1").addClass("zIndex_0");
	});
/*	//里面的内容切换
	$("#VIPshe_main div.tab_01 p.btn_list a.add").click(function(){
		var $pags=$("#VIPshe_main div.tab_01 p.btn_list span.pags");
		var $pags_html=parseInt($pags.html());
		if($pags_html!=3){
			$pags.html($pags_html+1);
		}
		else{
			$pags.html(1);
		}
	});
	$("#VIPshe_main div.tab_01 p.btn_list a.sub").click(function(){
		var $pags=$("#VIPshe_main div.tab_01 p.btn_list span.pags");
		var $pags_html=parseInt($pags.html());
		if($pags_html!=1){
			$pags.html($pags_html-1);
		}
		else{
			$pags.html(3);
		}
	});

	$("#VIPshe_main div.tab_02 p.btn_list a.add").click(function(){
		var $pags=$("#VIPshe_main div.tab_02 p.btn_list span.pags");
		var $pags_html=parseInt($pags.html());
		if($pags_html!=3){
			$pags.html($pags_html+1);
		}
		else{
			$pags.html(1);
		}

	});
	$("#VIPshe_main div.tab_02 p.btn_list a.sub").click(function(){
		var $pags=$("#VIPshe_main div.tab_02 p.btn_list span.pags");
		var $pags_html=parseInt($pags.html());
		if($pags_html!=1){
			$pags.html($pags_html-1);
		}
		else{
			$pags.html(3);
		}

	});*/
	/*document.querySelector("#VIPshe_main div.VIPshe_main_top div.lf a.top_a_01").onmouseover=function(){
		this.className="active";
		this.nextElementSibling.className="";
		document.querySelector("#VIPshe_main div.tab_01").className="VIPshe_main_left_tab tab_01 zIndex_1";
		document.querySelector("#VIPshe_main div.tab_02").className="VIPshe_main_left_tab tab_02 zIndex_0";

	}
	document.querySelector("#VIPshe_main div.VIPshe_main_top div.lf a.top_a_02").onmouseover=function(){
		this.className="active";
		this.previousElementSibling.className="";
		document.querySelector("#VIPshe_main div.tab_01").className="VIPshe_main_left_tab tab_01 zIndex_0";
		document.querySelector("#VIPshe_main div.tab_02").className="VIPshe_main_left_tab tab_02 zIndex_1";
	}*/

/*VIP动漫社 连载表*/
	$("#serial_table div.VIPshe_main_top div.rt a").mouseover(function(){
		var $a_active=$(this);
		if(!$a_active.is("a[title]"))
			$a_active.addClass("active").siblings().removeClass();
		$("#serial_table div.VIPshe_main_left_main>div:eq("+$a_active.index()+")").removeClass("zIndex_0").addClass("zIndex_1").siblings().removeClass("zIndex_1").addClass("zIndex_0");
	});
/*VIP动漫社 连载表右侧的轮播图*/
	function spell_2(){
			var $zIndex_1=$("#VIPshe_banner_list>ul>li.zIndex_1");
			var $li_active=$("#VIPshe_banner_list>ol>li.active");
			$zIndex_1.removeClass("zIndex_1").addClass("zIndex_0");
			$li_active.removeClass();
			if(!$zIndex_1.is('#VIPshe_banner_list>ul>li:last')&&!$li_active.is('#VIPshe_banner_list>ol>li:last'))
			{		
				$zIndex_1.next().removeClass("zIndex_0").addClass("zIndex_1");
				$li_active.next().removeClass().addClass("active");
			}
			else{
				$zIndex_1.parent().children("#VIPshe_banner_list>ul>li:first").removeClass("zIndex_0").addClass("zIndex_1");
				$li_active.parent().children("#VIPshe_banner_list>ol>li:first").removeClass().addClass("active");
			}
		};
		var timer_2=setInterval(spell_2,3000);
		$("#VIPshe_banner_list").hover(
			function(){clearInterval(timer_2);	},
			function(){timer_2=setInterval(spell_2,3000);}
		);
		$("#VIPshe_banner_list>ol>li").click(function(){
			var $li_active=$(this);
			if(!$li_active.is("li.active"))
			$("#VIPshe_banner_list>ul>li").eq($li_active.index()).removeClass().addClass("zIndex_1").siblings().removeClass();
			$li_active.addClass("active").siblings().removeClass();
		});

/*签约作品*/
	$("#sign_production ul.images_list li").mouseover(function(){
		$li = $(this);
		$li.addClass("border").siblings().removeClass();
		$("#sign_production div.section_main_left>a").eq($li.index()).removeClass().siblings().addClass("fide");
		$("#sign_production div.title_list_main").eq($li.index()).removeClass("fide").siblings().addClass("fide");
	});
/*轻小说*/
	$("#sign_sorft ul.images_list li").mouseover(function(){
		$li = $(this);
		$li.addClass("border").siblings().removeClass();
		$("#sign_sorft div.section_main_left>a").eq($li.index()).removeClass().siblings().addClass("fide");
		$("#sign_sorft div.title_list_main").eq($li.index()).removeClass("fide").siblings().addClass("fide");
	});

/*独家动画*/
	$("#exclusive_main ul.vedio_list li").mouseover(function(){
		$(this).children("b").addClass("bg_position");
		$(this).siblings().children("b").removeClass();
		$("#exclusive_main ul.exclusive_main_ul>li").eq($(this).index()).removeClass().addClass("zIndex_1").siblings().removeClass().addClass("zIndex_0");
	});

/*上升最快 和月票排行榜
* 右侧*/
$("#pages>a").mouseover(function(){
	$(this).addClass("active").siblings().removeClass();
	$("#in_content>div").eq($(this).index()).removeClass("fide").siblings().addClass("fide");
});

//闪电
//$(".aside_right").mouseover(function () {
//	var num = -138;
//	var timer = setInterval(function () {
//		num +=100;
//		$(".aside_right>p").css('left',num+'px');
//		if(num>=391){
//			clearInterval(timer);
//		}
//	},100);
//	console.log(num);
//
//	//$(".aside_right>p").stop().animate({
//	//	left:391
//	//},1000, function () {
//	//	$(".aside_right>p").css('left','-138px');
//	//})
//})


/*sideComCodeWrap 二维码*/
$('#right_fixed').on("click","#sideComCodeWrap",function () {
	$('#sideComCodeWrap>div.sideComCodeImg').toggleClass("fide");
})