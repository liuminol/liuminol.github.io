'use strict';

;
(function () {
  var applyButton = document.querySelector('.filter__control-btn--apply');
  var inputMin = document.querySelector('.range__price--min');
  var inputMax = document.querySelector('.range__price--max');
  window.dataForSorting = window.data.slice();

  var filterHandler = function () {
    var temporaryData = [];
    var interimData = window.data.slice();
    var totalData = [];

    window.getCheckedInputs();

    if (window.checkedInputs.colors.length !== 0) {
      window.checkedInputs.colors.forEach(function (inputColor) {
        temporaryData = interimData.filter(function (it) {
          return it.color === inputColor;
        });

        totalData = totalData.concat(temporaryData);
      });

      interimData = totalData.slice();
    } else {
      totalData = interimData.slice();
    }

    if (window.checkedInputs.heights.length !== 0) {
      totalData = [];

      window.checkedInputs.heights.forEach(function (inputHeight) {
        temporaryData = interimData.filter(function (it) {
          return it.height === inputHeight;
        });

        totalData = totalData.concat(temporaryData);
      });

      interimData = totalData.slice();
    }

    if (window.checkedInputs.depths.length !== 0) {
      totalData = [];

      window.checkedInputs.depths.forEach(function (inputDepth) {
        temporaryData = interimData.filter(function (it) {
          return it.depth === inputDepth;
        });

        totalData = totalData.concat(temporaryData);
      });
    }

    interimData = totalData.slice();

    if (window.checkedInputs.widths.length !== 0) {
      totalData = [];

      window.checkedInputs.widths.forEach(function (inputWidth) {
        temporaryData = interimData.filter(function (it) {
          return it.width === inputWidth;
        });

        totalData = totalData.concat(temporaryData);
      });
    }

    interimData = totalData.slice();

    if (window.checkedInputs.upholsteries.length !== 0) {
      totalData = [];

      window.checkedInputs.upholsteries.forEach(function (inputUpholstery) {
        temporaryData = interimData.filter(function (it) {
          return it.upholstery === inputUpholstery;
        });

        totalData = totalData.concat(temporaryData);
      });
    }

    interimData = totalData.slice();

    if (window.checkedInputs.fittings.length !== 0) {
      totalData = [];

      window.checkedInputs.fittings.forEach(function (inputFitting) {
        temporaryData = interimData.filter(function (it) {
          return it.fitting === inputFitting;
        });

        totalData = totalData.concat(temporaryData);
      });
    }

    if (inputMin.value != window.minPrice || inputMax.value != window.maxPrice) {
      totalData = totalData.filter(function (it) {
        return it.price >= inputMin.value && it.price <= inputMax.value;
      });
    }


    window.dataForSorting = totalData.slice();

    window.applySortingTypeAndRenderData(window.dataForSorting);
  };


  applyButton.addEventListener('click', filterHandler);
})();
