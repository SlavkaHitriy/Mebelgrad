import Glide from '@glidejs/glide';

try{
   if(window.innerWidth < 750){
      stockGlide.disable();
   }
   const config = {
      bound: true,
      gap: 30,
      perView: 3,
      breakpoints: {
         1500: {
            perView: 2
         },
         1000: {
            perView: 1
         },
      }
   }

   var stockGlide = new Glide('.stock-content__slider', config).mount();

} catch {}