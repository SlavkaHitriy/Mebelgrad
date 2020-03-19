import Glide from '@glidejs/glide';
try{

   const config = {
      bound: true,
      gap: 20,
      perView: 2,
      breakpoints: {
         // 1250: {
         //    perView: 3
         // },
         850: {
            perView: 1
         },
         // 750: {
         //    perView: 3
         // },
         // 600: {
         //    perView: 2
         // },
         // 450: {
         //    perView: 1
         // }
      }
   }

   new Glide('.blog__glide', config).mount();

} catch {}