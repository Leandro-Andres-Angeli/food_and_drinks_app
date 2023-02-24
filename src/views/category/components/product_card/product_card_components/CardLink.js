import { buttonActions } from "./ProductCardUtilities"





class CardLink {
    constructor({ icon, tag,action }) {
      this.tag = `<${tag}  data-action="${action}" ${buttonActions[`${action}`].attributes()}  class='btn btn-light btn-sm product-card-link background-gray-400'  >${icon}</${tag}>`
      
    }
  
    build() {
      return this.tag;
    }
  }
  export default CardLink;