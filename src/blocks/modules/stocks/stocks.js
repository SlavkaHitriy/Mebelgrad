import Glide from '@glidejs/glide';

const config = {
   bound: true,
   gap: 20,
   perView: 4,
   breakpoints: {
      1000: {
         perView: 3
      },
      850: {
         perView: 2
      },
      750: {
         perView: 3
      },
      600: {
         perView: 2
      },
      450: {
         perView: 1
      }
   }
}

new Glide('.stocks__glide', config).mount();