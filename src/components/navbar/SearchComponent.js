import { async } from "regenerator-runtime";
import getData from "../../apis/getData";
import { asyncRender } from "../../utils/renders";
import searchView from "../../views/search_page/SearchPage";

class SearchComponent {
  constructor(children) {
    this.app = document.querySelector('.app')
    this.children = children;
    this.testEl = document.createElement('button')



    this.root = `    <form class="d-flex">
        <input
          class="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          required
          name="searchVal"
        />
    
        ${this.children && this.children}
      </form>`
    this.testEl.addEventListener('click', () => console.log('clicked'))
    this.handleSubmit()
  }
  handleSubmit() {
    console.log('method')
    document.querySelector('header').addEventListener('click',  (e)=> {
      if (e.target.type !== "submit") return;
      console.log('loaded')
      e.target.parentElement.addEventListener('submit',async  (e)=> {
        console.log('this ===',this)
        e.preventDefault()
        const { value: inputSearchVal } = e.target.searchVal;
        console.log(inputSearchVal)
        const searchResult = await  Promise.all( [getData(`${process.env.API_ENDPOINT}search.php?s=${inputSearchVal}`),getData(`${process.env.API_DRINKS_ENDPOINT}search.php?s=${inputSearchVal}`)])
        console.log(searchResult)
        const renderResult =  await asyncRender(()=>searchView(searchResult), this.app);
        e.target.reset()

      })


    })

  }
  build() {
    return this.root
  }
}
export default SearchComponent;