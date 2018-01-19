/**
 * Created by Administrator on 2017/5/18 0018.
 */

//顶部栏的显示
$(function () {
  var fixedLayer=$(".top-main");
  $(window).scroll(function(){
    if(document.body.scrollTop>=10)
      fixedLayer.removeClass("hgh-0").addClass("hgh-1");
    else
      fixedLayer.removeClass("hgh-1").addClass("hgh-0");
  });
})

//点击全屏
$(".qp").click(function () {
  var docElm = document.documentElement;
//W3C
  if (docElm.requestFullscreen) {
    docElm.requestFullscreen();
  }
//FireFox
  else if (docElm.mozRequestFullScreen) {
    docElm.mozRequestFullScreen();
  }
//Chrome等
  else if (docElm.webkitRequestFullScreen) {
    docElm.webkitRequestFullScreen();
  }
//IE11
  else if (elem.msRequestFullscreen) {
    elem.msRequestFullscreen();
  }
});
//LOGO图标的切换
$(".logo_o img").hover(function () {
  $(this).attr("src","images/xf_logo_o.png");
}, function () {
  $(this).attr("src","images/xf_logo_h.png");
});
//开灯
$(".light").click(function () {
  $("body").css("background","#EDECEA");
  $(".bottom_fixed").css("background","#f7f7f7");
  $(".top-main").css({
    background:`#FDFDFD`,
    color:`#333`
  });
  $(".next-btn a").css({
    background:`#FDFDFD`,
    color:`#333`
  });
  $(this).addClass("fide");
  $(".close").removeClass("fide");
});


//关灯

$(".close").click(function () {
  console.log(1);
  $("body").css("background","#333");
  $(".bottom_fixed").css("background","#292929");
  $(".top-main").css({
    background:`#333`,
    color:`#B0B0B0`
  });
  $(".next-btn a").css({
    background:`#292929`,
    color:`#B0B0B0`
  });
  $(this).addClass("fide");
  $(".light").removeClass("fide");
})