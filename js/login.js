/**
 * Created by Administrator on 2017/3/19 0019.
 */
//动态加载页面底部
$(function () {
  $("#footer").load("data/footer.php");
});


$(".form-group input").focus(function(){
  $(this).attr("placeholder","");
});
$(".form-group input.userName").blur(function(){
  $(this).attr("placeholder","您的账号/手机号/邮箱");
});
$(".form-group input.userPwd").blur(function(){
  $(this).attr("placeholder","密码");
});

/*为“登录”按钮绑定事件监听*/
//var loginUname = null;  //全局变量，当前登录的用户名
//var loginUid = null;    //全局变量，当前登录的用户编号
$('#bt-login').click(function(){
  var n = $('[name="uname"]').val();
  var p = $('[name="upwd"]').val();
  //发起异步POST请求，进行登录验证
  $.ajax({
    type: 'POST',
    url: 'data/login.php',
    data: {uname: n, upwd: p},
    success: function(data){
      //console.log('开始处理响应消息');
      if(data.code<0){  //登录失败
        $('p.alert').html(data.msg);
      }else {           //登录成功
        location.href = "index.html";
        //loginUname = data.uname; //在全局范围保存登录用户名
        //loginUid = data.uid;//在全局范围保存登录用户编号
        sessionStorage['LoginUname'] = data.uname;
        sessionStorage['LoginUid'] = data.uid;
        sessionStorage['LoginUpic'] = data.upic;
      }
    },
    error: function(){
      alert('响应消息有问题！请检查Network！');
    }
  });
});