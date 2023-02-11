const productCard = ({ idMeal, strMealThumb, strMeal, price }) => {
    return `<div class='card' data-id="${idMeal}">
         <img src="${strMealThumb}" class="  card-img-top category-aside-img" alt="..." > 
         <div class='card-body'>
         <h2 class='fs-5 card-title text-truncate'>${strMeal}</h2> 
         <p class='card-text'>
          ${new Intl.NumberFormat('es-AR', {
            style: 'currency',
            currency: 'ARS',
          }).format(price)}
          
        </p>
        </div>
         </div>`;
  };
  export default productCard