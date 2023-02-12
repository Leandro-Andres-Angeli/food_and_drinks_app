const dropdownMenu = function(categories,type){
    console.log(arguments)
    console.log(arguments[0])
   const objKey =  Object.keys(arguments[0])[0]
   return `  
    <li class="nav-item dropdown">
    <button class="nav-link dropdown-toggle  text-gray-800"  id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
   ${ Object.keys(categories) != type && type || ''}  ${Object.keys(categories)}
    </button>
      <ul class="dropdown-menu   border-top-2 border-primary border-bottom-0 border-end-0 border-start-0" aria-labelledby="navbarDropdown">
    ${arguments[0][`${objKey}`].map(
        ({ idCategory: category, strCategory: name }) =>
          `<li><a class="dropdown-item" href="#/${Object.keys(
            categories
          )}/?${name}"
          >${name}</a></li>`
      )
      .join('')}
      
      
    </ul>
    </li>` || console.log('bug')
}
export default dropdownMenu;
{/* <ul class="dropdown-menu   border-top-2 border-primary border-bottom-0 border-end-0 border-start-0" aria-labelledby="navbarDropdown">
${mealCategories.categories
  .map(
    ({ idCategory: category, strCategory: name }) =>
      `<li><a class="dropdown-item" href="#/${Object.keys(
        mealCategories
      )}/?${name}"
      >${name}</a></li>`
  )
  .join('')}
  
  
</ul> */}