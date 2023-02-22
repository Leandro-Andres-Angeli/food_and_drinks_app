function NavLink(route) {
  const view = `
<li class="nav-item">
<a class="nav-link active" aria-current="page" href="#/${route}">${route}</a>
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

  static build(route) {
    return this.element(route);
  }
  static clean() {
    return NavElement;
  }
}

export default NavLink;
