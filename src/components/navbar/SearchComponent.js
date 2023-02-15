 class SearchComponent{
    constructor(children){
        this.root = `    <form class="d-flex">
        <input
          class="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        ${children && children}
      </form>`   }

  build(){
        return this.root
    }  
}
export default  SearchComponent;