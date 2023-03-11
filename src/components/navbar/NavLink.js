function NavLink(route,active =false) {
  const view = `
<li class="nav-item">
<a class="nav-link  ${active ? 'active' : 'defa'}" aria-current="page" href="#/${route}">${route}</a>
</li>`;
  return view;
}
function NavDropdown(route = 'dropdown') {
  const view = `
  <li class="nav-item dropdown">
  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown
  </a>
  <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><hr class="dropdown-divider"></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</li>`;
  return view;
}
export const navElements = Object.freeze({
  navLink: { tag: NavLink },
  navDropdown: { tag: NavDropdown },
});

export class NavElement {
  static setStrategy(type) {
    this.element = navElements[type]['tag'];
    return this;
  }

  static build(route,isActive ) {
    
    return this.element(route,isActive );
  }
  static clean() {
    return NavElement;
  }
}

export default NavLink;
