<?php
$etapa = strtolower($_REQUEST['etapa']);

$flag = true;

if ($_REQUEST['name'] == "") {
  $flag = false;
} elseif(strlen($_REQUEST['name']) < 3) {
  $flag = false;
} else {
  $name = $_REQUEST['name'];
} 

if ($_REQUEST['email'] == "") {
  $flag = false;
} elseif (!filter_var($_REQUEST['email'], FILTER_VALIDATE_EMAIL)) {
  $flag = false;
} else {
  $email = $_REQUEST['email'];
}

if ($_REQUEST['phone'] == "") {
  $flag = false;
} elseif(strlen($_REQUEST['phone']) < 9) {
  $flag = false;
} else {
    $phone = $_REQUEST['phone'];
}



  $to = 'pimpoyolega@gmail.com'; //Direccion de correo provisional para pruebas
  $title = 'SOLICITUD: deseo información de ' . $etapa;

$message = '
<html>
<head>
  <title>' . $title . '</title>
</head>
<body>
  <p>Deseo información sobre ' . $etapa  . '</p>
  <p>Mi nombre: ' . $name  . '</p>
  <p>Mi email: ' . $email  . '</p>
  <p>Mi teléfono: ' . $phone . '</p>
</body>
</html>
';

// Para enviar un correo HTML, debe establecerse la cabecera Content-type
$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";

// headers adicionales
$headers .= $to . "\r\n";
$headers .= 'From: Landing page <aravacalanding@aravaca.com>' . "\r\n";

if ($flag != true) {
  $code = '<app-form info="' . $etapa . '"></app-form>';
} else {
  mail($to, $title, $message, $headers);
  $code = '<app-respuesta info="' . $etapa . '"></app-respuesta>';
}

?>

<!doctype html>
<html>
	<head>
		<link href='http://fonts.googleapis.com/css?family=Raleway:400,300,500,600' rel='stylesheet' type='text/css'>
		<link rel="stylesheet" href="css/normalize.css">
		<link rel="stylesheet" href="css/style.css">
		<link rel="stylesheet" href="css/icons.css">
		<meta name="viewport" content="width=device-width, minimum-scale=1.0, maximum-scale=1.0" />
		<meta charset="UTF-8">
		<link href="img/favicon.ico" rel="shortcut icon" type="image/vnd.microsoft.icon" />
		<title>Colegio Internacional Aravaca</title>
	</head>
	<body ng-app="AppLanding">
		<div class="main" ng-controller="MainController">
    <app-header info="<?echo $etapa;?>"></app-header>
			<div class="container">
				<div class="phone2"><p>Ll&aacutemanos al 91 357 12 56</p></div>
			</div>
      <app-slider info="<?echo $etapa;?>"></app-slider>
			<div class="container">
      <app-etapa info="<?echo $etapa;?>"></app-etapa>
      <? echo $code;?> 
      </div>
      <app-pilares info="<?echo $etapa;?>"></app-pilares>
      <app-footer info="<?echo $etapa;?>"></app-footer>
		</div>
		<!-- Include the AngularJS library -->
		<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.16/angular.min.js"></script>
		<script src="js/app.js"></script>
		<script src="js/controllers/MainController.js"></script>
		<script src="js/directives/appHeader.js"></script>
		<script src="js/directives/appSlider.js"></script>
		<script src="js/directives/appEtapa.js"></script>
		<script src="js/directives/appForm.js"></script>
		<script src="js/directives/appRespuesta.js"></script>
		<script src="js/directives/appPilares.js"></script>
		<script src="js/directives/appFooter.js"></script>
		<script src="js/jquery-1.11.3.min.js" type="text/javascript"></script>
		<script src="js/menu.js" type="text/javascript"></script>
	</body>
</html>
