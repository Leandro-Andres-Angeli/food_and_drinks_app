const productCard = function({id,img,product,price}) {
  // console.log(arguments)

  // const productData = arguments[0]
  // const formatProductData = function(){
  //   let formattedProdData = {price}
  //   console.log(productData)
  //   for (const key in productData) {
  //       console.log(key)
  //       console.log(productData[`${key}`])
  //       if(key.includes('Thumb')){
  //         formattedProdData.img = productData[`${key}`]
  //       }
  //       if(key.includes('str') && !key.includes('id') && !key.includes('Thumb')){
  //         formattedProdData.product = productData[`${key}`]
  //       }
  //       if(key.includes('id')){
  //         formattedProdData.id = productData[`${key}`]
  //       }
  //   }
  // }
//   let formattedProdData = {price}
//   console.log(productData)
//   for (const key in productData) {
//       console.log(key)
//       console.log(productData[`${key}`])
//       if(key.includes('Thumb')){
//         formattedProdData.img = productData[`${key}`]
//       }
//       if(key.includes('str') && !key.includes('id') && !key.includes('Thumb')){
//         formattedProdData.product = productData[`${key}`]
//       }
//       if(key.includes('id')){
//         formattedProdData.id = productData[`${key}`]
//       }
//   }
// console.log(formattedProdData)
// const {id,img,product } = formattedProdData
    return `<div class='card' data-id="${id}">
         <img src="${img}" class="  card-img-top category-aside-img" alt="..." > 
         <div class='card-body'>
         <h2 class='fs-5 card-title text-truncate'>${product}</h2> 
         <p class='card-text'>
          ${new Intl.NumberFormat('es-AR', {
            style: 'currency',
            currency: 'ARS',
          }).format(price)}
          
        </p>
        </div>
         </div>`;
  };
  export default productCard