import { aboutInfo, mainSection } from './AboutComponents';
const About = () => {
  // let options = {
  //   root: document.body,
  //   rootMargin: '70px',
  //   threshold: 0.5,
  // };

  // let observer = new IntersectionObserver(() => console.log('img'), options);
  // observer.observe(document.querySelector('img'));
  return `${mainSection.tag.outerHTML + aboutInfo.tag.outerHTML}`;
};

export default About;
