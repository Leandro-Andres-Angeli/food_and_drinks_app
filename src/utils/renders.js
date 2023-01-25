export const asyncRender = async function (el, htmlTarget) {
  let html = await el();

  htmlTarget.innerHTML = html;
};
export const render = function (el, htmlTarget) {
  const html = el();
  htmlTarget.insertAdjacentHTML('afterbegin', html);
};
