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
export const mainHeader = (
  title = 'Contact',
  subtitle = 'contact us',
  classes = ['background-yellow-100']
) => {
  return `<div class='mt-4 p-5 text-center ${classes
    .map((cl) => cl)
    .join(' ')}  '>
    <h1 >${title}</h1>
    <p>${subtitle}</p>
  </div>`;
};
export const innerCard = (
  title,

  classLists = 'mt-4 p-5 text-center background-yellow-100 '
) => {
  return `<div class="${classLists} ">
    <h1 >${title}</h1>
    <p>${subtitle}</p>
  </div>`;
};

export default PageSection;
