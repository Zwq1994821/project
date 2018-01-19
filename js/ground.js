/**
 * Created by Administrator on 2017/5/16 0016.
 */
$(function () {
  $(".header").load("data/header.php", function () {
    $(".top-nav li:nth-child(5)").addClass("active").siblings().removeClass("active");
  });
  $("#footer").load("data/footer.php");
  $("#right_fixed").load("data/right_fixed.php", function () {
    if(sessionStorage['LoginUid']){
      console.log(sessionStorage['LoginUpic']);
      $("#right_fixed div.login>a>img").attr("src",sessionStorage['LoginUpic']);
    }
  });
});
$("#right_fixed").on("click","div.login>a", function () {
  if(sessionStorage['LoginUid']){
    console.log(1);
  }
  else{
    location.href = "login.html";
  }
});
/*sideComCodeWrap 二维码*/
$('#right_fixed').on("click","#sideComCodeWrap",function () {
  $('#sideComCodeWrap>div.sideComCodeImg').toggleClass("fide");
});

/*新闻列表滑动*/
$(".bx-next").click(function (e) {
  e.preventDefault();
  $(this).parent().prev().stop().animate({
    marginTop:`-606px`
  },500);
});
$(".bx-prev").click(function (e) {
  e.preventDefault();
  $(this).parent().prev().stop().animate({
    marginTop:0
  },500);
})