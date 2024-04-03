import {
  photosData
} from './createArrayPhotoData.js';

// Нам нужно из имеющегося массива данных (photosData) достать данные и записать их в клонированный шаблон. И поместить созданные шаблоны с инфой в DOM;

//создаём переменную, чтобы получить доступ к шаблону;
const template = document.querySelector('#picture').content.querySelector('.picture');

//Создаём функцию для создания миниатюр

const creatThumbnail = (photo) => {
  const thumbnail = template.cloneNode(true);
  const image = thumbnail.querySelector('.picture__img');
  image.src = photo.url;
  image.alt = photo.description;
  thumbnail.querySelector('.picture__comments').textContent = photo.comments.length;
  thumbnail.querySelector('.picture__likes').textContent = photo.likes;
  return thumbnail;
};

//Найдём контёнер в который нужно добавлять информацию
const container = document.querySelector('.pictures');

//Создаём фрагмент
const fragment = document.createDocumentFragment();

//Нужно пройтись по массиву и добавить информацию в шаблон
const renderThumbnails = photosData.forEach((photo) => {
  const thumbnail = creatThumbnail(photo);

  fragment.appendChild(thumbnail);
});
container.appendChild(fragment);

export {
  renderThumbnails
};
