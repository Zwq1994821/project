<?php
header('Content-Type: application/json; charset=utf-8');

@$n = $_REQUEST['uname'] or die('{"code":-2, "msg":"用户名不能为空"}');
@$p = $_REQUEST['upwd'] or die('{"code":-3, "msg":"密码不能为空"}');
@$phone = $_REQUEST['unumber'] or die('{"code":-4, "msg":"手机号不能为空"}');

$conn = mysqli_connect('127.0.0.1','root', '', 'xuanfeng');

mysqli_query($conn, "SET NAMES UTF8");

$sql = "INSERT INTO xf_user VALUES(null,'$n','$p','$phone');";
$result = mysqli_query($conn,$sql);
if($result){
	echo '{"code":1,"msg":"用户注册成功！"}';
}else{
    echo '{"code":-1,"msg":"用户注册失败！"}';
}