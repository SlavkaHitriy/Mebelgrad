// var offsetTop = document.querySelector('.aside').getBoundingClientRect().top + pageYOffset;
var offsetTop = document.querySelector('.header__bottom').getBoundingClientRect().top + pageYOffset + 3;

window.addEventListener('scroll', function () {
   if (window.innerWidth > 750) {
      if(document.querySelector('.wrapper-other')){
         if (pageYOffset > offsetTop) {
            document.querySelector('.aside').classList.add('fixed');
            document.querySelector('.header__bottom').classList.add('fixed-other');
            document.querySelector('.header__logo').classList.add('fixed');
         } else {
            document.querySelector('.aside').classList.remove('fixed');
            document.querySelector('.header__bottom').classList.remove('fixed-other');
            document.querySelector('.header__logo').classList.remove('fixed');
         }
      } else {
         if (pageYOffset > offsetTop) {
            document.querySelector('.aside').classList.add('fixed');
            document.querySelector('.header__bottom').classList.add('fixed');
            document.querySelector('.header__logo').classList.add('fixed');
         } else {
            document.querySelector('.aside').classList.remove('fixed');
            document.querySelector('.header__bottom').classList.remove('fixed');
            document.querySelector('.header__logo').classList.remove('fixed');
         }
      }
      
   } else {
      document.querySelector('.aside').classList.remove('fixed');
      document.querySelector('.header__bottom').classList.remove('fixed');
      document.querySelector('.header__bottom').classList.remove('fixed-other');
      document.querySelector('.header__logo').classList.remove('fixed');
      return false;
   }

});


