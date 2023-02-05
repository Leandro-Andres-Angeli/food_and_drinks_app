import getData from '../../apis/getData';

const CategoryComponent = async () => {
  const split = window.location.hash.split('?');
  const category = split.pop().replaceAll('category=', '').trim();
  const categoryFetch = await getData(
    `${process.env.API_ENDPOINT}filter.php?c=${category}`
  );
  console.log(categoryFetch);
  return `<div> <h1>Category</h1></div>`;
};
export default CategoryComponent;
