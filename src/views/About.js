import PageSection, { mainHeader } from '../components/shared/PageSection';
import * as image from '../../static/assets/img/spaghetti.jpg';
const About = () => {
  const mainSection = new PageSection('main').setContent(
    mainHeader('About', 'about us')
  );
  document.body.addEventListener('click', function () {
    console.log('About');
  });

  const aboutInfo = new PageSection('section');

  aboutInfo.setContent(
    `<div class='row p-5 text-center gap-5 gap-lg-0'>
  <div class='col col-12 col-lg-6 '>
    <img class='img-fluid rounded shadow-lg ${
      window.innerWidth >= 768 ? 'w-100' : 'w-75'
    }' lazy='true' src=${image}/>
  </div>
  <div class='col col-12 col-lg-6 my-lg-5 my-0 py-5 py-lg-0'>
  <h2 class='text-primary fw-bold'>
  
  Few Words 
  <span class='text-yellow-300 text-stroke' >About Us</span> </h2>  
  <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est. et dolore magna aliquyam duo dolores et Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint obcaecati quaerat sequi illo illum.

  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat consetetur sadipscing. doloremque ipsum doloribus facilis est magni mollitia. Rerum natus saepe ipsum dolor sit amet.</p>
  </div>
  </div>`
  );
  let options = {
    root: document.body,
    rootMargin: '70px',
    threshold: 0.5,
  };

  let observer = new IntersectionObserver(() => console.log('img'), options);
  observer.observe(document.querySelector('img'));
  return `${mainSection.tag.outerHTML + aboutInfo.tag.outerHTML}`;
};

export default About;
