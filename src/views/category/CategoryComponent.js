import getData from '../../apis/getData';
import PageSection, { mainHeader } from '../../components/shared/PageSection';
import './category_component.scss';
const previewCard = function (data) {
  const [name, img] = Object.values(arguments[0]);
  console.log(img);
  return `<li class="list-group-item d-flex align-items-center">
   <img class='img-thumbnail img-fluid w-lg-50 w-25' src="${img}"/>
   <div class='text-truncate'>
    <h2 class='fs-5 text-primary text-truncate mw-75'>${name}</h2>
   <p> ${new Intl.NumberFormat('es-AR', {
     style: 'currency',
     currency: 'ARS',
   }).format('25')}</p>
    </div>
  </li>`;
};
const CategoryComponent = async () => {
  const split = window.location.hash.split('?');
  const category = split.pop().trim();
  const categoryFetch = await getData(
    `${process.env.API_ENDPOINT}filter.php?c=${category}`
  );
  console.log(categoryFetch);
  const { meals } = categoryFetch;

  const separated = meals.reduce(
    (acc, curr, i, arr) => {
      (i <= 4 && acc.leftSide.push(arr[i])) || acc.rightSide.push(arr[i]);
      return acc;
    },
    { leftSide: [], rightSide: [] }
  );

  console.log(separated);

  return `<section>
  <div class='container-fluid'>
  ${
    new PageSection('main', undefined).setContent(mainHeader(category)).build()
      .outerHTML
  }
    <div class='row'>
    <div class='col col-12 col-lg-4'>
    <h2 class='position-relative text-capitalize top-sellers-title'>top sellers</h2>
    <ul class='list-group top-sellers-list'>
    ${separated.leftSide.map((item) => previewCard(item)).join('')}</ul>
    </div>
    <div class='col col-12 col-lg-8'></div>
    </div>
  </div>
  </section>`;
};
export default CategoryComponent;
