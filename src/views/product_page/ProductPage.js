
import getData from "../../apis/getData";
import formatProductData, { formatApiData } from "../../utils/formatProductData";
import getId from "../../utils/getId";
import './productPage.scss'

class ProductPage {
    constructor(test) {
        this.app = document.querySelector('.app')
        this.test = test;
        this.fetchData = getData;
        this.endpoint;
      
       
    }
    handleCategoryLink(){
        this.app.addEventListener('click',function(e){
             const eventTarget =  e.target.closest('li') ;
             if(eventTarget === null || !eventTarget.classList.contains('product-category') ){
               return 
             }
             
             return window.history.back()
        }) 
    }
    build() {
        return async function () {
            const id = getId();
           
            this.endpoint = window.location.hash.includes('categories') ? process.env.API_ENDPOINT : process.env.API_DRINKS_ENDPOINT;

            const data = await this.fetchData(`${this.endpoint}lookup.php?i=${id}`)

            const formattedProdData = formatProductData(data, 'modal')

            const div = await `
    
        <div class='container p-2 p-md-5'>
        <div class='card mb-5 product-page-card'>
         
            <div class="card-body d-flex flex-column ">
            <h5 class="card-title">
            <nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item product-category"><a href="#">${formattedProdData.category}</a></li>
    <li class="breadcrumb-item active" aria-current="page"> ${formattedProdData.name}</li>
  </ol>
</nav>
           
            </h5>
            <p class="card-text">${Object.values(data)['0'][0].strInstructions}</p>
         
        
        
                <img class='img-fluid img-thumbnail' src="${formattedProdData.img}">
        
            </div > 
            <ul class="list-group p-2 p-md-4">
            <h6 class='text-primary fs-4 fw-bold'>Ingredients</h6> 
            ${Object.entries(formattedProdData.ingredients).map(([key, val]) => `<li class="list-group-item">${val !== undefined ? `${key} : ${val}` : `${key}` } </li>`).join('')}
            </ul>
         
            </div>
           
       
        </div>`
        this.handleCategoryLink()
            return div;
        }.bind(this)

    }

}

export default new ProductPage().build()