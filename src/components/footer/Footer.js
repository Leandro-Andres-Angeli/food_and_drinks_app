import { arrowIcon } from '../../utils/icons';
import './footer_styles.scss';

console.log(arrowIcon);
console.log(document.body.get);
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
      FooterComponent.setTag(
        `<li class='list-group-item'>
        <a href='#' class='list-group-item-anchor'> ${arrowIcon} ${current}</a>
        </li>`
      ).tag
    );
    return acc;
  }, [])
  .join('');
console.log(listItems);
const listFooter = FooterComponent.setTag(
  (() => {
    const tag = document.createElement('ul');
    'list-group quick-link'.split(' ').forEach((cl) => tag.classList.add(cl));
    return tag;
  })()
).setInnerTags(listItems).tag;
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
