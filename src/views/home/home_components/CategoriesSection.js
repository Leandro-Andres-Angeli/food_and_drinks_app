import getData from '../../../apis/getData';
import './category_card.scss';
import divideArray from '../../../utils/divideArray';
import handleNavbarLink from '../../../utils/handleNavbarLinks';

const CategoriesSection = async () => {
  const getCategories = await getData(
    `${process.env.API_ENDPOINT}categories.php`
  );

  const dividedCatergories = divideArray(getCategories.categories, 4);
  
 document.querySelector('.app').addEventListener('click',function(e){
 const {target} = e;
  if(!target.classList.contains('category-card'))return
  const {hash : newHash } = target.closest('a')
  
    window.location.hash = newHash;


  
    } )
  return `<section class='background-yellow-100 py-5'>

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
                           <a href="#/categories/?${strCategory}" class="text-decoration-none category-card-link">
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
