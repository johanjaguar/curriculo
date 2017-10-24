"use strict";

function setEducacion(instituciones, selector) {
	var elem = document.querySelector(selector);
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
"use strict";

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
"use strict";

function setIntereses(interesesList, selector) {
	var elem = document.querySelector(selector);
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
"use strict";

function setLanguages(data, selector) {
	var elem = document.querySelector(selector);
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
"use strict";

function fillLinks(links) {
	for (var key in links) {
		if (links.hasOwnProperty(key)) {
			setLink("#link_" + key, links[key]);
		}
	}
}

function setLink(selector, link) {
	var elem = document.querySelector(selector);
	elem.href = link;
}
"use strict";

function setReferencias(referencias, selector) {
	var elem = document.querySelector(selector);
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

	if (actual == "true") {
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
"use strict";

function setSkills(skills, selector) {
	var elem = document.querySelector(selector);
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

function skill(porcentaje, color, skill) {
	var html = '';
	html += '<div class="professionalSkill">';
	html += '	<div id="redcircle" class="' + color + ' dark"><span style="width:' + porcentaje + '%;" data-width="' + porcentaje + '"></span></div>';
	html += '	<p>' + skill + '</p>';
	html += '</div>';
	return html;
}
"use strict";

function setThemeList(themes) {
	var elem = document.querySelector('.tema');
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
"use strict";

function setText(selector, texto) {
	var elem = document.getElementsByClassName(selector);
	Object.keys(elem).forEach(function (key) {
		elem[key].innerHTML = "";
		elem[key].innerHTML = elem[key].innerHTML + texto;
	});
}
'use strict';

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
//# sourceMappingURL=final.js.map
