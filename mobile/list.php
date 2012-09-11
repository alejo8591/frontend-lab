<?php
include_once(__DIR__."/core/conf.php");
$usuario = AesCtr::decrypt($_GET['usuario'], $pw, 256);
if(isset($usuario) && $usuario){
    $sql = "SELECT NOMBRE, USUARIO, IMAGEN FROM ITR_USUARIOS WHERE USUARIO != '$usuario' ORDER BY ID";
    $lista = $bd->sub_tuplas($sql);
    /*
    foreach($lista as $tupla){
        foreach($tupla as $clave => $valor){
              $lista[$clave[$valor]] = AesCtr::encrypt($valor, $pw, 256);
        }
    }*/
    // echo $lista[0]["NOMBRE"];
    echo json_encode($lista);
    $bd->cerrar_conexion();
 }
 else{echo "Error";}
?>