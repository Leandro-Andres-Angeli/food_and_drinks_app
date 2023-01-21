import * as bootstrap from 'bootstrap';

// import './src/styles/base.scss';
import 'core-js/stable';
import Navbar from './src/components/navbar/Navbar';
import Home from './src/views/Home';
import { async } from 'regenerator-runtime';
import { asyncRender } from './src/utils/renders';
import routes from './src/router/routes';
import handleNavbarLink from './src/utils/handleNavbarLinks';

if (module.hot) {
  module.hot.accept();
}

// getData('https://www.themealdb.com/api/json/v1/1/list.php?a=list');
// getData('https://www.themealdb.com/api/json/v1/1/list.php?i=list');
// getData('https://www.themealdb.com/api/json/v1/1/randomselection.php');

class App {
  constructor() {
    this.app = document.querySelector('.app');
    this.body = document.querySelector('body');
    this.header = document.querySelector('header');
    window.location.hash = '#/home';
    window.addEventListener('hashchange', () => {
      const route = window.location.hash.slice(2);

      asyncRender(routes[route].view, this.app);
    });

    window.addEventListener('load', () => {
      const loading = document.createElement('div');
      loading.classList.add('loading');
      loading.innerText = 'loading';
      this.body.appendChild(loading);
      asyncRender.call(this, Navbar, this.header);

      asyncRender.call(this, Home, this.app);
      this.body.removeChild(loading);
    });
    this.header.addEventListener('click', (e) => {
      const currentRoute = window.location.hash;

      // handleNavbarLink(e);
      const changeRoute = handleNavbarLink(e, currentRoute);
      // changeRoute &&
      //   asyncRender.call(
      //     this,
      //     routes[e.target.pathname.slice(1)].view,
      //     this.app
      //   );
    });
  }

  handleRoute() {
    return this.app;
  }
}

new App();
