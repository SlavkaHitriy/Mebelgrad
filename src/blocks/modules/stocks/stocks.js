import Glide from '@glidejs/glide';

const config = {
   bound: true,
   gap: 20,
   perView: 4,
   breakpoints: {
      1250: {
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


// try{
//    if(document.querySelector('.title').clientWidth){
//       console.log('sdl;fsdf')
//    } else {
//       console.log('test')
//    }
// } catch {}


try{
   if (document.querySelector('.stocks__glide').clientWidth) {
      new Glide('.stocks__glide', config).mount();
   } else {}
} catch {}

try{
   if (document.querySelector('.news__glide').clientWidth) {
      new Glide('.news__glide', config).mount();
   } else {}   
} catch {}






