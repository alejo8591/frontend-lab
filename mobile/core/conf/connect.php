<?php
//DRIVER DE MySQL en POO

class Base {
	private $id_conexion; //numero para la conexion con la BD
	private $id_resultado; //cuando se ejecuta un query se obtiene un numero
	protected $id_error1; //variable para ver errores en las conexiones con la BD

	/*Se aprovecha el metodo constructor para inicializar las propiedades
	* de la conexion de la BD pues MySQL requiere primero conexion
	*y despues si abrir la BD
	*/
	function base($server=IPSERVIDORBD,$pto=PTOBD,$user=USUARIOBD,$clave=CLAVEBD,$tipo_conexion="N") {
		$this->id_conexion=null;
		$this->id_resultado=null;
		$this->error1="Could no Connect";
		return($this->conectar($server,$pto,$user,$clave,$tipo_conexion)); //se retornan los valores y se llama  al metodo "conectar".
	} //fin constructor clase

	function conectar($server=IPSERVIDORBD,$pto=PTOBD,$user=USUARIOBD,$clave=CLAVEBD,$tipo_conexion="N"){
	switch($tipo_conexion){
			//CONEXION NO PERSISTENTE
			case "N":
				//$link se reemplazo por una propiedad de la clase "base"
				$this->id_conexion=mysql_connect($server.":".$pto,$user,$clave);
			break;
			//CONEXION PERSISTENTE
			case "P":
				$this->id_conexion=mysql_pconnect($server.":".$pto,$user,$clave);
			break;
			default:
				$this->id_conexion=mysql_connect($server.":".$pto,$user,$clave);
			break;
		} //fin del switch
		return($this->id_conexion);	
	}//fin funcion 1

	//2. FUNCION PARA ABRIR LA BASE DE DATOS
	function abrirbasedatos($bdatos=BD){
		return(mysql_select_db($bdatos,$this->id_conexion));
	}//fin funcion 2

	//3. FUNCION PARA EJECUTAR UN QUERY	
	function consulta($query){
		return($this->id_resultado=mysql_query($query,$this->id_conexion));
	}//fin funcion 3

	//4. FUNCION PARA CONTAR LA CANTIDAD DE FILAS QUE A TRAIDO
	function num_filas(){
		return(mysql_num_rows($this->id_resultado));
	}
	//5. FUNCION PARA TRAER LOS DATOS DE LA FILA
	function trae_filas($tipo_indice="A"){
		switch($tipo_indice){
			case "A": //Indice Asociativo para vector de Dato
				$fila=mysql_fetch_array($this->id_resultado,MYSQL_ASSOC);
				break;
			case "N": //Indice numerico para vector de Datos
				$fila=mysql_fetch_array($this->id_resultado,MYSQL_NUM);
				break;
			default:
				$fila=mysql_fetch_array($this->id_resultado,MYSQL_ASSOC);
				break;
		}
		return($fila);
	}//fin funcion 5
	
	//6. FUNCION PARA CERRAR CONEXION
	function cerrar_conexion(){
		return(mysql_close($this->id_conexion));
	}//fin funcion 6

}//fin de la clase

class subase extends Base {
	//metodo constructor

	/* En este metodo constructor  se realizan varias tareas: inicializa las 
	*propiedades heredadasdel padre y establece la conexion 
	*de la BD y abre la BD.
	*
	*/	
	function subase($server=IPSERVIDORBD,$pto=PTOBD,$user=USUARIOBD,$clave=CLAVEBD,$tipo_conexion="N",$basedatos=BD){
		if($this->Base($server,$pto,$user,$clave,$tipo_conexion)){
			return($this->abrirbasedatos($basedatos));
		}
		else{
			return(false);
		}
	}//fin metodo constructor sub_base

	//funcion que realiza el query
	function sub_fila($query){
		if($this->consulta($query)){
			return($this->trae_filas());
		}
		else {
			return(null);
		}//fin metodo
	}
	//funcion para obtener el error
	function obtener_error(){
		return($this->error1);
	}
	//funcion que trae mas de un dato en forma de array
	function sub_tuplas($query){
			if($this->consulta($query)){
				$tabla = array();
				while($fila = $this->trae_filas()){
					$tabla[]=$fila;
				}
			return($tabla);
		}
		else {
			return(null);
		}//fin metodo
	}
}
?>