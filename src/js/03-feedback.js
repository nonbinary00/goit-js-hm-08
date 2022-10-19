import throttle from 'lodash.throttle';

const { form, email, message } = {
    form: document.querySelector('.feedback-form'),
    email: document.querySelector('input'),
    message: document.querySelector('textarea'),
};

