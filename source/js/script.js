// Скрипты
var menu = document.querySelector('.main-nav__site-nav');
var menuToggle = document.querySelector('.main-nav__toggle');

if(menu && menuToggle) {
  mobileMenu();
  document.addEventListener("DOMContentLoaded", function(event){
      window.onresize = function() {
        mobileMenu();
      };
  });
}

function mobileMenu() {
  if(window.matchMedia('(max-width: 767px)').matches) {
    menu.classList.add("main-nav__site-nav--close");
    menuToggle.classList.add("main-nav__toggle--close");
    menuToggle.addEventListener("click", function(event) {
      event.preventDefault();
      menu.classList.toggle('main-nav__site-nav--close');
      menuToggle.classList.toggle('main-nav__toggle--close');
    });
  } else {
    menu.classList.remove("main-nav__site-nav--close");
    menuToggle.classList.remove("main-nav__toggle--close");
  }
}
