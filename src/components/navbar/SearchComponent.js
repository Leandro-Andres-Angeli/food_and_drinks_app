import { async } from "regenerator-runtime";
import getData from "../../apis/getData";
import { asyncRender } from "../../utils/renders";
import searchView from "../../views/search_page/SearchView";

class SearchComponent {
  constructor(children) {
    this.app = document.querySelector('.app')
    this.header = document.querySelector('header')
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

    this.handleSubmit()
  }
  resetNavStyles(){
    
     const removeNavLinks = [...this.header.querySelectorAll('.nav-link'),...this.header.querySelectorAll('.dropdown-item')].filter(e => e.classList.contains('active')).map(e => e.classList.remove('active'))
     
  }
 
  handleSubmit() {
   
    document.querySelector('header').addEventListener('click',  (e)=> {
      if (e.target.type !== "submit") return;
     
    
      e.target.parentElement.addEventListener('submit',async  (e)=> {
      
        e.preventDefault()
   
        window.location.hash = `/search?query=${e.target.searchVal.value}`

       
        this.resetNavStyles()
       
      })
      

    })

  }
  build() {
    return this.root
  }
}
export default SearchComponent;