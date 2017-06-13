<?php
    header("Content-Type:text/html;charset=utf-8");
    @$uname=$_REQUEST['uname'] or die('-1');
    @$upwd=$_REQUEST['upwd'] or die('-2');
    require('init.php');
    $sql="INSERT INTO t_user VALUES(null,'$uname','$upwd')";
    $result=mysqli_query($conn,$sql);
    if($result===true){
        echo "1";
    }else{
        echo "-3";
    }
?>