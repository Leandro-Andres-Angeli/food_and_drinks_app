import { buttonActions } from "./Utils"





class CardLink {
    constructor({ icon, tag,action }) {
      this.tag = `<${tag}  data-action="${action}" ${buttonActions[`${action}`].attributes()}  class='btn btn-light btn-sm product-card-link background-gray-400'  >${icon}</${tag}>`
      
    }
    handleBtnAction(e){
      console.log(e)
    }
    build() {
      return this.tag;
    }
  }
  export default CardLink;