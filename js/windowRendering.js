import {
  photosData
} from './createArrayPhotoData.js';

//Нужно чтобы окно открывалось при нажатии на миниматюру данные берём из photosData;
const body = document.querySelector('body');
const bigPictureContainer = document.querySelector('.big-picture');
const bigPictureImage = document.querySelector('.big-picture__img img');
const bigPictureClose = document.querySelector('.big-picture__cancel');


//функции открытия и закрытия большого изображения
const openPhoto = (dataPhoto) => {
  bigPictureContainer.classList.remove('hidden');
  bigPictureImage.src = dataPhoto.url;

  body.classList.add('.modal-open');
};

const closePhoto = () => {
  bigPictureContainer.classList.add('hidden');

  body.classList.remove('.modal-open');
};

bigPictureClose.addEventListener('click', closePhoto);

export {openPhoto};

// // Функция добавленя клика
// const addClick = (photo) =>{
//   photo.addEventListener ('click', () =>{
//     bigPicture.classList.remove('hidden');
//   });
// };

// //проходим по массиву
// const addClickALL = thumbnail.forEach((thumbnails)=>{
//   addClick(thumbnails);
// });


// console.log(thumbnail);

// const openBigPhoto =

//Нужно чтобы при открытии большой картинки отображалось именно то изображение на которое мы кликнули
