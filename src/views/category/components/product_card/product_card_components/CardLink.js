import { buttonActions } from "./ProductCardUtilities"





class CardLink {
    constructor({ icon, tag,action ,id}) {
      this.id = id;
      this.tag = `<${tag}  data-action="${action}"  ${buttonActions[`${action}`].attributes()}  class='btn btn-light btn-sm product-card-link background-gray-400'  >${icon}</${tag}>`
      
    }
  
    build() {
      const link = document.createElement('div');
      link.insertAdjacentHTML('afterbegin',this.tag);
      
      if(this.id !== undefined)link.firstChild.href= `${window.location.hash}&id=${this.id}`;
      return link.innerHTML;
    }
  }
  export default CardLink;