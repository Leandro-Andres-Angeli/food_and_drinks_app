import About from '../Views/About';
import Home from '../Views/Home';
import Not_Found from '../Views/Not_Found';

const routes = Object.freeze(
  { path: '/', component: Home },
  { path: '/categories', component: Categories },
  { path: '/*', component: Not_Found }
);
export default routes;
