import AnimatedButton from '../../shared/AnimatedButton';
import './home_slider.scss';
import { SliderBtn, SliderImg, SliderTextContent } from './SliderComponents';

const HomeSlider = (randomMeals) => {
  const btnSliderArticle = new AnimatedButton('order now')
    .addClassLists(['carousel-btn'])
    .build();

  document.documentElement.style.setProperty(
    '--navbar-height',
    document.querySelector('.header-nav')?.getClientRects()[0].height + 'px'
  );

  let carousel = `
  <main>
  <div id="carouselExampleControls"   class="carousel background-yellow-100 slide  py-5 px-md-5" >
  <div class="carousel-inner  p-4">`;
  randomMeals.map(({ meals }, i) => {
    const { strMeal, strSource, strMealThumb, strInstructions } = meals[0];

    const sliderTextContent = new SliderTextContent(
      strMeal,
      strInstructions,
      undefined
    );
    const sliderImg = new SliderImg(strMealThumb);
    return (carousel += `<div class="carousel-item ${
      (i === 0 && 'active') || ''
    }  ">

  <div class='row'>
    ${sliderTextContent.build()}
    ${sliderImg.build()}
</div></div>

  
 `);
  });
  carousel += `</div>`;
  [
    Object.create({ direction: `prev`, textContext: `previous` }),
    Object.create({ direction: `next`, textContext: `Next` }),
  ].map((btnData) => {
    return (carousel += new SliderBtn(btnData).build());
  });
  carousel += `</div></main>`;

  return carousel;
};

export default HomeSlider;
