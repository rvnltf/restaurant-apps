const createLikeButtonTemplate = () => `
<button aria-label="like this restaurant" id="likeButton" class="like">
   <i class="fa fa-heart-o" aria-hidden="true"></i>
</button>
`;

const createUnlikeButtonTemplate = () => `
<button aria-label="unlike this restaurant" id="likeButton" class="like">
  <i class="fa fa-heart" aria-hidden="true"></i>
</button>
`;

export { createLikeButtonTemplate, createUnlikeButtonTemplate };
