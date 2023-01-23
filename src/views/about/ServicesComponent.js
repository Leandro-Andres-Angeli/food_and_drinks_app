import PageSection from '../../components/shared/PageSection';

const servicesTitle = `<h2 class='text-primary'>What <span class='text-yellow-300 text-stroke'> Services</span> We Offer </h2>

`;

const ServicesComponent = new PageSection('div').setContent(servicesTitle);
export default ServicesComponent.build().outerHTML;
