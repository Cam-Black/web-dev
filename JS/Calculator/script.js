"use strict";

const output = document.querySelector("#calc");
const btns = document.querySelectorAll(".btn");
const reset = document.querySelector("#reset");

const createNumber = event => {
    event.preventDefault();
    output.value = output.value + event.target.innerText;
}

const clear = () => output.value = '';

btns.forEach(function(currentButton){
   currentButton.addEventListener('click', createNumber);
});

reset.addEventListener('click', clear);