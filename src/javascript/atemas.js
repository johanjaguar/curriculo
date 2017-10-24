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