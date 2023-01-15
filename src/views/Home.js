import getData from '../apis/getData';
import HomeSlider from '../components/home/slider/HomeSlider';

// export default Home;
export const Home = async () => {
  const randomMeal = () =>
    getData('https://www.themealdb.com/api/json/v1/1/random.php');
  const randomMeals = await Promise.all([
    randomMeal(),
    randomMeal(),
    randomMeal(),
    randomMeal(),
    randomMeal(),
  ]);
  document.addEventListener('mouseover', function (e) {
    if (
      !e.target.closest('main') ||
      !e.target
        .closest('main')
        .querySelector('div')
        .classList.contains('carousel')
    )
      return;

    const sliderBtns = [
      ...document.querySelectorAll('#carouselExampleControls .slider_btn'),
    ].map((btnContainer) => btnContainer.querySelector('span'));
    sliderBtns.forEach((sliderBtn) => {
      return sliderBtn.classList.add('show_btn');
    });
  });
  document.addEventListener('mouseout', function (e) {
    if (
      e.target.closest('main') !== null &&
      e.target
        .closest('main')
        .querySelector('div')
        .classList.contains('carousel')
    ) {
      const sliderBtns = [
        ...document.querySelectorAll('#carouselExampleControls .slider_btn'),
      ].map((btnContainer) => btnContainer.querySelector('span'));
      sliderBtns.forEach((sliderBtn) => {
        return sliderBtn.classList.remove('show_btn');
      });
    } else {
      return;
    }
  });
  return HomeSlider(randomMeals);
};
