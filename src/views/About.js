import PageSection, { mainHeader } from '../components/shared/PageSection';
import * as image from '../../static/assets/img/spaghetti.jpg';
const About = () => {
  const mainSection = new PageSection('main').setContent(
    mainHeader('About', 'about us')
  );
  console.log(image);
  const aboutInfo = new PageSection('section').setContent(`<div class='row p-5'>
  <div class='col col-12 col-md-6 '>
    <img class='img-fluid rounded' src=${image}/>
  </div>
  <div class='col col-12 col-md-6'>
  <h2 class='text-primary fw-bold'>
  
  Few Words 
  <span class='text-yellow-300 text-stroke' >About Us</span> </h2>  
  <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est. et dolore magna aliquyam duo dolores et Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint obcaecati quaerat sequi illo illum.

  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat consetetur sadipscing. doloremque ipsum doloribus facilis est magni mollitia. Rerum natus saepe ipsum dolor sit amet.</p>
  </div>
  </div>`);
  return `${mainSection.tag.outerHTML + aboutInfo.tag.outerHTML}`;
};

export default About;
