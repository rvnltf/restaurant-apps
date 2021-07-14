import CONFIG from '../globals/config';

class RestaurantDetail extends HTMLElement {
  set restaurant(restaurant) {
    this._restaurant = restaurant;
    this.render();
  }

  render() {
    const { menus } = this._restaurant;
    const rating = this._restaurant.rating.toString();
    this.innerHTML = `
    <ul id="details">
      <li class="detail" id="detail_1">
        <div class="detail__content">
          <figure>
            <img class="lazyload" src="${CONFIG.BASE_IMAGE_URL_LARGE + this._restaurant.pictureId}" alt="${CONFIG.BASE_IMAGE_URL_MEDIUM + this._restaurant.pictureId}">
            <div class="caption">
              <h3 class="welcome">WELCOME TO</h3>
              <h1 class="detail-title">${this._restaurant.name.toUpperCase()}</h1>
            </div>
          </figure>
        </div>
      </li>
      <li class="detail" id="detail_2">
        <div class="detail__content">
          <div class="content-detail">
            <h2 class="detail-title">${this._restaurant.name}</h2>
            <p class="address">${this._restaurant.address}, ${this._restaurant.city}</p>
            <p class="description">${this._restaurant.description}</p><br>
            <h3>Categories : ${this._restaurant.categories.map((category) => category.name)}</h3>
          </div>
          <hr><br>
          <h2 class="menus">- MENU -</h2>
          <div class="cards-menu">
            <div class="card">
              <h3 class="menus">FOODS</h3>
              <hr>
              <ul class="foods">
              ${menus.foods.map((food) => `<li>${food.name}</li>`).join('')}
              </ul>
            </div>
            <div class="card">
              <h3 class="menus">DRINKS</h3>
              <ul class="drinks">
              <hr>
              ${menus.drinks.map((drink) => `<li>${drink.name}</li>`).join('')}
              </ul>
            </div>
          </div>
          <h2 class="menus">- REVIEW -</h2>
          <div class="review">
            <div class="rating" style="--nilai: 0.${rating.replace('.', '')};">
                <div class="ratings">
                    <div class="rating__blank"><span class="star"></span><span class="star"></span><span class="star"></span><span class="star"></span><span class="star"></span>
                    </div>
                    <div class="rating__people"><span class="star"></span><span class="star"></span><span class="star"></span><span class="star"></span><span class="star"></span>
                    </div>
                </div>
            </div>
          </div>
          <div class="cards-review">
            <div class="card">
              ${this._restaurant.customerReviews.map((review) => `
              <h3>${review.name}</h3>
              <p class="address">${review.date}</p>
              <p>${review.review}</p><hr>
              `).join('')}
              
            </div>
          </div>
        </div>
      </div>
      </li>
    </ul>
        `;
  }
}

customElements.define('restaurant-detail', RestaurantDetail);
