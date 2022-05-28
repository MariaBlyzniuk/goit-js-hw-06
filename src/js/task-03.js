// Используй массив объектов images для создания элементов <img> вложенных в <li>. Для создания разметки используй шаблонные строки и метод insertAdjacentHTML().

// Все элементы галереи должны добавляться в DOM за одну операцию вставки.
// Добавь минимальное оформление галереи флексбоксами или гридами через CSS классы.

const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// const galleryList = document.querySelector('ul');

// for (let image of images) {
  
// const galleryItem = document.createElement('li');
//   galleryList.append(galleryItem);

// const galleryImg = document.createElement('img');
//   galleryImg.src = image.url;
//   galleryImg.alt = image.alt;
  
//   galleryItem.append(galleryImg);
// }
// console.log(galleryList);

function createGalleryMarkup(images) {
  return images
    .map(({ url, alt }) => `<li><img src = '${url}' alt = '${alt}' width = '400'><li>`)
    .join('');
}
console.log(createGalleryMarkup(images));

const galleryListRef = document.querySelector('ul.gallery');
galleryListRef.insertAdjacentHTML('afterbegin', createGalleryMarkup(images));