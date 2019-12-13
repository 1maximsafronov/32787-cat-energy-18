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

// // слайдер До После
// var controls = document.querySelector('.controls');
// var controlsToggle = controls.querySelector('.controls__toggle');
// var controlsRange = document.querySelector('.controls__range');
// var pictureBefore = document.querySelector('.example__picture--before');
// var pictureAfter = document.querySelector('.example__picture--after');
// var startPointMin;
// var startPointMax;
// pictureBefore.style.width = 354 + 'px';
// pictureAfter.style.width = 354 + 'px';
// controlsToggle.style.left = 197
//
//
// controlsToggle.addEventListener('mousedown', function(evnt) {
//   evnt.preventDefault();
//   startPointMin = evnt.clientX;
//   function onMouseMove(moveEvnt) {
//     moveEvnt.preventDefault();
//     var newPoint = startPointMin - moveEvnt.clientX;
//     startPointMin = moveEvnt.clientX;
//     if ((controlsToggle.offsetLeft - newPoint) >= 0 && (controlsToggle.offsetLeft - newPoint) <= (428 - 34)) {
//       controlsToggle.style.left = (controlsToggle.offsetLeft - newPoint) + 'px';
//       pictureBefore.style.width = (140 + 18 + controlsToggle.offsetLeft - newPoint) + 'px';
//       pictureAfter.style.width = (708 - 140 - 16ы - controlsToggle.offsetLeft - newPoint) + 'px';
//     };
//   };
//
//   function onMouseUp(upEvnt) {
//     upEvnt.preventDefault();
//     document.removeEventListener('mousemove', onMouseMove);
//     document.removeEventListener('mouseup', onMouseUp);
//   };
//   document.addEventListener('mousemove', onMouseMove);
//   document.addEventListener('mouseup', onMouseUp);
// });

// для тачскрина
// controlsToggle.addEventListener('touchstart', function(evnt) {
//   evnt.preventDefault();
//   startPointMin = evnt.pageX;
//   function onTouchMove(moveEvnt) {
//     moveEvnt.preventDefault();
//     var newPoint = startPointMin - moveEvnt.pageX;
//     startPointMin = moveEvnt.pageX;
//     if ((controlsToggle.offsetLeft - newPoint) >= 0 && (controlsToggle.offsetLeft - newPoint) <= (428 - 34)) {
//       controlsToggle.style.left = (controlsToggle.offsetLeft - newPoint) + 'px';
//       // pictureBefore.style.width = (controlsToggle.offsetLeft - newPoint) + 'px';
//       // pictureAfter.style.width = (400 - controlsToggle.offsetLeft - newPoint) + 'px';
//     };
//   };
//
//   function onTouchEnd(upEvnt) {
//     upEvnt.preventDefault();
//     document.removeEventListener('touchmove', onTouchMove);
//     document.removeEventListener('touchend', onTouchEnd);
//   };
//   document.addEventListener('touchmove', onTouchMove);
//   document.addEventListener('touchend', onTouchEnd);
// });
