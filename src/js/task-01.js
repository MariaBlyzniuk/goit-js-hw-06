// Напиши скрипт который:

// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега <h2>) и количество элементов в категории (всех вложенных в него <li>).

const itemEl = document.querySelectorAll('.item');
console.log(`Number of categories: ${itemEl.length}` );


// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5

for (const item of itemEl) {
    console.log(`Category: ${item.firstElementChild.textContent}`);
    const countItems = item.querySelectorAll('li');
    console.log(`Elements: ${countItems.length}`);
};