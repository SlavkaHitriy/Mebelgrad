document.querySelector('.burger').addEventListener("click", function(e){
   e.target.parentNode.classList.toggle('active');
   document.querySelector('.aside').classList.toggle('show');
})