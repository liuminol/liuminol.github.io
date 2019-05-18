'use strict';

;
(function () {
  var selectType = document.querySelector('.content__sorting');

  var getArraySortedByPrice = function (data) {
    var priceArray = data.slice();

    priceArray.sort(function (a, b) {
      return a.price - b.price;
    });

    return priceArray;
  };

  var getMinMaxPrice = function (array) {
    var priceArray = getArraySortedByPrice(array);

    window.minPrice = priceArray[0].price;
    window.maxPrice = priceArray[priceArray.length - 1].price;
  };

  window.applySortingTypeAndRenderData = function () {
    if (window.dataForSorting.length === 0) {   
      window.renderProduct([]);
      
      var note = document.createElement('p');
      document.querySelector('.product__list').appendChild(note);
      note.textContent = 'Нет товаров, соответствующих критериям поиска. Попробуйте изменить фильтр.';
      note.style.color = 'red';
      note.style.fontSize = '20px';
      
      return;
    }
    
    if (selectType.value === 'price-increase') {
      var sortedData = getArraySortedByPrice(window.dataForSorting);
    }

    if (selectType.value === 'price-decrease') {
      var sortedData = getArraySortedByPrice(window.dataForSorting);
      sortedData.reverse();
    }

    if (selectType.value === 'new') {
      var sortedData = window.dataForSorting.sort(function (a, b) {
        if (!a.labels.novelty && b.labels.novelty) {
          return 1;
        }
      });
    }

    if (selectType.value === 'discount') {
      var sortedData = window.dataForSorting.sort(function (a, b) {
        if (!a.labels.discount && b.labels.discount) {
          return 1;
        }
      });
    }

    if (selectType.value === 'by-name') {
      var sortedData = window.dataForSorting.sort(function (a, b) {
        if (a.title > b.title) {
          return 1;
        }

        if (a.title < b.title) {
          return -1;
        }
      });
    }

    window.renderProduct(sortedData);
  };

  getMinMaxPrice(window.data);

  window.applySortingTypeAndRenderData();

  selectType.addEventListener('change', window.applySortingTypeAndRenderData);
})();
