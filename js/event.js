/**
 * Created by Administrator on 2017/5/17 0017.
 */
$(function () {
  $(".header").load("data/header.php", function () {
    $(".top-nav li:nth-child(7)").addClass("active").siblings().removeClass("active");
  });
});

//完结动画列表切换
$(".tab_left").click(function () {
  $(".tabImg").animate({
    marginLeft: `0`
  },500);
});
$(".tab_right").click(function () {
  $(".tabImg").animate({
    marginLeft: `-832px`
  },500);
});