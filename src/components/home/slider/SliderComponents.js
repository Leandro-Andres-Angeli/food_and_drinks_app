import AnimatedButton from '../../shared/AnimatedButton';

const btnSliderArticle = new AnimatedButton('order now')
  .addClassLists(['carousel-btn'])
  .build();
class SliderComponent {
  constructor() { }
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
    <div class='col-12 col-md-6 p-2 p-md-4 order-1 order-md-0 d-flex flex-column gap-4  '>
    <h6>Welcome to out store</h6>
        <h2 class='text-primary text-truncate'>${title}</h2>
        <p class='line-clamp'>${textContext}</p>
        ${btn}
                  
        </div>
      `;
  }
}
class SliderImg extends SliderComponent {
  constructor(src) {
    super();
    this.tag = ` 
      <div class='col-md-6 mb-3 mb-md-2 d-block col-12 col p-3 text-center'   >
            <img src="${src}" class="img-fluid carousel-img rounded w-100" alt="...">
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
