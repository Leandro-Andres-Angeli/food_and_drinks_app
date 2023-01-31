export const addAnimationBtnSlider = () => {
  [
    {
      mouseEvent: 'mouseover',
      action: 'add',
      condition: function (ev) {
        return Boolean(!!ev.closest?.('main'));
      },
    },
    {
      mouseEvent: 'mouseout',
      action: 'remove',
      condition: function (ev) {
        return Boolean(ev.closest?.('main'));
      },
    },
  ].map(({ mouseEvent, log, condition, action }) => {
    document.addEventListener(mouseEvent, function (e) {
      const sliderBtns = [
        ...document.querySelectorAll('#carouselExampleControls .slider_btn'),
      ].map((btnContainer) => btnContainer.querySelector('span'));
      const validEvent = condition(e.target);
      return validEvent
        ? sliderBtns.forEach((sliderBtn) => {
            return sliderBtn.classList[`${action}`]('show_btn');
          })
        : null;
    });
  });
};
