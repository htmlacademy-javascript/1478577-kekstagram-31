const commentsNodeTemplate = document.querySelector('.social__comment');

//Создаём фрагмент для комментария
const socialCommentsFragment = document.createDocumentFragment();

//Функция создания комментария
const createComments = (photoData) => {
  photoData.comments.forEach((comment) => {
    const socialCommentNode = commentsNodeTemplate.cloneNode(true);

    socialCommentNode.querySelector('.social__picture').src = comment.avatar;
    socialCommentNode.querySelector('.social__picture').alt = comment.name;
    socialCommentNode.querySelector('.social__text').textContent = comment.message;
    socialCommentsFragment.appendChild(socialCommentNode);
  });
};
export {
  socialCommentsFragment,
  createComments
};
