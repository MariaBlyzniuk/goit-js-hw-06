// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul.ingredients.

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const list = document.querySelector('ul');
for (const ingredient of ingredients) {
  const ingredientsEl = document.createElement('li');
  ingredientsEl.textContent = [ingredient];
  ingredientsEl.classList.add('item');
  list.append(ingredientsEl);
}
console.log(list);