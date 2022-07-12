"use strict"

const output = document.querySelector('#output');
const searchBtn = document.querySelector('#search');
const inputKings = document.querySelector('#searchKings');
const outputKings = document.querySelector('#searchResults');
const reset = document.querySelector('#reset');

axios.get("https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/kings.json")
	.then(response => {
		for (let i = 0; i < response.data.length; i++) {
			const kings = document.createElement('p');
			kings.innerText = `Name: ${response.data[i].nm}
                Country: ${response.data[i].cty}
                House: ${response.data[i].hse}
                Years: ${response.data[i].yrs}`;
			
			output.appendChild(kings);
		}
	})
	.catch(error => console.error(error));

const findByName = () => {
	event.preventDefault();
	while (outputKings.firstChild) {
		outputKings.removeChild(outputKings.lastChild);
	}
	let input = inputKings.value;
	input = input.toLowerCase();
	
	axios.get("https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/kings.json")
		.then(response => {
			const results = response.data.filter(king => king.nm.toLowerCase().startsWith(input.toLowerCase()));
			output.style.display = "none";
			
			for (let i = 0; i < results.length; i++) {
				const kings = document.createElement('p');
				kings.innerText = `Name: ${results[i].nm}
                Country: ${results[i].cty}
                House: ${results[i].hse}
                Years: ${results[i].yrs}`;
				outputKings.appendChild(kings);
			}
		})
		.catch(error => console.error(error));
}

const clearResults = event => {
	event.preventDefault();
	output.style.display = "block";
	while (outputKings.firstChild) {
		outputKings.removeChild(outputKings.lastChild);
	}
	inputKings.value = '';
}

inputKings.addEventListener('input', function(event) {
	const search = event.target.value;
	findByName(search);
});
reset.addEventListener('click', clearResults);
