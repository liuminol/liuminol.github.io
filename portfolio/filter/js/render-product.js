'use strict';

;
(function () {
  var colorNameToColorHEX = {
    'dark blue': '#00008b',
    'dark red': '#8b0000',
    'beige': '#f5f5dc',
    'black': '#000000'
  };
  var template = document.querySelector('#template')
    .content.querySelector('.product__item');
  var productList = document.querySelector('.product__list');

  window.renderProduct = function (data) {
    while (productList.firstChild) {
      productList.removeChild(productList.firstChild);
    };

    var fragment = document.createDocumentFragment();

    data.forEach(function (it) {
      var element = template.cloneNode(true);

      if (it.labels.novelty) {
        element.querySelector('.product__novelty').textContent = 'Новинка';
      }
      if (it.labels.discount) {
        element.querySelector('.product__discount').textContent = it.labels.discount + '%';
        element.querySelector('.product__old-price').textContent = it.price + Math.floor(it.price * it.labels.discount / 100) + ' руб';
      }
      element.querySelector('.product__size--height').textContent = it.height;
      element.querySelector('.product__size--depth').textContent = it.depth;
      element.querySelector('.product__size--width').textContent = it.width;
      element.querySelector('.product__color').style.backgroundColor = colorNameToColorHEX[it.color];
      element.querySelector('.product__title').textContent = it.title;
      element.querySelector('.product__current-price').textContent = it.price + ' руб';

      fragment.appendChild(element);
    });

    productList.appendChild(fragment);
  };
})();
