const img = document.querySelector('img')
const input = document.querySelector('input')
const answer = document.querySelector('.answer')
const error = document.querySelector('.error')

const answers = [
	'Definitely yes!',
	'All signs point to yes.',
	'Ask again later.',
	'Better not to know...',
	'Definitely not.',
	"Don't count on it.",
	'Possible, but uncertain.',
	'The answer is hazy, try again.',
]

const shakeAnimation = () => {
	img.classList.add('shake-animation')
	setTimeout(checkInput, 1000)
}
const checkInput = () => {
	let userAnswer = input.value
	if (userAnswer !== '') {
		if (userAnswer.slice(-1) === '?') {
			error.textContent = ''
			let randomNumber = Math.floor(Math.random() * answers.length)
			let randomAnswer = answers[randomNumber]
			answer.innerHTML = `Your answer: <span>${randomAnswer}</span>`
		} else {
			answer.innerHTML = ``
			error.textContent = `Add a “?” at the end of the question`
		}
	} else {
		error.textContent = 'Put Your question'
	}
	img.classList.remove('shake-animation')
}

img.addEventListener('click', shakeAnimation)
