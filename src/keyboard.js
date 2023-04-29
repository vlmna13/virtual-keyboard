const keyboardData = [
  {
    code: 'Backquote',
    inside: { ru: 'ё', en: '§' },
    type: { ru: 'letter', en: 'symbol' },
    shift: { en: '±' },
  },

  {
    code: 'Digit1',
    inside: { ru: '1', en: '1' },
    type: { ru: 'digit', en: 'digit' },
    shift: { ru: '!', en: '!' },
  },

  {
    code: 'Digit2',
    inside: { ru: '2', en: '2' },
    type: { ru: 'digit', en: 'digit' },
    shift: { ru: '"', en: '@' },
  },

  {
    code: 'Digit3',
    inside: { ru: '3', en: '3' },
    type: { ru: 'digit', en: 'digit' },
    shift: { ru: '№', en: '#' },
  },

  {
    code: 'Digit4',
    inside: { ru: '4', en: '4' },
    type: { ru: 'digit', en: 'digit' },
    shift: { ru: ';', en: '$' },
  },

  {
    code: 'Digit5',
    inside: { ru: '5', en: '5' },
    type: { ru: 'digit', en: 'digit' },
    shift: { ru: '%', en: '%' },
  },

  {
    code: 'Digit6',
    inside: { ru: '6', en: '6' },
    type: { ru: 'digit', en: 'digit' },
    shift: { ru: ':', en: '^' },
  },

  {
    code: 'Digit7',
    inside: { ru: '7', en: '7' },
    type: { ru: 'digit', en: 'digit' },
    shift: { ru: '?', en: '&' },
  },

  {
    code: 'Digit8',
    inside: { ru: '8', en: '8' },
    type: { ru: 'digit', en: 'digit' },
    shift: { ru: '*', en: '*' },
  },

  {
    code: 'Digit9',
    inside: { ru: '9', en: '9' },
    type: { ru: 'digit', en: 'digit' },
    shift: { ru: '(', en: '(' },
  },

  {
    code: 'Digit0',
    inside: { ru: '0', en: '0' },
    type: { ru: 'digit', en: 'digit' },
    shift: { ru: ')', en: ')' },
  },

  {
    code: 'Minus',
    inside: { ru: '-', en: '-' },
    type: { ru: 'symbol', en: 'symbol' },
    shift: { ru: '_', en: '_' },
  },

  {
    code: 'Equal',
    inside: { ru: '=', en: '=' },
    type: { ru: 'symbol', en: 'symbol' },
    shift: { ru: '+', en: '+' },
  },

  {
    code: 'Backspace',
    inside: { ru: 'Backspace', en: 'Backspace' },
    type: { ru: 'action', en: 'action' },
    // shift?
  },

  {
    code: 'Tab',
    inside: { ru: 'Tab', en: 'Tab' },
    type: { ru: 'action', en: 'action' },
    // shift
  },

  {
    code: 'KeyQ',
    inside: { ru: 'й', en: 'q' },
    type: { ru: 'letter', en: 'letter' },
  },

  {
    code: 'KeyW',
    inside: { ru: 'ц', en: 'w' },
    type: { ru: 'letter', en: 'letter' },
  },

  {
    code: 'KeyE',
    inside: { ru: 'у', en: 'e' },
    type: { ru: 'letter', en: 'letter' },
  },

  {
    code: 'KeyR',
    inside: { ru: 'к', en: 'r' },
    type: { ru: 'letter', en: 'letter' },
  },

  {
    code: 'KeyT',
    inside: { ru: 'е', en: 't' },
    type: { ru: 'letter', en: 'letter' },
  },

  {
    code: 'KeyY',
    inside: { ru: 'н', en: 'y' },
    type: { ru: 'letter', en: 'letter' },
  },

  {
    code: 'KeyU',
    inside: { ru: 'г', en: 'u' },
    type: { ru: 'letter', en: 'letter' },
  },

  {
    code: 'KeyI',
    inside: { ru: 'ш', en: 'i' },
    type: { ru: 'letter', en: 'letter' },
  },

  {
    code: 'KeyO',
    inside: { ru: 'щ', en: 'o' },
    type: { ru: 'letter', en: 'letter' },
  },

  {
    code: 'KeyP',
    inside: { ru: 'з', en: 'p' },
    type: { ru: 'letter', en: 'letter' },
  },

  {
    code: 'BracketLeft',
    inside: { ru: 'х', en: '[' },
    type: { ru: 'letter', en: 'symbol' },
  },

  {
    code: 'BracketRight',
    inside: { ru: 'ъ', en: ']' },
    type: { ru: 'letter', en: 'symbol' },
    shift: { en: '}' },
  },

  {
    code: 'CapsLock',
    inside: { ru: 'CapsLock', en: 'CapsLock' },
    type: { ru: 'action', en: 'action' },
    // shift
  },

  {
    code: 'KeyA',
    inside: { ru: 'ф', en: 'a' },
    type: { ru: 'letter', en: 'letter' },
  },

  {
    code: 'KeyS',
    inside: { ru: 'ы', en: 's' },
    type: { ru: 'letter', en: 'letter' },
  },

  {
    code: 'KeyD',
    inside: { ru: 'в', en: 'd' },
    type: { ru: 'letter', en: 'letter' },
  },

  {
    code: 'KeyF',
    inside: { ru: 'а', en: 'f' },
    type: { ru: 'letter', en: 'letter' },
  },

  {
    code: 'KeyG',
    inside: { ru: 'п', en: 'g' },
    type: { ru: 'letter', en: 'letter' },
  },

  {
    code: 'KeyH',
    inside: { ru: 'р', en: 'h' },
    type: { ru: 'letter', en: 'letter' },
  },

  {
    code: 'KeyJ',
    inside: { ru: 'о', en: 'j' },
    type: { ru: 'letter', en: 'letter' },
  },

  {
    code: 'KeyK',
    inside: { ru: 'л', en: 'k' },
    type: { ru: 'letter', en: 'letter' },
  },

  {
    code: 'KeyL',
    inside: { ru: 'д', en: 'l' },
    type: { ru: 'letter', en: 'letter' },
  },

  {
    code: 'Semicolon',
    inside: { ru: 'ж', en: ';' },
    type: { ru: 'letter', en: 'symbol' },
    shift: { en: ':' },
  },

  {
    code: 'Quote',
    inside: { ru: 'э', en: "'" },
    type: { ru: 'letter', en: 'symbol' },
    shift: { en: '"' },
  },

  {
    code: 'Backslash',
    inside: { ru: '\\', en: '\\' },
    type: { ru: 'symbol', en: 'symbol' },
    shift: { ru: '/', en: '|' },
  },

  {
    code: 'Enter',
    inside: { ru: 'Enter', en: 'Enter' },
    type: { ru: 'action', en: 'action' },
    // shift
  },

  {
    code: 'ShiftLeft',
    inside: { ru: 'Shift', en: 'Shift' },
    type: { ru: 'action', en: 'action' },
    // shift
  },

  {
    code: 'IntlBackslash',
    inside: { ru: ']', en: '`' },
    type: { ru: 'symbol', en: 'symbol' },
    shift: { ru: '[', en: '~' },
  },

  {
    code: 'KeyZ',
    inside: { ru: 'я', en: 'z' },
    type: { ru: 'letter', en: 'letter' },
  },

  {
    code: 'KeyX',
    inside: { ru: 'ч', en: 'x' },
    type: { ru: 'letter', en: 'letter' },
  },

  {
    code: 'KeyC',
    inside: { ru: 'с', en: 'c' },
    type: { ru: 'letter', en: 'letter' },
  },

  {
    code: 'KeyV',
    inside: { ru: 'м', en: 'v' },
    type: { ru: 'letter', en: 'letter' },
  },

  {
    code: 'KeyB',
    inside: { ru: 'и', en: 'b' },
    type: { ru: 'letter', en: 'letter' },
  },

  {
    code: 'KeyN',
    inside: { ru: 'т', en: 'n' },
    type: { ru: 'letter', en: 'letter' },
  },

  {
    code: 'KeyM',
    inside: { en: 'm', ru: 'ь' },
    type: { ru: 'letter', en: 'letter' },
  },

  {
    code: 'Comma',
    inside: { ru: 'б', en: ',' },
    type: { ru: 'letter', en: 'symbol' },
    shift: { en: '<' },
  },

  {
    code: 'Period',
    inside: { ru: 'ю', en: '.' },
    type: { ru: 'letter', en: 'symbol' },
    shift: { en: '>' },
  },

  {
    code: 'Slash',
    inside: { ru: '.', en: '/' },
    type: { ru: 'symbol', en: 'symbol' },
    shift: { ru: ',', en: '?' },
  },

  {
    code: 'ArrowUp',
    inside: { ru: '▲', en: '▲' },
    type: { ru: 'action', en: 'action' },
  },

  {
    code: 'ShiftRight',
    inside: { ru: 'Shift', en: 'Shift' },
    type: { ru: 'action', en: 'action' },
  },

  {
    code: 'ControlLeft',
    inside: { ru: 'Ctrl', en: 'Ctrl' },
    type: { ru: 'action', en: 'action' },
  },

  {
    code: 'AltLeft',
    inside: { ru: 'Alt', en: 'Alt' },
    type: { ru: 'action', en: 'action' },
  },

  {
    code: 'MetaLeft',
    inside: { ru: 'Cmd', en: 'Cmd' },
    type: { ru: 'action', en: 'action' },
  },

  {
    code: 'Space',
    inside: { ru: ' ', en: ' ' },
    type: { ru: 'action', en: 'action' },
  },

  {
    code: 'MetaRight',
    inside: { ru: 'Cmd', en: 'Cmd' },
    type: { ru: 'action', en: 'action' },
  },

  {
    code: 'AltRight',
    inside: { ru: 'Alt', en: 'Alt' },
    type: { ru: 'action', en: 'action' },
  },

  {
    code: 'ArrowLeft',
    inside: { ru: '◄', en: '◄' },
    type: { ru: 'action', en: 'action' },
  },

  {
    code: 'ArrowDown',
    inside: { ru: '▼', en: '▼' },
    type: { ru: 'action', en: 'action' },
  },

  {
    code: 'ArrowRight',
    inside: { ru: '►', en: '►' },
    type: { ru: 'action', en: 'action' },
  },
];

export default keyboardData;
