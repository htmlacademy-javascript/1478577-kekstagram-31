/* eslint-disable no-unused-vars */
import {
  photosData
} from './createArrayPhotoData.js';

import {
  renderThumbnails
} from './thumbnails.js';

import {
  openPhoto
} from './windowRendering.js';

import {
  downloadPicture
} from './form.js';

import {
  smallScaleButton,bigScaleButton,onSmallButtonClick,onBigButtonClick
} from './scalePhotoEditor.js';

import {
  changePhotoEffect
} from './effectPhotoEditor.js';

const effectsList = document.querySelector('.effects__list');

const imageClickHadler = (dataPhoto) =>{
  openPhoto(dataPhoto);
};
renderThumbnails(photosData, imageClickHadler);

downloadPicture();

effectsList.addEventListener ('change',changePhotoEffect);

smallScaleButton.addEventListener('click', onSmallButtonClick);
bigScaleButton.addEventListener('click', onBigButtonClick);
