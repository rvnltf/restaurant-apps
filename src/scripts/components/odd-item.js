import CONFIG from '../globals/config';

class OddItem extends HTMLElement {
  set restaurant(restaurant) {
    this._restaurant = restaurant;
    this.render();
  }

  render() {
    const rating = this._restaurant.rating.toString();
    this.innerHTML = `
                <article class="odd">
                    <figure class="odd-figure">
                        <img class="lazyload" src="${
  CONFIG.BASE_IMAGE_URL_SMALL
                          + this._restaurant.pictureId
}" alt="Picture of ${this._restaurant.city}">
                    </figure>
                    <div class="odd-content">
                        <h1 class="odd-title restaurant__title">${this._restaurant.name}</h1>
                        <div class="review">
                            <p>${this._restaurant.city}</p>
                            <p>${rating}</p>
                            <div class="rating" style="--nilai: 0.${rating.replace(
    '.',
    '',
  )};">
                                <div class="ratings">
                                    <div class="rating__blank"><span class="star"></span><span class="star"></span><span class="star"></span><span class="star"></span><span class="star"></span>
                                    </div>
                                    <div class="rating__people"><span class="star"></span><span class="star"></span><span class="star"></span><span class="star"></span><span class="star"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p class="odd-description">${
  this._restaurant.description
} </p>
                        <a class="detail-button" href="${`/#/restaurant/${this._restaurant.id}`}" style="box-shadow: 3px 3px 1px #aaaaaa; "aria-label="read more">Read More</a>
                    </div>
                </article>
        `;
  }
}

customElements.define('odd-item', OddItem);
