<?php
	define("IPSERVIDORBD","localhost");
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
?>
