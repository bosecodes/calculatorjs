const display = document.querySelector('.calculator__display')

keys.addEventListener('click', e => {
	if(e.target.matches('button')) {
		const key = e.target
		const action = key.dataset.action
		const keycontent = key.textContent
		const displayedNum = dislay.textContent
	}
})