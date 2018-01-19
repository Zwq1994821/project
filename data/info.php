<?php
    header("content-type:application/json;charset=utf-8");
    @$pageNum=$_REQUEST["pageNum"];
    if(! $pageNum){
        $pageNum=1;
    }else{
        $pageNum=intval($pageNum);
    }
    $output=[
        "totalCount"=>0, //总记录
        "pageSize"=>12, //页面大小
        "pageCount"=>0,//总页数
        "pageNum"=>$pageNum,//第几页
        "data"=>null //返回数据
    ];
    //链接数据库
      $conn = mysqli_connect('127.0.0.1','root','','xuanfeng');
      $sql = "SET NAMES utf8";
      mysqli_query($conn,$sql);

     //查出满足条件的总记录数
      $sql="select count(*) from xf_product";
      $result=mysqli_query($conn,$sql);
      $output['totalCount']=intval(mysqli_fetch_row($result)[0]);
      //计算总的页数
      $output['pageCount']=ceil(($output["totalCount"])/($output["pageSize"]));
      //生成页面
     $start = ($output['pageNum']-1)*$output['pageSize']; //从哪一条记录开始读取
     $count = $output['pageSize']; //一次最多读取的条数
      $sql = "SELECT * FROM xf_product LIMIT $start, $count";
      $result=mysqli_query($conn,$sql);
      $output["data"]=mysqli_fetch_all($result,MYSQLI_ASSOC);
      echo json_encode($output);
?>