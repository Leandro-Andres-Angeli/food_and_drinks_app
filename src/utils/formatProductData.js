
export class formatApiData {
  constructor(){
   
  }
  static card (productData) {
   
    let formattedProdData = { price: productData.price }
    for (const key in productData) {

      if (key.includes('Thumb')) {
        formattedProdData.img = productData[`${key}`]
      }
      if (key.includes('str') && !key.includes('id') && !key.includes('Thumb')) {
        formattedProdData.product = productData[`${key}`]
      }
      if (key.includes('id')) {
        formattedProdData.id = productData[`${key}`]
      }
   
    }
    
    return formattedProdData;
  }
  static modal (productData){
  console.log(Object.keys(arguments[0]))
  
  
  
   return [...Object.entries(productData)[0][1]]
  }
}
const formatProductData = function (productData,type = 'card') {

  return formatApiData[`${type}`](productData)
  
}
export default formatProductData