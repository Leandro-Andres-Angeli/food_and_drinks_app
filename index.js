import * as bootstrap from 'bootstrap';

// import './src/styles/base.scss';
import 'core-js/stable';
import Navbar from './src/components/navbar/Navbar';
import { asyncRender, Home } from './src/views/Home';
import { async } from 'regenerator-runtime';
import { asyncRender } from './src/utils/renders';

if (module.hot) {
  module.hot.accept();
}

// getData('https://www.themealdb.com/api/json/v1/1/list.php?a=list');
// getData('https://www.themealdb.com/api/json/v1/1/list.php?i=list');
// getData('https://www.themealdb.com/api/json/v1/1/randomselection.php');

class App {
  constructor() {
    this.app = document.querySelector('.app');
    window.location.hash = '#';
    window.addEventListener('hashchange', function () {
      console.log('change');
    });
    window.addEventListener('load', function () {
      (async function () {
        asyncRender(Navbar);

        asyncRender(Home);
      }.bind(this)());
    });
    this.app.addEventListener('click', (e) => {
      if (e.target.tagName === 'A') {
        e.preventDefault();

        let route =
          window.location.href.slice(0, window.location.href.indexOf('#') + 1) +
          e.target.pathname;

        window.location = route;
      } else return;
    });
  }

  handleRoute() {
    return this.app;
  }
}

new App();
