class PageSection {
  constructor(type = 'div') {
    this.innerContent;
    this.tag = document.createElement(type);
    this.textContent;
  }
  build() {
    return this.tag;
  }

  setContent(addContent) {
    this.tag.innerHTML = addContent;
    return this;
  }
}
export const mainHeader = (title, subtitle, classes) => {
  return `<div class='mt-4 p-5 text-center ${
    classes && classes.map((cl) => cl).join(' ')
  }  '>
    <h1 >${title.trim().replaceAll('%20','')}</h1>
    ${(subtitle && `<p>${subtitle}</p>`) || ''}
  </div>`;
};

export default PageSection;
