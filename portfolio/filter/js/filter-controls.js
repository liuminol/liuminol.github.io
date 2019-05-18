'use strict';

;
(function () {
  var filterBlock = document.querySelector('.filter');
  var toggleButton = filterBlock.querySelector('.filter__toggle-btn');
  var controlsBlock = filterBlock.querySelector('.filter__controls');
  

  toggleButton.addEventListener('click', function () {
    filterBlock.classList.toggle('filter--opened');
  });

  controlsBlock.addEventListener('click', function (evt) {
    var target = evt.target;

    while (target != this) {
      if (target.classList.contains('filter__name')) {
        target.classList.toggle('filter__name--selected');

        return;
      } else {
        target = target.parentNode;
      }
    }
  });
})();
