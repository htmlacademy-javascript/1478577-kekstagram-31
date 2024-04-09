/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
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
const commentsNodeCounter = commentsNode.querySelector('.social__comment-count');
const commentsNodeLoader = commentsNode.querySelector('.comments-loader');

//функции открытия и закрытия большого изображения
const openPhoto = (photosData) => {
  // const currentPhoto =
  bigPictureContainer.classList.remove('hidden');
  bigPictureImage.src = photosData.url;
  bigPicturelikes.textContent = photosData.likes;
  const socialCommentsFragment = document.createDocumentFragment();
  commentsNode.innerHTML = '';

  //Не могу понять как вытащить комментарии из массива.
  photosData.forEach((photo) => {
    photo.comments.forEach((comment) => {
      const socialCommentNode = commentsNode.cloneNode(true);

      socialCommentNode.querySelector('.social__picture').src = comment.avtar;
      socialCommentNode.querySelector('.social__picture').alt = comment.name;
      socialCommentNode.querySelector('.social__text').textContent = comment.message;
      socialCommentsFragment.appendChild(socialCommentNode);
    });
  });

  bigPictureComments.textContent = photosData.comments.length;
  bigPictureCommentsAll.textContent = photosData.comments.length;

  body.classList.add('.modal-open');
};
// Добавление комментария в DOM

const closePhoto = () => {
  bigPictureContainer.classList.add('hidden');

  body.classList.remove('.modal-open');
};

bigPictureClose.addEventListener('click', closePhoto);

export {
  openPhoto
};


//Нужно чтобы при открытии большой картинки отображалось именно то изображение на которое мы кликнули
