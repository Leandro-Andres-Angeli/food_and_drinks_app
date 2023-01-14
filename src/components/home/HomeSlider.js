import './home_slider.scss';
const HomeSlider = (randomMeals) => {
  document.documentElement.style.setProperty(
    '--navbar-height',
    document.querySelector('nav').getClientRects()[0].height + 'px'
  );

  // data-bs-ride="carousel"
  return (
    randomMeals
      .map(({ meals }, i) => {
        const { strMeal, strSource, strMealThumb, strInstructions } = meals[0];
        console.log(strMeal);
        return (
          (i === 0 &&
            `<div id="carouselExampleControls"   class="carousel slide  py-5" >
            
<div class="carousel-inner  p-4">
<div class="carousel-item active ">
  
  <div class='row'>
  <div class='col-12 col-md-6 p-2 p-md-4  d-flex flex-column gap-4 '>
  <h6>Welcome to out store</h6>
  <h2 class='text-primary'>${strMeal}</h2>
  <p>${strInstructions}</p>
  <button class='btn btn-small btn-primary carousel-btn'>order now</button>
  </div>
  <div class='col-6 d-none d-md-block'   >
            <img src="${strMealThumb}" class="img-fluid carousel-img" alt="...">
  </div>
  </div>
  

</div>`) ||
          ` <div class="carousel-item ">

<div class='row'>
<div class='col-12 col-md-6 p-2 p-md-4  d-flex flex-column gap-4 '>
<h6>Welcome to out store</h6>
<h2 class='text-blue'>${strMeal}</h2>
<p>${strInstructions}</p>
<button class='btn btn-small btn-primary carousel-btn'>order now</button>
</div>
<div class='col-6 d-none d-md-block'   >
            <img src="${strMealThumb}" class="img-fluid carousel-img" alt="...">
  </div>
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
