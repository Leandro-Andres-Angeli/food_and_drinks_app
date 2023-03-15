
export  const previewCardHTML = (name,img,id,rating,fontSize)=>{

  return  `<li class="list-group-item d-flex border-1 preview-card " data-id="${id}">
  <a href="${window.location.hash}&id=${id}" class='preview-product-card-link overflow-hidden d-flex text-decoration-none'>     <img class=' img-fluid w-lg-50 w-25' src="${img}"/>
   <div class='text-truncate my-3 mx-1 ps-2'>
    <h2 class='${fontSize} text-primary text-truncate mw-75 hover-secondary'>${name}</h2>
   ${ rating &&  `<${rating}></${rating}>  ` || ''}

   <p class='text-gray-700'> ${new Intl.NumberFormat('es-AR', {
     style: 'currency',
     currency: 'ARS',
   }).format(25)}</p>
    </div>
    </a>

  </li>`;
}
 const previewCard = function (data , rating,formatData = (data)=>data.filter((e,i)=> i <= 2) ) {

    this.addEventListener('click',(e)=>{
      
      if(e.target.closest('a') === null ||   !e.target.closest('a').classList.contains('preview-product-card-link')){
         return;  
      }else
      window.location = e.target.closest('a').href;
      
    })
   
    
    const [name, img,id] = formatData(Object.values(arguments[0]));
   
    return  previewCardHTML(name,img,id,'rating-container','fs-6')
  };
export default previewCard  