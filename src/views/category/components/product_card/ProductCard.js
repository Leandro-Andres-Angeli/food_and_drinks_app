import { iconsList } from '../../../../utils/icons/icons'
import CardFooter from './product_card_components/CardFooter';
import CardLink from './product_card_components/CardLink';
import { productModal } from './product_card_components/ProductCardUtilities';

const { eyeOutline: { component: eyeOutline }, linkOutline: { component: linkOutline }, facebookIcon: { component: facebookIcon } } = iconsList;
const productCardButtons = function (id) {
 
  return Object.freeze({ eye: { icon: eyeOutline, tag: 'button', action: 'modal' }, link: { icon: linkOutline, tag: 'a', action: 'link',id:id }, facebook: { icon: facebookIcon, tag: 'a', action: 'facebook' } })
}



const cardButtonsContainer = function (buttonsArray) {
  let btnsContainer = document.createElement('div')
 
  btnsContainer.classList.add('product-card-btn-container')

  for (const key in buttonsArray) {
    btnsContainer.insertAdjacentHTML('beforeend', new CardLink(buttonsArray[key]).build())
  }
  return btnsContainer.outerHTML
}


const productCard = function ({ id, img, product, price }) {
  [{ ev: 'mouseover', action: (el) => el.classList.add('visible') }, { ev: 'mouseout', action: (el) => el.classList.remove('visible') }].forEach(({ ev, action }) => {
    document.querySelector('.app').addEventListener(ev, function (e) {


      if (!e.target.closest('.product-card') || !e.target) {
        return
      }

      if (e.target.closest('.product-card')) {

        if (!!action) [e.target.closest('.product-card').querySelector('.product-card-btn-container'), e.target.closest('.product-card').querySelector('.card-footer')].forEach(el => action(el))


      }



    })
  })

  return `<div class='card product-card' data-id="${id}" data-category=${window.location.hash.slice(2, window.location.hash.indexOf('?') - 1)}>
        <div class='img-container'>
         <img src="${img}" class="  card-img-top category-aside-img" alt="..." > 
         </div>
         <div class='card-body'>
         <h2 class='fs-5  card-title text-truncate text-primary hover-secondary '>${product}</h2> 
         ${cardButtonsContainer( productCardButtons(id))}
         <p class='card-text fw-bold text-muted'>
          ${new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
  }).format(price)}
          
        </p>
        </div>
        ${new CardFooter().build()}
        ${productModal()}
         </div>`;
};
export default productCard