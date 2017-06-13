<?php
	header("Content-Type:application/json;charset=utf-8");
	//获取删除购物项的id值
	$id=$_REQUEST['id'] or die('{"code":-1,"msg":"删除编号不能为空"}');
	require('init.php');
	$sql="DELETE FROM m_cart WHERE id=$id";
	$result=mysqli_query($conn,$sql);
	if($result==true)
	echo '{"code":1,"msg":"删除成功"}';
	else
	echo '{"code":-2,"msg":"删除失败"}';
?>