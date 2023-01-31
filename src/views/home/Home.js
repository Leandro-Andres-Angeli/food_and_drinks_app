import getData from '../../apis/getData';
import HomeSlider from '../../components/home/slider/HomeSlider';
import CategoriesSection from './home_components/CategoriesSection';

// export default Home;
const Home = async () => {
  const randomMeal = () =>
    getData('https://www.themealdb.com/api/json/v1/1/random.php');
  const randomMeals = await Promise.all([
    randomMeal(),
    randomMeal(),
    randomMeal(),
    randomMeal(),
    randomMeal(),
  ]);

  return HomeSlider(randomMeals) + (await CategoriesSection());
};
export default Home;
