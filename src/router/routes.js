import About from '../views/about/About';
import CategoryComponent from '../views/category/CategoryComponent';
import Contact from '../views/Contact';
import ErrorPage from '../views/error/ErrorPage';
import Home from '../views/home/Home';
import ProductPage from '../views/product_page/ProductPage';
import searchView from '../views/search_page/SearchView';




const routes = {
  home: { route: 'home', view: Home },
  about: { route: 'about', view: About },

  categories: { route: ':categories', view: CategoryComponent },
  drinks: { route: ':drinks', view: CategoryComponent },
  product: { route: ':categories:id', view:  ProductPage  },

  contact: { route: 'contact', view: Contact },
  search: { route: 'search', view: searchView },
 
  error: { view: ErrorPage },
};
export default routes;
