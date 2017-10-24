function setIntereses(interesesList, selector) {
	let elem = document.querySelector(selector);
	elem.innerHTML = "";

	for (var key in interesesList) {
		var ref = interesesList[key];
		var languaje = document.documentElement.lang;

		if (languaje == "en") {
			elem.innerHTML = elem.innerHTML + intereses(key, ref.textoEng);
		} else {
			elem.innerHTML = elem.innerHTML + intereses(key, ref.textoEsp);
		}
	}
}


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
