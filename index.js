import '@picocss/pico';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import NavbarHeader from './src/components/navbarheader/NavbarHeader';
import Router from './src/Router/Router';

import View from './src/Views/View';
const navHeader = NavbarHeader;
const app = document.getElementById('root');
app.insertAdjacentElement('afterbegin', navHeader.build());
app.insertAdjacentHTML('beforeend', View);

window.addEventListener('hashchange', function () {
  const { hash } = this.location;
  console.log(hash);
  const route = new Router(hash.slice(1) || undefined);
  document.querySelector('.view').innerHTML = route.renderRoute();
});
window.addEventListener('DOMContentLoaded', function () {
  const route = new Router('index');
  document.querySelector('.view').innerHTML = route.renderRoute();
});
