import { iconsList } from '../../utils/icons/icons';
import * as brandPic from '../../../static/assets/icons/spaghetti.png';
import './footer_styles.scss';

const servicesList = [
  'Privacy Policy',
  'Terms & Conditions',
  'Order Tracking',
  'Refunds & Returns',
  'Our Services',
  'Career Opportunity ',
];
const openingHours = [
  [' Mon-Tue', ' 6:00AM-10:00PM'],
  ['Wed-Thu', ' 6:00AM-10:00PM'],
  ['Fri', ' 8:00AM-04:00PM'],
  ['Sat', ' 10:00AM-06:00PM'],
  ['Sun', 'Closed'],
];
const contactList = [
  {
    icon: iconsList.callIcon,
    text: {
      Phone: '+12 345 678 999',
    },
  },
  {
    icon: iconsList.mailIcon,
    text: {
      Email: [`hello@example.com`, ` test@example.com`],
    },
  },

  {
    icon: iconsList.locationIcon,
    text: {
      Address: ` 123 Western Road Melbourne, United Kingdom`,
    },
  },
];
const footerTags = {
  title: {
    render: function (title) {
      return `<h2 class='footer-section-title fs-4 position-relative'>${title}</h2> `;
    },
  },
  brandComponent: {
    render: function (title, img) {
      const cardContent = `
        <div class='container align-items-end d-flex'>
        <img src=${img} class="img-fluid brand-img" alt="...">
        <h2 class="card-title d-inline ms-3 text-primary fw-bold">${title}</h2>
        </div> 
      <div class="card-body">
      
      <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus laudantium quae dolorum aperiam inventore vel enim delectus? Expedita, fugit alias.
    </div>
    
          
         
          
          `;
      return cardContent;
    },
  },
  ulServices: {
    render: function () {
      return `      <ul class="list-group">
     ${servicesList
       .map(
         (serv) => `<li class="list-group-item"> 
       <a href='#' class='list-group-item-anchor'>
       ${iconsList.arrowIcon.component} ${serv}
       </a>
       </li>`
       )
       .join('')}
</ul>`;
    },
  },
  ulHours: {
    render: function () {
      return `      <ul class="list-group">
     ${openingHours
       .map((openinghour) => {
         const [day, hour] = openinghour;
         return `<li class="list-group-item px-md-0 d-flex justify-content-between opening-hours-li"> 
          <span>${day} </span>
          <span>${hour} </span>
       
       
       </li>`;
       })
       .join('')}
</ul>`;
    },
  },
  ulContact: {
    render: function () {
      return (
        `<ul class="list-group">` +
        `${contactList
          .map((contact) => {
            const {
              icon: { component: icon },
              text,
            } = contact;

            return `<li class="list-group-item p-0"> 
                     ${
                       `<ul class='list-group'>` +
                       Object.entries(text)
                         .map(
                           ([key, val]) =>
                             `
                             <li class='list-group-item '>
                            
                             <ul class='list-group'>  
                             <span class='d-flex justify-content-start gap-2 align-items-baseline'>${icon}${key} </span> ${
                               (Array.isArray(val) &&
                                 val
                                   .map(
                                     (v) =>
                                       `<li class='list-group-item p-0'>${v}</li>`
                                   )
                                   .join('')) ||
                               `<li class='list-group-item p-0'>${val}</li>`
                             } </ul></li>`
                         )
                         .join('') +
                       `</ul>`
                     }
       
       
            </li>`;
          })
          .join('')}` +
        ` 
      </ul>`
      );
    },
  },
};
class FooterSection {
  constructor(
    tagType = 'div',
    classLists = 'col col-12 col-md-6 col-lg-3 px-4 my-3 my-md-1'
  ) {
    this.tag = document.createElement(tagType);
    classLists.split(' ').forEach((cl) => this.tag.classList.add(cl));
  }
  addClasslist(classList) {
    classList.forEach((cl) => this.tag.classList.add(cl));
    return this;
  }
  setContent(position = 'beforeend', renderTag, target = this.tag) {
    target.insertAdjacentHTML(position, renderTag);

    return this;
  }

  build() {
    return this.tag;
  }
}

const fs = new FooterSection()
  .addClasslist(['brand-section'])
  .setContent(
    undefined,
    `<div class='card border-0'>${footerTags.brandComponent.render(
      'Gatherer',
      brandPic
    )}</div>`,
    undefined
  )

  .build().outerHTML;

const fs1 = new FooterSection()
  .addClasslist(['quick-link'])
  .setContent(undefined, footerTags.title.render('quick link'))
  .setContent(undefined, footerTags.ulServices.render('gatherer', brandPic))
  .build().outerHTML;
const fs2 = new FooterSection()
  .addClasslist(['opening-hours'])
  .setContent(undefined, footerTags.title.render('opening hours'))
  .setContent(undefined, footerTags.ulHours.render())
  .build().outerHTML;
const fs3 = new FooterSection()
  .addClasslist(['contact'])
  .setContent(undefined, footerTags.title.render('contact'))
  .setContent(undefined, footerTags.ulContact.render())
  .build().outerHTML;

class Footer {
  constructor() {
    this.footerDom = document.querySelector('footer');
    this.footerDom.innerHTML = ` 
    <div class='p-3'>
    <div class='row'> ${fs + fs1 + fs2 + fs3}</div>
    </div>
    `;
  }
}

export default Footer;
