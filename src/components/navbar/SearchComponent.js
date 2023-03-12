 class SearchComponent{
    constructor(children){
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
      this.testEl.addEventListener('click',()=>console.log('clicked'))
      this.handleSubmit()
    }
  handleSubmit(){
    console.log('method')
    document.querySelector('header').addEventListener('click',function(e){
     if(e.target.type !== "submit") return;
      console.log('loaded')
       e.target.parentElement.addEventListener('submit',(e)=>{
        e.preventDefault()
        console.log(e.target.searchVal.value)
       })

    })
    // document.querySelector('header').addEventListener('click',(e)=>{
    //   if(!e.target.classList.contains("test-className"))return;
    //   console.log('into funct')
      
    //   console.log(e.target.parentElement)
    // })
  }    
  build(){
        return this.root
    }  
}
export default  SearchComponent;