"use strict";
const output = document.querySelector("#output");
axios.get("https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/example.json")
    .then(response => {
        console.log(response);

        const squadName = document.createElement('p');
        const formed = document.createElement('p');
        const homeTown = document.createElement('p');
        const secretBase = document.createElement('p');


        squadName.innerText = `Squad Name: ${response.data.squadName}`;
        formed.innerText = `Formed In: ${response.data.formed}`;
        homeTown.innerText = `Home Town: ${response.data.homeTown}`;
        secretBase.innerText = `Secret Base: ${response.data.secretBase}`;


        output.appendChild(squadName);
        output.appendChild(formed);
        output.appendChild(homeTown);
        output.appendChild(secretBase);
        for (let i = 0; i < response.data.members.length; i++) {
            const members = document.createElement('p');
            members.innerText = `Name: ${response.data.members[i].name} 
                Age: ${response.data.members[i].age}
                Secret Identity: ${response.data.members[i].secretIdentity}
                Powers: ${response.data.members[i].powers.join(", ")}`;
            output.appendChild(members);
        }

    })
    .catch(error => console.error(error));