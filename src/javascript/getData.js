var request = new XMLHttpRequest();
request.open('GET', 'data/textos.json', true);

request.onload = function () {
	if (request.status >= 200 && request.status < 400) {
		// Success!
		var data = JSON.parse(request.responseText);
		setText(".notaBox p", data.textos.spanish.notaBox);
		setThemeList(data.temas);

	} else {
		// We reached our target server, but it returned an error

	}
};

request.onerror = function () {
	// There was a connection error of some sort
};

request.send();


function setText(selector, texto) {
	let elem = document.querySelector(selector);
	elem.innerHTML = elem.innerHTML + texto;
}


function setThemeList(themes) {
	let elem = document.querySelector('.tema');
	var length = themes.length;

	/*
	for (var i = 0; i < length; i++) {
		elem.innerHTML = elem.innerHTML + "<li class='tema_li' data-theme='" + themes[i].valor + "'>" + themes[i].nombre + "</li>";
		console.log("tema actual" + themes[i]);
	}*/

	Object.keys(themes).forEach(function (key) {
		elem.innerHTML = elem.innerHTML + "<li class='tema_li' data-theme='" + themes[key].valor + "'>" + themes[key].nombre + "</li>";
	});
}
