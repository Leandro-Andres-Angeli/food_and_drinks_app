export const asyncRender = async (el) => {
  let html = await el();

  document.querySelector('.app').insertAdjacentHTML('beforeend', html);
};
export const render = async (el) => {
  const html = await el();
  document.querySelector('.app').insertAdjacentHTML('afterbegin', html);
};
