import {
  createComments
} from './createComments.js';
import {
  COMMENT_STEP
} from './data.js';


//Нужно чтобы окно открывалось при нажатии на миниматюру данные берём из photosData;
const body = document.querySelector('body');
const bigPictureContainer = document.querySelector('.big-picture');
const bigPictureImage = document.querySelector('.big-picture__img img');
const bigPictureClose = document.querySelector('.big-picture__cancel');
const bigPicturelikes = document.querySelector('.likes-count');
const commentShowCount = document.querySelector('.social__comment-shown-count');
const commentTotalCount = document.querySelector('.social__comment-total-count');
const commentsNode = document.querySelector('.social__comments');

// const commentsNodeCounter = document.querySelector('.social__comment-count');
const commentsNodeLoader = document.querySelector('.comments-loader');

let dataComments;
let countShowComments;

const renderNextComment = () => {
  if(dataComments.length > COMMENT_STEP){
    countShowComments += COMMENT_STEP;
    createComments(dataComments.splice(0, COMMENT_STEP));
    commentsNodeLoader.classList.remove('hidden');
  } else {
    countShowComments += dataComments.length;
    createComments(dataComments);
    commentsNodeLoader.classList.add('hidden');
  }
  commentShowCount.textContent = countShowComments;
};

//Функция закрытия фото.
const closePhoto = () => {
  bigPictureContainer.classList.add('hidden');
  body.classList.remove('modal-open');

  document.removeEventListener('keydown', stringEscOnDocument);
};
//функция для закрытия по ESC
function stringEscOnDocument(evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closePhoto();
  }
}

//функция открытия большого изображения
const openPhoto = (photoData) => {
  bigPictureContainer.classList.remove('hidden');
  countShowComments = 0;
  bigPictureImage.src = photoData.url;
  bigPicturelikes.textContent = photoData.likes;
  commentShowCount.textContent = photoData.comments.length;
  commentTotalCount.textContent = photoData.comments.length;
  commentsNode.innerHTML = '';
  dataComments = [...photoData.comments];
  renderNextComment();
  commentShowCount.textContent = countShowComments;

  // commentsNodeCounter.classList.add('hidden');
  //Закрытие фото по кнопке.
  document.addEventListener('keydown', stringEscOnDocument);
  body.classList.add('modal-open');
};
// При нажатии на кнопке 'загрузить ещё' появляются 5 комментариев
commentsNodeLoader.addEventListener('click', renderNextComment);
//Закрытие фото при клике.
bigPictureClose.addEventListener('click', closePhoto);

export {
  openPhoto
};
