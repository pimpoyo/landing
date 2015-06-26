app.controller('MainController', ['$scope', function($scope){
	$scope.general = {
		headerClass: 'headerGeneral',
		images : {
			classImage1: 'generalImg1',
			classImage2: 'generalImg2',
			classImage3: 'generalImg3'
		},
		etapaTitle: 'Título general',
		etapaTitleClass: 'titleGeneral',
		etapaContent: 'Contenido general',
		footerClass: 'footerGeneral'
	},
	$scope.infantil = {
		headerClass: 'headerInfantil',
		images : {
			classImage1: 'infantilImg1',
			classImage2: 'infantilImg2',
			classImage3: 'infantilImg3'
		},
		etapaTitle: 'Título infantil',
		etapaTitleClass: 'titleInfantil',
		etapaContent: 'Contenido infantil',
		footerClass: 'footerInfantil'
	},
	$scope.primaria = {
		headerClass: 'headerPrimaria',
		images : {
			classImage1: 'primariaImg1',
			classImage2: 'primariaImg2',
			classImage3: 'primariaImg3'
		},
		etapaTitle: 'Título primaria',
		etapaTitleClass: 'titlePrimaria',
		etapaContent: 'Contenido primaria',
		footerClass: 'footerPrimaria'
	},
	$scope.secundaria = {
		headerClass: 'headerSecundaria',
		images : {
			classImage1: 'secundariaImg1',
			classImage2: 'secundariaImg2',
			classImage3: 'secundariaImg3'
		},
		etapaTitle: 'Título secundaria',
		etapaTitleClass: 'titleSecundaria',
		etapaContent: 'Contenido secundaria',
		footerClass: 'footerSecundaria'
	},
	$scope.bachillerato = {
		headerClass: 'headerBachillerato',
		images : {
			classImage1: 'bachilleratoImg1',
			classImage2: 'bachilleratoImg2',
			classImage3: 'bachilleratoImg3'
		},
		etapaTitle: 'Título bachillerato',
		etapaTitleClass: 'titleBachillerato',
		etapaContent: 'Contenido bachillerato',
		footerClass: 'footerBachillerato'
	};
}]);
