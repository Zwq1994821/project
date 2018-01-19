/**
 * Created by Administrator on 2017/5/15 0015.
 */
//页面底部加载
$(function () {
  $("#footer").load("data/footer.php");
});
$("#checkbox").click(function () {
  if($(this).is(':checked')){
    $("#register-btn").removeAttr("disabled").css({
      borderColor:`#E57700`,
      background:`#ff8400`
    });
    register();
  }else{
    $("#register-btn").attr("disabled","disabled").css({
      borderColor:`#ccc`,
      background:`#ddd`
    });

  }
});

function register(){
  $('#register-btn').click(function(){
    var n = $('[name="uname"]').val();
    var p = $('[name="upwd"]').val();
    var phone = $('[name="unumber"]').val();
    //发起异步POST请求，进行登录验证
    $.ajax({
      type: 'POST',
      url: 'data/register.php',
      data: {uname: n, upwd: p, unumber: phone},
      success: function(data){
        //console.log('开始处理响应消息');
        if(data.code<0){  //注册失败
          $('p.alert').html(data.msg).css({
            color:`red`,
            display:`block`
          });
          $("myform").css({
            display:`none`
          })
        }else {           //注册成功
          $('p.alert').html(data.msg).css({
            color:`green`,
            display:`block`
          });
          $("myform").css({
            display:`none`
          });
          var timer = setInterval(function(){
            location.href = "login.html" ;
          },5000)
        }
      },
      error: function(){
        alert('响应消息有问题！请检查Network！');
      }
    });
  });
}

function regExp(reg,msg) {
  if(reg.test(msg)){
    return 1;
  }
  else{
    return -1;
  }
}
$("#uname").blur(function () {
  var uname = $(this).val();
  var reg = /^\w/;
  var n = regExp(reg,uname);
  $.ajax({
      type: 'POST',
      url: 'data/uname.php',
      data: {uname: uname},
      success: function(data){
        if(data == 1){
          $("#uname").next().css({
            width:`100px`,
            display:`inline-block`,
            background:`#fff`
          }).text("用户名已经存在");
        }
        else if(data == -1){
          console.log(data);
          console.log(n);
          if(n == -1){
            $("#uname").next().css({
              width:`100px`,
              display:`inline-block`,
              background:`#fff`
            }).text("用户名格式不正确");
          }
          else if(n == 1){
            $("#uname").next().css({
              width:`20px`,
              height:`20px`,
              display:`inline-block`,
              background:`url(images/register/right_gou.png)`
            }).text("");
          }
        }
      }
    });
});
$("#password").blur(function () {
  var pwdtxt = $(this).val();
  var reg = /[a-zA-Z0-9]{6,16}/g;
  var n = regExp(reg,pwdtxt);
  if(n == -1){
    $(this).next().css({
      width:`132px`,
      display:`inline-block`,
      background:`#fff`
    }).text("填写的密码格式不正确哦");
  }
  else if(n == 1){
    $(this).next().css({
      width:`20px`,
      height:`20px`,
      display:`inline-block`,
      background:`url(images/register/right_gou.png)`
    }).text("");
  }
});

$(".get-btn").click(function () {
  $(this).css({
    background:`#ddd`
  });
  var n = 60;
  var timer = setInterval(function () {
    n--;
    $(".get-btn").html(`（${n}s）重新发送`);
    if(n==0){
      $(".get-btn").css({
        background:`#ff8400`
      }).html("点击获取")
      clearInterval(timer);
    }
  },1000);
});
