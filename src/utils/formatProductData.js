const formatProductData = function(productData){
    let formattedProdData = {price : productData.price}
    console.log(productData)
    for (const key in productData) {
        console.log(key)
        console.log(productData[`${key}`])
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