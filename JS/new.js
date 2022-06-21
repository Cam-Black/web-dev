let button = document.getElementById("button");
let text = document.getElementById("my-text");

const letterAndNumbers = ['A','B','C','D','E','F','0','1','2','3','4','5','6','7','8','9'];
const colourArray = [];

function createColour() {
    let colour = '#';
    for (let i = 0; i < 6; i++) {
        let element = Math.floor(Math.random() * letterAndNumbers.length);
        colour += letterAndNumbers[element];
    }
    return colour;
}

function addColours() {
    
    do {
        colour = createColour();
        if (!colourArray.includes(colour)) {
            colourArray.push(colour);
        }
        } while (colourArray.length < 100);
    return colourArray;
}

async function wait(ms) {
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    });
}

async function changeBackgroundColour() {
    for (let i = 0; i < 100; i++) {
        addColours();
        document.body.style.background = colourArray[i];
        await wait(500);
    }
}

button.addEventListener('click', () => {
    changeBackgroundColour();
    button.style.color = createColour();
    text.style.color = createColour();
    [...document.getElementsByClassName("paragraph")].forEach(async function(element) {
        // addColours();
        for (let i = 100; i >= 0; i--) {
            element.style.color = colourArray[i]
            await wait(500);
        }
    });
});