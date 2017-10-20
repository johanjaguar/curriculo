// listen for the DOMContentLoaded event, then bind our function
document.addEventListener('DOMContentLoaded', function () {
	var request = new XMLHttpRequest();
	request.open('GET', 'data/textos.json', true);

	request.onload = function () {
		if (request.status >= 200 && request.status < 400) {
			// Success!
			var data = JSON.parse(request.responseText);
			var textos = "";
			var languaje = document.documentElement.lang;

			if (languaje == "en") {
				textos = data.textos.english;
			} else {
				textos = data.textos.spanish;
			}

			fillHTML(textos);
			fillLinks(data.links);
			setReferencias(data.referencias, '#workItems');
			//setThemeList(data.temas);

		} else {
			// We reached our target server, but it returned an error

		}
	};

	request.onerror = function () {
		// There was a connection error of some sort
	};

	request.send();
});

function fillHTML(textos) {
	for (var key in textos) {
		if (textos.hasOwnProperty(key)) {
			setText("." + key, textos[key]);
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
	let elem = document.querySelector(selector);
	elem.innerHTML = elem.innerHTML + texto;
}

function setLink(selector, link) {
	let elem = document.querySelector(selector);
	elem.href = link;
}

function setThemeList(themes) {
	let elem = document.querySelector('.tema');
	var length = themes.length;

	Object.keys(themes).forEach(function (key) {
		elem.innerHTML = elem.innerHTML + "<li class='tema_li' data-theme='" + themes[key].valor + "'>" + themes[key].nombre + "</li>";
	});
}

function setReferencias(referencias, selector) {
	let elem = document.querySelector(selector);

	for (var key in referencias) {
		var ref = referencias[key];
		elem.innerHTML = elem.innerHTML + referencia(ref.link, key, ref.empresa, ref.cargo, ref.telefono, ref.anio, ref.jefe);
	}
}
