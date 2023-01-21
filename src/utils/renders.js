export const asyncRender = async function (el, htmlTarget) {
  let html = await el();
  console.log(this);
  console.log(htmlTarget);
  htmlTarget.insertAdjacentHTML('beforeend', html);
};
export const render = async function (el, htmlTarget) {
  const html = await el();
  htmlTarget.insertAdjacentHTML('afterbegin', html);
};
