import { async } from "regenerator-runtime";
import getData from "../../apis/getData";
import getId from "../../utils/getId";

class ProductPage {
    constructor(test = 2) {
        this.test = test;
        this.fetchData = getData;
        this.endpoint ;
    }
  build() {
     return  async function(){
        const id = getId();
        console.log(id)
        this.endpoint =  window.location.hash.includes('categories') ? process.env.API_ENDPOINT : process.env.API_DRINKS_ENDPOINT;
       console.log(this.endpoint)
        const data =  await this.fetchData(`${this.endpoint}lookup.php?i=${id}`)
        console.log(data)
        const div = await `<div>${JSON.stringify(data)}</div>`
        return div;
     }.bind(this)
       
    }

}

export default   new ProductPage().build()