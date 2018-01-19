<?php
header('Content-Type: application/json; charset=utf-8');
@$n = $_REQUEST['uname'] or die('{"code":-2, "msg":"用户名不能为空"}');
$conn = mysqli_connect('127.0.0.1','root', '', 'xuanfeng');
mysqli_query($conn, "SET NAMES UTF8");
$sql = "select count(uid) from xf_user where uname='$n'";
$result = mysqli_query($conn,$sql);
$row = mysqli_fetch_row($result);
if($row[0]==0){
    echo -1;
}else{
    echo 1;
}