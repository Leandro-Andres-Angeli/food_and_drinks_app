
export class formatApiData {
  constructor() {

  }
  static search (productData){
    return productData
  }
  static card(productData) {

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
  static formatTypes(type, data) {
  
    const { strCategory: category } = data;
    let formattedProdData = { category };
    let ingredients = [];
    let proportions = [];
    for (const key in data) {
      if (key === `id${type}`) {
        formattedProdData.id = data[`${key}`]
      }
      if (key === `str${type}`) {
        formattedProdData.name = data[`${key}`]
      }
      if (key === `str${type}Thumb`) {
        formattedProdData.img = data[`${key}`]
      }
      if (key.includes('Ingredient')) {
        data[`${key}`] && ingredients.push(data[`${key}`])
      }
      if (key.includes('Measure')) {
        data[`${key}`] && proportions.push(data[`${key}`])
      }
     
    }

   
    let joined = ingredients.reduce(((acc, curr, i) => { acc[`${curr}`] =proportions[`${i}`]; return acc }), {})
    return {...formattedProdData, ingredients : joined}
  }
  static modal(productData) {

    const [category] = Object.keys(productData)
    const getCategory = category === 'meals' ? 'Meal' : 'Drink';
   const formattedProdDataModal =  this.formatTypes(getCategory, ...Object.entries(productData)[0][1])
   return formattedProdDataModal
   



  }
}

 const formatProductData = function (productData, type = 'card') {

  return formatApiData[`${type}`](productData)

}
export default formatProductData