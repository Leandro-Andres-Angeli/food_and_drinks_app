import { aboutInfo, mainSection } from './AboutComponents';
import ServicesComponent from './ServicesComponent';

const About = () => {
  return `${
    mainSection.tag.outerHTML + aboutInfo.tag.outerHTML + ServicesComponent
  }`;
};

export default About;
