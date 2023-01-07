import * as bootstrap from 'bootstrap';
import './src/styles/base.scss';
import 'core-js/stable';
import HTMLTagGenerator from './src/classes/HTMLTagGenerator';
import categories from './src/Views/Categories';
import NavbarLink from './src/classes/NavbarLink';
import navbarRoutes from './src/utils/navbarRoutes';
import getData from './src/apis/FetchApi';
import apiEndPoints from './src/utils/apiRoutes';

if (module.hot) {
  module.hot.accept();
}

// function showCategories(data) {
//   const navbarUl = new HTMLTagGenerator('', 'li').addStyles([
//     'nav-item',
//     'dropdown',
//   ]);
//   const anchor = new HTMLTagGenerator('categories', 'a')
//     .addStyles(['nav-link', 'dropdown-toggle'])
//     .addAttributes({
//       id: 'navbarDropdown',
//       role: 'button',
//       data_bs_toggle: 'dropdown',
//       aria_expanded: 'false',
//     });

//   navbarUl.addChild(anchor, 'beforeend');

//   const dropdownUl = new HTMLTagGenerator('', 'ul')
//     .addStyles(['dropdown-menu'])
//     .addAttributes({ aria_labelledby: 'navbarDropdown' });

//   data.meals.map((d) => {
//     const dropdownItem = new HTMLTagGenerator('', 'li');
//     dropdownItem.addChild(
//       new HTMLTagGenerator(d.strCategory, 'a')
//         .addStyles(['dropdown-item'])
//         .addAttributes({
//           href: anchor.tag.textContent + '/' + d.strCategory.toLowerCase(),
//         }),
//       'beforeend'
//     );

//     return dropdownUl.addChild(dropdownItem, 'beforeend');
//   });

//   navbarUl.addChild(dropdownUl, 'beforeend');
//   document
//     .querySelector('.navbar-nav')
//     .insertAdjacentHTML('beforeend', navbarUl.tag.outerHTML);
// }

// const renderNavLinks = (routes) => {
//   console.log(routes);
//   const navbarLinksUl = document.querySelector('.navbar-nav');
//   routes.forEach((route, i) => {
//     const navbarLinkLi = new NavbarLink(route);

//     i === routes.length - 1 && navbarLinkLi.addStyle('order-last');
//     navbarLinksUl.insertAdjacentElement('beforeend', navbarLinkLi.tag);
//   });

//   getData(apiEndPoints.categories, showCategories);
// };

// renderNavLinks(navbarRoutes);

//////////

// getData('https://www.themealdb.com/api/json/v1/1/list.php?a=list');
// getData('https://www.themealdb.com/api/json/v1/1/list.php?i=list');
// getData('https://www.themealdb.com/api/json/v1/1/randomselection.php');

class App {
  constructor() {
    this.headerNavbar = document.querySelector('.navbar-nav');
    this.root = document.getElementById('root');
    this.routes = navbarRoutes;
    this.getData = getData;
    this.preventDefaultActionLinks();
    window.addEventListener(
      'load',
      function () {
        this.renderNavLinks(this.routes);
      }.bind(this)
    );
  }
  renderNavLinks(routes) {
    const navbarLinksUl = document.querySelector('.navbar-nav');
    routes.forEach((route, i) => {
      const navbarLinkLi = new NavbarLink(route);
      i === routes.length - 1 && navbarLinkLi.addStyle('order-last');
      navbarLinksUl.insertAdjacentElement('beforeend', navbarLinkLi.tag);
    });
    this.getData(apiEndPoints.categories, this.showCategories);
  }
  showCategories(data) {
    const navbarUl = new HTMLTagGenerator('', 'li').addStyles([
      'nav-item',
      'dropdown',
    ]);
    const anchor = new HTMLTagGenerator('categories', 'a')
      .addStyles(['nav-link', 'dropdown-toggle'])
      .addAttributes({
        id: 'navbarDropdown',
        role: 'button',
        data_bs_toggle: 'dropdown',
        aria_expanded: 'false',
      });

    navbarUl.addChild(anchor, 'beforeend');

    const dropdownUl = new HTMLTagGenerator('', 'ul')
      .addStyles(['dropdown-menu'])
      .addAttributes({ aria_labelledby: 'navbarDropdown' });

    data.meals.map((d) => {
      const dropdownItem = new HTMLTagGenerator('', 'li');
      dropdownItem.addChild(
        new HTMLTagGenerator(d.strCategory, 'a')
          .addStyles(['dropdown-item'])
          .addAttributes({
            href: anchor.tag.textContent + '/' + d.strCategory.toLowerCase(),
          }),
        'beforeend'
      );

      return dropdownUl.addChild(dropdownItem, 'beforeend');
    });

    navbarUl.addChild(dropdownUl, 'beforeend');
    document
      .querySelector('.navbar-nav')
      .insertAdjacentHTML('beforeend', navbarUl.tag.outerHTML);
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
