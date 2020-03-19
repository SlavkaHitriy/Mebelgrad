import noUiSlider from 'nouislider/distribute/nouislider';

try {
   var price = document.querySelector('.catalog-filters__box.price .catalog-filters-range');
   var length = document.querySelector('.catalog-filters__box.length .catalog-filters-range');
   var width = document.querySelector('.catalog-filters__box.width .catalog-filters-range');
   var height = document.querySelector('.catalog-filters__box.height .catalog-filters-range');

   var inputPrice1 = document.querySelector('.catalog-filters__box.price .catalog-filters__min');
   var inputPrice2 = document.querySelector('.catalog-filters__box.price .catalog-filters__max');
   var inputsPrice = [inputPrice1, inputPrice2];

   var inputLength1 = document.querySelector('.catalog-filters__box.length .catalog-filters__min');
   var inputLength2 = document.querySelector('.catalog-filters__box.length .catalog-filters__max');
   var inputsLength = [inputLength1, inputLength2];

   var inputWidth1 = document.querySelector('.catalog-filters__box.width .catalog-filters__min');
   var inputWidth2 = document.querySelector('.catalog-filters__box.width .catalog-filters__max');
   var inputsWidth = [inputWidth1, inputWidth2];

   var inputHeight1 = document.querySelector('.catalog-filters__box.height .catalog-filters__min');
   var inputHeight2 = document.querySelector('.catalog-filters__box.height .catalog-filters__max');
   var inputsHeight = [inputHeight1, inputHeight2];


   noUiSlider.create(price, {
      start: [600, 409600],
      connect: true,
      format: {
         to: function (value) {
            return value.toFixed(0);
         },
         from: function (value) {
            return Number(value);
         }
      },
      range: {
         'min': 600,
         'max': 409600
      }
   });

   noUiSlider.create(length, {
      start: [0, 600],
      connect: true,
      format: {
         to: function (value) {
            return value.toFixed(0);
         },
         from: function (value) {
            return Number(value);
         }
      },
      range: {
         'min': 0,
         'max': 600
      }
   });

   noUiSlider.create(width, {
      start: [0, 600],
      connect: true,
      format: {
         to: function (value) {
            return value.toFixed(0);
         },
         from: function (value) {
            return Number(value);
         }
      },
      range: {
         'min': 0,
         'max': 600
      }
   });

   noUiSlider.create(height, {
      start: [0, 600],
      connect: true,
      format: {
         to: function (value) {
            return value.toFixed(0);
         },
         from: function (value) {
            return Number(value);
         }
      },
      range: {
         'min': 0,
         'max': 600
      }
   });

   price.noUiSlider.on('update', function (values, handle) {
      inputsPrice[handle].value = values[handle];
   });

   length.noUiSlider.on('update', function (values, handle) {
      inputsLength[handle].value = values[handle];
   });

   width.noUiSlider.on('update', function (values, handle) {
      inputsWidth[handle].value = values[handle];
   });

   height.noUiSlider.on('update', function (values, handle) {
      inputsHeight[handle].value = values[handle];
   });

   if (window.innerWidth < 900) {
      let filters = document.querySelector('.catalog-filters__title');
      filters.addEventListener('click', function () {
         filters.parentNode.classList.toggle('active');
         if (filters.parentNode.classList.contains('active')) {
            filters.parentNode.style.height = document.querySelector('.catalog-filters__wrapper').clientHeight + 100 + 'px';
         } else {
            filters.parentNode.style.height = 47 + 'px';
         }
      })
   }

   // let materialFilters = document.querySelector('.catalog-filters__material');
   // filterCheckboxes(materialFilters, 'materials');
   // let mechanismFilters = document.querySelector('.catalog-filters__mechanism');
   // filterCheckboxes(mechanismFilters, 'mechanisms');
   // let typeFilters = document.querySelector('.catalog-filters__type-checkbox');
   // filterCheckboxes(typeFilters, 'types');
   // let amountFilters = document.querySelector('.catalog-filters__amount');
   // filterCheckboxes(amountFilters, 'amount');


   // $('.catalog-filters__checkboxes li').on('click', function () {
   //    if ($(this).hasClass('active')) {
   //       $(this).removeClass('active');
   //       $(this).find('input').prop('checked', false);
   //    } else {
   //       $(this).addClass('active');
   //       $(this).find('input').prop('checked', true);
   //    }
   // })

   let filter = document.querySelectorAll('.catalog-filters__checkboxes');

   for(let i = 0; i < filter.length; i++){
      filterCheckboxes(filter[i]);
   }


   function filterCheckboxes(filters) {
      let filtersChild = filters.querySelectorAll('li');
      for (let j = 0; j < filtersChild.length; j++){
         if (filtersChild[j].classList.contains('active')) {
            filtersChild[j].querySelector('.filters-input').checked = true;
         } else {
            filtersChild[j].querySelector('.filters-input').checked = false;
         }
         countActiveItems(filtersChild, filters);
      }
      for (let i = 0; i < filtersChild.length; i++) {
         // filtersChild[i].querySelector('.filters-input').setAttribute('name', filters.classList.value.match(/\b(?!catalog|filters__checkboxes\b)\w+ /)[0] + `[${i}]`)
         filtersChild[i].addEventListener('click', function (e) {
            if (e.target.classList.contains('active')) {
               e.target.classList.remove('active');
               e.target.querySelector('.filters-input').checked = false;
               
            } else {
               e.target.classList.add('active');
               e.target.querySelector('.filters-input').checked = true;
            }
            countActiveItems(filtersChild, filters);
         })
      }
   }

   function countActiveItems(filtersChild, event) {
      let counter = 0;
      for (let i = 0; i < filtersChild.length; i++) {
         if (filtersChild[i].classList.contains('active')) {
            ++counter;
         }
      }
      if (counter == 0) {
         event.querySelector('.catalog-filters__filter-title span').textContent = '';
      } else {
         event.querySelector('.catalog-filters__filter-title span').textContent = `( ${counter} )`;
      }
   }

   let filtersTitle = document.querySelectorAll('.catalog-filters__filter-title');

   for (let i = 0; i < filtersTitle.length; i++) {
      filtersTitle[i].addEventListener('click', function (e) {
         if (e.target.parentNode.classList.contains('active')) {
            e.target.parentNode.style.height = 20 + 'px';
         } else {
            e.target.parentNode.style.height = e.target.parentNode.querySelector('ul').clientHeight + 28 + 'px';
         }
         e.target.parentNode.classList.toggle('active');
      })
   }

} catch { }


