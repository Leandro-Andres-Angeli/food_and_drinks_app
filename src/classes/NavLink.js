class Navlik {
  constructor() {
    this.markup = document.createElement('li');
  }
  addAnchor() {
    this.markup.insertAdjacentElement = document.createElement('a');
    return this.markup;
  }
  addHref(link) {
    this.markup.querySelector('a').setAttribute('href', link);
    return this.markup;
  }
  build() {
    return this.markup;
  }
}
