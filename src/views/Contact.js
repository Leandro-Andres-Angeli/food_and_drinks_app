import PageSection from '../components/shared/PageSection';

import { mainHeader } from '../components/shared/PageSection';
const Contact = () => {
  const mainSection = new PageSection('main').setContent(
    mainHeader('Contact', 'contact us')
  );

  return `${mainSection.tag.outerHTML}`;
};

export default Contact;
