const search = document.querySelector('.search')
const li = document.querySelectorAll('li')

const searchEngine = e => {
	const text = e.target.value.toLowerCase()
	li.forEach(el => {
		const item = el.textContent.toLowerCase()
		if (item.indexOf(text) !== -1) {
			el.style.display = 'block'
		} else {
			el.style.display = 'none'
		}
	})
}
search.addEventListener('keyup', searchEngine)
