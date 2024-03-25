import {
  MAX_PHOTO,
  ID
} from './data.js';
let indentifier;
//Функция для нахождения случайного числа в заданном интервале.

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

//Функция, которая создаёт id
const getIndentifier = () => {
  if (ID.length > MAX_PHOTO) {
    return 'Фотографии кончились';
  }
  indentifier = getRandomInteger(1, MAX_PHOTO);
  while (ID.includes(indentifier)) {
    indentifier = getRandomInteger(1, MAX_PHOTO);
  }
  ID.push(indentifier);
  return indentifier;
};

//Функция, вытаскивающая элемент из массива.

const getElement = (array) => array[getRandomInteger(0, array.length - 1)];
export {
  getIndentifier,
  getRandomInteger,
  getElement,
  indentifier
};
