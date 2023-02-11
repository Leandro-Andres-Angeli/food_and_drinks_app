class RatingContainer extends HTMLElement {
    constructor() {
      super();
  
      this.innerHTML = `<span class='text-stroke'>${'⭐'.repeat(5)}</span> `;
    }
  }
  export default customElements.define('rating-container', RatingContainer);