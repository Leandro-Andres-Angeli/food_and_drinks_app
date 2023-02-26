import getData from "../../../apis/getData";
import PageSection, { mainHeader } from "../../../components/shared/PageSection";
import divideArray from "../../../utils/divideArray";
import formatProductData from "../../../utils/formatProductData";
import previewCard from "./PreviewCard";
import productCard from "./product_card/ProductCard";
import productNav from "./ProductNav";
import SelectSortEl from "./SelectSortEl";
const nameTypes = Object.freeze({
  drinks: 'strDrink',
  categories: 'strMeal',
})
const getNameProp = function () {
  const name = window.location.hash.toString().slice(2, window.location.hash.toString().lastIndexOf("/"))
  console.log(name)
  return name;
}

const sortOptions = Object.freeze({
  price: { orderFunc: function (products) { return products.sort((a, b) => a.price - b.price) } },
  priceReverse: { orderFunc: function (products) { return products.sort((a, b) => b.price - a.price) } },
  name: {
    orderFunc: function (products) {
      return products.sort((a, b) => {
        const nameType = nameTypes[getNameProp()];
        console.log(nameType)
        return a[`${nameType}`] > b[`${nameType}`] ? 1 : a[`${nameType}`] > b[`${nameType}`] ? 1 : 0
      })
    }
  },
  nameReverse: {
    orderFunc: function (products) {
      const nameType = nameTypes[getNameProp()];
    
      return products.sort((a, b) => a[`${nameType}`] < b[`${nameType}`] ? 1 : a[`${nameType}`] < b[`${nameType}`] ? -1 : 0)
    }
  }

});
const renderProducts = function (productList) {


  return `  ${divideArray(productList, 9)
    .map(
      (page, i) =>
        `<div  data-index="${i}" class='col  col-12 w-lg-100 row  gy-2 gy-lg-4'>
          
      ${page
          .map(
            (prod, i) =>
              `<div class='col col-6 col-md-4'>${productCard(formatProductData(prod))}</div>`
          )
          .join('')}
       </div>`
    )
    .join('')} `

}
const CategorySection = async () => {

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
    console.log(getNameProp())
    console.log(arguments)
    const sortOption = arguments[0];
    console.log(sortOption)

    document.querySelector('.product-cards-list').innerHTML = renderProducts(sortOptions[`${sortOption}`].orderFunc(divideProductArray.rightSide))

  }
  selectForm.order(handleOrder)
  return `<section>
    <div class='container-fluid'>
    ${new PageSection('main', undefined).setContent(mainHeader(category)).build()
      .outerHTML
    }
  
      <div class='row my-4'>
      <div class='col bg-light top-sellers-col p-0 p-md-2 col-12 col-md-4'>
      <h2 class='position-relative text-capitalize top-sellers-title  w-75 ms-3'>top sellers</h2>
      <ul class='list-group top-sellers-list gap-2 '>
      ${divideProductArray.leftSide.map((item) => previewCard(item)).join('')}</ul>
      </div>
     <div class='col col-12 col-md-8 product-cards-container'>
     ${selectForm.root}
        <div class=' product-category-cards  '>
      
    
           <div class='row flex-nowrap product-cards-list  gap-4 p2'>
           ${renderProducts(divideProductArray.rightSide)} 
                 
          </div>
        </div>
        ${pages > 1 &&
    `<div class='container d-flex justify-content-end pe-3 py-3'>${productNav(pages)}</div>` || ''
    }
    <div>
      </div>
      
    </div>
    </section>`;

};
export default CategorySection