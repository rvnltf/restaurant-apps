import CONFIG from '../globals/config';

class RestaurantDetail extends HTMLElement {
  set restaurant(restaurant) {
    this._restaurant = restaurant;
    this.render();
  }

  render() {
    const rating = this._restaurant.rating.toString();
    this.innerHTML = `
    <ul id="details">
      <li class="detail" id="detail_1">
        <div class="detail__content">
          <figure>
            <img src="${CONFIG.BASE_IMAGE_URL_LARGE + this._restaurant.pictureId}" alt="${CONFIG.BASE_IMAGE_URL_MEDIUM + this._restaurant.pictureId}">
            <div class="caption">
              <h3 class="welcome">WELCOME TO</h3>
              <h1 class="detail-title">${this._restaurant.name.toUpperCase()}</h1>
              <div class="review">
                  <p>${this._restaurant.city}</p>
                  <p>${rating}</p>
                  <div class="rating" style="--nilai: 0.${rating.replace('.', '')};">
                      <div class="ratings">
                          <div class="rating__blank"><span class="star"></span><span class="star"></span><span class="star"></span><span class="star"></span><span class="star"></span>
                          </div>
                          <div class="rating__people"><span class="star"></span><span class="star"></span><span class="star"></span><span class="star"></span><span class="star"></span>
                          </div>
                      </div>
                  </div>
              </div>
            </div>
          </figure>
        </div>
      </li>
      <li class="detail" id="detail_2">
        <div class="detail__content">
          <div class="content-detail">
            <h2>${this._restaurant.name}</h2>
            <p class="address">${this._restaurant.address}, ${this._restaurant.city}</p>
            <p class="description">${this._restaurant.description}</p>
            <div class="category-detail">
            <h3>Categories</h3>
              <ul class="category">`;
    this._restaurant.categories.forEach((category) => {
      const categoryTag = document.createElement('li');
      categoryTag.innerHTML = category.name;
      const categoryClass = document.querySelector('.category');
      categoryClass.appendChild(categoryTag);
    });
    this.innerHTML += `
              </ul>
            </div>
          </div>
          <div class="cards">
            <div class="card">ONE</div>
            <div class="card">TWO</div>
            <div class="card">THREE</div>
          </div>
        </div>
      </li>
    </ul>
        `;
  }
}

customElements.define('restaurant-detail', RestaurantDetail);
