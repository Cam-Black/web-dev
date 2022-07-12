"use strict";

const numberOutput = document.querySelector("#numbers");
const reset = document.querySelector("#reset");
const output = document.querySelector("#output");

const changeInput = (event) => {
    const text = event.target.innerText;
    event.preventDefault();
    text === reset.innerText ? numberOutput.value = 0 : numberOutput.value =
        parseInt(numberOutput.value) + parseInt(event.target.innerText);

    const ele = document.createElement("p");
    output.prepend(ele);
    ele.innerText = event.target.innerText;
}