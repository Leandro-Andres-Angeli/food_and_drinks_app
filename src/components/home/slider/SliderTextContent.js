class SliderTextContent {
  constructor(title, textContext, imgLink, btn) {
    this.title = title;
    this.textContext = textContext;
    this.imgLink = imgLink;
    this.btn = btn;
    this.tag = ` <h6>Welcome to out store</h6>
        <h2 class='text-primary'>${strMeal}</h2>
        <p>${strInstructions}</p>
        ${btnSliderArticle}
                  
        </div>
        <div class='col-6 d-none d-md-block'   >
                  <img src="${strMealThumb}" class="img-fluid carousel-img" alt="...">
        </div>`;
  }
}
