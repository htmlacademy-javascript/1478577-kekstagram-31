import {
  photosData
} from './createArrayPhotoData.js';

//Нужно чтобы окно открывалось при нажатии на миниматюру данные берём из photosData;
const body = document.querySelector('body');
const bigPictureContainer = document.querySelector('.big-picture');
const bigPictureImage = document.querySelector('.big-picture__img img');
const bigPictureClose = document.querySelector('.big-picture__cancel');
const bigPicturelikes = document.querySelector('.likes-count');
const bigPictureComments = document.querySelector('.social__comment-shown-count');
const bigPictureCommentsAll = document.querySelector('.social__comment-total-count');
const commentsNode = document.querySelector('.social__comments');
const commentsNodeTemplate = commentsNode.querySelector('.social__comment');
const commentsNodeCounter = document.querySelector('.social__comment-count');
const commentsNodeLoader = document.querySelector('.comments-loader');

//Создаём фрагмент для комментария
const socialCommentsFragment = document.createDocumentFragment();

//Функция создания комментария
const createComments = (photoData) => {
  photoData.comments.forEach((comment) => {
    const socialCommentNode = commentsNodeTemplate.cloneNode(true);

    socialCommentNode.querySelector('.social__picture').src = comment.avatar;
    socialCommentNode.querySelector('.social__picture').alt = comment.name;
    socialCommentNode.querySelector('.social__text').textContent = comment.message;
    socialCommentsFragment.appendChild(socialCommentNode);
  });
};

//функциz открытия большого изображения
const openPhoto = (photoData) => {
  bigPictureContainer.classList.remove('hidden');
  bigPictureImage.src = photoData.url;
  bigPicturelikes.textContent = photoData.likes;
  commentsNode.innerHTML = '';
  createComments(photoData);
  commentsNode.appendChild(socialCommentsFragment);

  bigPictureComments.textContent = photoData.comments.length;
  bigPictureCommentsAll.textContent = photoData.comments.length;
  commentsNodeCounter.classList.add('hidden');
  commentsNodeLoader.classList.add('hidden');
  body.classList.add('modal-open');
};
//Функция закрытия фото.
const closePhoto = () => {
  bigPictureContainer.classList.add('hidden');
  body.classList.remove('modal-open');
};
//Закртытие фото по кнопке.
document.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    bigPictureContainer.classList.add('hidden');
    body.classList.remove('modal-open');
  }
});
//Закрытие фото при клике.
bigPictureClose.addEventListener('click', closePhoto);

export {
  openPhoto
};
