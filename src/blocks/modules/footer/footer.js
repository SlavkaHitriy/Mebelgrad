document.querySelector('.footer__drop-btn').addEventListener("click", function(){
   let drop = document.querySelector('.footer__drop');
   drop.classList.toggle('active');
   let resHeight = getHeight();
   if(drop.classList.contains('active')){
      drop.style.height = resHeight + 20 + "px";
   } else {
      drop.style.height = "0px";
   }
})


function getHeight(){
   
   const arr = document.querySelectorAll('.footer__column.mobile .footer__item');

   let resHeight = 0;

   for(let i = 0; i < document.querySelectorAll('.footer__column.mobile .footer__item').length; i++){
      resHeight += arr[i].clientHeight + 25;
   }

   return resHeight;
   
}