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
        // ev.closest !== null ||
        // ev.closest('main').querySelector('div').classList.contains('carousel')

        //||
        //   ev.target
        //     .closest('main')
        //     .querySelector('div')
        //     .classList.contains('carousel');
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

        // !== null &&
        //   ev.target
        //     .closest('main')
        //     .querySelector('div')
        //     .classList.contains('carousel');
      },
      // condition:
      //   e.closest('main') !== null &&
      //   e
      //     .closest('main')
      //     .querySelector('div')
      //     .classList.contains('carousel'),
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
      // if (mEvent.condition(e)) {
      //   const sliderBtns = [
      //     ...document.querySelectorAll('#carouselExampleControls .slider_btn'),
      //   ].map((btnContainer) => btnContainer.querySelector('span'));
      //   sliderBtns.forEach((sliderBtn) => {
      //     return sliderBtn.classList.toggle('show_btn');
      //   });
      // } else return;
    });
  });
  // document.addEventListener('mouseover', function (e) {
  //   if (
  //     e.target.closest('main') ||
  //     e.target
  //       .closest('main')
  //       .querySelector('div')
  //       .classList.contains('carousel')
  //   ) {
  //     const sliderBtns = [
  //       ...document.querySelectorAll('#carouselExampleControls .slider_btn'),
  //     ].map((btnContainer) => btnContainer.querySelector('span'));
  //     sliderBtns.forEach((sliderBtn) => {
  //       return sliderBtn.classList.add('show_btn');
  //     });
  //   } else return;
  // });

  ///////////////
  // if (
  //   !e.target.closest('main') ||
  //   !e.target
  //     .closest('main')
  //     .querySelector('div')
  //     .classList.contains('carousel')
  // )
  //   return;

  // const sliderBtns = [
  //   ...document.querySelectorAll('#carouselExampleControls .slider_btn'),
  // ].map((btnContainer) => btnContainer.querySelector('span'));
  // sliderBtns.forEach((sliderBtn) => {
  //   return sliderBtn.classList.add('show_btn');
  // });
  //////////
  // document.addEventListener('mouseout', function (e) {
  //   if (
  //     e.target.closest('main') !== null &&
  //     e.target
  //       .closest('main')
  //       .querySelector('div')
  //       .classList.contains('carousel')
  //   ) {
  //     const sliderBtns = [
  //       ...document.querySelectorAll('#carouselExampleControls .slider_btn'),
  //     ].map((btnContainer) => btnContainer.querySelector('span'));
  //     sliderBtns.forEach((sliderBtn) => {
  //       return sliderBtn.classList.remove('show_btn');
  //     });
  //   } else {
  //     return;
  //   }
  // });
  return HomeSlider(randomMeals);
};
