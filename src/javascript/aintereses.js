function intereses(imagen, texto) {
	var html = '';
	html += '<div class="interes">';
	html += '<p class="iiImgEmpresa">';
	html += '<img src="build/images-op/' + imagen + '.png"/>';
	html += '</p>';
	html += '<p class="iiNombre">' + texto + '</p>';
	html += '</div>';

	return html;
}
