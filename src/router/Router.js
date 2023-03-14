import routes from './routes';

class Router {
  constructor(type) {
    this.type = routes[type];
  
  }
  renderRoute(DOMel) {
    const route = routes[this.type] || routes.error;
   
    DOMel.innerHTML = this.type.component;
    return route;
  }
}
export default Router;
