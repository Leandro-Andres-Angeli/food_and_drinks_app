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
     
      let route =window.location.hash
        .slice(2)
        .split('?')[0]
        .replaceAll('/', '');
      
       let view ; 
     
      
  try{       
     view = getId() && routes.product.view ||  routes[route].view 
     asyncRender( view, this.app)
      }
      catch(e){
    
      window.location.hash='/error'
      }
   
     
   
      window.scrollTo(0,0)
    });

    window.addEventListener('load', () => {
      const loading = document.createElement('div');
      loading.classList.add('loading');
      loading.innerText = 'loading';
      this.body.appendChild(loading);
      asyncRender.call(this, Navbar, this.header);

      asyncRender.call(this, Home, this.app);
      this.body.removeChild(loading);
      this.handleScroll()
     
    });

    this.header.addEventListener('click', (e) => {
      const currentRoute = window.location.hash;


      const changeRoute = handleNavbarLink(e, currentRoute);


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
  handleScroll() {
    let positionY = window.pageYOffset;

    window.addEventListener('scroll', function (e) {
      if(this.window.innerWidth < 800 ){return}
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
