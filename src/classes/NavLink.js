class Navlink {
  constructor() {
    this.markup = document.createElement('li');
  }
  addAnchor() {
    const anchor = document.createElement('a');

    this.markup.insertAdjacentElement('beforeend', anchor);
    return this.markup;
  }
  addHref(link) {
    this.markup.querySelector('a').setAttribute('href', `#${link}`);
    this.markup.querySelector('a').textContent = link;
    return this.markup;
  }
  build() {
    return this.markup;
  }
}
export default Navlink;
