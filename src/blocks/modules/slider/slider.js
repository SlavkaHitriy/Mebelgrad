import Glide from '@glidejs/glide';

try{
   const config = {
      bound: true,
      gap: 20,
   }
   
   new Glide('.glide', config).mount();
} catch {}
