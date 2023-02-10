import getData from '../../apis/getData';
import PageSection, { mainHeader } from '../../components/shared/PageSection';
import './category_component.scss';
import divideArray from '../../utils/divideArray';

class RatingContainer extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = `<span class='text-stroke'>${'⭐'.repeat(5)}</span> `;
  }
}
const productCard = ({ idMeal, strMealThumb, strMeal, price }) => {
  return `<div class='card' data-id="${idMeal}">
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
       </div>`;
};
customElements.define('rating-container', RatingContainer);
const previewCard = function (data) {
  console.log(data);
  const [name, img] = Object.values(arguments[0]);

  return `<li class="list-group-item d-flex border-0 shadow-md">
   <img class=' img-fluid w-lg-50 w-25' src="${img}"/>
   <div class='text-truncate my-3 mx-1 ps-2'>
    <h2 class='fs-6 text-primary text-truncate mw-75'>${name}</h2>
    <rating-container></rating-container>
   <p> ${new Intl.NumberFormat('es-AR', {
     style: 'currency',
     currency: 'ARS',
   }).format(25)}</p>
    </div>
  </li>`;
};

const CategoryComponent = async () => {
  const split = window.location.hash.split('?');
  const category = split.pop().trim();
  const categoryFetch = await getData(
    `${process.env.API_ENDPOINT}filter.php?c=${category}`
  );
  // console.log(categoryFetch);
  const { meals } = categoryFetch;

  const separated = meals.reduce(
    (acc, curr, i, arr) => {
      (i <= 4 && acc.leftSide.push(arr[i])) || acc.rightSide.push(arr[i]);
      return acc;
    },
    { leftSide: [], rightSide: [] }
  );


  separated.rightSide.map((el) => (el.price = Math.random() * 10));
  console.log(separated.rightSide);

  const separatePagination = divideArray(separated.rightSide, 9);
  console.log(separatePagination);
  const productNav = (pages = Math.floor(separated.rightSide.length / 9)) => {
    console.log(pages);
   
    return `<nav aria-label="...">
    <ul class="pagination">
        ${(() => {
          let listItems = '';
          for (let i = 1; i < pages + 1; i++) {
            listItems += `    <li class="page-item ">
               <a class="page-link" href="#" tabindex="-1" aria-disabled="true">${i}</a>
             </li>`;
          }
          return listItems;
        })()}
    </ul>
  </nav>`;
  };
  
  return `<section>
  <div class='container-fluid'>
  ${
    new PageSection('main', undefined).setContent(mainHeader(category)).build()
      .outerHTML
  }
    <div class='row'>
    <div class='col top-sellers-col p-md-2 col-12 col-lg-4'>
    <h2 class='position-relative text-capitalize top-sellers-title'>top sellers</h2>
    <ul class='list-group top-sellers-list gap-2'>
    ${separated.leftSide.map((item) => previewCard(item)).join('')}</ul>
    </div>
      <div class='col product-category-cards py-md-5 col-12 col-lg-8'>
         <div class='row flex-nowrap'>
              ${separatePagination
                .map(
                  (page,i) =>
                    `<div  data-index="${i}" class='col  col-12 w-lg-100 row'>
                      
                  ${page
                    .map(
                      (prod , i) =>
                        `<div class='col col-4'>${productCard(prod)}</div>`
                    )
                    .join('')}
                   </div>`
                )
                .join('')} 
               
        </div>
      </div>
      <div class='container d-flex justify-content-end pe-3'>${productNav()}</div>
    </div>
    
  </div>
  </section>`;
};
export default CategoryComponent;
