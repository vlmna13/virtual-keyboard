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

let language = 'en';
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
    key.dataset.index = keyboardData[i].code;
    if (language === 'en') {
      key.innerText = keyboardData[i].inside.en;
      key.dataset.type = keyboardData[i].type.en;
    } else {
      key.innerText = keyboardData[i].inside.ru;
      key.dataset.type = keyboardData[i].type.ru;
    }
    if (keyboardData[i].code === 'Tab') {
      key.classList.add('tab');
    }
    if (keyboardData[i].code === 'Enter') {
      key.classList.add('enter');
    }
    if (keyboardData[i].code === 'Backspace') {
      key.classList.add('backspace');
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
// function connecting physical and virtual buttons

window.addEventListener('keydown', (event) => {
  const button = document.querySelector(`[data-index=${event.code}]`);
  button.classList.add('active');
  if (event.code === 'CapsLock') {
    button.classList.toggle('active');
  }
});
window.addEventListener('keyup', (event) => {
  const button = document.querySelector(`[data-index=${event.code}]`);
  button.classList.remove('active');
  // if (event.code === 'CapsLock') {
  //   button.classList.toggle('active');
  // }
});

// function inputing text
const enterVirtualText = (array) => {
  array.forEach((element) => {
    element.addEventListener('mousedown', () => {
      element.classList.add('active');
      textarea.value += element.innerText;
    });
    element.addEventListener('mouseup', () => {
      element.classList.remove('active');
    });
  });
};
const digitsCollection = document.querySelectorAll('[data-type=digit]');
const lettersCollection = document.querySelectorAll('[data-type=letter]');
const symbolsCollection = document.querySelectorAll('[data-type=symbol]');
enterVirtualText(digitsCollection);
enterVirtualText(lettersCollection);
enterVirtualText(symbolsCollection);
const space = document.querySelector('.space');
space.addEventListener('mousedown', () => {
  space.classList.add('active');
  textarea.value += space.innerText;
});
space.addEventListener('mouseup', () => {
  space.classList.remove('active');
});
const enter = document.querySelector('.enter');
enter.addEventListener('mousedown', () => {
  enter.classList.add('active');
  textarea.value += '\n';
});
enter.addEventListener('mouseup', () => {
  enter.classList.remove('active');
});

const backspace = document.querySelector('.backspace');
backspace.addEventListener('mousedown', () => {
  backspace.classList.add('active');
  textarea.value = textarea.value.substring(0, textarea.value.length - 1);
  // hunt down cursor
});
backspace.addEventListener('mouseup', () => {
  backspace.classList.remove('active');
});

textarea.onblur = () => textarea.focus();
textarea.focus();

const capslock = document.querySelector('.caps');
const shiftLeft = document.querySelector('.shift-left');
const shiftRight = document.querySelector('.shift-right');

window.addEventListener('keydown', (event) => {
  event.getModifierState('CapsLock');
  lettersCollection.forEach((letter) => {
    letter.innerText = letter.innerText.toUpperCase();
  });
});

window.addEventListener('keyup', (event) => {
  event.getModifierState('CapsLock');
  lettersCollection.forEach((letter) => {
    letter.innerText = letter.innerText.toLowerCase();
  });
});

capslock.addEventListener('click', () => {
  capslock.classList.toggle('active');
  console.log('1');
});
