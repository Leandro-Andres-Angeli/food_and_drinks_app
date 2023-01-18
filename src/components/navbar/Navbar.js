import getData from '../../apis/getData';
import * as brandPic from '../../assets/icons/spaghetti.png';
import routes from '../../router/routes';

import './navbarStyles.scss';
import NavLink, { NavElement, navElements } from './NavLink';
const Navbar = async () => {
  const [last, ...firsArt] = routes.reverse();

  // ${firsArt.map((link) => NavLink(link)).join('')}
  // ${NavLink(last)}
  const mealCategories = await getData(
    'https://www.themealdb.com/api/json/v1/1/categories.php'
  );
  console.log(mealCategories);
  const view = ` <nav class="navbar nav header-nav navbar-expand-md ">

    <div class="container-fluid">
      <a class="navbar-brand" href="#">
      <img  class='navbar-brand_logo' src=${brandPic}>
      Navbar
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
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
         ${firsArt
           .map((link) => NavElement.setStrategy('navLink').build(link))
           .join('')}
         
           <li class="nav-item dropdown">
           <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           meal ${Object.keys(mealCategories)}
           </a>
           <ul class="dropdown-menu border-top-2" aria-labelledby="navbarDropdown">
           ${mealCategories.categories
             .map(
               ({ idCategory: category, strCategory: name }) =>
                 `<li><a class="dropdown-item" href="${Object.keys(
                   mealCategories
                 )}/${category}"
                 ">${name}</a></li>`
             )
             .join('')}
             
             
           </ul>
           ${NavElement.setStrategy('navLink').build(last)}
         </li>
        
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
