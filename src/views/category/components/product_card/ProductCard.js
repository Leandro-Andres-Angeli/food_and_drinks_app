const productCard = function({id,img,product,price}) {
  
    return `<div class='card product-card' data-id="${id}">
         <img src="${img}" class="  card-img-top category-aside-img" alt="..." > 
         <div class='card-body'>
         <h2 class='fs-5  card-title text-truncate text-primary hover-secondary '>${product}</h2> 
         <p class='card-text fw-bold text-muted'>
          ${new Intl.NumberFormat('es-AR', {
            style: 'currency',
            currency: 'ARS',
          }).format(price)}
          
        </p>
        </div>
         </div>`;
  };
  export default productCard