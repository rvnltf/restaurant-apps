// import data from '../../../DATA.json';

import RestaurantDbSource from '../../data/restaurantdb-source';

// const main = () => {
//   document.addEventListener('DOMContentLoaded', () => {
//     const mainContent = document.querySelector('main-content');
//     mainContent.restaurant = data;
//   });
// };
// export default main;
const Home = {
  async render() {
    return '<h2>Main Content</h2>';
  },

  async afterRender() {
    const mainContent = document.querySelector('main-content');
    mainContent.restaurant = await RestaurantDbSource.home;
  },
};

export default Home;
