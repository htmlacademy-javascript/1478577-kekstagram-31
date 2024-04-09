const commentsNodeTemplate = document.querySelector('.social__comment');
const commentsNode = document.querySelector('.social__comments');

//Создаём фрагмент для комментария
const socialCommentsFragment = document.createDocumentFragment();

//Функция создания комментария
const createComments = (photoData) => {
  photoData.forEach((comment) => {
    const socialCommentNode = commentsNodeTemplate.cloneNode(true);

    socialCommentNode.querySelector('.social__picture').src = comment.avatar;
    socialCommentNode.querySelector('.social__picture').alt = comment.name;
    socialCommentNode.querySelector('.social__text').textContent = comment.message;
    socialCommentsFragment.appendChild(socialCommentNode);
    commentsNode.appendChild(socialCommentsFragment);
  });
};

export {
  createComments
};
