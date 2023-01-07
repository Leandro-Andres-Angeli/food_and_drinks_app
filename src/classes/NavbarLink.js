import { navItemClasses, navLinkClasses } from '../utils/bootstrapClasses';
import HTMLTagGenerator from './HTMLTagGenerator';
class NavbarLink extends HTMLTagGenerator {
  constructor(textContent) {
    super('', 'li');
    this.addStyles(navItemClasses.classes);

    this.addChild(
      new HTMLTagGenerator(textContent, 'a')
        .addStyles(navLinkClasses.classes)
        .addAttributes({ data_route: textContent, href: textContent }),
      'beforeend'
    );
    // this.child.addAttributes({ href: '#' });
  }
}
export default NavbarLink;
