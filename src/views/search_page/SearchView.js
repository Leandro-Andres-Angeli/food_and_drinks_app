 import formatProductData, { formatApiData } from "../../utils/formatProductData";
// import previewCard from "../category/components/PreviewCard";
const resultsHTMLFunc = () => {
    const resultsTag = document.createElement('div');
    ['container', 'p-2', 'p-lg-4'].forEach(cl => resultsTag.classList.add(cl))
    return resultsTag;
}
import getData from "../../apis/getData";


class RenderSearch {
    constructor(results) {
        this.results = results;
        [this.meals , this.drinks ] = this.results;
        
        this.resultsHTML = resultsHTMLFunc()

    }
    renderComponent() {
        console.log(this.results)
        console.log( this.meals)
        // console.log('render funcc')
        // console.log( Object.values(this.meals)[0] === null )
        // console.log(this.drinks)
        // if (Object.values(this.meals)[0] === null && Object.values(this.drinks)[0] === null) return `<div class >no results</div>`
        // else return `<div>
        // ${JSON.stringify(this.meals)}${JSON.stringify(this.drinks)}
        // </div>`

        //    console.log(formatProductData(this.meals.meals[0],'modal' ))
        // const testData = { "idMeal": "52776", "strMeal": "Chocolate Gateau", "strDrinkAlternate": null, "strCategory": "Dessert", "strArea": "French", "strInstructions": "Preheat the oven to 180°C/350°F/Gas Mark 4. Grease and line the base of an 8 in round spring form cake tin with baking parchment\r\nBreak the chocolate into a heatproof bowl and place over a saucepan of gently simmering water and stir until it melts. (or melt in the microwave for 2-3 mins stirring occasionally)\r\nPlace the butter and sugar in a mixing bowl and cream together with a wooden spoon until light and fluffy. Gradually beat in the eggs, adding a little flour if the mixture begins to curdle. Fold in the remaining flour with the cooled, melted chocolate and milk. Mix until smooth.\r\nSpread the mixture into the cake tin and bake for 50-55 mins or until firm in the centre and a skewer comes out cleanly. Cool for 10 minutes, then turn out and cool completely.", "strMealThumb": "https://www.themealdb.com/images/media/meals/tqtywx1468317395.jpg", "strTags": "Cake,Chocolate,Desert,Pudding", "strYoutube": "https://www.youtube.com/watch?v=dsJtgmAhFF4", "strIngredient1": "Plain chocolate", "strIngredient2": "Butter", "strIngredient3": "Milk", "strIngredient4": "Eggs", "strIngredient5": "Granulated Sugar", "strIngredient6": "Flour", "strIngredient7": "", "strIngredient8": "", "strIngredient9": "", "strIngredient10": "", "strIngredient11": "", "strIngredient12": "", "strIngredient13": "", "strIngredient14": "", "strIngredient15": "", "strIngredient16": null, "strIngredient17": null, "strIngredient18": null, "strIngredient19": null, "strIngredient20": null, "strMeasure1": "250g", "strMeasure2": "175g", "strMeasure3": "2 tablespoons", "strMeasure4": "5", "strMeasure5": "175g", "strMeasure6": "125g", "strMeasure7": "", "strMeasure8": "", "strMeasure9": "", "strMeasure10": "", "strMeasure11": "", "strMeasure12": "", "strMeasure13": "", "strMeasure14": "", "strMeasure15": "", "strMeasure16": null, "strMeasure17": null, "strMeasure18": null, "strMeasure19": null, "strMeasure20": null, "strSource": "http://www.goodtoknow.co.uk/recipes/536028/chocolate-gateau", "strImageSource": null, "strCreativeCommonsConfirmed": null, "dateModified": null }
        // const formatted = formatProductData(testData,'modal')
        // console.log(formatted) 
        // Object.entries({ ...this.meals, ...this.drinks }).map(([key, values]) => `<ul>
        // ${key}
        // ${values.map(val => `<li>${val}</li>`)}
        // </ul>` )


        //////////////
        // if (Object.values(this.meals)[0] === null && Object.values(this.drinks)[0] === null) this.resultsHTML.innerHTML = `<h2 class='text-primary m-5 p-5'>No products found , try again</h2>`
        // else   this.resultsHTML.innerHTML = Object.entries({ ...this.meals, ...this.drinks }).map(([key, values]) => `<ul  class="list-group" >
        // <h3 class='text-primary text-capitalize'> ${key}</h3>
        // ${values.map((val) =>  `<li>${ key , JSON.stringify(formatProductData(val,'search'))} </li>`).join('')}
        // </ul>` ).join('')
        //     this.resultsHTML.innerHTML = `

        //      ${JSON.stringify(this.meals)}${JSON.stringify(this.drinks)}
        //      `
        //     this.resultsHTML.innerHTML = Object.entries({ ...this.meals, ...this.drinks }).map(([key, values]) => `<ul  class="list-group" >
        // <h3 class='text-primary text-capitalize'> ${key}</h3>
        // ${values.map(val => `<li class='list-group-item'>${JSON.stringify(val)}</li>`).join('')}
        // </ul>` ).join('')
       if (Object.values(this.meals)[0] === null && Object.values(this.drinks)[0] === null) this.resultsHTML.innerHTML = `<h2 class='text-primary m-5 p-5'>No products found , try again</h2>`
        // return this.resultsHTML.outerHTML
        // else 
       else   this.resultsHTML.innerHTML =`<div>${JSON.stringify( this.results)}</div>`;
        // console.log(this.resultsHTML)
        return this.resultsHTML.outerHTML;
    }

}
resetForm =()=>document.querySelector('form').reset()
const searchView = async (query = window.location.hash.split('query=')[1],callback = resetForm) => {
    
    
    const searchResults = 
       await  Promise.all( [getData(`${process.env.API_ENDPOINT}search.php?s=${query}`),getData(`${process.env.API_DRINKS_ENDPOINT}search.php?s=${query}`)])
      
   
    callback()
       return `<div class="container" > ${new RenderSearch(searchResults).renderComponent()}</div> `
    // return new RenderSearch(meals, drinks).renderComponent()
    
}

 export default searchView;