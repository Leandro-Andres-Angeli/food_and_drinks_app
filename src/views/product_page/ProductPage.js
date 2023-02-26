ProductPage = ()=>{
    return `<div>Prod</div>`
}
class ProductSection {
    constructor(content = ProductPage()){
        this.content = content;
        
    }
    build(){
        return document.querySelector('.app').innerHTML = this.content; 
    }
}
export default new ProductSection().build();