
import getData from "../../apis/getData";
import formatProductData, { formatApiData } from "../../utils/formatProductData";
import getId from "../../utils/getId";

class ProductPage {
    constructor(test = 2) {
        this.test = test;
        this.fetchData = getData;
        this.endpoint;
    }
    build() {
        return async function () {
            const id = getId();

            this.endpoint = window.location.hash.includes('categories') ? process.env.API_ENDPOINT : process.env.API_DRINKS_ENDPOINT;

            const data = await this.fetchData(`${this.endpoint}lookup.php?i=${id}`)

            const formattedProdData = formatProductData(data, 'modal')

            const div = await `
    
        <div class='container p-2 p-md-5'>
        <div class='card mb-5'>
         
            <div class="card-body d-flex flex-column ">
            <h5 class="card-title">
            <nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="#">${formattedProdData.category}</a></li>
    <li class="breadcrumb-item active" aria-current="page"> ${formattedProdData.name}</li>
  </ol>
</nav>
           
            </h5>
            <p class="card-text">${Object.values(data)['0'][0].strInstructions}</p>
         
        
        
                <img class='img-fluid img-thumbnail' src="${formattedProdData.img}">
        
            </div > 
            <ul class="list-group p-2 p-md-4">
            <h6 class='text-primary fs-4 fw-bold'>Ingredients</h6> 
            ${Object.entries(formattedProdData.ingredients).map(([key, val]) => `<li class="list-group-item">${key} : ${val}</li>`).join('')}
            </ul>
         
            </div>
           
       
        </div>`
            return div;
        }.bind(this)

    }

}

export default new ProductPage().build()