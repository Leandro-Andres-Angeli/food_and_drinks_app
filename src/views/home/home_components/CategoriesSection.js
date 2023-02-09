import getData from '../../../apis/getData';
import './category_card.scss';
import divideArray from '../../../utils/divideArray';

const CategoriesSection = async () => {
  const getCategories = await getData(
    `${process.env.API_ENDPOINT}categories.php`
  );

  const dividedCatergories = divideArray(getCategories.categories, 4);
  // console.log(dividedCatergories);

  // console.log(getCategories.categories);
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
                           <a href="#" class="text-decoration-none">
                           <div data-category="${strCategory}" class='category-card card background-yellow-100 p-2 text-center shadow-lg'>
                         
                           <picture>
                           <h3  class='d-none'>${strCategory}</h3> 
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
