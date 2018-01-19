/**
 * Created by Administrator on 2017/5/20 0020.
 */

$(function () {
  var n=0;
  var tab = $(".content_7 ul li");
  tab.hover(function () {
    n = $(this).index()+1;
    console.log(n);
    $(this).addClass("btn"+n+"_active").siblings().removeClass();
    $("div.txt").eq(n-1).removeClass("fide").siblings().addClass("fide");
  })
})