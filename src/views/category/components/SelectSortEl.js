
class SelectSortEl {
    constructor(){
      
      this.fields = ['name','name-reverse','price','price-reverse']
      this.root = `
      <form class='container '>
      <label class='d-block text-primary text-capitalize'>sort by</label>
      <select>
        ${this.fields.map((field,i)=>   `<option value ="${this.formatOptionValue(field)}" ${i === 0 && "required"}>${field}</option>`   ).join('')}
        </select>
        </form>`
      this.order =  this.handleFormSelection
    }
    formatOptionValue(val){
      return val.split('-').map((word,i)=> i ===1 ? word[0].toUpperCase()+ word.slice(1) : word).join('')
    } 
    handleFormSelection(callback){
      document.querySelector('.app').addEventListener('change',(e)=>{
        if(!e.target.closest('select')){
          return
        }
       
         callback(e.target.value)
        
      })
    }
  }
  export default SelectSortEl