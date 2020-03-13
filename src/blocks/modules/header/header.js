let burger = document.querySelector('.burger');

burger.addEventListener("click", function () {
   burger.classList.toggle('active');
   document.querySelector('.aside').classList.toggle('show');
})

// function windowOnResize() {
//    if (window.innerWidth < 750) {

//       })



//    } else {

//    }
// }

// window.addEventListener('resize', function () {
//    windowOnResize();
// })

// windowOnResize();

