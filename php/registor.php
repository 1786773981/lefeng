<?php
require "conn.php";
    //获取submit的数据传入数据库
    if(isset($_POST["submit"])){
        $phonenum=$_POST["mobileNo"];
        $password=$_POST["passwd"];
        mysql_query("insert loginregist values(null,'$phonenum','$password',NOW())");
        header('location:http://10.31.164.23/lefengwang/src/html/login.html');
    };

    // 判断手机号是否重复注册
    if(isset($_POST['mobileNo'])){
        $phonenum=$_POST['mobileNo'];//用获取的值去和数据库里面的用户名进行匹配
        $result=mysql_query("select * from loginregist where phonenum='$phonenum'");
        if(mysql_fetch_array($result)){//存在
            echo "false";
        }else{//不存在
            echo "true";
        }
    }