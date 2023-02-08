import getData from '../../apis/getData';
import PageSection, { mainHeader } from '../../components/shared/PageSection';
import './category_component.scss';
class RatingContainer extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = `<span class='text-stroke'>${'⭐'.repeat(5)}</span> `;
  }
}
customElements.define('rating-container', RatingContainer);
const previewCard = function (data) {
  // ratingStartComponet();
  const [name, img] = Object.values(arguments[0]);

  return `<li class="list-group-item d-flex border-0 shadow-md">
   <img class=' img-fluid w-lg-50 w-25' src="${img}"/>
   <div class='text-truncate my-3 mx-1 ps-2'>
    <h2 class='fs-6 text-primary text-truncate mw-75'>${name}</h2>
    <rating-container></rating-container>
   <p> ${new Intl.NumberFormat('es-AR', {
     style: 'currency',
     currency: 'ARS',
   }).format('25')}</p>
    </div>
  </li>`;
};
// function ratingStartComponet() {

// const  = document.createDocumentFragment();
// new Array(5).forEach();
// }
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
  separated.rightSide.map((el) => (el.price = Math.random() * 10));
  const separatePagination = (() => {
    console.log(separated.rightSide.length);
    let pagination = [];
    for (let i = 0; i < separated.rightSide.length; i = i + 21) {
      let paginated = [];
      paginated = [...paginated, separated.rightSide[i]];
      for (let j = i; j < array.length; index++) {
        const element = array[index];
      }
      console.log(separated.rightSide[i]);
      console.log(paginated);
      return pagination.push(1);
    }
    pagination.push(1);
    return pagination;
  })();
  console.log(separatePagination);
  return `<section>
  <div class='container-fluid'>
  ${
    new PageSection('main', undefined).setContent(mainHeader(category)).build()
      .outerHTML
  }
    <div class='row'>
    <div class='col top-sellers-col p-md-5 col-12 col-lg-4'>
    <h2 class='position-relative text-capitalize top-sellers-title'>top sellers</h2>
    <ul class='list-group top-sellers-list gap-2'>
    ${separated.leftSide.map((item) => previewCard(item)).join('')}</ul>
    </div>
    <div class='col p-md-5 col-12 col-lg-8'>
    <div class='row '>
    ${separated.rightSide
      .map(
        ({ strMeal, strMealThumb, idMeal, price }) =>
          `<div class=' col-12 col-md-6 col-lg-3 mb-3' >
       <div class='card' data-id="${idMeal}">
       <img src="${strMealThumb}" class="  card-img-top category-aside-img" alt="..." > 
       <div class='card-body'>
       <h2 class='fs-5 card-title text-truncate'>${strMeal}</h2> 
       <p class='card-text'>
        ${new Intl.NumberFormat('es-AR', {
          style: 'currency',
          currency: 'ARS',
        }).format(price)}
        
      </p>
      </div>
       </div>
      </div>`
      )
      .join('')}
      </div>
    </div>
    </div>
  </div>
  </section>`;
};
export default CategoryComponent;
