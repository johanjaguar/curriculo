function fillLinks(links) {
	for (var key in links) {
		if (links.hasOwnProperty(key)) {
			setLink("#link_" + key, links[key]);
		}
	}
}

function setLink(selector, link) {
	let elem = document.querySelector(selector);
	elem.href = link;
}