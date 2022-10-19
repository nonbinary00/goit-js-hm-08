import throttle from 'lodash.throttle';

const { form, email, message } = {
    form: document.querySelector('.feedback-form'),
    email: document.querySelector('input'),
    message: document.querySelector('textarea'),
};

const FEEDBACK_KEY = 'feedback-form-state';

const storageObject = {};

//Функция для сохранения входных данных в локальном хранилище
const onInputStoreData = function (e) {
  storageObject[e.target.name] = e.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(storageObject));
};

//Прослушиватель событий с throttle для ввода формы
form.addEventListener('input', throttle(onInputStoreData, 500));

//Проверка локального хранилища и добавление данных во входные данные при перезагрузке
const getStorageObject = localStorage.getItem('feedback-form-state');
const parsed = JSON.parse(getStorageObject);

if (getStorageObject !== null) {
  if (parsed.email) {
    email.value = parsed.email;
  }
  if (parsed.message) {
    message.value = parsed.message;
  }
}

//Функция отправки для сброса формы, удаления данных локального хранилища и входа в текущие данные консоли
form.addEventListener('submit', e => {
    e.preventDefault();
    const submitParsed = JSON.parse(localStorage.getItem('feedback-form-state'));
    console.log('This is current data from Local Storage', submitParsed);
  
    localStorage.removeItem('feedback-form-state');
  
    const currentData = {
      email: email.value,
      message: message.value,
    };
  
    console.log('This is current data from form', currentData);
  
    form.reset();
  });