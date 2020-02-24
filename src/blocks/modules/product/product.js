import Glide from '@glidejs/glide';

try{
   const config = {
      bound: true,
      gap: 20,
      perView: 1
   }
   
   new Glide('.product .glide', config).mount();

   document.querySelector('.product__btn').addEventListener("click", function(){
      let drop = document.querySelector('.product__characteristic-list');
      drop.classList.toggle('active');
      let resHeight = getHeight();
      if(drop.classList.contains('active')){
         drop.style.height = resHeight + 20 + "px";
      } else {
         drop.style.height = "0px";
      }
   })
   
   
   function getHeight(){
      
      const arr = document.querySelectorAll('.product__characteristic-item');
   
      let resHeight = 0;
   
      for(let i = 0; i < document.querySelectorAll('.product__characteristic-item').length; i++){
         resHeight += arr[i].clientHeight + 19;
      }
   
      return resHeight;
      
   }
} catch {}

