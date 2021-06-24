import CONFIG from '../globals/config';

class FavoriteElement extends HTMLElement {
  set restaurant(restaurant) {
    this._restaurant = restaurant;
    this.render();
  }

  render() {
    const rating = this._restaurant.rating.toString();
    this.innerHTML = `
            <div class="card">
                <img src="${CONFIG.BASE_IMAGE_URL_SMALL + this._restaurant.pictureId}" alt="${this._restaurant.name}">
                <div class="favorite-description">
                <h2>${this._restaurant.name}</h2>
                <div class="review">
                  <div class="rating" style="--nilai: 0.${rating.replace('.', '')};">
                      <div class="ratings">
                          <div class="rating__blank"><span class="star"></span><span class="star"></span><span class="star"></span><span class="star"></span><span class="star"></span>
                          </div>
                          <div class="rating__people"><span class="star"></span><span class="star"></span><span class="star"></span><span class="star"></span><span class="star"></span>
                          </div>
                      </div>
                  </div>
                  <p>${this._restaurant.city}</p>
                </div>
                <p class="odd-description">${this._restaurant.description}</p>
                <a class="detail-button" href="${`/#/restaurant/${this._restaurant.id}`}" aria-label="read more">Read More</a>
            </div>
    `;
  }
}

customElements.define('favorite-element', FavoriteElement);
