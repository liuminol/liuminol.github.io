'use strict';

;
(function () {
  var filterBlock = document.querySelector('.filter');
  var checkedCounter = filterBlock.querySelector('.filter__checked-counter');
  var count = 0;
  var controlsBlock = filterBlock.querySelector('.filter__controls');
  var checkboxInputs = controlsBlock.querySelectorAll('input[type=checkbox]');
  var resetButton = controlsBlock.querySelector('.filter__control-btn--reset');

  //для сброса диапазона цен
  var priceBlock = document.querySelector('.info--price');
  var bar = priceBlock.querySelector('.range__bar');
  var pinMin = priceBlock.querySelector('.range__pin--min');
  var pinMax = priceBlock.querySelector('.range__pin--max');
  var inputMin = priceBlock.querySelector('.range__price--min');
  var inputMax = priceBlock.querySelector('.range__price--max');
  //

  var writeCounter = function () {
    checkedCounter.textContent = count;
  };

  var resetCheckedInputs = function () {
    checkboxInputs.forEach(function (it) {
      it.checked = false;
    });
  };

  var pinMoved = false;

  var controlsBlockHandler = function (evt) {
    var target = evt.target;

    var onMouseUpFilterControlsHandler = function () {
      var input = target.previousElementSibling;

      if (!input.checked) {
        count++;
      } else {
        count--;
      }

      writeCounter();
      
      target.removeEventListener('mouseup', onMouseUpFilterControlsHandler);
    };

    var onMouseUpPriceRangeHandler = function () {
      if ((inputMin.value > window.minPrice || inputMax.value < window.maxPrice) && !pinMoved) {
        pinMoved = true;
        count++;

        writeCounter();
      } else if (inputMin.value == window.minPrice && inputMax.value == window.maxPrice && pinMoved) {
        pinMoved = false;
        count--;

        writeCounter();
      }

      document.removeEventListener('mouseup', onMouseUpPriceRangeHandler);
    }

    while (target != this) {
      if (target.classList.contains('info__label-checkbox')) {
        target.addEventListener('mouseup', onMouseUpFilterControlsHandler);

        return;
      } else if (target.classList.contains('range__price') || target.classList.contains('range__pin')) {
        document.addEventListener('mouseup', onMouseUpPriceRangeHandler);

        return;
      } else {
        target = target.parentNode;
      }
    }
  };

  var resetHandler = function () {
    resetCheckedInputs();
    count = 0;
    pinMoved = false;
    writeCounter();

    window.checkedInputs = {
      colors: [],
      heights: [],
      depths: [],
      widths: [],
      upholsteries: [],
      fittings: []
    };

    pinMin.style.left = 0;
    pinMax.style.left = '100%';
    bar.style.left = 0;
    bar.style.right = 0;

    inputMin.value = window.minPrice;
    inputMax.value = window.maxPrice;

    window.dataForSorting = window.data.slice();

    window.applySortingTypeAndRenderData();
  }

  writeCounter();
  resetCheckedInputs();

  controlsBlock.addEventListener('mousedown', controlsBlockHandler);

  resetButton.addEventListener('click', resetHandler);
})();
