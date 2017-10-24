function setReferencias(referencias, selector) {
	let elem = document.querySelector(selector);
	elem.innerHTML = "";
	

	for (var key in referencias) {
		var ref = referencias[key];
		var languaje = document.documentElement.lang;
		
		if (languaje == "en") {
			elem.innerHTML = elem.innerHTML + referencia(ref.link, key, ref.empresa, ref.cargoEng, ref.telefono, ref.anio, ref.jefe, ref.actual);
		} else {
			elem.innerHTML = elem.innerHTML + referencia(ref.link, key, ref.empresa, ref.cargo, ref.telefono, ref.anio, ref.jefe, ref.actual);
		}
	}
}

function referencia(link, imagen, empresa, cargo, telefono, anio, jefe, actual) {
	var html = '';
	var lang = document.documentElement.lang;
	
	html += '<div class="workItem">';
	
	if(actual == "true") {
		html += '		<span class="tagActual"></span>';
	}
	
	html += '	<a href="' + link + '" target="_blank">';
	html += '		<p class="wiImgEmpresa"><img src="build/images-op/' + imagen + '.png"/></p>';

	if (empresa.length > 0) {
		html += '		<p class="wiEmpresa">' + empresa + '</p>';
	}
	if (cargo.length > 0) {
		html += '		<p class="wiCargo">' + cargo + '</p>';
	}
	if (anio != 'NULL') {
		html += '<p class="wiAnio">' + anio + '</p>';
	}
	if (jefe != 'NULL') {
		html += '<p class="wiJefe"><span class="lblJefe"></span><br/>' + jefe + '</p>';
	}
	if (telefono.length > 0) {
		html += '		<p class="wiTelefono">' + telefono + '</p>';
	}
	
	html += '	</a>';
	html += '</div>';

	return html;
}
