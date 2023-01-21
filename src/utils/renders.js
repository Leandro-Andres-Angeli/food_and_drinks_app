export const asyncRender = async function (el, htmlTarget) {
  let html = await el();

  htmlTarget.innerHTML = html;
};
export const render = async function (el, htmlTarget) {
  const html = await el();
  htmlTarget.insertAdjacentHTML('afterbegin', html);
};
