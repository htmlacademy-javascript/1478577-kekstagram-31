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

const imageClickHadler = (dataPhoto) =>{
  openPhoto(dataPhoto);
};
renderThumbnails(photosData, imageClickHadler);

downloadPicture();
