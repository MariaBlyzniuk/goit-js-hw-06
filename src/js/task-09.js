// Напиши скрипт, который изменяет цвета фона элемента <body> через инлайн 
// стиль при клике на button.change - color и выводит значение цвета в span.color.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const bodyEl = document.querySelector('body');
const buttonRef = document.querySelector(".change-color");
const colorEl = document.querySelector(".color");

buttonRef.addEventListener('click',onChangeColor);

function onChangeColor() {
  for (const i = 0; i < buttonRef.length; i++) {
    buttonRef[i].style.backgroundColor = getRandomHexColor();
  }
  const hexColor = getRandomHexColor();
  colorEl.textContent = hexColor;
  bodyEl.style.backgroundColor = hexColor;
};
onChangeColor()
console.log(onChangeColor());