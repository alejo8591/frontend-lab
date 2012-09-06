<?php
    include_once(__DIR__."/core/conf.php");
    $yopo = "alejo8591";
    $repe = (string) 'alejo8591';
    $us = "SELECT USUARIO FROM ITR_USUARIOS WHERE USUARIO='$yopo'";
    $ps = "SELECT CLAVE FROM ITR_USUARIOS WHERE CLAVE=".$repe;
    $fila1 = $bd->sub_fila($us);
    $fila2 = $bd->sub_fila($ps);
    
    echo $fila1['USUARIO'];
    echo $fila2['CLAVE'];
    /*
    $sql="SELECT * FROM ITR_USUARIOS";
    $fila = $bd->sub_tuplas($sql);
    foreach ($fila as $usuario){
        echo '<h1>'.$usuario['USUARIO'].'</h1><br />';
    }*/
    $bd->cerrar_conexion();
?>