app.controller('MainController', ['$scope', function($scope){
	$scope.general = {
		headerClass: 'headerGeneral',
		etapaTitle: 'Título general',
		etapaTitleClass: 'titleGeneral',
		etapaContent: 'Contenido general',
		footerClass: 'footerGeneral'
	},
	$scope.infantil = {
		headerClass: 'headerInfantil',
		etapaTitle: 'Título infantil',
		etapaTitleClass: 'titleInfantil',
		etapaContent: 'Contenido infantil',
		footerClass: 'footerInfantil'
	},
	$scope.primaria = {
		headerClass: 'headerPrimaria',
		etapaTitle: 'Título primaria',
		etapaTitleClass: 'titlePrimaria',
		etapaContent: 'Contenido primaria',
		footerClass: 'footerPrimaria'
	},
	$scope.secundaria = {
		headerClass: 'headerSecundaria',
		etapaTitle: 'Título secundaria',
		etapaTitleClass: 'titleSecundaria',
		etapaContent: 'Contenido secundaria',
		footerClass: 'footerSecundaria'
	},
	$scope.bachillerato = {
		headerClass: 'headerBachillerato',
		etapaTitle: 'Título bachillerato',
		etapaTitleClass: 'titleBachillerato',
		etapaContent: 'Contenido bachillerato',
		footerClass: 'footerBachillerato'
	};
}]);
