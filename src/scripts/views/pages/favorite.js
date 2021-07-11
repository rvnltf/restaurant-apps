import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import '../../components/favorite-element';

const Favorite = {
  async render() {
    return `
    <div class="favorite">
      <h2 class="menus">- MY FAVORITE -</h2>
      <div id="favorite-card"></div>
    </div>
    `;
  },

  async afterRender() {
    const favoriteCard = document.querySelector('#favorite-card');
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const main = document.querySelector('main');
    const heroElement = document.createElement('hero-element');
    main.insertBefore(heroElement, main.firstElementChild);
    if (restaurants.length) {
      restaurants.forEach((restaurant) => {
        const favoriteElement = document.createElement('favorite-element');
        favoriteElement.restaurant = restaurant;
        favoriteCard.appendChild(favoriteElement);
      });
    } else {
      favoriteCard.innerHTML = this._getEmptyMovieTemplate();
    }
  },

  _getEmptyMovieTemplate() {
    return '<div class="restaurant-item__not__found">Tidak ada Restaurant untuk ditampilkan</div>';
  },
};

export default Favorite;
