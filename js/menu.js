//////////////////////////////////
// cambio de menÃºpor icono men //
//////////////////////////////////
var flag = 1;

function main() {
	if(flag == 1) {
		$('nav').animate({
			left: '5%'
		});
		flag = 0;
	} else {
		$('nav').animate({
			left: '-100%'
		});
		flag = 1;
	}		
};
