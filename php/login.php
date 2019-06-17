<?php
    require "conn.php";
    if(isset($_POST['phonenum'])&&isset($_POST['passwd'])){
        $_phone=$_POST['phonenum'];
        $_pass=$_POST['passwd'];
        // 获取前端传来的数据判断与数据库是否匹配
        $result=mysql_query("select * from loginregist where phonenum='$_phone' and password='$_pass' ");
        if(mysql_fetch_array($result)){//用户名和密码正确
            echo true;
        }else{//不正确
            echo false;
        }
    }