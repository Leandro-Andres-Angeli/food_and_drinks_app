import RatingComponent from "./RatingComponent";
const previewCard = function (data) {
   
    const [name, img,id] = Object.values(arguments[0]);
   
    return `<li class="list-group-item d-flex border-0 " data-id="${id}">
     <img class=' img-fluid w-lg-50 w-25' src="${img}"/>
     <div class='text-truncate my-3 mx-1 ps-2'>
      <h2 class='fs-6 text-primary text-truncate mw-75 hover-secondary'>${name}</h2>
      <rating-container></rating-container>
     <p> ${new Intl.NumberFormat('es-AR', {
       style: 'currency',
       currency: 'ARS',
     }).format(25)}</p>
      </div>
    </li>`;
  };
export default previewCard  