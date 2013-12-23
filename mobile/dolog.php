<?php
$is_ajax = $_REQUEST['is_ajax'];
if(isset($is_ajax) && $is_ajax){
	$username = $_REQUEST['username'];
	$password = $_REQUEST['password'];
	if($username=="yopo" && $password="yopo"){
		echo "success";
	}
	else{
		echo "fail";
	}
}
else{
	echo "fail isset";
}
?>