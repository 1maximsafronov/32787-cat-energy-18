// Скрипты
var menu = document.querySelector('.main-nav__site-nav');
var menuToggle = document.querySelector('.main-nav__toggle');
//
if(menu && menuToggle) {
  menu.classList.remove('main-nav__site-nav--no-js');
  menuToggle.classList.remove('main-nav__toggle--no-js');

  menuToggle.addEventListener("click", function(event) {
    event.preventDefault();
    menu.classList.toggle('main-nav__site-nav--open');
    menuToggle.classList.toggle('main-nav__toggle--open');
  });
}
