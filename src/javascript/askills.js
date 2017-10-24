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

function skill(porcentaje, color, skill){
	var html = '';
	html += '<div class="professionalSkill">';
	html += '	<div id="redcircle" data-percent="'+porcentaje+'" data-animate="false" class="'+color+' dark"></div>';
	html += '	<p>'+skill+'</p>';
	html += '</div>';
	return html;
}
