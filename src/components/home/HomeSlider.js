import './home_slider.scss';
const HomeSlider = (randomMeals) => {
  document.documentElement.style.setProperty(
    '--navbar-height',
    document.querySelector('nav').getClientRects()[0].height + 'px'
  );
  return (
    randomMeals
      .map(({ meals }, i) => {
        const { strMeal, strSource, strMealThumb, strInstructions } = meals[0];
        console.log(strMeal);
        return (
          (i === 0 &&
            `<div id="carouselExampleControls"   class="carousel slide" data-bs-ride="carousel">
<div class="carousel-inner p-5">
<div class="carousel-item active ">
  <img src="${strMealThumb}" class="d-block w-100" alt="...">
  <div class="carousel-caption  d-md-block">
  <h5>${strMeal}</h5>
  <p>${strInstructions}</p>
</div>
</div>`) ||
          ` <div class="carousel-item ">
<img src="${strMealThumb}" class="d-block w-100" alt="...">
<div class="carousel-caption  d-md-block">
<h5>${strMeal}</h5>
<p>${strInstructions}</p>
</div>
</div>`
        );
      })
      .join('') +
    '</div>' +
    `<button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
  <span class="visually-hidden">Previous</span>
</button>
<button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
  <span class="carousel-control-next-icon" aria-hidden="true"></span>
  <span class="visually-hidden">Next</span>
</button>
</div>`
  );
};
export default HomeSlider;
