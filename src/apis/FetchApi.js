function fetchAPI() {
  async function getData(url) {
    const req = await fetch(url);
    // console.log(req);
    // console.log(req.json());
    const parsed = await req.json();
    console.log(parsed);
    // return parsed;
  }
  return { getData };
}
export default fetchAPI;
