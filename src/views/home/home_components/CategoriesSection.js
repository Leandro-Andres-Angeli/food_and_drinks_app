import getData from '../../../apis/getData';
import './category_card.scss';
const getCols = (array, divider) => {
  let arr = [];
  let j = divider;
  for (let i = 0; i < array.length; i = i + 4) {
    console.log(i);
    console.log(j);
    let arr1 = [];
    for (let k = i; k < j; k++) {
      array[k] && arr1.push(array[k]);
      console.log(arr1);
    }
    arr.push(arr1);
    j += 4;
  }
  return arr;
};
const CategoriesSection = async () => {
  const getCategories = await getData(
    'https://www.themealdb.com/api/json/v1/1/categories.php'
  );

  const dividedCatergories = getCols(getCategories.categories, 4);
  console.log(dividedCatergories);

  console.log(getCategories.categories);
  return `<section class='background-yellow-100'>

            <div class='container'>
                <h2 class='text-primary'>Categories</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore magna aliqua.</p>
                
               ${dividedCatergories
                 .map(
                   (categoriesCol) =>
                     `<div class='row'>${categoriesCol
                       .map(
                         ({ strCategoryThumb, strCategory }) =>
                           `<div class ='col col-12 col-md-6 col-lg-3 my-2  '>
                          
                           <div class='category-card card background-yellow-100 p-2 text-center shadow-lg'>
                           <a href="#" class="text-decoration-none">
                           <picture>
                           <h3  >${strCategory}</h3> 
                           <img class='img-categories-card' src='${strCategoryThumb}'>
                           </picture>
                           
                           </div>
                            </div></a>`
                       )
                       .join(' ')} </div>`
                 )
                 .join(' ')}
            </div>
            </section>`;
};
export default CategoriesSection;
