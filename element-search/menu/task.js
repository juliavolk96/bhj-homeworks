'use strict';

const menuSub = document.querySelectorAll('.menu_sub');
const menuLink = document.querySelectorAll('.menu__link');

for (let i = 0; i < menuLink.length; i++) {
  menuLink[i].addEventListener('click', function(e) {
    const subMenu = this.parentElement.querySelector('.menu_sub');
    const activeSubMenus = document.querySelectorAll('.menu_active');

    activeSubMenus.forEach(function(activeSubMenu) {
      if (activeSubMenu !== subMenu) {
        activeSubMenu.classList.remove('menu_active');
      }
    });

    if (subMenu) {
      e.preventDefault();
      subMenu.classList.toggle('menu_active');
    } 
  });
}

