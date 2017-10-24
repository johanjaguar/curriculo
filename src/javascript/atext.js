function setText(selector, texto) {
	let elem = document.getElementsByClassName(selector);
	Object.keys(elem).forEach(function (key) {
		elem[key].innerHTML = "";
		elem[key].innerHTML = elem[key].innerHTML + texto;
	});
}