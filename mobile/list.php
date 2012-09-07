<?php
include_once(__DIR__."/core/conf.php");
// $usuario = $_REQUEST['user'];
// if(isset($usuario) && $usuario){
    // $sql = "SELECT NOMBRE, USUARIO, IMAGEN FROM ITR_USUARIOS WHERE USUARIO != '$usuario' ORDER BY ID";
    $sql = "SELECT NOMBRE, USUARIO, IMAGEN FROM ITR_USUARIOS ORDER BY ID";
    $list = $bd->sub_tuplas($sql);
    $bd->cerrar_conexion();
    echo json_encode($list);
// }
// else{
//     echo "Error";
// }
?>