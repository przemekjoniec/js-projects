const currentDay = document.querySelector('.current-day')
const funFact = document.querySelector('.fun-fact')
const body = document.querySelector('body')

const facts = [
	'Crocodile cannot stick out its tongue.',
	'Every human spent about half an hour as a single cell.',
	'Sound travels 15 times faster through steel than through air.',
	'Sloths need two weeks to digest their food.',
	'Gorillas sleep up to fourteen hours a day.',
	"A chameleon's tongue is twice as long as its body.",
	'The Chinese use about 80 billion chopsticks a year.',
	'To climb the Eiffel Tower, you have to conquer 1,710 steps.',
	'Cows have best friends and get stressed when they are separated.',
	'Octopuses have three hearts and blue blood.',
	'A single cloud can weigh over a million pounds.',
	'Honey never spoils; archaeologists have found edible honey in ancient Egyptian tombs.',
	'Bananas are berries, but strawberries are not.',
	'Horses can sleep both lying down and standing up.',
	"A group of flamingos is called a 'flamboyance.'",
	'There are more stars in the universe than grains of sand on all the beaches on Earth.',
	'The heart of a blue whale is the size of a small car.',
	'Cats have over 20 muscles that control their ears.',
	'Dolphins have unique names for each other.',
	'Pineapples take two years to grow and mature.',
]

const dateObj = new Date()
currentDay.textContent = dateObj.toLocaleString('en-US', { weekday: 'long' })

const randomFact = () => {
	const number = Math.floor(Math.random() * facts.length)
	funFact.textContent = facts[number]
}
const bgcChanger = () => {
	const r = Math.floor(Math.random() * 255)
	const g = Math.floor(Math.random() * 255)
	const b = Math.floor(Math.random() * 255)
	body.style.backgroundColor = `rgb(${r},${g},${b})`
}
randomFact()
bgcChanger()
