import * as bootstrap from 'bootstrap';
import './src/styles/base.scss';
import 'core-js/stable';
import HTMLTagGenerator from './src/classes/HTMLTagGenerator';
import categories from './src/Views/Categories';
import NavbarLink from './src/classes/NavbarLink';
import navbarRoutes from './src/Router/navbarRoutes';

if (module.hot) {
  module.hot.accept();
}
// const categories = `www.themealdb.com/api/json/v1/1/list.php?c=list`;

// const navbarUl = new HTMLTagGenerator('categories', 'ul');

// navbarUl.addChild(new HTMLTagGenerator('list item', 'li'), 'beforeend');
// console.log(navbarUl);
function showCategories(data) {
  const navbarUl = new HTMLTagGenerator('', 'li').addStyles([
    'nav-item',
    'dropdown',
  ]);
  // const navLink = new NavbarLink('link');

  // console.log(navLink);
  navbarUl.addChild(
    new HTMLTagGenerator('categories', 'a')
      .addStyles(['nav-link', 'dropdown-toggle'])
      .addAttributes({
        href: '#',
        id: 'navbarDropdown',
        role: 'button',
        data_bs_toggle: 'dropdown',
        aria_expanded: 'false',
      }),
    'beforeend'
  );
  // navbarUl.addStyles(['nav-item', ' dropdown']);

  console.log(data);
  const dropdownUl = new HTMLTagGenerator('', 'ul')
    .addStyles(['dropdown-menu'])
    .addAttributes({ aria_labelledby: 'navbarDropdown' });

  data.meals.map((d) => {
    const dropdownItem = new HTMLTagGenerator('', 'li');
    dropdownItem.addChild(
      new HTMLTagGenerator(d.strCategory, 'a').addStyles(['dropdown-item']),
      'beforeend'
    );
    // console.log(dropdownItem.addChild(new HTMLTagGenerator('data', 'a')));
    return dropdownUl.addChild(dropdownItem, 'beforeend');
  });
  console.log(dropdownUl);
  navbarUl.addChild(dropdownUl, 'beforeend');
  document
    .querySelector('.navbar-nav')
    .insertAdjacentHTML('beforeend', navbarUl.tag.outerHTML);
}
const testRec =
  'https://api.spoonacular.com/recipes/random?apiKey=63e4bc6a307042d6928cb58979964f64&number=10';
function getData(URL, callbackRenderFunc) {
  fetch(URL)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      return callbackRenderFunc(data);
    })

    .catch((err) => {
      console.log(err);
    });
}
// const navbarUl = new HTMLTagGenerator('categories', 'ul');
// navbarUl.addChild(new HTMLTagGenerator('data', 'li'), 'beforeend');
// console.log(navbarUl);
///////////
const renderNavLinks = (routes) => {
  console.log(routes);
  const navbarLinksUl = document.querySelector('.navbar-nav');
  routes.forEach((route, i) => {
    const navbarLinkLi = new NavbarLink(route);
    i === routes.length - 1 && navbarLinkLi.addStyle('order-last');
    navbarLinksUl.insertAdjacentElement('beforeend', navbarLinkLi.tag);
  });

  getData(
    'https://www.themealdb.com/api/json/v1/1/list.php?c=list',
    showCategories
  );
};

// function ren(call, call2) {
//   renderNavLinks(navbarRoutes.slice(0, -1));
//   call;
//   call2;
// }

// ren(
//   getData(
//     'https://www.themealdb.com/api/json/v1/1/list.php?c=list',
//     showCategories
//   )
// );
renderNavLinks(navbarRoutes);
// ren(
//   getData(
//     'https://www.themealdb.com/api/json/v1/1/list.php?c=list',
//     showCategories
//   ),
//   renderNavLinks(navbarRoutes.slice(-1))
// );

//////////

// getData('https://www.themealdb.com/api/json/v1/1/list.php?a=list');
// getData('https://www.themealdb.com/api/json/v1/1/list.php?i=list');
// getData('https://www.themealdb.com/api/json/v1/1/randomselection.php');

class App {
  constructor() {
    this.headerNavbar = document.querySelector('.navbar-nav');
    this.root = document.getElementById('root');
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
