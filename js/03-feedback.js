import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input');
const messageTextarea = form.querySelector('textarea');

const STORAGE_KEY = 'feedback-form-state';
const savedData = {};


form.addEventListener('input', throttle(toSaveData, 500));
form.addEventListener('submit', onFormSubmit);

pageReset();

function toSaveData(e) {
  savedData.[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(savedData));
};


function pageReset() {
  if (localStorage.getItem(STORAGE_KEY) !== null) {
    emailInput.value = JSON.parse(localStorage.getItem(STORAGE_KEY)).email;
    messageTextarea.value = JSON.parse(localStorage.getItem(STORAGE_KEY)).message;
  }
};

function onFormSubmit(e) {
  e.preventDefault();
  console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
  localStorage.removeItem(STORAGE_KEY);
  e.currentTarget.reset();
};