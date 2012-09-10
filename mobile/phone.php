<?php
include_once(__DIR__."/core/conf.php");
// $timer = microtime(true);
$pw = "c00p3r6aykey7yaslasapd1ltdc00p3r";
$is_ajax = (int) AesCtr::decrypt($_REQUEST['is_ajax'], $pw, 256);
	if(isset($is_ajax) && $is_ajax == 1){
		$decrName = (string) AesCtr::decrypt($_REQUEST['username'], $pw, 256);
		$decrPass = (string) AesCtr::decrypt($_REQUEST['password'], $pw, 256);
		$us = $bd->sub_fila("SELECT USUARIO FROM ITR_USUARIOS WHERE USUARIO='$decrName'");
		$ps = $bd->sub_fila("SELECT CLAVE FROM ITR_USUARIOS WHERE CLAVE='$decrPass'");
		$bd->cerrar_conexion();
		if($us['USUARIO']== $decrName && $ps['CLAVE']==$decrPass){
			$jsondata['usuario'] = AesCtr::encrypt($decrName, $pw, 256);
			//$jsondata['pass'] = AesCtr::encrypt($decrPass, $pw, 256);
			$jsondata['flag'] = AesCtr::encrypt("t", $pw, 256);
			
			echo json_encode($jsondata);
		}
		else{
			$jsondata['flag'] = AesCtr::encrypt("f", $pw, 256);
			echo json_encode($jsondata);
		}
	}
	else{echo "fail isset";}
?>