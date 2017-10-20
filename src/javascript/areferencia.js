function setReferencias(referencias) {
		for (var key in referencias) {
		if (referencias.hasOwnProperty(key)) {
			//setText("." + key, textos[key]);
			console.log(key + " valor: " + referencias(key));
			
		}
	}
}

function referencia(link, imagen, empresa, cargo, telefono, anio, jefe) {
	var html = '';
	var lang = document.documentElement.lang;
	html += '<div class="workItem">';
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
		if (lang == "en")
			html += '<p class="wiJefe">Inmediate Supervisor:<br/>' + jefe + '</p>';
		else
			html += '<p class="wiJefe">Jefe Inmediato:<br/>' + jefe + '</p>';
	}
	if (telefono.length > 0) {
		html += '		<p class="wiTelefono">' + telefono + '</p>';
	}
	html += '	</a>';
	html += '</div>';

	return html;
}
