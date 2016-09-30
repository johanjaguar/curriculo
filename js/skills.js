function skill(porcentaje, color, skill){
    var html = '';
		html += '<div class="professionalSkill">';
		html += '	<div id="redcircle" data-percent="'+porcentaje+'" data-animate="false" class="'+color+' dark"></div>';
		html += '	<p>'+skill+'</p>';
		html += '</div>';
    return html;
}
