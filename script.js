"use strict";

const isMobile = {
  Android: function () {
    return navigator.userAgent.match(/Android/i);
  },
  Windows: function () {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function () {
    return isMobile.Android() || isMobile.Windows();
  },
};

if (isMobile.any()) {
  document.body.classList.add(`_touch`);
} else {
  document.body.classList.add(`_pc`);
}
