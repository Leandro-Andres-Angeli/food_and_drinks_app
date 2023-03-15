import { iconsList } from "../../utils/icons/icons";



export const modal = `<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog modal-dialog-centered w-100 w-md-74" >
<div class='loader-container'>${iconsList.loader.component}</div>
  <div class="modal-content p-3" style="max-width:100vw">
    <div class="modal-header">
      <h5 class="modal-title">Modal title</h5>
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body">
      <p>Modal body text goes here.</p>
    </div>
   
  </div>
</div>
</div>
`
