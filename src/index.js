import keyboardData from './keyboard.js';

const body = document.querySelector('body');
const wrapper = document.createElement('div');
const title = document.createElement('h1');
const textarea = document.createElement('textarea');
const keyboardWrapper = document.createElement('div');
const instruction = document.createElement('p');

wrapper.classList.add('wrapper');
title.classList.add('title');
textarea.classList.add('textarea');
keyboardWrapper.classList.add('keyboard-wrapper');

title.textContent = 'RSS Виртуальная клавиатура';
instruction.textContent = 'Клавиатура создана в операционной системе MacOs. Для переключения языка комбинация: command + space';

body.appendChild(wrapper);
wrapper.appendChild(title);
wrapper.appendChild(textarea);
wrapper.appendChild(keyboardWrapper);
wrapper.appendChild(instruction);

/* localstorage */

let language = 'ru';
function setLocalStorage() {
  localStorage.setItem('lang', language);
}
window.addEventListener('beforeunload', setLocalStorage);

// function getLocalStorage() {
//   if (localStorage.getItem('lang')) {
//     let language = localStorage.getItem('lang');
//     getTranslate(language);
//   }
// }
// window.addEventListener('load', getLocalStorage);
const keyboardGeneration = () => {
  for (let i = 0; i < keyboardData.length; i += 1) {
    const key = document.createElement('div');
    key.classList.add('key');
    if (language === 'en') {
      key.innerText = keyboardData[i].ru;
    } else {
      key.innerText = keyboardData[i].en;
    }
    if (keyboardData[i].code === 'Tab') {
      key.classList.add('tab');
    }
    if (keyboardData[i].code === 'Enter') {
      key.classList.add('enter');
    }
    if (keyboardData[i].code === 'Backspace') {
      key.classList.add('bcks');
    }
    if (keyboardData[i].code === 'CapsLock') {
      key.classList.add('caps');
    }
    if (keyboardData[i].code === 'ShiftLeft') {
      key.classList.add('shift-left');
    }
    if (keyboardData[i].code === 'ShiftRight') {
      key.classList.add('shift-right');
    }
    if (keyboardData[i].code === 'Space') {
      key.classList.add('space');
    }
    keyboardWrapper.appendChild(key);
  }
};
keyboardGeneration();
console.log(keyboardData.length);
