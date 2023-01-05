import * as bootstrap from 'bootstrap';
import './src/styles/base.scss';
import 'core-js/stable';
import Navlink from './src/classes/NavLink';
if (module.hot) {
  module.hot.accept();
}
const categories = `www.themealdb.com/api/json/v1/1/list.php?c=list`;

const testRec =
  'https://api.spoonacular.com/recipes/random?apiKey=63e4bc6a307042d6928cb58979964f64&number=10';
const getData = (URL) => {
  fetch(URL)
    .then((res) => {
      return res.json();
    })
    .then((data) => console.log(data))
    .catch((err) => {
      console.log(err);
    });
  // .then((data) => console.log(data));

  // const parsed = await data.json();
  // console.log(parsed);
};
getData('https://www.themealdb.com/api/json/v1/1/categories.php');
getData('https://www.themealdb.com/api/json/v1/1/list.php?c=list');
// getData('https://www.themealdb.com/api/json/v1/1/list.php?a=list');
getData('https://www.themealdb.com/api/json/v1/1/list.php?i=list');
// getData('https://www.themealdb.com/api/json/v1/1/randomselection.php');

// import 'regenerator-runtime/runtime';
// import NavbarHeader from './src/components/navbarheader/NavbarHeader';
// import Router from './src/Router/Router';
// import * as fetchAPI from './src/apis/FetchApi';

// import View from './src/Views/View';
// import fetchAPI from './src/apis/FetchApi';
// const { getData } = fetchAPI();
// const gd = async () => {
//   try {
//     const f = await fetch('www.themealdb.com/api/json/v1/1/list.php?c=list');
//     const j = await f.json();
//     console.log(j);
//     // const { meals } = f.json();
//     // console.log(meals);
//   } catch (e) {
//     console.log(e);
//   }
// };
// gd();
// const navHeader = NavbarHeader;
// const app = document.getElementById('root');
// app.insertAdjacentElement('afterbegin', navHeader.build());
// app.insertAdjacentHTML('beforeend', View);

// window.addEventListener('hashchange', function () {
//   const { hash } = this.location;
//   console.log(hash);
//   const route = new Router(hash.slice(1) || undefined);
//   document.querySelector('.view').innerHTML = route.renderRoute();
// });
// window.addEventListener('DOMContentLoaded', function () {
//   const route = new Router('index');
//   document.querySelector('.view').innerHTML = route.renderRoute();
// });
class App {
  constructor() {
    this.headerNavbar = document.querySelector('.navbar-nav');
    this.root = document.getElementById('root');
    console.log(this.root);
    this.preventDefaultActionLinks();
    this.renderNavbarLinks(['categories', 'contact']);
  }
  renderNavbarLinks(links) {
    links.forEach((link) => {
      this.headerNavbar.insertAdjacentElement(
        'beforeend',
        new Navlink(link).addAnchor()
      );
    });
  }

  preventDefaultActionLinks() {
    const anchors = [...document.getElementsByTagName('a')];

    anchors.forEach((anchor) => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        console.log('prevented');
      });
    });
  }
}
new App();
