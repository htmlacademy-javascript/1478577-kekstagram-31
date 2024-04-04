/* eslint-disable no-unused-vars */
import {
  photosData
} from './createArrayPhotoData.js';

import {
  renderThumbnails
} from './thumbnails.js';

import './windowRendering.js';

const imageClickHadler = (dataphoto) =>{
  console.log(dataphoto);
};
renderThumbnails(photosData, imageClickHadler);
