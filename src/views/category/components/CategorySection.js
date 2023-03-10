
import getData from "../../../apis/getData";
import PageSection, { mainHeader } from "../../../components/shared/PageSection";
import divideArray from "../../../utils/divideArray";
import formatProductData from "../../../utils/formatProductData";
import previewCard from "./PreviewCard";
import productCard from "./product_card/ProductCard";
import productNav from "./ProductNav";
import SelectSortEl from "./SelectSortEl";
import { addModal, productModal } from "./product_card/product_card_components/ProductCardUtilities";
import { modal } from "../../product_page/Modal";
import RatingComponent from "./RatingComponent";
import { mainSectionPreviewCardData } from "../../../utils/formatPreviewCardData";
const nameTypes = Object.freeze({
  drinks: 'strDrink',
  categories: 'strMeal',
})
const getNameProp = function () {
  const name = window.location.hash.toString().slice(2, window.location.hash.toString().lastIndexOf("/"))

  return name;
}

const sortOptions = Object.freeze({
  price: { orderFunc: function (products) { return products.sort((a, b) => a.price - b.price) } },
  priceReverse: { orderFunc: function (products) { return products.sort((a, b) => b.price - a.price) } },
  nameReverse: {
    orderFunc: function (products) {
     
      return products.sort((a, b) => {
        const nameType = nameTypes[getNameProp()];
      
        return a[`${nameType}`] < b[`${nameType}`] ? 1 : a[`${nameType}`] < b[`${nameType}`] ? 1 : 0
      })
    }
  },
  name: {
    orderFunc: function (products) {
      return products.sort((a, b) => {
        const nameType = nameTypes[getNameProp()];
    
        return a[`${nameType}`] > b[`${nameType}`] ? 1 : a[`${nameType}`] > b[`${nameType}`] ? 1 : 0
      })
    }
  },

});
const renderProducts = function (productList) {


  return `  ${divideArray(productList, 9)
    .map(
      (page, i) =>
        `<div  data-index="${i}" class='col  product-col  col-12 w-100 w-lg-100  gy-2 gy-lg-4'>
          <div class='row gy-4'>  
          <div class='col-12 col pe-0 pe-md-5'>
          <div class='row'>         ${page
          .map(
            (prod, i) =>
              `<div class='col col-6 col-md-4 p-3 '>${productCard(formatProductData(prod))}</div>`
          )
          .join('')}
          </div>
 
          </div>
       </div> </div>
       `
    )
    .join('')} `

}
const CategorySection = async () => {
  document.querySelector('.modal') === null ? document.body.insertAdjacentHTML('beforeend',productModal()) : null;
  const split = window.location.hash.split('?');
  const category = split.pop().trim();
  const apiRoute = window.location.toString().includes('drinks') ? process.env.API_DRINKS_ENDPOINT : process.env.API_ENDPOINT
 
  const categoryFetch = await getData(
    `${apiRoute}filter.php?c=${category.trim().replaceAll(' ', '_')}`
  );

  const products = categoryFetch[`${Object.keys(categoryFetch)[0]}`];

  const divideProductArray = (() => {
    let divideProductArray = products.reduce(
      (acc, curr, i, arr) => {
        (i <= 4 && acc.leftSide.push(arr[i])) || acc.rightSide.push(arr[i]);
        return acc;
      },
      { leftSide: [], rightSide: [] }
    );

    divideProductArray.rightSide.length === 0 && divideProductArray.rightSide.push(...divideProductArray.leftSide);
    return divideProductArray
  }
  )()

  divideProductArray.rightSide.map((el) => (el.price = Math.ceil(Math.random() * 100)));

  const divideProductPagination = divideArray(divideProductArray.rightSide, 9);

  const pages = Math.floor(divideProductArray.rightSide.length / 9);

  const selectForm = new SelectSortEl();

  const handleOrder = function () {
   
    const sortOption = arguments[0];
   

    document.querySelector('.product-cards-list').innerHTML = renderProducts(sortOptions[`${sortOption}`].orderFunc(divideProductArray.rightSide))

  }
  selectForm.order(handleOrder)
  return `
 
  <section>
    <div class='container-fluid'>
    ${new PageSection('main', undefined).setContent(mainHeader(category)).build()
      .outerHTML
    }
  
      <div class='row my-4'>
      <div class='col bg-light top-sellers-col p-0 p-md-2 col-12 col-md-4'>
      <h2 class='position-relative text-capitalize top-sellers-title  w-75 ms-3'>top sellers</h2>
      <ul class='list-group top-sellers-list gap-2 '>
      ${divideProductArray.leftSide.map((item) => previewCard.call(document.body.querySelector('.app'),item,'rating-container',undefined)).join('')}</ul>
      </div>
    
            <div class='col col-12 col-md-8 product-cards-container'>
            ${selectForm.root}
               <div class=' product-category-cards  '>
            
          
                  <div class='row flex-nowrap product-cards-list   p2'>
                  ${renderProducts(divideProductArray.rightSide)} 
                       
                
                  </div> 
               </div>
               ${pages > 1 &&
           `<div class='container d-flex justify-content-end pe-3 py-3'>${productNav(pages)}</div>` || ''
           }

          
             </div>
             </div>
           </div>
    </section>
    ${modal}
   
    `;

};

export default CategorySection