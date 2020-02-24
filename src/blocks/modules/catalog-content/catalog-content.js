import noUiSlider from 'nouislider/distribute/nouislider';

try{
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

   if(window.innerWidth < 900){
      let filters = document.querySelector('.catalog-filters');
      filters.addEventListener('click', function(){
         filters.classList.toggle('active');
         if(filters.classList.contains('active')){
            filters.style.height = document.querySelector('.catalog-filters__wrapper').clientHeight + 80 + 'px';
         } else {
            filters.style.height = 47 + 'px';
         }
      })
   }

} catch {}