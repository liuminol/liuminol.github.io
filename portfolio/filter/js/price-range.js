'use strict';

;
(function () {
  var PIN_WIDTH = 5;
  var priceBlock = document.querySelector('.info--price');
  var scale = priceBlock.querySelector('.range__scale');
  var bar = priceBlock.querySelector('.range__bar');
  var pinMin = priceBlock.querySelector('.range__pin--min');
  var pinMax = priceBlock.querySelector('.range__pin--max');
  var inputMin = priceBlock.querySelector('.range__price--min');
  var inputMax = priceBlock.querySelector('.range__price--max');

  pinMin.style.left = 0;
  pinMax.style.left = '100%';
  bar.style.left = 0;
  bar.style.right = 0;

  inputMin.value = window.minPrice;
  inputMax.value = window.maxPrice;

  pinMin.addEventListener('mousedown', function (evt) {
    evt.preventDefault();

    var startCoords = evt.clientX;

    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();

      var shift = startCoords - moveEvt.clientX;
      var offset = ((pinMin.offsetLeft - shift) / scale.offsetWidth) * 100;
      var pinMaxLimit = ((pinMax.offsetLeft - PIN_WIDTH) / scale.offsetWidth) * 100;

      switch (true) {
        case offset < 0:
          offset = 0;
          break;
        case offset > pinMaxLimit:
          offset = pinMaxLimit;
          break;
        default:
          startCoords = moveEvt.clientX;
      }

      pinMin.style.left = offset + '%';
      bar.style.left = offset + '%';

      inputMin.value = window.minPrice + Math.round(offset * (window.maxPrice - window.minPrice) / 100);
    };

    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    }

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });

  pinMax.addEventListener('mousedown', function (evt) {
    evt.preventDefault();

    var startCoords = evt.clientX;

    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();

      var shift = startCoords - moveEvt.clientX;
      var offset = ((pinMax.offsetLeft - shift) / scale.offsetWidth) * 100;
      var pinMinLimit = ((pinMin.offsetLeft + PIN_WIDTH) / scale.offsetWidth) * 100;

      switch (true) {
        case offset > 100:
          offset = 100;
          break;
        case offset < pinMinLimit:
          offset = pinMinLimit;
          break;
        default:
          startCoords = moveEvt.clientX;
      }

      pinMax.style.left = offset + '%';
      bar.style.right = (100 - offset) + '%';

      inputMax.value = window.maxPrice - Math.round((100 - offset) * (window.maxPrice - window.minPrice) / 100);
    };

    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    }

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });
})();
