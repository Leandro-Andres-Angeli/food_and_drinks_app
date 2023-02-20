import {iconsList} from '../../../../utils/icons/icons'
console.log(iconsList)
class cardFooter {
  constructor(){
    this.tag =`<div class='card-footer text-white product-card-footer text-capitalize d-flex align-items-center'>
    ${iconsList.cartOutline.component}
    add to cart
    </div>`
  }
   build (){
    return this.tag;
  }
   
}

const productCard = function({id,img,product,price}) {
  
    return `<div class='card product-card' data-id="${id}">
        <div class='img-container'>
         <img src="${img}" class="  card-img-top category-aside-img" alt="..." > 
         </div>
         <div class='card-body'>
         <h2 class='fs-5  card-title text-truncate text-primary hover-secondary '>${product}</h2> 
         <p class='card-text fw-bold text-muted'>
          ${new Intl.NumberFormat('es-AR', {
            style: 'currency',
            currency: 'ARS',
          }).format(price)}
          
        </p>
        </div>
        ${ new cardFooter().build()}
         </div>`;
  };
  export default productCard