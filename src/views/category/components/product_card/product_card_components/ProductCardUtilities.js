
import getData from "../../../../../apis/getData";
import { formatApiData } from "../../../../../utils/formatProductData";
import { iconsList } from "../../../../../utils/icons/icons";




export const productModal = () => {



  const modal = ` <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog">
<div class='loader-container'>${iconsList.loader.component}</div>
  <div class="modal-content">
  
    <div class="modal-header">
    
      
    </div>
    <div class="modal-body">
     
     
    </div>
   
  </div>
</div>
</div> `
  return modal

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

  document.body.insertAdjacentHTML('beforeend', productModal())
}
const renderProductPage = (id)=>{
  document.querySelector('.app').innerHTML=`<div> id = ${id}</div>`
}
export const buttonActions = Object.freeze({
  modal: {
    attributes: function () {
      return ` data-bs-toggle="modal" data-bs-target="#exampleModal" `
    }, btnAction: async function ({ apiRoute, prodId }) {
      handleLoaderDisplay('remove')

      const data = await getData(`${apiRoute}lookup.php?i=${prodId}`);

      updateModalContent.call(document.body.querySelector('.modal-content'), formatApiData.modal(data))
    

    }
  }, link: { attributes:function ()  { 
  
    return;
    // return  `href=${window.location.hash}`}, btnAction: ({prodId : id})=>{
   
    // document.querySelector('.app').innerHTML=`<div> id = ${id}</div>`;

  }, btnAction: function ({apiRoute,prodId}){ 
    console.log(123);
    console.log(this);
    console.log(apiRoute);
    console.log(prodId);
 
      window.location.hash = window.location.hash + `&id=${prodId}`
    //  btnAction: ({prodId : id})=>{
   
   document.querySelector('.app').innerHTML=`<div> id = ${prodId}</div>`;

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