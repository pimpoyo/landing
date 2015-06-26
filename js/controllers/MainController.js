app.controller('MainController', ['$scope', function($scope){
	$scope.general = {
		headerClass: 'headerGeneral',
		images : {
			classImage1: 'element-red',
			classImage2: 'element-green',
			classImage3: 'element-blue'
		},
		etapaTitle: 'Título general',
		etapaTitleClass: 'titleGeneral',
		etapaContent: 'Contenido general',
		footerClass: 'footerGeneral'
	},
	$scope.infantil = {
		headerClass: 'headerInfantil',
		images : {
			classImage1: 'element-red',
			classImage2: 'element-green',
			classImage3: 'element-blue'
		},
		etapaTitle: 'Título infantil',
		etapaTitleClass: 'titleInfantil',
		etapaContent: 'Contenido infantil',
		footerClass: 'footerInfantil'
	},
	$scope.primaria = {
		headerClass: 'headerPrimaria',
		images : {
			classImage1: 'element-red',
			classImage2: 'element-green',
			classImage3: 'element-blue'
		},
		etapaTitle: 'Título primaria',
		etapaTitleClass: 'titlePrimaria',
		etapaContent: 'Contenido primaria',
		footerClass: 'footerPrimaria'
	},
	$scope.secundaria = {
		headerClass: 'headerSecundaria',
		images : {
			classImage1: 'element-red',
			classImage2: 'element-green',
			classImage3: 'element-blue'
		},
		etapaTitle: 'Título secundaria',
		etapaTitleClass: 'titleSecundaria',
		etapaContent: 'Contenido secundaria',
		footerClass: 'footerSecundaria'
	},
	$scope.bachillerato = {
		headerClass: 'headerBachillerato',
		images : {
			classImage1: 'element-red',
			classImage2: 'element-green',
			classImage3: 'element-blue'
		},
		etapaTitle: 'Título bachillerato',
		etapaTitleClass: 'titleBachillerato',
		etapaContent: 'Contenido bachillerato',
		footerClass: 'footerBachillerato'
	};
}]);
