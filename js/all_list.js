/**
 * Created by Administrator on 2017/4/6 0006.
 */
$(function () {
  $(".header").load("data/header.php", function () {
    $(".top-nav li:nth-child(2)").addClass("active").siblings().removeClass("active");
  });
  $("#footer").load("data/footer.php");
  $("#right_fixed").load("data/right_fixed.php", function () {
    if(sessionStorage['LoginUid']){
      console.log(sessionStorage['LoginUpic']);
      $("#right_fixed div.login>a>img").attr("src",sessionStorage['LoginUpic']);
    }
  });
});

/*sideComCodeWrap 二维码*/
$('#right_fixed').on("click","#sideComCodeWrap",function () {
  $('#sideComCodeWrap>div.sideComCodeImg').toggleClass("fide");
})
/*左侧内容检索*/
$(".ret-tags-items").on("click","a", function (e) {
  e.preventDefault();
  $(this).addClass("active").siblings().removeClass();
  var txt = $(this).text();
  $(".ret-check-all").append(`<a class="#">${txt}</a>`);
});
$(".ret-check-all").on("click","a", function (e) {
  e.preventDefault();
  $(this).remove();
})

/*右侧内容的排列类型*/
$(".ret-search-type li").click(function () {
  $(this).addClass("active").siblings().removeClass();
})

