class Navlink {
  constructor(linkTextContent) {
    this.markup = document.createElement('li');
    this.linkTextContent = linkTextContent;
  }
  addStyle(el, ...styles) {
    styles.forEach((style) => el.classList.add(style));
  }
  addAnchor() {
    this.addStyle(this.markup, 'nav-item');
    const anchor = document.createElement('a');
    this.addStyle(anchor, 'nav-link');
    anchor.textContent = this.linkTextContent;
    anchor.setAttribute('href', `#`);
    this.markup.insertAdjacentElement('beforeend', anchor);
    return this.markup;
  }

  build() {
    return this.markup;
  }
}
export default Navlink;
