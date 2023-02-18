import getData from "../../../apis/getData";
import PageSection, { mainHeader } from "../../../components/shared/PageSection";
import divideArray from "../../../utils/divideArray";
import formatProductData from "../../../utils/formatProductData";
import previewCard from "./PreviewCard";
import productCard from "./product_card/ProductCard";
import productNav from "./ProductNav";
import SelectSortEl from "./SelectSortEl";
const sortsOptions = Object.freeze({
  // name:{renderFunc:objs.sort((a,b) => (a.last_nom > b.last_nom) ? 1 : ((b.last_nom > a.last_nom) ? -1 : 0))},
  // reverseName:{renderFunc:objs.sort((a,b) => (a.last_nom > b.last_nom) ? 1 : ((b.last_nom > a.last_nom) ? -1 : 0))}
})
const renderProducts = function(productList){
  console.log(document.querySelector('.app'))
  console.log()
return`  ${ divideArray(productList, 9)
    .map(
      (page,i) =>
        `<div  data-index="${i}" class='col  col-12 w-lg-100 row  gy-2 gy-lg-4'>
          
      ${page
        .map(
          (prod , i) =>
            `<div class='col col-6 col-md-4'>${productCard(formatProductData(prod))}</div>`
        )
        .join('')}
       </div>`
    )
    .join('')} `
  
}
const CategorySection = async()=>{
  
    const split = window.location.hash.split('?');
    const category = split.pop().trim();
    const apiRoute = window.location.toString().includes('drinks') ? process.env.API_DRINKS_ENDPOINT : process.env.API_ENDPOINT
    console.log('api route',apiRoute)
    const categoryFetch = await getData(
      `${apiRoute}filter.php?c=${category.trim().replaceAll(' ','_')}`
    );
  
    const  products  = categoryFetch[`${Object.keys(categoryFetch)[0]}`] ;
      console.log(Object.keys(categoryFetch))
    const divideProductArray = (()=>{ 
      let divideProductArray =  products.reduce(
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
  
    divideProductArray.rightSide.map((el) => (el.price = Math.ceil(Math.random() * 100)));
  
    const divideProductPagination = divideArray(divideProductArray.rightSide, 9);
  
    const pages =  Math.floor(divideProductArray.rightSide.length / 9);
    
    const selectForm = new SelectSortEl();
    selectForm.order(function(data){
      console.log(data)
      document.querySelector('.n').textContent =data +" "+  arguments[0]})
      renderProducts.call(document.querySelector('.app'),divideProductArray.rightSide)
    return `<section>
    <div class='container-fluid'>
    ${
      new PageSection('main', undefined).setContent(mainHeader(category)).build()
        .outerHTML
    }
      <div class='row'>
      <div class='col bg-light top-sellers-col p-md-2 col-12 col-md-4'>
      <h2 class='position-relative text-capitalize top-sellers-title'>top sellers</h2>
      <ul class='list-group top-sellers-list gap-2 '>
      ${divideProductArray.leftSide.map((item) => previewCard(item)).join('')}</ul>
      </div>
        <div class='col product-category-cards  col-12 col-md-8'>
        ${selectForm.root}
        <div class='n'></div>
           <div class='row flex-nowrap product-cards-list  gap-4 p2'>
           ${renderProducts(divideProductArray.rightSide)} 
                 
          </div>
        </div>
        ${ pages > 1 && 
           `<div class='container d-flex justify-content-end pe-3 py-3'>${productNav(pages)}</div>` || ''
        }
        
      </div>
      
    </div>
    </section>`;
   
  };
  export default CategorySection