<?php
    header("Content-Type:text/html;charset=utf8");
    @$uid=$_REQUEST['uid'] or die('-1');
    @$pid=$_REQUEST['pid'] or die('-3');
    require('init.php');
    $sql="SELECT * FROM m_cart";
    $sql.=" WHERE uid=$uid AND productid=$pid";
    $result=mysqli_query($conn,$sql);
    $rows=mysqli_fetch_assoc($result);
    $count=0;
    if($rows===null){
        $sql="INSERT INTO m_cart VALUES(null,$uid,$pid,1)";
        $result=mysqli_query($conn,$sql);
        $count=1;
    }else{
        $sql="UPDATE m_cart SET count=count+1";
        $sql.=" WHERE uid=$uid AND productid=$pid";
        $result=mysqli_query($conn,$sql);
        $count=$rows['count']+1;
    }
    echo $count;
?>