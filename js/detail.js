/**
 * Created by Administrator on 2017/4/16 0016.
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
})

/*评分星星的变化*/
$(".score-act>img").hover(
  function () {
    $(this).attr("src","images/detail/star_on.gif");
    $(this).prevAll().attr("src","images/detail/star_on.gif");
}, function () {
    $(this).attr("src","images/detail/star_off.gif");
  })

/*
用户评论*/
$(function () {
  if(sessionStorage['LoginUid']){
    var upic = sessionStorage['LoginUpic'];
    $("#text-box").removeAttr("readonly").attr("placeholder","");
    console.log(upic);
    $("#submit").click(function () {
     var html = '';
     var text = $("#text-box").val();
     html+=`<li>
     <div class="userhead">
     <img src="${upic}">
     <a href="#" class="user-name" style="cursor: default;">月</a>
     </div>
     <div class="usertxt">
     ${text}
     </div>
     </li>`;
      if(text!=""){
        $(".pl-main li:last-child").after(html);
      }
     });
  }
})

