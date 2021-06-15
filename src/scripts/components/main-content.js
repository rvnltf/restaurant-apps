import './odd-item.js';
import './even-item.js';

class MainContent extends HTMLElement {
  set restaurant(restaurant) {
    this._restaurant = restaurant;
    this.render();
  }

  render() {
    this.innerHTML = '';
    let i = 1;
    this._restaurant.restaurants.forEach((restaurant) => {
      if (i % 2 === 0) {
        const evenItem = document.createElement('even-item');
        evenItem.restaurant = restaurant;
        this.appendChild(evenItem);
      } else {
        const oddItem = document.createElement('odd-item');
        oddItem.restaurant = restaurant;
        this.appendChild(oddItem);
      }
      i += 1;
    });
  }
}

customElements.define('main-content', MainContent);
