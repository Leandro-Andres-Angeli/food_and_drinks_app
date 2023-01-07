import About from '../Views/About';
import Contact from '../Views/Contact';
import Home from '../Views/Home';
import Not_Found from '../Views/Not_Found';

const navbarRoutes = {
  home: { path: '/', component: Home },
  about: { path: '/about', component: About },
  contact: { path: '/contact', component: Contact },
};

export default navbarRoutes;
