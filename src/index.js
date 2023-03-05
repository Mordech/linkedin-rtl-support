// @ts-check

(function () {
  'use strict';

  const observer = new MutationObserver(() => {
    const textBoxes = document.querySelectorAll('[role="textbox"]');
    if (textBoxes) {
      textBoxes.forEach((textBox) => {
        if (textBox instanceof HTMLDivElement && !(textBox.dir === 'auto')) {
          textBox.dir = 'auto';
        }
      });
    }
  });

  const body = document.querySelector('body');

  body &&
    observer.observe(body, {
      childList: true,
    });
})();
