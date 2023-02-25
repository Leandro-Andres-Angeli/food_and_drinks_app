
export class formatApiData {
  constructor() {

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
      console.log(data[key])
    }

   
    let joined = ingredients.reduce(((acc, curr, i) => { acc[`${curr}`] =proportions[`${i}`]; return acc }), {})
    return {...formattedProdData, ingredients : joined}
  }
  static modal(productData) {

    const [category] = Object.keys(productData)
    const getCategory = category === 'meals' ? 'Meal' : 'Drink';
   const formattedProdDataModal =  this.formatTypes(getCategory, ...Object.entries(productData)[0][1])
   console.log(formattedProdDataModal)
    console.log(...Object.entries(productData)[0][1])


    return [...Object.entries(productData)[0][1]]
  }
}
const food = {
  "idMeal": "52873",
  "strMeal": "Beef Dumpling Stew",
  "strDrinkAlternate": null,
  "strCategory": "Beef",
  "strArea": "British",
  "strInstructions": "Preheat the oven to 180C/350F/Gas 4.\r\n\r\nFor the beef stew, heat the oil and butter in an ovenproof casserole and fry the beef until browned on all sides.\r\n\r\nSprinkle over the flour and cook for a further 2-3 minutes.\r\n\r\nAdd the garlic and all the vegetables and fry for 1-2 minutes.\r\n\r\nStir in the wine, stock and herbs, then add the Worcestershire sauce and balsamic vinegar, to taste. Season with salt and freshly ground black pepper.\r\n\r\nCover with a lid, transfer to the oven and cook for about two hours, or until the meat is tender.\r\n\r\nFor the dumplings, sift the flour, baking powder and salt into a bowl.\r\nAdd the suet and enough water to form a thick dough.\r\n\r\nWith floured hands, roll spoonfuls of the dough into small balls.\r\n\r\nAfter two hours, remove the lid from the stew and place the balls on top of the stew. Cover, return to the oven and cook for a further 20 minutes, or until the dumplings have swollen and are tender. (If you prefer your dumplings with a golden top, leave the lid off when returning to the oven.)\r\n\r\nTo serve, place a spoonful of mashed potato onto each of four serving plates and top with the stew and dumplings. Sprinkle with chopped parsley.",
  "strMealThumb": "https://www.themealdb.com/images/media/meals/uyqrrv1511553350.jpg",
  "strTags": "Stew,Baking",
  "strYoutube": "https://www.youtube.com/watch?v=6NgheY-r5t0",
  "strIngredient1": "Olive Oil",
  "strIngredient2": "Butter",
  "strIngredient3": "Beef",
  "strIngredient4": "Plain Flour",
  "strIngredient5": "Garlic",
  "strIngredient6": "Onions",
  "strIngredient7": "Celery",
  "strIngredient8": "Carrots",
  "strIngredient9": "Leek",
  "strIngredient10": "Swede",
  "strIngredient11": "Red Wine",
  "strIngredient12": "Beef Stock",
  "strIngredient13": "Bay Leaf",
  "strIngredient14": "Thyme",
  "strIngredient15": "Parsley",
  "strIngredient16": "Plain Flour",
  "strIngredient17": "Baking Powder",
  "strIngredient18": "Suet",
  "strIngredient19": "Water",
  "strIngredient20": null,
  "strMeasure1": "2 tbs",
  "strMeasure2": "25g",
  "strMeasure3": "750g",
  "strMeasure4": "2 tblsp ",
  "strMeasure5": "2 cloves minced",
  "strMeasure6": "175g",
  "strMeasure7": "150g",
  "strMeasure8": "150g",
  "strMeasure9": "2 chopped",
  "strMeasure10": "200g",
  "strMeasure11": "150ml",
  "strMeasure12": "500g",
  "strMeasure13": "2",
  "strMeasure14": "3 tbs",
  "strMeasure15": "3 tblsp chopped",
  "strMeasure16": "125g",
  "strMeasure17": "1 tsp ",
  "strMeasure18": "60g",
  "strMeasure19": "Splash",
  "strMeasure20": "",
  "strSource": "https://www.bbc.co.uk/food/recipes/beefstewwithdumpling_87333",
  "strImageSource": null,
  "strCreativeCommonsConfirmed": null,
  "dateModified": null
}
const drink = {
  "idDrink": "17831",
  "strDrink": "A Furlong Too Late",
  "strDrinkAlternate": null,
  "strTags": null,
  "strVideo": null,
  "strCategory": "Ordinary Drink",
  "strIBA": null,
  "strAlcoholic": "Alcoholic",
  "strGlass": "Highball glass",
  "strInstructions": "Pour the rum and ginger beer into a highball glass almost filled with ice cubes. Stir well. Garnish with the lemon twist.",
  "strInstructionsES": "Vierta el ron y la cerveza de jengibre en un vaso alto casi lleno de cubitos de hielo. Agita bien. Para adornar, un twist de limón.",
  "strInstructionsDE": "Den Rum und das Ingwerbier in ein Highball-Glas gießen, das fast mit Eiswürfeln gefüllt ist. Gut umrühren. Mit der Zitronenscheibe garnieren.",
  "strInstructionsFR": null,
  "strInstructionsIT": "Guarnire con la scorza di limone.Versare il rum e la ginger beer in un bicchiere highball quasi riempito di cubetti di ghiaccio.Mescolare bene.",
  "strInstructionsZH-HANS": null,
  "strInstructionsZH-HANT": null,
  "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/ssxvww1472669166.jpg",
  "strIngredient1": "Light rum",
  "strIngredient2": "Ginger beer",
  "strIngredient3": "Lemon peel",
  "strIngredient4": null,
  "strIngredient5": null,
  "strIngredient6": null,
  "strIngredient7": null,
  "strIngredient8": null,
  "strIngredient9": null,
  "strIngredient10": null,
  "strIngredient11": null,
  "strIngredient12": null,
  "strIngredient13": null,
  "strIngredient14": null,
  "strIngredient15": null,
  "strMeasure1": "2 oz ",
  "strMeasure2": "4 oz ",
  "strMeasure3": "1 twist of ",
  "strMeasure4": null,
  "strMeasure5": null,
  "strMeasure6": null,
  "strMeasure7": null,
  "strMeasure8": null,
  "strMeasure9": null,
  "strMeasure10": null,
  "strMeasure11": null,
  "strMeasure12": null,
  "strMeasure13": null,
  "strMeasure14": null,
  "strMeasure15": null,
  "strImageSource": null,
  "strImageAttribution": null,
  "strCreativeCommonsConfirmed": "No",
  "dateModified": "2016-08-31 19:46:06"
}
const formatProductData = function (productData, type = 'card') {

  return formatApiData[`${type}`](productData)

}
export default formatProductData