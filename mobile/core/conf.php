<?php
	define("IPSERVIDORBD","127.0.0.1");
	define("PTOBD","3306");
	define("USUARIOBD","root");
	define("CLAVEBD","3193115");
	define("BD","SIGMACOREPRUE");
	define("VERSION","3");
	define("APLICACION","CHATCORE");
	define("AUTOR","Alejandro Romero");
	define("DRIVER",__DIR__."/conf/connect.php");
        define("AES", __DIR__."/aes/aes.class.php");
	//llama al archivo driver de mysql
	include_once(DRIVER);
        include_once(AES);
	$bd=new SuBase();
	// optional
	header('Cache-control: max-age=3600, public');
	header('Pragma: cache');
	header("Last-Modified: ".gmdate("D, d M Y H:i:s",time())." GMT");
	header("Expires: " .gmdate("D, d M Y H:i:s",time()+3600)." GMT");
?>