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
