
import getData from "../../../../../apis/getData";
import { formatApiData } from "../../../../../utils/formatProductData";
import { iconsList } from "../../../../../utils/icons/icons";




export const productModal = () => {



  const modal = ` <div class="modal  fade w-100 " id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog modal-dialog-centered " >
<div class='loader-container'>${iconsList.loader.component}</div>
  <div class="modal-content">

    <div class="modal-header">
    
      
    </div>
    <div class="modal-body">
     
    
    </div>
   
  </div>
</div>
</div> `;
const m2 = `<div class="modal" id="exampleModal"  tabindex="-1">
<div class="modal-dialog">
  <div class="modal-content">
    <div class="modal-header">
      <h5 class="modal-title">Modal title</h5>
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body">
      <p>Modal body text goes here.</p>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      <button type="button" class="btn btn-primary">Save changes</button>
    </div>
  </div>
</div>
</div>`
  return m2

}


const handleLoaderDisplay = (action) => document.querySelector('.loader-container').classList[`${action}`]('hide')
const updateModalContent = function (product, callback = handleLoaderDisplay('add')) {

  const { category, name, id, img, ingredients } = product
  this.dataset.id = id;
  this.querySelector('.modal-header').innerHTML = `<ol class="breadcrumb">
  <li class="breadcrumb-item">${category}</a></li>
  <li class="breadcrumb-item active text-primary" aria-current="page">${name}</li>
</ol><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>`
  this.querySelector('.modal-body').innerHTML = `<img src="${img} " class="img-fluid" />
<div class="accordion" id="accordionExample">
 
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Ingredients
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      <ul class="list-group">
      ${Object.entries(ingredients).map(([key, val]) => `<li class="list-group-item">${key} : ${val}</li>`).join('')}
      </ul>
      </div>
    </div>
  </div>

</div>
`
  callback

}
export const addModal = function () {

 
    return this.insertAdjacentHTML('beforeend',productModal()) 

  

 
 
  
}

export const buttonActions = Object.freeze({
  modal: {
    attributes: function () {
      return ` data-bs-toggle="modal" data-bs-target="#exampleModal" `
    }, btnAction: async function ({ apiRoute, prodId }) {
      // document.querySelector('.modal-backdrop').style.height = document.body.clientHeight+"px"
      // handleLoaderDisplay('remove')

      // const data = await getData(`${apiRoute}lookup.php?i=${prodId}`);

      // updateModalContent.call(document.body.querySelector('.modal-content'), formatApiData.modal(data))
      return
      

    }
  }, link: { attributes:function ()  { 
  
    return;


  }, btnAction: function ({apiRoute,prodId}){ 
  
    const prevLocation = window.location.hash.split('&')[0]
  
     window.location.hash=`${prevLocation}&id=${prodId}`
     

  } }, facebook: { attributes: () => { return }, btnAction: function () { } }
})
export const handleProductCardButtons = function (e) {

  if (!e.target.closest('.product-card-link')) return


  const button = e.target.closest('.product-card-link')

  const { action: type } = button.dataset;

  const { id: prodId } = e.target.closest('.product-card').dataset;
  const apiRoute = e.target.closest('.product-card').dataset.category === 'categories' ? process.env.API_ENDPOINT : process.env.API_DRINKS_ENDPOINT;

  buttonActions[`${type}`].btnAction({ apiRoute, prodId })


}