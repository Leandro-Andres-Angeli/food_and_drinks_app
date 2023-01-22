import * as image from '../../../static/assets/img/spaghetti.jpg';
import * as imageMobile from '../../../static/assets/img/spaghetti-xs.jpg';
import * as imageTablet from '../../../static/assets/img/spaghetti-sm.jpg';
import PageSection, { mainHeader } from '../../components/shared/PageSection';
import './about_styles.scss';
export const mainSection = new PageSection('main').setContent(
  mainHeader('About', 'about us')
);
const aboutInfo = new PageSection('section');

/* <img class='img-fluid rounded shadow-lg ${
      window.innerWidth >= 768 ? 'w-100' : 'w-75'
    }' lazy='true' src=${image}/> */

{
  /* <picture class='img-fluid'>
  <source media="(min-width:1201px)" srcset="${image}" type="image/png">
  <source media="(max-width:1200px)" srcset="${imageMobile}" type="image/png">
  <img  class='img-fluid' src="${image}"/>
 
</picture>  */
}

aboutInfo.setContent(
  `<div class='row p-5 text-center gap-5 gap-lg-0'>
  <div class='col col-12 col-lg-6 img-about-info-container  m-auto'>
<picture>

       <source media="(min-width: 1200px)"
                srcset=
"${image}">
 <source media="(min-width: 800px)"
                srcset=
"${imageTablet}">
 
<img src=
"${imageMobile}"
class='img-fluid rounded shadow-lg'
alt="" >
</picture> 
    
  </div>
  <div class='col col-12 col-lg-6 my-lg-5 my-0 py-5 py-lg-0 about-info-text-component'>
  <h2 class='text-primary fw-bold'>
  
  Few Words 
  <span class='text-yellow-300 text-stroke' >About Us</span> </h2>  
  <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est. et dolore magna aliquyam duo dolores et Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint obcaecati quaerat sequi illo illum.

  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat consetetur sadipscing. doloremque ipsum doloribus facilis est magni mollitia. Rerum natus saepe ipsum dolor sit amet.</p>
  </div>
  </div>`
);
export { aboutInfo };
