

const tag = (content) => {
    return content;
}
const list = `<ul class="list-group">
<li class="list-group-item">An item</li>
<li class="list-group-item">A second item</li>
<li class="list-group-item">A third item</li>
<li class="list-group-item">A fourth item</li>
<li class="list-group-item">And a fifth one</li>
</ul>`

const leftSide = `<div class ='col-12 col col-md-5'>${list}</div>`

const card = `

<div class="card" style="width: 18rem;">
<img src="..." class="card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title">Card title</h5>
  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>
</div>
</div>

`
const modal = `<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
</div>
`
const rightSide = `<div class ='col-12 col col-md-7'>
<div class='row'>
${(new Array(9).fill(card)).map(c =>`<div class='col col-12 col-md-6 col-lg-4' >${c}</div>` ).join('')}
</div>
</div>`
const content = (children) => {

    return `<div class='row' >${children.map(el => el).join('')}</div>`
}
export default () => content([leftSide, rightSide,modal]);