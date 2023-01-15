import routes from './routes';

class Router {
  constructor(type) {
    this.type = routes[type];
    console.log(type);
  }
  renderRoute(DOMel) {
    const route = routes[this.type] || routes.error;
    console.log(this);
    DOMel.innerHTML = this.type.component;
    return route;
  }
}
export default Router;
