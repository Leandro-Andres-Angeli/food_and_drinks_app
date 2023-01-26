import { iconsList } from '../../utils/icons/icons';
import './footer_styles.scss';

class FooterComponent {
  static tag;
  static classLists;

  static setTag(tagSetup) {
    this.tag = tagSetup;
    return this;
  }

  static setInnerTags(innerTags) {
    this.tag.innerHTML = innerTags;
    return this;
  }
  static clean() {
    this.tag = null;
    return this;
  }
}

const FooterList = FooterComponent;

FooterList.icon = iconsList['arrowIcon'].component;
const footerListEl = FooterList;
footerListEl.setTag(footerListEl.icon);

const listItems = [
  'Privacy Policy',
  'Terms & Conditions',
  'Order Tracking',
  'Refunds & Returns',
  'Our Services',
  'Career Opportunity ',
]
  .reduce((acc, current) => {
    acc.push(
      footerListEl.setTag(`<li class='list-group-item ps-0'>
        <a href='#' class='list-group-item-anchor '> ${
          footerListEl.icon && footerListEl.icon
        }  ${current}</a>
        </li>`).tag
    );
    return acc;
  }, [])
  .join('');
const itemsTextContent = [
  'Privacy Policy',
  'Terms & Conditions',
  'Order Tracking',
  'Refunds & Returns',
  'Our Services',
  'Career Opportunity ',
];
// footerListEl.setTag(`<li class='list-group-item ps-0'>
// <a href='#' class='list-group-item-anchor '> ${
//   footerListEl.icon && footerListEl.icon
// }  ${current}</a>
// </li>`).tag
const generateList = (textContent, renderListFunc) => {
  return textContent
    .reduce((acc, current) => {
      acc.push(renderListFunc(current));
      return acc;
    }, [])
    .join('');
};
const generateUl = () => {};
renderListTag = (textContent) => {
  footerListEl.clean();
  return footerListEl.setTag(`<li class='list-group-item ps-0'>
  <a href='#' class='list-group-item-anchor '> ${
    footerListEl.icon && footerListEl.icon
  }  ${textContent}</a>
 </li>`).tag;
};
const servicesList = generateList(itemsTextContent, renderListTag);

const footerTitle = function (title) {
  `<h2 class='footer-section-title fs-4 position-relative'>${title}</h2> `;
};
const listFooter = FooterComponent.setTag(
  (() => {
    const tag = document.createElement('ul');

    'list-group quick-link'.split(' ').forEach((cl) => tag.classList.add(cl));

    return tag;
  })()
).setInnerTags(footerTitle('Quick Link') + listItems).tag;
const listCol = FooterComponent.setTag(
  (() => {
    const element = document.createElement('div');

    'col col-12 col-md-6 col-lg-3'
      .split(' ')
      .forEach((cl) => element.classList.add(cl));

    return element;
  })()
).setInnerTags(listFooter.outerHTML);
console.log(listCol);
class Footer {
  constructor() {
    this.footer = document.querySelector('footer');
    this.addFooterContent();
  }
  addClassLists() {}
  addFooterContent() {
    this.footer.innerHTML = listCol.tag.outerHTML;
  }
}
export default Footer;
