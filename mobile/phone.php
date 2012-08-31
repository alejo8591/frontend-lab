<?php
//include_once "conf/config.php";

// $timer = microtime(true);

$is_ajax = $_REQUEST['is_ajax'];
if(isset($is_ajax) && $is_ajax){
	$pw = '54321';
        $decrName = AesCtr::decrypt($_REQUEST['username'], $pw, 256);
        $decrPass = AesCtr::decrypt($_REQUEST['password'], $pw, 256);
	if($decrName=="yopo" && $decrPass="yopo"){
            $jsondata['user'] = AesCtr::encrypt($decrName, $pw, 256);
            $jsondata['pass'] = AesCtr::encrypt($decrPass, $pw, 256);
            $jsondata['flag'] = AesCtr::encrypt("t", $pw, 256);
            
            echo json_encode($jsondata);
	}
	else{
                $jsondata['flag'] = AesCtr::encrypt("f", $pw, 256);
		echo json_encode($jsondata);
	}
}
else{
	echo "fail isset";
}
?>