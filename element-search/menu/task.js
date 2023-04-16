'use strict'

const menuSub = document.querySelectorAll('.menu_sub');
const menuLink = document.querySelectorAll('.menu__link');

for(let i = 0; i < menuLink.length; i++) {
  menuLink[i].addEventListener('click', function(e){
    e.preventDefault();
    const subMenu = this.parentElement.querySelector('.menu_sub');
    console.log(subMenu)
    if (subMenu) {
      subMenu.classList.add('menu_active');
    } 
  });
}




