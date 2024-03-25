import {
  COMMENTS,
  NAMES,
  MIN_LIKES,
  MAX_LIKES,
  MAX_COMMENT,
  MAX_PHOTO
} from './data.js';
import {
  getRandomInteger,
  getElement,
  getIndentifier,
  indentifier,
} from './utill.js';
//Функция создающая объект комментария

const creatDataComment = () => ({
  id: crypto.randomUUID(),
  avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
  message: getElement(COMMENTS),
  name: getElement(NAMES),
});

//задаю функцию для создания объектов и пишу формулы свойств в объекте.

const createPhoto = () => ({
  id: getIndentifier(),
  url: `photos/${indentifier}.jpg`,
  description: `Это фотография №${indentifier}`,
  likes: getRandomInteger(MIN_LIKES, MAX_LIKES),
  comments: Array.from({
    length: getRandomInteger(0, MAX_COMMENT)
  }, creatDataComment),
});
const photosData = Array.from({
  length: MAX_PHOTO
}, createPhoto);
export {
  photosData
};

