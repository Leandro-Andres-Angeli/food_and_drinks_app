const SubscribeComponent = () => {
  const leftContent = `<h3 class='text-primary'>Subscribe now</h3> <p>Subscribe for getting our latest menu update regularly
  </p>`;
  const rightContent = `<form class='subscribe-form'>
  
  
  <div class="mb-3 form-check d-flex ps-0 ps-lg-2 ">
    <input type="text" class="form-control" >
    <button type="submit" class="btn btn-primary">Subcribe</button>  
  </div>
  
</form>`;

  const componentCol = (innerComponent = 'data') => {
    return `<div class='col col-12 col-lg-6 py-5'> ${innerComponent}</div>`;
  };
  return `
  <section class='background-yellow-100'>
  <div class='container'>
    <div class='row'>
     ${componentCol(leftContent)}
     ${componentCol(rightContent)}
    </div>
    </div>
    </section>`;
};
export default SubscribeComponent;
