import {
  photosData
} from './createArrayPhotoData.js';

//Нужно чтобы окно открывалось при нажатии на миниматюру данные берём из photosData;
const bigPicture = document.querySelector('.big-picture');
const thumbnail = document.querySelectorAll('.picture__img');
const smallPicture = document.querySelectorAll('.picture');

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
