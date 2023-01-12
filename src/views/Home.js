// import getData from '../apis/getData';
// const header = async () => {
//   const sliderData = await getData(
//     'https://www.themealdb.com/api/json/v1/1/random.php'
//   );
//   console.log(sliderData);
//   //   const view = '<h1>Hola</h1>';
//   //   return view;
// };
// const Home = async () => {
//   const sliderData = await getData(
//     'https://www.themealdb.com/api/json/v1/1/random.php'
//   );
//   console.log(sliderData);
//   return '<h1>data</h1>';
// };

import getData from '../apis/getData';
import HomeSlider from '../components/home/HomeSlider';

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

  return HomeSlider(randomMeals);
};
