var offsetTop = document.querySelector('.aside').getBoundingClientRect().top + pageYOffset;

window.addEventListener('scroll', function() {
   if(window.innerWidth > 750){
      if(pageYOffset > offsetTop){
         document.querySelector('.aside').classList.add('fixed');
      } else {
         document.querySelector('.aside').classList.remove('fixed');
      }
   } else {
      return false;
   }
   
 });


