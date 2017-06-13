<?php
	header("Content-Type:application/json;charset=utf-8");
	require("init.php");
	//获取参数页面
	@$page=$_REQUEST['page'];
	$offset=($page-1)*8;
	$sql="SELECT * FROM m_product LIMIT $offset,8";
	$result=mysqli_query($conn,$sql);
	$rows=mysqli_fetch_all($result,MYSQLI_ASSOC);
	$str=json_encode($rows);
	echo "$str";
?>