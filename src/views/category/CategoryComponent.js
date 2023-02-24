
import './category_component.scss';

import CategorySection from './components/CategorySection';
import { handleProductCardButtons, productModal } from './components/product_card/product_card_components/ProductCardUtilities';




const checkDOMTarget = function (tag, classList) {

  return !this.target.closest(tag) || !this.target.closest(tag).classList.contains(classList)

}


class CategoryComponent {
  constructor() {

    this.root = CategorySection
    this.app = document.querySelector('.app')

    document.querySelector('.app').addEventListener('click', (e) => {
      e.preventDefault()
      this.handlePaginationLink(e)
      handleProductCardButtons(e)
     
    })

   productModal(this.app) 

  }
  handleModal() {

  }
  handlePaginationLink(e) {

    if (checkDOMTarget.call(e, 'ul', 'pagination')) return
    else {


      let translateVal = document.querySelector(`.product-category-cards [data-index="${e.target.tabIndex}"]`).clientWidth * (+e.target.tabIndex)

      this.app.querySelector('.product-category-cards').animate([{ transform: `translateX(${-translateVal}px)` }], { duration: 1000, fill: 'both' })
    }
  }



}
export default new CategoryComponent().root;
