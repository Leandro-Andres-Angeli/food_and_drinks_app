class HTMLTagGenerator {
  constructor(textContent, type) {
    this.type = type;
    this.tag = document.createElement(type);
    this.tag.textContent = textContent;
    this.root;
  }
  addStyle(classList) {
    this.tag.classList.add(classList);
    return this.tag;
  }
  addStyles(classesList) {
    classesList.forEach((cssClass) => this.tag.classList.add(cssClass));
    return this.tag;
  }
  addChild(element, position) {
    // const childTag = document.createElement(element);
    this.tag.insertAdjacentElement(position, element.tag);
    console.log(this.tag);
  }
  // addChild(element) {
  //   return document.createElement(element);
  // }
  addChildren(elements, position) {
    let children;
    elements.forEach((element) => children.push(element));
    this.tag.insertAdjacentElement(position, children);
  }
}
export default HTMLTagGenerator;
