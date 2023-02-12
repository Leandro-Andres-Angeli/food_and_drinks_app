import getData from '../../apis/getData';
import * as brandPic from '../../../static/assets/icons/spaghetti.png';
import routes from '../../router/routes';

import './navbarStyles.scss';
import { NavElement } from './NavLink';
import dropdownMenu from './DropdownMenu';
const Navbar = async () => {
  const [last, ...firsArt] = Object.keys(routes)
    .filter((category) => category !== 'categories' &&  category !== 'drinks')
    .reverse();

  console.log(firsArt);
  const mealCategories = await getData(
    `${process.env.API_ENDPOINT}categories.php`
  );
  const drinksCategories = await getData(
    `${process.env.API_DRINKS_ENDPOINT}list.php?c=list`
  );

  const view = ` <nav class="navbar nav header-nav navbar-expand-md navbar-light bg-light shadow ">

    <div class="container-fluid">
      <a class="navbar-brand" href="#/home">
      <img  class='navbar-brand_logo' src=${brandPic}>
      Gatherer
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 text-capitalize">
         ${firsArt
           .reverse()
           .map((link) => NavElement.setStrategy('navLink').build(link))
           .join('')}
          ${dropdownMenu(mealCategories,'meals')}
         ${ dropdownMenu(drinksCategories,'drinks')}
        
      
         ${NavElement.setStrategy('navLink').build(last)}
        </ul>
        <form class="d-flex">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>`;
  
  return view;
};
export default Navbar;
