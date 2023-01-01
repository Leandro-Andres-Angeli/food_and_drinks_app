class Nav {
  constructor() {
    this.markUp = document.createElement('nav');
  }
  addLinks(linksList) {
    linksList.forEach((link) => {
      this.markUp.appendChild(link);
    });
  }

  build() {
    return this.markUp;
  }
}
export default Nav;
