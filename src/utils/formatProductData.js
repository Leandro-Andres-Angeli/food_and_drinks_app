const formatProductData = function(productData){
    let formattedProdData = {price : productData.price}
  
    for (const key in productData) {
      
        if(key.includes('Thumb')){
          formattedProdData.img = productData[`${key}`]
        }
        if(key.includes('str') && !key.includes('id') && !key.includes('Thumb')){
          formattedProdData.product = productData[`${key}`]
        }
        if(key.includes('id')){
          formattedProdData.id = productData[`${key}`]
        }
    }
    return formattedProdData
  }
  export default formatProductData