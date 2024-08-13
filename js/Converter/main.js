const converter = document.querySelector('#converter')
const result = document.querySelector('.result')
const convBtn = document.querySelector('.conv')
const resetBtn = document.querySelector('.reset')
const changeBtn = document.querySelector('.change')
const one = document.querySelector('.one')
const two = document.querySelector('.two')

const swap = () => {
	if (one.textContent === '°C') {
		one.textContent = '°F'
		two.textContent = '°C'
		result.textContent = ''
	} else {
		one.textContent = '°C'
		two.textContent = '°F'
		result.textContent = ''
	}
}

const fahrToCel = () => {
	const fahrenheit = converter.value * 1.8 + 32
	result.textContent = `${converter.value}°C is ${fahrenheit.toFixed(1)}°F`
	result.style.color = 'royalblue'
	converter.value = ''
}
const celToFahr = () => {
	const celsius = (converter.value - 32) / 1.8
	result.textContent = `${converter.value}°F is ${celsius.toFixed(1)}°C`
	result.style.color = 'gold'
	converter.value = ''
}

const conversion = () => {
	if (converter.value !== '') {
		if (one.textContent === '°C') {
			fahrToCel()
		} else {
			celToFahr()
		}
	} else {
		result.textContent = 'You need to specify some value'
		result.style.color = 'tomato'
	}
}
const reset = () => {
	converter.value = ''
	result.textContent = ''
}

changeBtn.addEventListener('click', swap)
convBtn.addEventListener('click', conversion)
resetBtn.addEventListener('click', reset)
