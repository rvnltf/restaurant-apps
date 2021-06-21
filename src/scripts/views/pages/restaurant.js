import UrlParser from '../../routes/url-parser';
import RestaurantDbSource from '../../data/restaurantdb-source';
import '../../components/restaurant-detail';

const Restaurant = {
  async render() {
    return `
    <section id="detail"></section>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantDbSource.restaurantDetail(url.id);
    const detail = document.querySelector('#detail');
    const restaurantDetail = document.createElement('restaurant-detail');
    restaurantDetail.restaurant = restaurant.restaurant;
    detail.appendChild(restaurantDetail);
  },
};

export default Restaurant;
