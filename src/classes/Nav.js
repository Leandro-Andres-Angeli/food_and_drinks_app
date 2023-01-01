import NavLink from './NavLink';

class Nav {
  constructor() {
    this.markUp = document.createElement('nav');
  }
  addLinks(linksList) {
    linksList.forEach((link) => {
      const navLink = new NavLink();
      navLink.addAnchor();
      navLink.addHref(link);
      this.markUp.appendChild(navLink.build());
      // return this.markUp;
    });
  }

  build() {
    return this.markUp;
  }
}
export default Nav;
