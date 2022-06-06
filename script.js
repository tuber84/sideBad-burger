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
  let menuArrows = document.querySelectorAll(`.menu__arrow`);
  //   console.log(menuArrows.length);
  if (menuArrows.length > 0) {
    for (let i = 0; i < menuArrows.length; i++) {
      const menuArrow = menuArrows[i];
      menuArrow.addEventListener("click", function (e) {
        menuArrow.parentElement.classList.toggle(`_active`);
      });
    }
  }
} else {
  document.body.classList.add(`_pc`);
}

//прокрутка при клике к определенному месту страницы

const menuLinks = document.querySelectorAll(`.menu__link[data-goto]`);
if (menuLinks.length > 0) {
  for (let menuLink of menuLinks) {
    menuLink.addEventListener(`click`, onMenuClick);
  }
}
function onMenuClick(e) {
  const menuLink = e.target;
  if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
    const gotoBlock = document.querySelector(menuLink.dataset.goto);
    const gotoBlockValue =
      gotoBlock.getBoundingClientRect().top +
      scrollY -
      document.querySelector(`header`).offsetHeight;
    // "убирам" боковое меню в мобильной версии  при клике на пункт меню:
    if (iconMenu.classList.contains(`_active`)) {
      document.body.classList.remove(`_lock`);
      iconMenu.classList.remove(`_active`);
      menuBody.classList.remove(`_active`);
    }
    // ------------------------------------------------------------------
    window.scrollTo({
      top: gotoBlockValue,
      behavior: "smooth",
    });
    e.preventDefault();
  }
}

//-----боковое меню по нажатию на "бугер"---------//
const iconMenu = document.querySelector(`.menu__icon`);
const menuBody = document.querySelector(`.menu__body`);

console.log(iconMenu);
if (iconMenu) {
  console.log(menuBody);
  iconMenu.addEventListener(`click`, function (e) {
    document.body.classList.toggle(`_lock`);
    iconMenu.classList.toggle(`_active`);
    menuBody.classList.toggle(`_active`);
  });
}
// ----------------------------------------------------