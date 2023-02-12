const productNav = (pages ) => {
    console.log(pages);
   
    return `<nav class='pe-4' aria-label="...">
    <ul class="pagination">
        ${(() => {
          let listItems = '';
          for (let i = 1; i < pages + 1; i++) {
            listItems += `    <li class="page-item ">
               <a class="page-link" href="#" tabindex="${i-1}" aria-disabled="true">${i}</a>
             </li>`;
          }
          return listItems;
        })()}
    </ul>
  </nav>`;
  };
  export default productNav