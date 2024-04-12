import {
  COMMENT_MAX_LENGTH,
  HASHTAG_MAX_LENGTH,
  HASHTAGS_MAX
} from './data.js';
const uploadForm = document.querySelector('.img-upload__form');
const hashtagsInput = uploadForm.querySelector('.text__hashtags');
const descriptionTextarea = uploadForm.querySelector('.text__description');

//валидация
const pristine = new Pristine(uploadForm, {
  classTo: 'img-upload__form',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextTag: 'div',
  errorTextClass: 'img-upload__field-wrapper--error',
  errorClass: 'has-danger',
  successClass: 'has-success',
}, true);

let errorMessage = '';
const getErrorMessage = () => errorMessage;

const isHashtagsInputTextValid = (inputText) => {
  //Показывает, что хэштег не обязателен
  if (!inputText) {
    return true;
  }

  const hashtags = inputText.toLowerCase().trim().split(/\s+/);

  const rules = [{
    check: hashtags.some((hashtag) => hashtag[0] !== '#'),
    error: 'Хэштег должен начинаться с символа \'#\'',
  },
  {
    check: hashtags.some((hashtag) => !/^#[a-zа-яё0-9]{1,19}$/i.test(hashtag)),
    error: 'Хэштег должен состоять из букв и чисел и не может содержать #, @, $, -, :, , и т. д.',
  },
  {
    check: hashtags.some((hashtag) => hashtag === '#'),
    error: 'Хэштег не может состоять только из одной решётки',
  },
  {
    check: hashtags.some((hashtag) => hashtag.length > HASHTAG_MAX_LENGTH),
    error: `Максимальная длина одного хэштега ${HASHTAG_MAX_LENGTH} символов, включая решётку`,
  },
  {
    check: hashtags.some((hashtag) => hashtag.slice(1).includes('#')),
    error: 'Хэштеги разделяются пробелами',
  },
  {
    check: hashtags.some((hashtag, num, array) => array.includes(hashtag, num + 1)),
    error: 'Один и тот же хэштег не может быть использован дважды',
  },
  {
    check: hashtags.length > HASHTAGS_MAX,
    error: `Нельзя указать больше ${HASHTAGS_MAX} хэштегов`,
  },
  ];

  return rules.every((rule) => {
    const isInvalid = rule.check;
    if (isInvalid) {
      errorMessage = rule.error;
    }
    return !isInvalid;
  });
};

const isCommentInputTextValid = (inputText) => {
  // Показывает, что комментария не обязателен.
  if (!inputText) {
    return true;
  }
  const isInvalid = inputText.length > COMMENT_MAX_LENGTH;
  errorMessage = 'Длина комментария не может составлять больше 140 символов';
  return !isInvalid;
};

pristine.addValidator(hashtagsInput, isHashtagsInputTextValid, getErrorMessage);
pristine.addValidator(descriptionTextarea, isCommentInputTextValid, getErrorMessage);

export {pristine};
