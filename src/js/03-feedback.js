import throttle from 'lodash.throttle';

const { form, email, message } = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('input'),
  message: document.querySelector('textarea'),
};


const FEEDBACK_KEY = 'feedback-form-state';
const storageObject = {};

// прослушиватель событий с throttle для вывода формы

form.addEventListener('input', throttle(onInputEmail, 500));
form.addEventListener('submit', onSubmitMessage);

// функция для сброса формы удаления данных локального хранилища и входа в текущие данные консоли

function onSubmitMessage(e) {
  
  e.preventDefault();
  
  if (!storageObject.email || !storageObject.message) {
    return alert('all fields');
  }
  e.currentTarget.reset();
  localStorage.removeItem(FEEDBACK_KEY);
  console.log(storageObject);
}

// console.log(storageObject);

// проверка локального хранилища и добавление данных во входные данные приперезагрузке
function onInputEmail(e) {
  storageObject[e.target.name] = e.target.value.trim();
  localStorage.setItem(FEEDBACK_KEY, JSON.stringify(storageObject));
}

function saveMessage(e) {
  const messageToDom = localStorage.getItem(FEEDBACK_KEY);
  const parsedMessage = JSON.parse(messageToDom);
  if (parsedMessage) {
    if (parsedMessage.email) {
      email.value = parsedMessage.email;
      storageObject.email = parsedMessage.email;
    }
    if (parsedMessage.message) {
      message.value = parsedMessage.message;
      storageObject.message = parsedMessage.message;
    }
  }
}

saveMessage();