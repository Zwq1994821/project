<?php
header('Content-Type: application/json; charset=utf-8');

@$n = $_REQUEST['uname'] or die('{"code":-2, "msg":"用户名不能为空"}');
@$p = $_REQUEST['upwd'] or die('{"code":-3, "msg":"密码不能为空"}');

$conn = mysqli_connect('127.0.0.1','root', '', 'xuanfeng');

mysqli_query($conn, "SET NAMES UTF8");

$sql = "SELECT * FROM xf_user WHERE uname='$n' AND upwd='$p'";
$result = mysqli_query($conn,$sql);

//此处省略了$result为false(SQL语法错误)的检验

$row = mysqli_fetch_row($result);
if($row===null){	//查询结果集中没有记录
	echo '{"code":-1,"msg":"用户名或密码错误"}';
}else {  //查询结果集中有记录
	$uid = $row[0];
	$upic = $row[4];
	$output = [
		'code'=>1,
		'msg'=>'登录成功',
		'uname'=>$n,
		'uid'=>$uid,
		'upic'=>$upic
	];
	echo json_encode($output);
}