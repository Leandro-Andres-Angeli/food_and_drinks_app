function getData(URL, callbackRenderFunc) {
  fetch(URL)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      return callbackRenderFunc(data);
    })

    .catch((err) => {
      console.log(err);
    });
}
export default getData;
