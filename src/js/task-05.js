// Напиши скрипт который, при наборе текста в инпуте input#name - input(событие input),
//     подставляет его текущее значение в span#name - output. 
// Если инпут пустой, в спане должна отображаться строка "Anonymous".


let inputEl = document.querySelector('input#name-input');
let outputEl = document.querySelector('span#name-output');

inputEl.addEventListener('input', onInputChange);

function onInputChange(event) {
    inputEl = event.currentTarget.value;
    // console.log(event.currentTarget.value);
    
    inputEl.trim() === ""
    ? outputEl.textContent = "Anonymous"
    : outputEl.textContent = inputEl;

};