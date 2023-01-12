import * as bootstrap from 'bootstrap';
import './src/styles/base.scss';
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
    console.log(this.app);

    window.addEventListener(
      'load',
      async function () {
        window.location.hash = '#';

        asyncRender(Navbar);
        asyncRender(Home);
      }.bind(this)
    );
  }
}
new App();
