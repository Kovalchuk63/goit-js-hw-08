import throttle from 'lodash.throttle';
import { saveToLS, loadFromLS} from './local-stor-function.js';

const form = document.querySelector('.feedback-form');
const mailInput = document.querySelector('input[name="email"]');
const textArea = document.querySelector('textarea[name="message"]');

form.addEventListener('submit', event => {
    event.preventDefault();
    console.log(formData);
    formData = {};
    localStorage.removeItem('feedback-form-state');
    form.reset();
});

let formData = loadFromLS('feedback-form-state') ?? {};
form.addEventListener('input', throttle(inputFormValue, 500));

function inputFormValue (event) {
    const value = event.target.value;
    const key = event.target.name;
    formData[key] = value;
    saveToLS('feedback-form-state', formData);
}

mailInput.value = formData.email ?? ''; 
textArea.value = formData.message ?? '';




