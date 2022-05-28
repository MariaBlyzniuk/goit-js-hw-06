// Напиши скрипт, который при потере фокуса на инпуте (событие blur), проверяет его содержимое на правильное количество введённых символов.
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество символов, то border инпута становится зелёным, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid, которые мы уже добавили в исходные файлы задания.

const inputEl = document.querySelector('#validation-input');

const inputLength = inputEl.dataset.length;

const input = document.querySelector('input');

inputEl.addEventListener('input', event => {
    const text = event.target.value;
   if (text.length <= inputLength) {
        inputEl.classList.add('valid');
        inputEl.classList.remove('invalid');
    } else {
         inputEl.classList.remove('valid');
        inputEl.classList.add('invalid');
    }
});