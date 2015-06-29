app.controller('MainController', ['$scope', function($scope){
	$scope.general = {
		headerClass: 'headerGeneral',
		images : {
			classImage1: 'generalImg1',
			classImage2: 'generalImg2',
			classImage3: 'generalImg1'
		},
		etapaTitle: 'Título general',
		etapaTitleClass: 'titleGeneral',
		etapaContents: {
      p1: 'En Internacional Aravaca ofrecemos una educación personalizada, actual y global para tus hijos. Somos un colegio bilingüe, privado, mixto y de carácter laico que ofrece enseñanza en todos los niveles educativos desde los dos años hasta la etapa preuniversitaria.  ',
      p2: 'Prestamos especial valor al factor humano, sacando todo el potencial de todos nuestros alumnos para que lleguen a convertirse en grandes profesionales y personas. Damos una educación basada en la tolerancia al resto y su entorno, siempre respetando la libertad del individuo, pero sin perder de vista la disciplina, el esfuerzo y la capacidad de superación personal. ',
      p3: 'En Internacional Aravaca, ante todo, formamos personas. Ese es nuestro objetivo y por él luchamos cada día. '
    },
		formTitleColor: 'formTitleGeneral',
		btColor: 'btGeneral',
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
		etapaContents: {
      p1: 'Desde la infancia, perseguimos que nuestros alumnos aprendan la importancia de valores como la tolerancia, el respeto a la diversidad, la humildad y la importancia del esfuerzo. Potenciamos la creatividad de tus hijos con un equipo de profesores altamente cualificados para los que lo más importante es siempre el uso del diálogo ante la mediación de cualquier conflicto.  ',
      p2: 'Todo esto en un ambiente bilingüe y diseñado bajo el prisma de las inteligencias múltiples, de tal forma que cada niño o niña desarrolle todo su potencial en cualquier área de conocimiento pero especializándose desde el inicio en aquello que mejor se le da. ',
      p3: 'Esta es la Educación Infantil en Internacional Aracava. Porque, ante todo, formamos personas. Ese es nuestro objetivo y por él luchamos cada día. '
    },
		formTitleColor: 'formTitleInfantil',
		btColor: 'btInfantil',
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
		etapaContents: {
      p1: 'En una etapa tan larga como la Educación Primaria, en Internacional Aravaca nos preocupamos especialmente de que nuestros alumnos sean constantes en su estudio. Para ello, proponemos unas claves fundamentales para que persigan el éxito total. Siempre respetando la creatividad, los profesores proponen distintas tareas a los alumnos, sobre todo grupales para que comiencen a aprender a trabajar en equipo. De esta manera, tus hijos sabrán organizar sus ideas y su tiempo, en una sociabilidad permanente, y desarrollarán métodos de trabajo óptimos y prácticos (claves visuales, reglas nemotécnicas, juegos...). ',
      p2: 'Por otra parte, en Internacional Aravaca nos preocupan los idiomas y en Primaria pensamos que el inglés no es suficiente, así que en esta etapa tus hijos podrán disfrutar de las primeras nociones de francés o alemán con una metodología altamente motivante, lúdica, integradora y que los impulsa a valorar no solo sus conocimientos, sino también a ellos mismos. ',
      p3: 'Esta es la Educación Primaria en Internacional Aravaca. Porque, ante todo, formamos personas. Ese es nuestro objetivo y por él luchamos cada día. '
    },
		formTitleColor: 'formTitlePrimaria',
		btColor: 'btPrimaria',
		footerClass: 'footerPrimaria'
	},
	$scope.secundaria = {
		headerClass: 'headerSecundaria',
		images : {
			classImage1: 'secundariaImg1',
			classImage2: 'secundariaImg2',
			classImage3: 'secundariaImg1'
		},
		etapaTitle: 'Título secundaria',
		etapaTitleClass: 'titleSecundaria',
		etapaContents: {
      p1: 'Sabemos que la Educación Secundaria no suele ser un período fácil para los adolescentes ni tampoco para vosotros, los padres. Sin embargo, en Internacional Aravaca hemos instaurado un sistema divertido y disciplinado para motivar y animar a nuestros alumnos a superar esta etapa escolar. Para eso, impulsamos sobre todo la autonomía, la libertad y la responsabilidad de tus hijos. Les animamos a que investiguen y descubran el conocimiento por ellos mismos, siempre guiándolos adecuadamente.  ',      
      p2: 'En un entorno bilingüe, cooperativo y creativo, les mostramos cómo llegar a sus objetivos a través de metas más pequeñas y paulatinas para inculcarles el esfuerzo y la constancia. ',      
      p3: 'Esta es la Educación Secundaria en Internacional Aravaca. Porque, ante todo, formamos personas. Ese es nuestro objetivo y por él luchamos cada día. '      
    },
		formTitleColor: 'formTitleSecundaria',
		btColor: 'btSecundaria',
		footerClass: 'footerSecundaria'
	},
	$scope.bachillerato = {
		headerClass: 'headerBachillerato',
		images : {
			classImage1: 'secundariaImg1',
			classImage2: 'secundariaImg2',
			classImage3: 'secundariaImg1'
		},
		etapaTitle: 'Título bachillerato',
		etapaTitleClass: 'titleBachillerato',
		etapaContents: {
      p1: 'Durante los dos años anteriores a la universidad, tus hijos han de dar su último esfuerzo para alcanzar sus sueños. En Internacional Aravaca les ayudamos a conseguirlo. Con un sistema claramente orientado a superar la PAU (Prueba de Acceso a la Universidad), animamos a que investiguen y descubran el conocimiento por ellos mismos, siempre guiándolos adecuadamente.  ',
      p2: 'En un entorno sociable, tecnológico, bilingüe y cooperativo, les aunamos a alcanzar su objetivo no solo con meros conocimientos, sino reforzando su autoestima, su autoconfianza y su autonomía para que no duden de que serán capaces de cualquier cosa que se propongan. ',
      p3: 'Este es el Bachillerato en Internacional Aravaca. Porque, ante todo, formamos personas. Ese es nuestro objetivo y por él luchamos cada día. '
    },
		formTitleColor: 'formTitleBachillerato',
		btColor: 'btBachillerato',
		footerClass: 'footerBachillerato'
	};
}]);
