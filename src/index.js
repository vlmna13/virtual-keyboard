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

function getLocalStorage() {
  if (localStorage.getItem('lang')) {
    language = localStorage.getItem('lang');
  }
}
window.addEventListener('load', getLocalStorage);

const keyboardGeneration = () => {
  for (let i = 0; i < keyboardData.length; i += 1) {
    const key = document.createElement('div');
    key.classList.add('key');
    key.dataset.index = keyboardData[i].code;

    key.innerText = keyboardData[i].inside[language];
    key.dataset.type = keyboardData[i].type[language];    

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
});
window.addEventListener('keyup', (event) => {
  const button = document.querySelector(`[data-index=${event.code}]`);
  button.classList.remove('active');
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

// Space button
const space = document.querySelector('.space');
space.addEventListener('mousedown', () => {
  space.classList.add('active');
  textarea.value += space.innerText;
});
space.addEventListener('mouseup', () => {
  space.classList.remove('active');
});

// Enter button
const enter = document.querySelector('.enter');
enter.addEventListener('mousedown', () => {
  enter.classList.add('active');
  textarea.value += '\n';
});
enter.addEventListener('mouseup', () => {
  enter.classList.remove('active');
});

// backspace button
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

// capslock button
const capslock = document.querySelector('.caps');
window.addEventListener('keydown', (event) => {
  const target = event.getModifierState('CapsLock');
  if (target) {
    lettersCollection.forEach((letter) => {
      const letter1 = letter;
      letter1.innerText = letter.innerText.toUpperCase();
    });
    capslock.classList.add('active');
  }
});

window.addEventListener('keyup', (event) => {
  const target = event.getModifierState('CapsLock');
  if (!target) {
    lettersCollection.forEach((letter) => {
      const letter1 = letter;
      letter1.innerText = letter.innerText.toLowerCase();
    });
    capslock.classList.remove('active');
  }
});

capslock.addEventListener('click', () => {
  capslock.classList.toggle('active');
  if (capslock.classList.contains('active')) {
    lettersCollection.forEach((letter) => {
      const letter1 = letter;
      letter1.innerText = letter.innerText.toUpperCase();
    });
  } else {
    lettersCollection.forEach((letter) => {
      const letter1 = letter;
      letter1.innerText = letter.innerText.toLowerCase();
    });
  }
});

// tab working only with mouth
const tab = document.querySelector('.tab');
tab.addEventListener('click', () => {
  if (tab.classList.contains('active')) {
    textarea.value += '\u00A0';
    tab.classList.remove('active');
  }
  tab.classList.add('active');
  textarea.value += '\u00A0';
});

const shiftLeft = document.querySelector('.shift-left');
const shiftRight = document.querySelector('.shift-right');

// language change

function changeLanguage(func, ...codes) {
  const pressed = new Set();
  document.addEventListener('keydown', (event) => {
    pressed.add(event.code);
    // eslint-disable-next-line no-restricted-syntax
    for (const code of codes) {
      if (!pressed.has(code)) {
        return;
      }
    }
    pressed.clear();
    func();
  });
  document.addEventListener('keyup', (event) => {
    pressed.delete(event.code);
  });
}

const changeInnerText = () => {
  if (language === 'ru') {
    language = 'en';
  } else {
    language = 'ru';
  }

  keyboardData.forEach((key) => {
    const node = document.querySelector(`[data-index=${key.code}]`);
    node.innerText = key.inside[language];
    node.dataset.type = key.type[language];
  });
};

changeLanguage(
  changeInnerText,
  'MetaLeft',
  'AltLeft',
);
