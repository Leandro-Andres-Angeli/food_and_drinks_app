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
  
    const divideProductArray = (()=>{ 
      let divideProductArray =  meals.reduce(
       (acc, curr, i, arr) => {
        (i <= 4 && acc.leftSide.push(arr[i])) || acc.rightSide.push(arr[i]);
        return acc;
      },
      { leftSide: [], rightSide: [] }
    );
    
    divideProductArray.rightSide.length === 0 &&   divideProductArray.rightSide.push(...divideProductArray.leftSide) ;
    return divideProductArray
    }
  )()
  
    divideProductArray.rightSide.map((el) => (el.price = Math.random() * 10));
    console.log(divideProductArray.rightSide);
  
    const divideProductPagination = divideArray(divideProductArray.rightSide, 9);
    console.log(divideProductPagination);
    const productNav = (pages = Math.floor(divideProductArray.rightSide.length / 9)) => {
      console.log(pages);
     
      return `<nav class='pe-4' aria-label="...">
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
      ${divideProductArray.leftSide.map((item) => previewCard(item)).join('')}</ul>
      </div>
        <div class='col product-category-cards  col-12 col-lg-8'>
           <div class='row flex-nowrap  gap-4 p2'>
                ${divideProductPagination
                  .map(
                    (page,i) =>
                      `<div  data-index="${i}" class='col  col-12 w-lg-100 row  gy-2 gy-lg-4'>
                        
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
        <div class='container d-flex justify-content-end pe-3 py-3'>${productNav()}</div>
      </div>
      
    </div>
    </section>`;
  };
  export default CategorySection