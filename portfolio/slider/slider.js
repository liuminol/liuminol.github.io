'use strict';

;
(function () {
  var SCALE_START = 0;
  var SCALE_WIDTH = 500;
  var IMAGE_HEIGHT = 500;
  var IMAGE_START_CLIP = 297;
  var TOGGLE_START_COORDS = SCALE_WIDTH - IMAGE_START_CLIP;
  var TRANSITION_VALUE = '0.1s ease-out';

  var toggle = document.querySelector('.controls__slider-toggle');
  var beforeButton = document.querySelector('.controls__button--before');
  var afterButton = document.querySelector('.controls__button--after');
  var clippedImage = document.querySelector('.slider__image--after');

  /**
   * Перемещает ползунок по оси x. 
   *
   * @param - Значение положения ползунка на шкале (не должно выходить за пределы SCALE_START и SCALE_WIDTH).
   */
  var setTogglePosition = function (value) {
    toggle.style.left = value + 'px';
  };

  /**
   * Отсекает изображение по оси x от левого края.
   *
   * @param - Значение области вырезки от левого края изображения по оси x.
   */
  var clipImage = function (x) {
    clippedImage.style.clip = 'rect(0px, auto, ' + IMAGE_HEIGHT + 'px, ' + x + 'px)';
  };


  setTogglePosition(TOGGLE_START_COORDS);
  clipImage(IMAGE_START_CLIP);
  toggle.style.transition = TRANSITION_VALUE;

  toggle.addEventListener('mousedown', function (evt) {
    evt.preventDefault();
    
    toggle.style.transition = '';
    var startCoords = evt.clientX;

    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();

      var shift = startCoords - moveEvt.clientX;
      var toggleOffset = toggle.offsetLeft - shift;
      setTogglePosition(toggleOffset);

      switch (true) {
        case toggleOffset < SCALE_START:
          setTogglePosition(SCALE_START);
          break;
        case toggleOffset > SCALE_WIDTH:
          setTogglePosition(SCALE_WIDTH);
          break;
        default:
          startCoords = moveEvt.clientX;
      };

      clipImage(SCALE_WIDTH - toggleOffset);
    };

    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();

      toggle.style.transition = TRANSITION_VALUE;
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });

  beforeButton.addEventListener('click', function (evt) {
    evt.preventDefault();

    setTogglePosition(SCALE_START);
    clipImage(SCALE_WIDTH - SCALE_START);
  });

  afterButton.addEventListener('click', function (evt) {
    evt.preventDefault();

    setTogglePosition(SCALE_WIDTH);
    clipImage(SCALE_START);
  });
}());
