import {SCALE_STEP} from './data.js';
const imgUploadOverlay = document.querySelector('.img-upload__overlay');
const imgUploadContainer = imgUploadOverlay.querySelector('.img-upload__preview-container');
const scaleControl = imgUploadContainer.querySelector('.scale__control--value');
const smallScaleButton = imgUploadContainer.querySelector('.scale__control--smaller');
const bigScaleButton = imgUploadContainer.querySelector('.scale__control--bigger');
const previewPictures = imgUploadOverlay.querySelector('.img-upload__preview img');
let scale = 1;

const onSmallButtonClick = () =>{
  if (scale > SCALE_STEP){
    scale -= SCALE_STEP;
    previewPictures.style.transform = `scale(${scale})`;
    scaleControl.value = `${scale * 100}%`;
  }
};

const onBigButtonClick = () =>{
  if (scale < 1){
    scale += SCALE_STEP;
    previewPictures.style.transform = `scale(${scale})`;
    scaleControl.value = `${scale * 100}%`;
  }
};

export {smallScaleButton,bigScaleButton,onSmallButtonClick,onBigButtonClick};
