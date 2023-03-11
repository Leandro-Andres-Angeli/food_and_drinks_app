import * as bootstrap from 'bootstrap';

// import './src/styles/base.scss';
import 'core-js/stable';
import Navbar from './src/components/navbar/Navbar';
import Home from './src/views/home/Home';

import { asyncRender } from './src/utils/renders';
import routes from './src/router/routes';
import handleNavbarLink from './src/utils/handleNavbarLinks';
import Footer from './src/components/footer/Footer';
import SubscribeComponent from './src/components/footer/SubscribeComponent';
import getId from './src/utils/getId';
import { getLinkType, handleLinksStylesClass, toggleClassName } from './src/components/navbar/stylingUtilities';

if (module.hot) {
  module.hot.accept();
}

// getData('https://www.themealdb.com/api/json/v1/1/list.php?a=list');
// getData('https://www.themealdb.com/api/json/v1/1/list.php?i=list');
// getData('https://www.themealdb.com/api/json/v1/1/randomselection.php');

class App {
  constructor() {
    this.app = document.querySelector('.app');
    this.navbar = document.querySelector('header')
    this.body = document.querySelector('body');
    this.header = document.querySelector('header ');
    window.location.hash = '#/home';

    window.addEventListener('hashchange', () => {

      let route = window.location.hash
        .slice(2)
        .split('?')[0]
        .replaceAll('/', '');

      let view;


      try {
        view = getId() && routes.product.view || routes[route].view
        asyncRender(view, this.app)
       
      }
      catch (e) {

        window.location.hash = '/error'
      }



      window.scrollTo(0, 0)
    });

    window.addEventListener('load', () => {
      const loading = document.createElement('div');
      loading.classList.add('loading');
      loading.innerText = 'loading';

      asyncRender.call(this, Navbar, this.header);

      if (!this.route) asyncRender.call(this, Home, this.app);

      this.handleScroll()


    });

    this.header.addEventListener('click', (e) => {
      const currentRoute = window.location.hash;


      const changeRoute = handleNavbarLink(e, currentRoute);
      e.target.closest('li') && this.handleStyles(e)



    });

    new Footer();

    const renderSubscribe = function (callback) {
      const subscribeComponent = SubscribeComponent();
      document
        .querySelector('footer')
        .insertAdjacentHTML('beforebegin', subscribeComponent);
      callback.call(document.querySelector('.subscribe-form'));
    };
    renderSubscribe(function () {

      this.addEventListener('submit', (e) => {
        e.preventDefault();
      });
    });

  }
  handleStyles(e) {
    // console.log(this)
    // console.log(e.target.closest('li'))
    // console.log('parent', e.target.parentElement.parentElement)
    // console.log('label', e.target.parentElement.parentElement.getAttribute('aria-labelledby'))
    // //   console.log( window.location.hash)

    const linkType = getLinkType(e.target.parentElement.parentElement.getAttribute('aria-labelledby'))
    // console.log(linkType)

    // Array.from( this.header.querySelectorAll(' .nav-link')).forEach(link => link.classList.remove('active'))
    const dropdownItems = Array.from(this.header.querySelectorAll('.dropdown-item'))

    const domLinks = Array.from(this.header.querySelectorAll('.nav-link'))

    toggleClassName(Array.from(domLinks), 'remove');

    handleLinksStylesClass[`${linkType}`](e.target)



  }
  handleScroll() {
    let positionY = window.pageYOffset;

    window.addEventListener('scroll', function (e) {
      if (this.window.innerWidth < 800) { return }
      const currentScroll = (this.pageYOffset)

      const header = e.target.body.querySelector('header');
      const setVisibleOnScrollUp = 'visible-on-scroll'
      positionY > currentScroll && this.pageYOffset > header.getBoundingClientRect().height * 2 ?
        header.classList.add(setVisibleOnScrollUp)
        : header.classList.remove(setVisibleOnScrollUp)
      positionY = currentScroll

    })
  }
  handleRoute() {
    return this.app;
  }
}

new App();
