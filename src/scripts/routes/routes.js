import Favorite from '../views/pages/favorite';
import Home from '../views/pages/home';
import Restaurant from '../views/pages/restaurant';

const routes = {
  '/': Home,
  '/home': Home,
  '/favorite': Favorite,
  '/restaurant/:id': Restaurant,
};

export default routes;
