import {
  pristine
} from './form-validator.js';
const body = document.querySelector('body');
const uploadForm = document.querySelector('.img-upload__form');
const uploadInput = uploadForm.querySelector('#upload-file');
const photoEditorForm = uploadForm.querySelector('.img-upload__overlay');
const cancelphotoEditorForm = uploadForm.querySelector('.img-upload__cancel');

const onPhotoEditorResetBtnClick = () => {
  closePhotoEditor();
};

const onDocumentKeydown = (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closePhotoEditor();
  }
};

function closePhotoEditor() {
  photoEditorForm.classList.add('hidden');
  body.classList.remove('modal-open');
  cancelphotoEditorForm.removeEventListener('click', onPhotoEditorResetBtnClick);
  document.removeEventListener('keydown', onDocumentKeydown);
  uploadInput.value = '';

}

const downloadPicture = () => {
  uploadInput.addEventListener('change', () => {
    photoEditorForm.classList.remove('hidden');
    body.classList.add('modal-open');
    cancelphotoEditorForm.addEventListener('click', onPhotoEditorResetBtnClick);
    document.addEventListener('keydown', onDocumentKeydown);
  });
};

const uploadInputElementChangeHandler = () => {
  uploadForm.reset();
  downloadPicture(photoEditorForm);
};

const uploadFormSubmitHandler = (evt) => {
  const isInvalid = !pristine.validate();
  if (isInvalid) {
    evt.preventDefault();
    pristine.addError(pristine.getErrors()[0].input);
  }
};

uploadForm.addEventListener('change', uploadInputElementChangeHandler);
uploadForm.addEventListener('submit', uploadFormSubmitHandler);

export {
  downloadPicture
};
