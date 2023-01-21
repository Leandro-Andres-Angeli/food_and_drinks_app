import AnimatedButton from '../../shared/AnimatedButton';

const btnSliderArticle = new AnimatedButton('order now')
  .addClassLists(['carousel-btn'])
  .build();
class SliderComponent {
  constructor() {}
  build() {
    return this.tag;
  }
}
class SliderTextContent extends SliderComponent {
  constructor(title, textContext, btn = btnSliderArticle) {
    super();
    this.title = title;
    this.textContext = textContext;

    this.btn = btn;
    this.tag = ` 
    <div class='col-12 col-md-6 p-2 p-md-4  d-flex flex-column gap-4 '>
    <h6>Welcome to out store</h6>
        <h2 class='text-primary'>${title}</h2>
        <p>${textContext}</p>
        ${btn}
                  
        </div>
      `;
  }
}
class SliderImg extends SliderComponent {
  constructor(src) {
    super();
    this.tag = ` 
      <div class='col-6 d-none d-md-block'   >
            <img src="${src}" class="img-fluid carousel-img rounded" alt="...">
  </div>
      `;
  }
}
class SliderBtn extends SliderComponent {
  constructor({ direction, textContext }) {
    super();
    this.tag = ` 
    <button class="slider_btn carousel-control-${direction}" type="button"  data-bs-target="#carouselExampleControls" data-bs-slide="${direction}">
    <span class="carousel-control-${direction}-icon" aria-hidden="true"></span>
    <span class="visually-hidden">${textContext}</span>
  </button>
      `;
  }
}

export { SliderTextContent, SliderImg, SliderBtn };
