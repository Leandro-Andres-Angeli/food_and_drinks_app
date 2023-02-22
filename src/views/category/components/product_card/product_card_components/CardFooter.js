import { iconsList } from "../../../../../utils/icons/icons";

class CardFooter {
    constructor() {
      this.tag = `<div class='card-footer text-white product-card-footer text-capitalize d-flex align-items-center'>
      ${iconsList.cartOutline.component}
      add to cart
      </div>`
    }
    build() {
      return this.tag;
    }
  
  }
  export default CardFooter