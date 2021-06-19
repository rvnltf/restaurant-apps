// import data from '../../../DATA.json';

import RestaurantDbSource from '../../data/restaurantdb-source';
import '../../components/odd-item';
import '../../components/even-item';
import '../../components/hero-element';

const Home = {
  async render() {
    return `
    <section id="maincontent"></section>
    `;
  },

  async afterRender() {
    const mainContent = document.querySelector('#maincontent');
    const restaurants = await RestaurantDbSource.restaurantList();
    const main = document.querySelector('main');
    const heroElement = document.createElement('hero-element');
    main.insertBefore(heroElement, main.firstElementChild);
    let i = 1;
    restaurants.forEach((restaurant) => {
      if (i % 2 === 0) {
        const evenItem = document.createElement('even-item');
        evenItem.restaurant = restaurant;
        mainContent.appendChild(evenItem);
      } else {
        const oddItem = document.createElement('odd-item');
        oddItem.restaurant = restaurant;
        mainContent.appendChild(oddItem);
      }
      i += 1;
    });
  },
};

export default Home;
