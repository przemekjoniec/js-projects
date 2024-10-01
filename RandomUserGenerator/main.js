window.onload = function () {
	fetch('https://randomuser.me/api')
		.then(response => response.json())
		.then(data => dataReady(data))
}

function dataReady(data) {
	console.log(data)
	let results = data.results[0]
	let fullname = results.name.title + ' ' + results.name.first + ' ' + results.name.last
	document.getElementById('full-name').innerHTML = fullname
	let img = results.picture.large
	document.getElementById('avatar-img').src = img
	let username = results.login.username
	document.getElementById('username').innerHTML = '@' + username
	let email = results.email
	document.getElementById('email').innerHTML = 'Email: ' + email
	let password = results.login.password
	document.getElementById('password').innerHTML = 'Password: ' + password
	let country = results.location.country
	document.getElementById('country').innerHTML = country
}
