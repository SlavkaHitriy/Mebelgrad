let burger = document.querySelector('.burger');

burger.addEventListener("click", function(e){
   burger.classList.toggle('active');
   document.querySelector('.aside').classList.toggle('show');
})