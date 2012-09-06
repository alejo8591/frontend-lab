<?php
include_once(__DIR__."/core/conf.php");
$sql = "SELECT * FROM ITR_USUARIOS ORDER BY ID";
$list = $bd->sub_tuplas($sql);
$bd->cerrar_conexion();
echo json_encode($list);
?>