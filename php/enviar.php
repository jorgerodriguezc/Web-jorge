<?php
if(isset($_POST['nombre']) && !empty($_POST['nombre']) && isset($_POST['correo']) && !empty($_POST['correo']) && isset($_POST['telefono']) && !empty($_POST['telefono']) && isset($_POST['mensaje']) && !empty($_POST['mensaje'])){   
    $destino= "georgejerc110589@gmail.com";
    $nombre = $_POST['nombre'];
    $correo = $_POST['correo'];
    $telefono = $_POST['telefono'];
    $mensaje = $_POST['mensaje'];
	mail($destino,$nombre,$telefono,$mensaje);
	echo "Correo enviado";
	}else{
		echo "Problemas al enviar";
		}
?>