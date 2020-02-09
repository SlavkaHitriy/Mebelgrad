document.querySelector('.burger').onclick = function(e){
   e.target.parentNode.classList.toggle('active');
   document.querySelector('.aside').classList.toggle('show');
}