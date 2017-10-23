// listen for the DOMContentLoaded event, then bind our function
document.addEventListener('DOMContentLoaded', function () {
	var request = new XMLHttpRequest();
	request.open('GET', 'data/textos.json', true);

	request.onload = function () {
		if (request.status >= 200 && request.status < 400) {
			// Success!
			var data = JSON.parse(request.responseText);
			llenaDOM(data);
		} else {
			// We reached our target server, but it returned an error
		}
	};

	request.onerror = function () {
		// There was a connection error of some sort
	};

	request.send();
});

function llenaDOM(data) {
	var textos = "";
	var languaje = document.documentElement.lang;

	if (languaje == "en") {
		textos = data.textos.english;
	} else {
		textos = data.textos.spanish;
	}
	setLanguages(data, ".languageUl");
	setReferencias(data.referencias, '#workItems');
	setReferencias(data.referenciasPersonales, '#personalItems');
	setEducacion(data.instituciones, '#educationItems');
	setEducacion(data.workshops, '#workshopItems');
	setSkills(data.skills, '#professionalSkills');
	setIntereses(data.intereses, "#interesesItem");
	fillHTML(textos);
	fillLinks(data.links);
	setThemeList(data.temas);
}

function fillHTML(textos) {
	for (var key in textos) {
		if (textos.hasOwnProperty(key)) {
			setText(key, textos[key]);
		}
	}
}

function fillLinks(links) {
	for (var key in links) {
		if (links.hasOwnProperty(key)) {
			setLink("#link_" + key, links[key]);
		}
	}
}

function setText(selector, texto) {
	let elem = document.getElementsByClassName(selector);

	Object.keys(elem).forEach(function (key) {
		elem[key].innerHTML = "";
		elem[key].innerHTML = elem[key].innerHTML + texto;
	});
}

function setLink(selector, link) {
	let elem = document.querySelector(selector);
	elem.href = link;
}

function setThemeList(themes) {
	let elem = document.querySelector('.tema');
	elem.innerHTML = "";

	var length = themes.length;

	var bodyTag = document.getElementsByTagName("body");
	var temaSelected = 'monokai';

	Object.keys(themes).forEach(function (key) {
		elem.innerHTML = elem.innerHTML + "<li class='tema_li' data-theme='" + themes[key].valor + "'><span class='fa-stack fa-lg' style='border: 4px dotted " + themes[key].colorBorde + ";'><i class='fa fa-circle fa-stack-2x' style='color: " + themes[key].colorFondo + ";'></i><i class='fa fa-paint-brush fa-stack-1x fa-inverse' style='color: " + themes[key].colorLetra + ";'></i></span></li>"; 
	});
	
	var tema = document.querySelectorAll('.tema_li');
	
	for (var i = 0; i < tema.length; i++) {
		tema[i].addEventListener('click', function (event) {
			temaSelected = this.getAttribute('data-theme');
			document.body.className = temaSelected;
		});
	}
}

function setReferencias(referencias, selector) {
	let elem = document.querySelector(selector);
	elem.innerHTML = "";

	for (var key in referencias) {
		var ref = referencias[key];
		var languaje = document.documentElement.lang;

		if (languaje == "en") {
			elem.innerHTML = elem.innerHTML + referencia(ref.link, key, ref.empresa, ref.cargoEng, ref.telefono, ref.anio, ref.jefe);
		} else {
			elem.innerHTML = elem.innerHTML + referencia(ref.link, key, ref.empresa, ref.cargo, ref.telefono, ref.anio, ref.jefe);
		}
	}
}

function setSkills(skills, selector) {
	let elem = document.querySelector(selector);
	elem.innerHTML = "";

	for (var key in skills) {
		var sk = skills[key];
		var languaje = document.documentElement.lang;

		if (languaje == "en") {
			elem.innerHTML = elem.innerHTML + skill(sk.porcentaje, sk.color, sk.skillEng);
		} else {
			elem.innerHTML = elem.innerHTML + skill(sk.porcentaje, sk.color, sk.skillSpa);
		}
	}
}

function setEducacion(instituciones, selector) {
	let elem = document.querySelector(selector);
	elem.innerHTML = "";

	for (var key in instituciones) {
		var ref = instituciones[key];
		var languaje = document.documentElement.lang;

		if (languaje == "en") {
			elem.innerHTML = elem.innerHTML + educacion(ref.icono, ref.fecha, ref.nombre, ref.cursoEng);
		} else {
			elem.innerHTML = elem.innerHTML + educacion(ref.icono, ref.fecha, ref.nombre, ref.curso);
		}
	}
}

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
