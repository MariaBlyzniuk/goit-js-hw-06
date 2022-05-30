// Обработка отправки формы form.login-form должна быть по событию submit.
// При отправке формы страница не должна перезагружаться.
// Если в форме есть незаполненные поля, выводи alert с предупреждением о том, 
// что все поля должны быть заполнены.
// Если пользователь заполнил все поля и отправил форму, собери значения полей в обьект, 
// где имя поля будет именем свойства, а значение поля - значением свойства.
// Для доступа к элементам формы используй свойство elements.
// Выведи обьект с введенными данными в консоль и очисти значения полей формы методом reset.

const formEl = document.querySelector('.login-form');
const inputEmail = document.querySelector('input[type = email]');
const inputPass = document.querySelector('input[type = password]');
const buttonEl = formEl.querySelector('input[type = button]');


formEl.addEventListener('submit', onFormSubmit);


let user = {
    email: '',
    password: '',
};
    
function onFormSubmit(event) {
    event.preventDefault();    
    
    if (inputEmail.value === '' || inputPass.value === '') {
        return alert('все поля должны быть заполнены');
    }else {
        user.email = inputEmail.value;
        user.password = inputPass.value;
        };
        console.log(user);
        event.currentTarget.reset();

    };


