
jQuery(document).ready(function() {
	animacionTailor('.workItem','fadeInLeft',400);
	animacionTailor('#h2Work','fadeInLeft',400);
	animacionTailor('#h2ProfessionalSkills','fadeInLeft',400);
	animacionTailor('#h2Education','fadeInLeft',400);
	animacionTailor('#h2Referencias','fadeInLeft',400);
	animacionTailor('#h2Intereses','fadeInLeft',400);
	animacionTailor('.professionalSkill','fadeInLeft',400);
	animacionTailor('.educationItem','fadeInLeft',400);
	animacionTailor('.interes','fadeInLeft',400);

});


function ocultaItem(elementoOriginalX){
	var elementoOriginal = jQuery(elementoOriginalX);
	elementoOriginal.addClass("hiddenAnimate");
}
function muestraItem(elementoOriginalX){
	var elementoOriginal = jQuery(elementoOriginalX);
	elementoOriginal.visible();
}

function animacionTailor(elementoOriginalX, animacion, bandera) {
	var elementoOriginal = jQuery(elementoOriginalX);
	ocultaItem(elementoOriginal);
	jQuery(window).scroll(function () {
		if (elementoOriginal.length ) {
			elementoOriginal.each(function( index ) {
			var elemento = jQuery(this);
			var targetTop = elemento.offset().top, timeout = null;
		  	var targetBottom = elemento.offset().top + elemento.height(), timeout = null;
		    if (!timeout) {
		        timeout = setTimeout(function () {
		            //console.log('scroll top:' + targetTop);
		            //console.log('scroll Bottom:' + targetBottom);            
		            clearTimeout(timeout);
		            timeout = null;
		            scrollmedio = jQuery(window).scrollTop() + bandera;
		            if ( scrollmedio >= targetTop) {
		                //console.log("esta dentro del elemento");
		                elemento.removeClass('hiddenAnimate');
		                elemento.addClass('visibleAnimate animated '+ animacion);
		             
		            }
		        }, 250);
		    }
			});
			  	  

		}
	});
}