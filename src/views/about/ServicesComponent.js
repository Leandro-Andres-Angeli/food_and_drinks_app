import { innerCard } from '../../components/shared/InnerCard';
import PageSection from '../../components/shared/PageSection';
import './about_styles.scss';
const servicesTitle = `<h2 class='text-primary text-center'>What <span class='text-yellow-300 text-stroke m-2 my-lg-5'> Services</span> We Offer </h2>

`;
// const servicesCard =
const dummyText =
  'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.';
const servicesListObj = Object.freeze([
  { title: 'Dine In', content: dummyText },
  { title: 'Take Away', content: dummyText },
  { title: 'Home Delivery', content: dummyText },
]);
const servicesList = [];
for (const key in servicesListObj) {
  console.log(key);
  const { title, content } = servicesListObj[key];
  console.log(title);
  console.log(content);
  servicesList.push(
    innerCard(
      title,
      content,
      'col-lg-3 gap-2 p-3 col-12 services-detail-card position-relative background-gray-800 shadow-lg text-yellow-100 border rounded text-center d-flex flex-column justify-content-around ',
      {
        titleTag: 'h2',
        contentTag: 'p',
      },
      +key + 1,
      'fs-7'
    )
  );
}
console.log(servicesList);
const servicesInner = () => {
  return `<section class='container '>
        ${servicesTitle}
        <div class='row justify-content-between py-3 gap-4 gap-lg-3 my-4'>
        ${servicesList.join(' ')}
        </div>
  </section>`;
};

// const ServicesComponent = new PageSection('section').setContent(servicesTitle);
const ServicesComponent = new PageSection('section').setContent(
  servicesInner()
);
['container', 'py-5'].forEach((classList) =>
  ServicesComponent.tag.classList.add(classList)
);
export default ServicesComponent.build().outerHTML;
