<?php
    require "conn.php";
    if(isset($_GET['sid'])){
        $desid=$_GET['sid'];
        //获取前端传来的id并返回
        $result=mysql_query("select * from productdetails where sid=$desid");
        echo json_encode(mysql_fetch_array($result,MYSQL_ASSOC));
    }