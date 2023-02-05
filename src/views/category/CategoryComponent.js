const CategoryComponent = () => {
  const split = window.location.hash.split('?');
  const category = split.pop().replaceAll('category=', '').trim();
  console.log(category);
  return `<div> <h1>Category</h1></div>`;
};
export default CategoryComponent;
