
class SelectSortEl {
    constructor(){
      this.fields = ['name','name-reverse','price','price-reverse']
      this.root = `
      <form class='container '>
      <label class='d-block text-primary text-capitalize'>sort by</label>
      <select>
        ${this.fields.map((field,i)=>   `<option value ="${field}" ${i === 0 && "required"}>${field}</option>`   ).join('')}
        </select>
        </form>`
      this.order =  this.handleFormSelection
    }
    handleFormSelection(callback){
      document.querySelector('.app').addEventListener('change',(e)=>{
        if(!e.target.closest('select')){
          return
        }
        console.log('call')
         callback(e.target.value)
        
      })
    }
  }
  export default SelectSortEl