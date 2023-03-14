class RenderSearch {
    constructor(meals, drinks) {
        this.meals = meals;
        this.drinks = drinks

    }
    renderComponent() {
        // console.log('render funcc')
        console.log( Object.values(this.meals)[0] === null )
        console.log(this.drinks)
        if (Object.values(this.meals)[0] === null && Object.values(this.drinks)[0] === null) return `<div>no results</div>`
        else return `<div>${JSON.stringify(this.meals)}${JSON.stringify(this.drinks)}</div>`
    }

}
const searchView = (searchResults) => {

    const [meals, drinks] = searchResults;
    console.log('meals', meals)
    console.log('drinks', drinks)
    //    return `<div class="container" > ${JSON.stringify(searchResults)}</div> `
    return new RenderSearch(meals, drinks).renderComponent()
}
export default searchView;