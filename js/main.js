/* eslint-disable no-unused-vars */
//пишу известные переменные
const COMMENTS = ['В целом всё неплохо. Но не всё.', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.', 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.', 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.', 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.', 'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];

const NAMES = ['Иван', 'Пётр', 'Анастасия', 'Николай', 'Мария', 'Егор', 'Александр', 'Екатерина'];
const MAX_LIKES = 200;
const MIN_LIKES = 15;
const MAX_COMMENT = 30;
const MAX_PHOTO = 25;
let indentifier;
const ID = [];

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
