// Напиши скрипт, который реагирует на изменение значения input#font - size - control(событие input) 
// и изменяет инлайн - стиль span#text обновляя свойство font - size.
// В результате при перетаскивании ползунка будет меняться размер текста.

const textEl = document.querySelector('#text');

const inputEl = document.querySelector('#font-size-control');

inputEl.addEventListener('input', event => {
  const size = inputEl.value;

  textEl.style.fontSize = size + "px";
});