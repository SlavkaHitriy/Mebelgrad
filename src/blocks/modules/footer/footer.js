document.querySelector('.footer__drop-btn').addEventListener("click", function(){
   let drop = document.querySelector('.footer__drop');
   drop.classList.toggle('active');
   let coef = 43;
   let resHeight = coef * getAmount();
   if(drop.classList.contains('active')){
      drop.style.height = resHeight + 20 + "px";
   } else {
      drop.style.height = "0px";
   }
})


function getAmount(){
   return document.querySelectorAll('.footer__column.mobile .footer__item').length;
}