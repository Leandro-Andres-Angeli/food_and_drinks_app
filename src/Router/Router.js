import Index from '../Views/Index';
import About from '../Views/About';
import Not_Found from '../Views/Not_Found';

const routes = Object.freeze({
  index: Index,
  about: About,
  error: Not_Found,
});
class Router {
  constructor(type) {
    console.log(routes);
    this.type = type;
  }
  renderRoute() {
    return routes[this.type] || routes.error;
  }
}
export default Router;
