import About from '../views/about/About';
import CategoryComponent from '../views/category/CategoryComponent';
import Contact from '../views/Contact';
import Home from '../views/home/Home';

const routes = {
  home: { route: 'home', view: Home },
  about: { route: 'about', view: About },
  categories: { route: 'categories:category', view: CategoryComponent },
  contact: { route: 'contact', view: Contact },
};
export default routes;
