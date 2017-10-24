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