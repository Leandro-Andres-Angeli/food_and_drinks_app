
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
    }
    handleFormSelection(){

    }
  }
  export default SelectSortEl