import UrlParser from '../../routes/url-parser';
import RestaurantDbSource from '../../data/restaurantdb-source';
import '../../components/restaurant-detail';
import '../../components/like-button';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Restaurant = {
  async render() {
    return `
    <section id="detail"></section>
    <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantDbSource.restaurantDetail(url.id);
    const detail = document.querySelector('#detail');
    const restaurantDetail = document.createElement('restaurant-detail');
    restaurantDetail.restaurant = restaurant.restaurant;
    detail.appendChild(restaurantDetail);

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: restaurant.restaurant.id,
        name: restaurant.restaurant.name,
        description: restaurant.restaurant.description,
        pictureId: restaurant.restaurant.pictureId,
        city: restaurant.restaurant.city,
        rating: restaurant.restaurant.rating,
      },
    });
  },
};

export default Restaurant;
