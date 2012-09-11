<?php
	define("IPSERVIDORBD","127.0.0.1");
	define("PTOBD","8889");
	define("USUARIOBD","root");
	define("CLAVEBD","root");
	define("BD","SIGMACOREPRUE");
	define("VERSION","3");
	define("APLICACION","CHATCORE");
	define("AUTOR","Alejandro Romero");
	define("AES", __DIR__."/aes/aes.class.php");
	define("DRIVER",__DIR__."/conf/connect.php");
	//llama al archivo driver de mysql
	$pw = "c00p3r6aykey7yaslasapd1ltdc00p3r";
	include_once(AES);
	include_once(DRIVER);
	$bd=new SuBase();
	// optional
	header('Cache-control: max-age=3600, public');
	header('Pragma: cache');
	header("Last-Modified: ".gmdate("D, d M Y H:i:s",time())." GMT");
	header("Expires: " .gmdate("D, d M Y H:i:s",time()+3600)." GMT");
?>