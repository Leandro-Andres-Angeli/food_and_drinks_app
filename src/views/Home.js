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
      func: function () {
        console.log('on');
      },
      condition: function (ev) {
        return Boolean(!!ev.closest?.('main'));
      },
    },
    {
      mouseEvent: 'mouseout',

      log: (e) => {
        console.log(e);
      },
      action: 'remove',

      condition: function (ev) {
        console.log(ev);
        return Boolean(ev.closest?.('main'));
      },
    },
  ].map(({ mouseEvent, log, condition, action }) => {
    document.addEventListener(mouseEvent, function (e) {
      // console.log(e.target);
      // log(e.target);
      const sliderBtns = [
        ...document.querySelectorAll('#carouselExampleControls .slider_btn'),
      ].map((btnContainer) => btnContainer.querySelector('span'));
      const validEvent = condition(e.target);
      console.log(validEvent);
      return validEvent
        ? sliderBtns.forEach((sliderBtn) => {
            console.log(action.valueOf());
            return sliderBtn.classList[`${action}`]('show_btn');
          })
        : null;
    });
  });
  return HomeSlider(randomMeals);
};
