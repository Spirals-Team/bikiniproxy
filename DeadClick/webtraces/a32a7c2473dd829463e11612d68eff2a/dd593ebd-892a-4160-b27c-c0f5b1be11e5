// Ad Wizard JS
var adWizard = {
	click: function (id, url) {

		// Set data
		var data = {'id':id};
		data[window.csrfTokenName] = window.csrfTokenValue; // Append CSRF Token

		// Open link in new window
		window.open(url);

		// Tally click
		window.superagent
			.post('/actions/adWizard/click')
			.send(data)
			.type('form')
			.set('X-Requested-With','XMLHttpRequest')
			.end(function (response) {
				var message = JSON.parse(response.text);
				console.log(message);
			})
		;

	}
}