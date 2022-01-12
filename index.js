
let saveEL = document.getElementById("save-el")																																																					

let countEl = document.getElementById("count-el")

let count = 0

function increment() {

	count += 1
	countEl.innerText = count
}

function save() {

	let entry = count + " - "
	saveEL.textContent += entry
	countEl.textContent = 0
	count = 0

}



