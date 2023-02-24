import { buttonActions } from "./Utils"

const productModal = ()=>{
    return `<div class='test element' >element </div>`
// return `    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="false">
//   <div class="modal-dialog">
//     <div class="modal-content">
//       <div class="modal-header">
//         <h5 class="modal-title" id="exampleModalLabel">New message</h5>
//         <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//       </div>
//       <div class="modal-body">
//         <form>
//           <div class="mb-3">
//             <label for="recipient-name" class="col-form-label">Recipient:</label>
//             <input type="text" class="form-control" id="recipient-name">
//           </div>
//           <div class="mb-3">
//             <label for="message-text" class="col-form-label">Message:</label>
//             <textarea class="form-control" id="message-text"></textarea>
//           </div>
//         </form>
//       </div>
//       <div class="modal-footer">
//         <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//         <button type="button" class="btn btn-primary">Send message</button>
//       </div>
//     </div>
//   </div>
// </div> `

}


{/* <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Open modal for @mdo</button>
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@fat">Open modal for @fat</button>
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@getbootstrap">Open modal for @getbootstrap</button>

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
</div> */}



class CardLink {
    constructor({ icon, tag,action }) {
      this.tag = `<${tag}  data-action="${action}" ${buttonActions[`${action}`].fireAction()}  class='btn btn-light btn-sm product-card-link background-gray-400'  >${icon}</${tag}>`
      
    }
    handleBtnAction(e){
      console.log(e)
    }
    build() {
      return this.tag;
    }
  }
  export default CardLink;