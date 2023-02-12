
import './category_component.scss';

import CategorySection from './components/CategorySection';




class CategoryComponent {
  constructor() {
    this.root = CategorySection
    this.app = document.querySelector('.app')
    document.querySelector('.app').addEventListener('click', (e) => {
      e.preventDefault()
      this.handlePaginationLink(e)
    })

  }
  handlePaginationLink(e) {

    if (!e.target.closest('ul') || !e.target.closest('ul').classList.contains('pagination')) return
    else {


      let translateVal = document.querySelector(`.product-category-cards [data-index="${e.target.tabIndex}"]`).clientWidth * (+e.target.tabIndex)

      this.app.querySelector('.product-category-cards').animate([{ transform: `translateX(${-translateVal}px)` }], { duration: 1000, fill: 'both' })
    }
  }

}
export default new CategoryComponent().root;
