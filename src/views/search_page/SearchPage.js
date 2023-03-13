const searchView =  (searchResults)=>{
    console.log(searchResults)
   return ()=>`<div class="container" > ${JSON.stringify(searchResults)}</div> `
}
export default searchView;