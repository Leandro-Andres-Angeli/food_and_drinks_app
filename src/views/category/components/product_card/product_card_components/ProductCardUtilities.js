import { async } from "regenerator-runtime";
import getData from "../../../../../apis/getData";

export const productModal = (targ) => {
    console.log(targ);
    [...document.body.querySelectorAll('.modal')].forEach(modal => targ.removeChild(modal))

    const modal = ` <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog">
  <div class="modal-content">
    <div class="modal-header">
      <h5 class="modal-title" id="exampleModalLabel">New message</h5>
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body">
      <form>
        <div class="mb-3">
          <label for="recipient-name" class="col-form-label">Recipient:</label>
          <input type="text" class="form-control" id="recipient-name">
        </div>
        <div class="mb-3">
          <label for="message-text" class="col-form-label">Message:</label>
          <textarea class="form-control" id="message-text"></textarea>
        </div>
      </form>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      <button type="button" class="btn btn-primary">Send message</button>
    </div>
  </div>
</div>
</div> `
  return  targ.insertAdjacentHTML('afterend', modal)

}
const addModal = () => {
    console.log('func')
    return document.querySelector('.app').insertAdjacentHTML('beforeend', productModal())
}

export const buttonActions = Object.freeze({ modal: { attributes:function(){
     return ` data-bs-toggle="modal" data-bs-target="#exampleModal" `
},btnAction:async function({apiRoute,prodId}){
const data =  await getData(`${apiRoute}lookup.php?i=${prodId}`)
document.querySelector('.modal-content').innerHTML = JSON.stringify(data)
} }, link: { attributes: ()=>{return },btnAction:function(){}}, facebook: { attributes: ()=>{return },btnAction:function(){} } })
export const handleProductCardButtons = function (e) {

    if (!e.target.closest('.product-card-link')) return
   

    const button = e.target.closest('.product-card-link')
    // console.log(button)
    const{ action : type} = button.dataset;

    const { id : prodId } =  e.target.closest('.product-card').dataset;
    const apiRoute = e.target.closest('.product-card').dataset.category === 'categories' ? process.env.API_ENDPOINT : process.env.API_DRINKS_ENDPOINT ;
    // console.log(prodId);
    // console.log(type);
    buttonActions[`${type}`].btnAction({apiRoute , prodId})
   

}