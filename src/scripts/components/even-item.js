import CONFIG from '../globals/config';

class evenItem extends HTMLElement {
  set restaurant(restaurant) {
    this._restaurant = restaurant;
    this.render();
  }

  render() {
    const rating = this._restaurant.rating.toString();
    this.innerHTML = `
                <article class="even">
                    <figure class="even-figure">
                        <img class="lazyload" data-src="${CONFIG.BASE_IMAGE_URL_SMALL + this._restaurant.pictureId}" alt="Picture of ${this._restaurant.city}">
                    </figure>
                    <div class="even-content">
                        <h1 class="even-title restaurant__title">${this._restaurant.name}</h1>
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
                        <p class="even-description">${this._restaurant.description}</p>
                        <a class="detail-button" href="${`/#/restaurant/${this._restaurant.id}`}" aria-label="read more">Read More</a>
                    </div>
                </article>
        `;
  }
}

customElements.define('even-item', evenItem);
