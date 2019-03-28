'use strict';

;
(function () {
  var REQUIRED_SCREEN_SIZE = 768;

  if (window.screen.width > REQUIRED_SCREEN_SIZE) {
    var title = document.querySelector('.wrapper__title');
    var color;

    var getRandNum = function (max) {
      return Math.round(Math.random() * max);
    };

    var changeColor = function () {
      color = 'rgb(' + getRandNum(255) + ', ' + getRandNum(230) + ', ' + getRandNum(255) + ')';
      title.style.color = color;
    };

    title.classList.add('animation--fadein');

    title.addEventListener('mouseover', function () {
      title.classList.remove('animation--fadein');
      window.debounce(changeColor);
    });
  };
}());
