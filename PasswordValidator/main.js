const pass = document.querySelector('#password')
const p = document.querySelector('.passinfo')
const letters = /[a-z]/i
const numbers = /[0-9]/
const special = /[!@#$%^&*()]/
const minValue = 10

const showMsg = () => {
	if (
		pass.value.length > minValue &&
		pass.value.match(letters) &&
		pass.value.match(numbers) &&
		pass.value.match(special)
	) {
		p.textContent = 'You have a very good password'
		p.style.color = 'lime'
	} else if (pass.value.length > minValue && pass.value.match(letters) && pass.value.match(numbers)) {
		p.textContent = 'You have good password'
		p.style.color = 'orange'
	} else if (pass.value.length > minValue && pass.value.match(letters)) {
		p.textContent = 'You have a mean password'
		p.style.color = 'gold'
	} else {
		p.textContent = 'You have weak password'
		p.style.color = 'tomato'
	}
}
const checkPassword = () => {
	if (pass.value !== '') {
		showMsg()
	} else {
		p.textContent = "You did't enter a password..."
		p.style.color = ''
	}
}
pass.addEventListener('keyup', checkPassword)
