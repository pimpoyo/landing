<?php
  $etapa = strtolower($_REQUEST['etapa']);
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
      <app-respuesta info="<?echo $etapa;?>"></app-respuesta>
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
		<script src="js/directives/appRespuesta.js"></script>
		<script src="js/directives/appPilares.js"></script>
		<script src="js/directives/appFooter.js"></script>
		<script src="js/jquery-1.11.3.min.js" type="text/javascript"></script>
		<script src="js/menu.js" type="text/javascript"></script>
	</body>
</html>
<?php
  $to = 'pimpoyolega@gmail.com' . ', ';
?>
