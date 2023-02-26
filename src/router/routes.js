import About from '../views/about/About';
import CategoryComponent from '../views/category/CategoryComponent';
import Contact from '../views/Contact';
import Home from '../views/home/Home';
import ProductPage from '../views/product_page/ProductPage';

const routes = {
  home: { route: 'home', view: Home },
  about: { route: 'about', view: About },
  categories: { route: 'categories:category', view: CategoryComponent },
  drinks: { route: 'drinks:category', view: CategoryComponent },
  meal: { route: 'categories:category:id', view: ProductPage },
  drink: { route: 'drinks:category:id', view: ProductPage },
  contact: { route: 'contact', view: Contact },
};
export default routes;
