function setLanguages(data, selector) {
	let elem = document.querySelector(selector);
	elem.innerHTML = "";
	var idiomaSelected = 'es';
	for (var key in data.languages) {
		var sk = data.languages[key];
		var languaje = document.documentElement.lang;
		if (languaje == "en") {
			elem.innerHTML = elem.innerHTML + idioma(key, sk.nombreEng);
		} else {
			elem.innerHTML = elem.innerHTML + idioma(key, sk.nombre);
		}
	}

	var idiomaItem = document.querySelectorAll('.idioma-item');

	for (var i = 0; i < idiomaItem.length; i++) {
		idiomaItem[i].addEventListener('click', function (event) {
			idiomaSelected = this.getAttribute('data-value');
			document.getElementsByTagName('html')[0].setAttribute('lang', idiomaSelected);
			llenaDOM(data);
		});
	}
}

function idioma(valor, nombre) {
	var html = '';
	html += '<li class="idioma-item" data-value="' + valor + '">';
	html += nombre;
	html += '</li>';
	return html;
}
