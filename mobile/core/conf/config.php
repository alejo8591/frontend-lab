<?php
	define("IPSERVIDORBD","localhost");
	define("PTOBD","3306");
	define("USUARIOBD","irtsoftech_site");
	define("CLAVEBD","5EIpP9DL");
	define("BD","irtsoftech_site");
	define("VERSION","3");
	define("APLICACION","me");
	define("AUTOR","Alejandro Romero");
	define("DRIVER","connect.php");
        define("AES", "../aes/aes.class.php");
	//llama al archivo driver de mysql
	include_once(DRIVER);
        include_once(AES);
?>
