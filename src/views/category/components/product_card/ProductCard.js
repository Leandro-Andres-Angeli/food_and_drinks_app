import { iconsList } from '../../../../utils/icons/icons'

const { eyeOutline: { component: eyeOutline }, linkOutline: { component: linkOutline }, facebookIcon: { component: facebookIcon } } = iconsList;
const productCardButtons = Object.freeze({ eye: { icon: eyeOutline, tag: 'button' }, link: { icon: linkOutline, tag: 'a' }, facebook: { icon: facebookIcon, tag: 'a' } })

class cardFooter {
  constructor() {
    this.tag = `<div class='card-footer text-white product-card-footer text-capitalize d-flex align-items-center'>
    ${iconsList.cartOutline.component}
    add to cart
    </div>`
  }
  build() {
    return this.tag;
  }

}
class cardLink {
  constructor({ icon, tag }) {
    this.tag = `<${tag} class='btn btn-light btn-sm product-card-link background-gray-400  '>${icon}</${tag}>`
  }
  build() {
    return this.tag;
  }
}
const cardButtonsContainer = (buttonsArray) => {
  let btnsContainer = document.createElement('div')

  btnsContainer.classList.add('product-card-btn-container')

  for (const key in buttonsArray) {
    btnsContainer.insertAdjacentHTML('beforeend', new cardLink(buttonsArray[key]).build())
  }
  return btnsContainer.outerHTML
}
const fI = new cardLink(productCardButtons.facebook)
console.log(fI)

const productCard = function ({ id, img, product, price }) {
[{ev:'mouseover',action:(el)=>el.classList.add('visible')},{ev:'mouseout',action:(el)=>el.classList.remove('visible')}].forEach(({ev,action})=>{
  document.querySelector('.app').addEventListener(ev, function (e) {


    if (!e.target.closest('.product-card') || !e.target) {
      return
    }
   
    if (e.target.closest('.product-card')) {
    
    if( !!action) [e.target.closest('.product-card').querySelector('.product-card-btn-container'), e.target.closest('.product-card').querySelector('.card-footer')].forEach(el =>action(el))


    }



  })
})
  // document.querySelector('.app').addEventListener('mouseover', function (e) {


  //   if (!e.target.closest('.product-card') || !e.target) {
  //     return
  //   }
   
  //   if (e.target.closest('.product-card')) {

  //     [e.target.closest('.product-card').querySelector('.product-card-btn-container'), e.target.closest('.product-card').querySelector('.card-footer')].forEach(el => el.classList.add('visible'))


  //   }



  // })
  // document.querySelector('.app').addEventListener('mouseout', function (e) {


  //   if (!e.target.closest('.product-card') || !e.target) {
  //     return
  //   }
  //   console.log(e)
  //   if (e.target.closest('.product-card')) {

  //     [e.target.closest('.product-card').querySelector('.product-card-btn-container'), e.target.closest('.product-card').querySelector('.card-footer')].forEach(el => el.classList.remove('visible'))


  //   }



  // })
  return `<div class='card product-card' data-id="${id}">
        <div class='img-container'>
         <img src="${img}" class="  card-img-top category-aside-img" alt="..." > 
         </div>
         <div class='card-body'>
         <h2 class='fs-5  card-title text-truncate text-primary hover-secondary '>${product}</h2> 
         ${cardButtonsContainer(productCardButtons)}
         <p class='card-text fw-bold text-muted'>
          ${new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
  }).format(price)}
          
        </p>
        </div>
        ${new cardFooter().build()}
         </div>`;
};
export default productCard