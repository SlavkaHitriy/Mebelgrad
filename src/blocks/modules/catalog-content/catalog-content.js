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

   let materialFilters = document.querySelector('.catalog-filters__material');
filterCheckboxes(materialFilters, 'materials');
let mechanismFilters = document.querySelector('.catalog-filters__mechanism');
filterCheckboxes(mechanismFilters, 'mechanisms');
let typeFilters = document.querySelector('.catalog-filters__type-checkbox');
filterCheckboxes(typeFilters, 'types');
let amountFilters = document.querySelector('.catalog-filters__amount');
filterCheckboxes(amountFilters, 'amount');

function filterCheckboxes(filters, str) {
   let filtersChild = filters.querySelectorAll('li');
   for (let i = 0; i < filtersChild.length; i++) {
      let input = document.createElement("INPUT")
      input.setAttribute('type', 'checkbox');
      input.setAttribute('value', 1);
      input.setAttribute('name', `${str}[${i}]`);
      filters.appendChild(input);
      input.classList.add('filters-input');
      filtersChild[i].addEventListener('click', function (e) {
         if (e.target.classList.contains('active')) {
            e.target.classList.remove('active');
            document.querySelectorAll('.filters-input')[i].checked = false;
         } else {
            e.target.classList.add('active');
            document.querySelectorAll('.filters-input')[i].checked = true;
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
      console.log(event.querySelector('.catalog-filters__filter-title span'))
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


// let materialFilters = document.querySelectorAll('.catalog-filters__material .catalog-filters__material-list li');


