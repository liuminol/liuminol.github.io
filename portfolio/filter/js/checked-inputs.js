'use strict';

;
(function () {
  var checkboxInputs = document.querySelectorAll('input[type=checkbox]');

  window.getCheckedInputs = function () {
    window.checkedInputs = {
      colors: [],
      heights: [],
      depths: [],
      widths: [],
      upholsteries: [],
      fittings: []
    };

    checkboxInputs.forEach(function (it) {
      if (it.checked) {
        switch (true) {
          case it.name === 'color':
            window.checkedInputs.colors.push(it.value);
            break;
          case it.name === 'height':
            window.checkedInputs.heights.push(it.value);
            break;
          case it.name === 'depth':
            window.checkedInputs.depths.push(it.value);
            break;
          case it.name === 'width':
            window.checkedInputs.widths.push(it.value);
            break;
          case it.name === 'upholstery':
            window.checkedInputs.upholsteries.push(it.value);
            break;
          case it.name === 'fitting':
            window.checkedInputs.fittings.push(it.value);
            break;
        }
      }
    });
  };
})();
