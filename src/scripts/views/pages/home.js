// import data from '../../../DATA.json';

import RestaurantDbSource from '../../data/restaurantdb-source';
import '../../components/odd-item';
import '../../components/even-item';

// const main = () => {
//   document.addEventListener('DOMContentLoaded', () => {
//     const mainContent = document.querySelector('main-content');
//     mainContent.restaurant = data;
//   });
// };
// export default main;
const Home = {
  async render() {
    return `
    <section id="content"></section>
    `;
  },

  async afterRender() {
    const mainContent = document.querySelector('#content');
    const restaurants = await RestaurantDbSource.restaurantList();
    mainContent.innerHTML = '';
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
