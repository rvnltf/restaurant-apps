import CONFIG from '../globals/config';

class RestaurantDetail extends HTMLElement {
  set restaurant(restaurant) {
    this._restaurant = restaurant;
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="parallax" style="backgromund-image: url(${CONFIG.BASE_IMAGE_URL_LARGE + this._restaurant.pictureId})">
        <h2>${this._restaurant.name}</h2>
    </div>
        `;
  }
}

customElements.define('restaurant-detail', RestaurantDetail);
