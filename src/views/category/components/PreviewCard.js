import RatingComponent from "./RatingComponent";
const previewCard = function (data , rating = 'rating-container') {
    this.addEventListener('click',(e)=>{
      
      if(e.target.closest('a') === null ||   !e.target.closest('a').classList.contains('preview-product-card-link')){
         return;  
      }else
      window.location = e.target.closest('a').href;
      
    })
    const [name, img,id] = Object.values(arguments[0]);
   
    return `<li class="list-group-item d-flex border-0 preview-card " data-id="${id}">
    <a href="${window.location.hash}&id=${id}" class='preview-product-card-link overflow-hidden d-flex text-decoration-none'>     <img class=' img-fluid w-lg-50 w-25' src="${img}"/>
     <div class='text-truncate my-3 mx-1 ps-2'>
      <h2 class='fs-6 text-primary text-truncate mw-75 hover-secondary'>${name}</h2>
     ${ rating &&  `<${rating}></${rating}>`}
     <p class='text-gray-700'> ${new Intl.NumberFormat('es-AR', {
       style: 'currency',
       currency: 'ARS',
     }).format(25)}</p>
      </div>
      </a>

    </li>`;
  };
export default previewCard  