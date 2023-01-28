import { join } from 'path-browserify';
import { iconsList } from '../../utils/icons/icons';
import './footer_styles.scss';
// import FooterSection from './Footer';
const addClasslist = function (element, classList = ['cl']) {
  classList.forEach((cl) => element.classList.add(cl));
  return element;
};
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

  // {icon:iconsList.mailIcon,text:{
  //   Email: [`hello@example.com`,` test@example.com`]
  // }
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
            console.log(text);

            return `<li class="list-group-item px-md-0"> 
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
                                       `<li class='list-group-item p-0 '>${v}</li>`
                                   )
                                   .join('')) ||
                               `<li class='list-group-item p-0 '>${val}</li>`
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
  constructor(tagType = 'div', classLists = 'col col-12 col-md-6 col-lg-3') {
    this.tag = document.createElement(tagType);
    classLists.split(' ').forEach((cl) => this.tag.classList.add(cl));
  }
  addClasslist(classList) {
    classList.forEach((cl) => this.tag.classList.add(cl));
    return this;
  }
  setContent(position = 'beforeend', renderTag) {
    this.tag.insertAdjacentHTML(position, renderTag);
    return this;
  }

  build() {
    return this.tag;
  }
}
class FooterUl extends FooterSection {
  constructor() {
    super('ul', 'list-group');
  }
}
const fu = new FooterUl();

const fs1 = new FooterSection()
  .addClasslist(['quick-link'])
  .setContent(undefined, footerTags.title.render('quick link'))
  .setContent(undefined, footerTags.ulServices.render())
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
    <div class='container-fluid px-md-5 py-3'>
    <div class='row'> ${fs1 + fs2 + fs3}</div>
    </div>
    `;
  }
}
console.log('section');
// const listItems = [
//   'Privacy Policy',
//   'Terms & Conditions',
//   'Order Tracking',
//   'Refunds & Returns',
//   'Our Services',
//   'Career Opportunity ',
// ];
//SECONDO APPROACH
// const returnLi = (iconType, current) => `<li class='list-group-item ps-0'>
//         <a href='#' class='list-group-item-anchor '> ${
//           footerListEl.iconType && footerListEl.iconType
//         }  ${current}</a>
//         </li>`;
// const footerTags = Object({
//   col: {
//     tag: document.createElement('div'),
//   },
//   listItem: {
//     tag: document.createElement('ul'),
//     setContent: function () {
//       // this.tag.innerHTML(content);
//       console.log(this);
//       return this;
//     },
//   },
// });
// for (const key in footerTags) {
//   footerTags[key].addClasslists = function (classLists) {
//     console.log(this);
//     console.log(this.root);
//     classLists && classLists.forEach((cl) => this.root.classList.add(cl));
//     return this;
//   };
// }
// class Footer {
//   static root = document.createElement('div');
//   static setRootTag(type, classLists) {
//     this.root = footerTags[type].tag;

//     footerTags[type].addClasslists.call(this, classLists);
//     return this;
//   }
//   static setChild(tag) {
//     footerTags[tag].setContent();
//     // console.log(this);
//     // console.log(parentTag);
//     // this.root.innerHTML = child();
//     // this.root.insertAdjacentHTML(position, parentTag);
//     return this.root;
//   }
// }
// const fs = FooterSection.setRootTag(
//   'col',
//   'col col-12 col-md-6 col-lg-3'.split(' ')
// ).setChild('listItem');
// console.log(fs);
//SECONDO APPROACH
//FIRST APPROACH

// class listCol extends FooterSection {}
// const footerCol = FooterSection.setRootTag();
//   (() => {
//     const element = document.createElement('div');

//     'col col-12 col-md-6 col-lg-3'
//       .split(' ')
//       .forEach((cl) => element.classList.add(cl));

//     return element;
//   })()

// class FooterSection {
//   static tag;
//   static classLists;

//   static setTag(tagSetup) {
//     this.tag = tagSetup;
//     return this;
//   }

//   static setInnerTags(innerTags) {
//     this.tag.innerHTML = innerTags;
//     return this;
//   }
//   static clean() {
//     this.tag = null;
//     return this;
//   }
// }

// const FooterList = FooterSection;

// FooterList.icon = iconsList['arrowIcon'].component;
// const footerListEl = FooterList;
// footerListEl.setTag(footerListEl.icon);

// const listItems = [
//   'Privacy Policy',
//   'Terms & Conditions',
//   'Order Tracking',
//   'Refunds & Returns',
//   'Our Services',
//   'Career Opportunity ',
// ]
//   .reduce((acc, current) => {
//     acc.push(
//       footerListEl.setTag(`<li class='list-group-item ps-0'>
//         <a href='#' class='list-group-item-anchor '> ${
//           footerListEl.icon && footerListEl.icon
//         }  ${current}</a>
//         </li>`).tag
//     );
//     return acc;
//   }, [])
//   .join('');
// const itemsTextContent = [
//   'Privacy Policy',
//   'Terms & Conditions',
//   'Order Tracking',
//   'Refunds & Returns',
//   'Our Services',
//   'Career Opportunity ',
// ];
// // footerListEl.setTag(`<li class='list-group-item ps-0'>
// // <a href='#' class='list-group-item-anchor '> ${
// //   footerListEl.icon && footerListEl.icon
// // }  ${current}</a>
// // </li>`).tag
// const generateList = (textContent, renderListFunc) => {
//   return textContent
//     .reduce((acc, current) => {
//       acc.push(renderListFunc(current));
//       return acc;
//     }, [])
//     .join('');
// };
// const generateUl = () => {};
// renderListTag = (textContent) => {
//   footerListEl.clean();
//   return footerListEl.setTag(`<li class='list-group-item ps-0'>
//   <a href='#' class='list-group-item-anchor '> ${
//     footerListEl.icon && footerListEl.icon
//   }  ${textContent}</a>
//  </li>`).tag;
// };
// const servicesList = generateList(itemsTextContent, renderListTag);

// const footerTitle = function (title) {
//   `<h2 class='footer-section-title fs-4 position-relative'>${title}</h2> `;
// };
// const listFooter = FooterSection.setTag(
//   (() => {
//     const tag = document.createElement('ul');

//     'list-group quick-link'.split(' ').forEach((cl) => tag.classList.add(cl));

//     return tag;
//   })()
// ).setInnerTags(footerTitle('Quick Link') + listItems).tag;
// const listCol = FooterSection.setTag(
//   (() => {
//     const element = document.createElement('div');

//     'col col-12 col-md-6 col-lg-3'
//       .split(' ')
//       .forEach((cl) => element.classList.add(cl));

//     return element;
//   })()
// ).setInnerTags(listFooter.outerHTML);
// console.log(listCol);
// class Footer {
//   constructor() {
//     this.footer = document.querySelector('footer');
//     this.addFooterContent();
//   }
//   addClassLists() {}
//   addFooterContent() {
//     this.footer.innerHTML = listCol.tag.outerHTML;
//   }
// }
//FIRST APPROACH
export default Footer;
