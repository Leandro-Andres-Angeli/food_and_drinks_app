import getData from "../../../apis/getData";
import PageSection, { mainHeader } from "../../../components/shared/PageSection";
import divideArray from "../../../utils/divideArray";
import previewCard from "./PreviewCard";
import productCard from "./ProductCard";

const CategorySection = async () => {
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
                 <a class="page-link" href="#" tabindex="${i-1}" aria-disabled="true">${i}</a>
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
      <div class='col bg-light top-sellers-col p-md-2 col-12 col-lg-4'>
      <h2 class='position-relative text-capitalize top-sellers-title'>top sellers</h2>
      <ul class='list-group top-sellers-list gap-2'>
      ${separated.leftSide.map((item) => previewCard(item)).join('')}</ul>
      </div>
        <div class='col product-category-cards py-md-5 col-12 col-lg-8'>
           <div class='row flex-nowrap  gap-4 p2'>
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
  export default CategorySection