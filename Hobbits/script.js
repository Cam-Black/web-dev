"use strict";

document.querySelector("#hobbit").addEventListener('submit', function(e) {
	e.preventDefault();
	
	const data = {
		forename: this.forename.value,
		familyName: this.familyName.value,
		age: this.age.value
	}
	
	axios.post("http://localhost:8080/hobbit/create", data)
		.then(res => {
			console.log("RES:", res);
			this.reset();
			this.forename.focus();
			renderHobbits();
		})
		.catch(err => console.error(err));
});

const output = document.querySelector("#output");

function renderHobbits() {
	axios.get("http://localhost:8080/hobbit/list-hobbits")
		.then(res => {
			console.log("Hobbits: ", res.data);
			output.innerHTML = "";
			for (let hobbit of res.data) {
				const hobbitCol = document.createElement("div");
				hobbitCol.className = "col";
				
				const hobbitCard = document.createElement("div");
				hobbitCard.className = "card";
				hobbitCol.appendChild(hobbitCard);
				
				const hobbitDiv = document.createElement("div");
				hobbitDiv.className = "card-body";
				hobbitCard.appendChild(hobbitDiv);
				
				const hobbitForename = document.createElement("h2");
				hobbitForename.innerText = hobbit.forename;
				hobbitDiv.appendChild(hobbitForename);
				
				const hobbitFamName = document.createElement("p");
				hobbitFamName.innerText = hobbit.familyName;
				hobbitDiv.appendChild(hobbitFamName);
				
				const hobbitAge = document.createElement("p");
				hobbitAge.innerText =`${hobbit.age} years old.`;
				hobbitDiv.appendChild(hobbitAge);
				
				const hobbitDelete = document.createElement('button');
				hobbitDelete.innerText = "Delete";
				hobbitDelete.classList.add("btn", "btn-danger");
				hobbitDelete.addEventListener("click", () => {
					deleteHobbit(hobbit.id);
				});
				hobbitDiv.appendChild(hobbitDelete);
				
				output.appendChild(hobbitCol);
			}
		})
		.catch(err => console.error(err));
}

const deleteHobbit = id => {
	axios.delete("http://localhost:8080/hobbit/delete/" + id)
		.then(res => {
			renderHobbits();
		}).catch(err => console.error(err));
}

renderHobbits();