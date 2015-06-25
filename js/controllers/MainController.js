app.controller('MainController', ['$scope', function($scope){
	$scope.general = {
		headerClass: 'headerGeneral',
		navClass: 'aGeneral',
		etapaTitle: 'Título general',
		etapaTitleClass: 'titleGeneral',
		etapaContent: 'Contenido general',
		footerClass: 'footerGeneral'
	},
	$scope.infantil = {
		headerClass: 'headerInfantil',
		navClass: 'aInfantil',
		etapaTitle: 'Título infantil',
		etapaTitleClass: 'titleInfantil',
		etapaContent: 'Contenido infantil',
		footerClass: 'footerInfantil'
	},
	$scope.primaria = {
		headerClass: 'headerPrimaria',
		navClass: 'aPrimaria',
		etapaTitle: 'Título primaria',
		etapaTitleClass: 'titlePrimaria',
		etapaContent: 'Contenido primaria',
		footerClass: 'footerPrimaria'
	},
	$scope.secundaria = {
		headerClass: 'headerSecundaria',
		navClass: 'aSecundaria',
		etapaTitle: 'Título secundaria',
		etapaTitleClass: 'titleSecundaria',
		etapaContent: 'Contenido secundaria',
		footerClass: 'footerSecundaria'
	},
	$scope.bachillerato = {
		headerClass: 'headerBachillerato',
		navClass: 'aBachillerato',
		etapaTitle: 'Título bachillerato',
		etapaTitleClass: 'titleBachillerato',
		etapaContent: 'Contenido bachillerato',
		footerClass: 'footerBachillerato'
	};
}]);
