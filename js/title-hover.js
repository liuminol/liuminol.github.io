'use strict';

;
(function () {
  var title = document.querySelector('.wrapper__title');
  var color;

  var getRandNum = function (max) {
    return Math.round(Math.random() * max);
  };
  
  var changeColor = function() {
    title.classList.remove('animation--fadein');
    
    color = 'rgb(' + getRandNum(255) + ', ' + getRandNum(230) + ', ' + getRandNum(255) + ')';
    title.style.color = color;
  };
  
  
  title.classList.add('animation--fadein');

  title.addEventListener('mouseover', function () {
    window.debounce(changeColor);
  });
}());
