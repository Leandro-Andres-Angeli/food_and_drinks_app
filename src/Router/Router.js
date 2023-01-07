import routes from '../utils/navbarRoutes';

class Router {
  constructor(type) {
    console.log(routes);
    this.type = type;
  }
  renderRoute() {
    const route = routes[this.type] || routes.error;
    return route;
  }
}
export default Router;
