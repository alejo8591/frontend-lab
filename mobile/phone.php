<?php
include_once(__DIR__."/core/conf.php");
// $timer = microtime(true);
$is_ajax = (int) AesCtr::decrypt($_REQUEST['is_ajax'], $pw, $cip);
	if(isset($is_ajax) && $is_ajax == 1){
		$decrName = (string) AesCtr::decrypt($_REQUEST['username'], $pw, $cip);
		$decrPass = (string) AesCtr::decrypt($_REQUEST['password'], $pw, $cip);
		$us = $bd->sub_fila("SELECT USUARIO FROM ITR_USUARIOS WHERE USUARIO='$decrName'");
		$ps = $bd->sub_fila("SELECT CLAVE FROM ITR_USUARIOS WHERE CLAVE='$decrPass'");
		$bd->cerrar_conexion();
		if($us['USUARIO']== $decrName && $ps['CLAVE']==$decrPass){
			$jsondata['usuario'] = AesCtr::encrypt($decrName, $pw, $cip);
			$jsondata['flag'] = AesCtr::encrypt("t", $pw, $cip);
			// trama JSON
			echo json_encode($jsondata);
		}
		else{
			$jsondata['flag'] = AesCtr::encrypt("f", $pw, $cip);
			echo json_encode($jsondata);
		}
	}
	else{echo "fail isset";}
?>