
// Счетчик состоит из спана и кнопок, которые, при клике, должны увеличивать и уменьшать его значение на единицу.
// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.

let valueEl = Number(document.querySelector('#value').textContent);


let counterValue = document.querySelector('#value');

const dekrBtn = document.querySelector('button[data-action="decrement"]');

const inkrBtn = document.querySelector('button[data-action="increment"]');

inkrBtn.addEventListener('click', event => {
//   console.log("Вешаю слушателя события на целевую кнопку");
  valueEl += 1;

  counterValue.innerText = valueEl;
});

dekrBtn.addEventListener('click', event => {
//   console.log("Снимаю слушателя события с целевой кнопки");
  valueEl -= 1;

  counterValue.innerText = valueEl;
//   console.log("counterValue", counterValue);
});