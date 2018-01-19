/**
 * Created by Administrator on 2017/5/17 0017.
 */
$(function () {
  $(".header").load("data/header.php");
  $("#footer").load("data/footer.php");
  $("#right_fixed").load("data/right_fixed.php", function () {
    if(sessionStorage['LoginUid']){
      console.log(sessionStorage['LoginUpic']);
      $("#right_fixed div.login>a>img").attr("src",sessionStorage['LoginUpic']);
    }
  });
});

//2096
$(".load-all").click(function () {
  $(".topic-content").css({
    height:`1665px`
  });
  $(this).css({display:`none`});
})