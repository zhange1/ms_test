<?php
	header("Content-Type:text/html;charset=utf-8");
	@$id=$_REQUEST['id'] or die("-1");
	require('init.php');
	$sql="UPDATE m_cart SET count=count+1 WHERE id=$id";
	$result=mysqli_query($conn,$sql);
	if($result==true)
	echo "1";
	else
	echo "-2";
?>