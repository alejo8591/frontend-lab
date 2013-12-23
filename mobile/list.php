<?php
include_once(__DIR__."/core/conf.php");
$usuario = AesCtr::decrypt($_GET['usuario'], $pw, $cip);
if(isset($usuario) && $usuario){
    $sql = "SELECT NOMBRE, USUARIO, IMAGEN FROM ITR_USUARIOS WHERE USUARIO != '$usuario' ORDER BY ID";
    $lista = $bd->sub_tuplas($sql);
    $bd->cerrar_conexion();
    foreach($lista as $tupla => &$valor){
        foreach($valor as &$dato){
            $dato = AesCtr::encrypt($dato, $pw, $cip);
        }
    }
    echo json_encode($lista);
 }
 else{echo "Error";}
?>