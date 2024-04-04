import {
  photosData
} from './createArrayPhotoData.js';

// Нам нужно из имеющегося массива данных (photosData) достать данные и записать их в клонированный шаблон. И поместить созданные шаблоны с инфой в DOM;

//создаём переменную, чтобы получить доступ к шаблону;
const template = document.querySelector('#picture').content.querySelector('.picture');

//Создаём функцию для создания миниатюр

const creatThumbnail = ({
  url,
  description,
  comments,
  likes
}, imageClickHadler) => {
  const thumbnail = template.cloneNode(true);
  const image = thumbnail.querySelector('.picture__img');
  image.src = url;
  image.alt = description;
  thumbnail.querySelector('.picture__comments').textContent = comments.length;
  thumbnail.querySelector('.picture__likes').textContent = likes;
  image.addEventListener('click', () => {
    imageClickHadler({url, description, comments, likes});
  });
  return thumbnail;
};

//Найдём контёнер в который нужно добавлять информацию
const container = document.querySelector('.pictures');


//Нужно пройтись по массиву и добавить информацию в шаблон
const renderThumbnails = (photos, imageClickHadler) => {
  //Создаём фрагмент
  const fragment = document.createDocumentFragment();
  photos.forEach((photo) => {

    const thumbnail = creatThumbnail(photo, imageClickHadler);

    fragment.appendChild(thumbnail);
  });
  container.appendChild(fragment);
};


export {
  renderThumbnails
};
