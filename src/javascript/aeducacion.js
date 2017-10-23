function educacion(icono, anio, institucion, carrera) {
	var html = '';
	html += '<div class="educationItem">';
	html += '	<p class="eiIcono">';
	html += '		<i class="fa fa-' + icono + '"></i>';
	html += '</p>';
	html += '	<p class="eiAnio">' + anio + '</p>';
	html += '	<p class="eiInstitucion">' + institucion + '</p>';
	html += '	<p class="eiCarrera">' + carrera + '</p>';
	html += '</div>';
	return html;
}
