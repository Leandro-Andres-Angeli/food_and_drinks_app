 class SearchComponent{
    constructor(children){
      this.children = children;
      this.testEl = document.createElement('button')
      this.testEl.classList.add('test-className')
      this.testEl.textContent = 'testEl'
    
      console.log(this.testEl)
        this.root = `    <form class="d-flex">
        <input
          class="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        ${this.testEl.outerHTML}
        ${this.children && this.children}
      </form>` 
      this.testEl.addEventListener('click',()=>console.log('clicked'))
      this.handleSubmit()
    }
  handleSubmit(){
    console.log('method')
    document.querySelector('header ').addEventListener('click',(e)=>{
      if(!e.target.classList.contains("test-className"))return;
      console.log(e.target)
    })
  }    
  build(){
        return this.root
    }  
}
export default  SearchComponent;