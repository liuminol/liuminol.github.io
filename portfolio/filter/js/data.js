'use strict';

;
(function () {
  window.data = [];

  window.checkedInputs = {
    colors: [],
    heights: [],
    depths: [],
    widths: [],
    upholsteries: [],
    fittings: []
  };

  var COUNT_PRODUCTS = 25;

  var titles = ['Диван Rebel', 'Диван Astley', 'Диван Bouton', 'Диван FLY', 'Диван Panama Sand', 'Диван Paolo', 'Диван Armstrong', 'Кресло Rebel', 'Кресло Astley', 'Кресло Bouton', 'Кресло FLY', 'Кресло Panama Sand', 'Кресло Paolo', 'Кресло Armstrong'];
  var colors = ['dark blue', 'dark red', 'beige', 'black'];
  var heights = ['72', '78', '80', '89'];
  var depths = ['80', '85', '91', '95', '98', '101', '105'];
  var widths = ['162', '170', '180', '200', '220', '240'];
  var upholsteries = ['leather', 'linen fabric', 'polyester', 'nist', 'cotton'];
  var fittings = ['bronze', 'steel', 'solid oak', 'birch', 'eucalyptus', 'downy filler'];

  var getRandomNum = function (max) {
    return Math.floor(Math.random() * (max + 1));
  };

  var getRandomBoolean = function () {
    var rand = Math.random();

    return rand > 0.8 ? true : false;
  };

  var getRandomDiscount = function () {
    var rand = Math.random();

    return rand > 0.8 ? 1 + getRandomNum(9) : false;
  };

  var createProduct = function () {
    var product = {
      title: titles[getRandomNum(titles.length - 1)] + ' ' + (1 + getRandomNum(4)),
      color: colors[getRandomNum(colors.length - 1)],
      height: 'h: ' + heights[getRandomNum(heights.length - 1)],
      depth: 'd: ' + depths[getRandomNum(depths.length - 1)],
      width: 'w: ' + widths[getRandomNum(widths.length - 1)],
      upholstery: upholsteries[getRandomNum(upholsteries.length - 1)],
      fitting: fittings[getRandomNum(fittings.length - 1)],
      price: 3000 + getRandomNum(150000),
      labels: {
        novelty: getRandomBoolean(),
        discount: getRandomDiscount()
      }
    };

    return product;
  };

  for (var i = 0; i < COUNT_PRODUCTS; i++) {
    window.data[i] = createProduct();
  };
})();
