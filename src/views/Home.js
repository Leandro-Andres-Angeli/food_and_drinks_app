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
  [
    {
      mouseEvent: 'mouseover',
      action: 'add',

      condition: function (ev) {
        return Boolean(!!ev.closest?.('main'));
      },
    },
    {
      mouseEvent: 'mouseout',

      action: 'remove',

      condition: function (ev) {
        return Boolean(ev.closest?.('main'));
      },
    },
  ].map(({ mouseEvent, log, condition, action }) => {
    document.addEventListener(mouseEvent, function (e) {
      const sliderBtns = [
        ...document.querySelectorAll('#carouselExampleControls .slider_btn'),
      ].map((btnContainer) => btnContainer.querySelector('span'));
      const validEvent = condition(e.target);

      return validEvent
        ? sliderBtns.forEach((sliderBtn) => {
            return sliderBtn.classList[`${action}`]('show_btn');
          })
        : null;
    });
  });
  return HomeSlider(randomMeals);
};
