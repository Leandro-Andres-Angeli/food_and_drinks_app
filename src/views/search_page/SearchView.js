 import  { formatApiData } from "../../utils/formatProductData";
 import getData from "../../apis/getData";
 import previewCard, { previewCardHTML } from "../category/components/PreviewCard";
const resultsHTMLFunc = () => {
    const resultsTag = document.createElement('div');
    ['container', 'p-2', 'p-lg-4'].forEach(cl => resultsTag.classList.add(cl))
    return resultsTag;
}




class RenderSearch {
    constructor(results) {
        this.results = results;
        [this.meals , this.drinks ] = this.results;
        
        this.resultsHTML = resultsHTMLFunc()

    }
    renderComponent() {
      
      
       if (Object.values(this.meals)[0] === null && Object.values(this.drinks)[0] === null) this.resultsHTML.innerHTML = `<h2 class='text-primary m-5 p-5'>No products found , try again</h2>`
       
       else   this.resultsHTML.innerHTML =`<div>
       ${ Object.entries(this.meals).concat(Object.entries(this.drinks)).map(([keys,productEntries])=>{

         if(keys && productEntries !== null) return `<ul class='list-group' >
          <h3 class='text-primary text-underline text-uppercase'> ${keys}</h3> 

          ${productEntries?.map( prodEntry   =>{
          
            const destructureObj = (data)=>[ data.name,data.img,data.id ]
            const key =  `${keys[0].toUpperCase()+keys.slice(1,keys.length-1)}`;
             const parsedData = formatApiData.formatTypes(key,prodEntry);
          
             const {name,img,id} = parsedData; 
             const searchCard = previewCard(parsedData,undefined,undefined,undefined,destructureObj(parsedData))
             
            return `${previewCardHTML(name,img,id)}` })}
         </ul>`
       }).join('')  }
     
       </div>`;
      
        return this.resultsHTML.innerHTML;
    }

}
const resetForm =()=>document.querySelector('form').reset()
const searchView = async (query = window.location.hash.split('query=')[1],callback = resetForm) => {
    
    
    const searchResults = 
       await  Promise.all( [getData(`${process.env.API_ENDPOINT}search.php?s=${query}`),getData(`${process.env.API_DRINKS_ENDPOINT}search.php?s=${query}`)])
      
   
    callback()
       return `<div class="container" > ${new RenderSearch(searchResults).renderComponent()}</div> `
    
    
}

 export default searchView;