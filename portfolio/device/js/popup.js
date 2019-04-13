'use strict';

(function () {
  var ESC_KEYCODE = 27;

  var feedback = document.querySelector(".feedback");
  var popupFeedback = document.querySelector(".modal-window-feedback");
  var map = document.querySelector(".map");
  var popupMap = document.querySelector(".modal-window-map");
  var popupMapClose = document.querySelector(".modal-window-map .modal-window-close");
  var popupFeedbackClose = document.querySelector(".modal-window-feedback .modal-window-close");

  var onEscPress = function (evt) {
    if (evt.keyCode === ESC_KEYCODE) {
      closePopupFeedback();
      closePopupMap();
    }
  };

  var openPopupFeedback = function () {
    popupFeedback.classList.add("modal-window-show");
    window.addEventListener('keydown', onEscPress);
  };

  var openPopupMap = function () {
    popupMap.classList.add("modal-window-show");
    window.addEventListener('keydown', onEscPress);
  };

  var closePopupFeedback = function () {
    popupFeedback.classList.remove("modal-window-show");
    window.removeEventListener('click', onEscPress);
  };

  var closePopupMap = function () {
    popupMap.classList.remove("modal-window-show");
    window.removeEventListener('click', onEscPress);
  };

  feedback.addEventListener("click", function (evt) {
    evt.preventDefault();

    openPopupFeedback();
  });

  map.addEventListener("click", function (evt) {
    evt.preventDefault();

    openPopupMap();
  });

  popupFeedbackClose.addEventListener("click", function (evt) {
    evt.preventDefault();

    closePopupFeedback();
  });

  popupMapClose.addEventListener("click", function (evt) {
    evt.preventDefault();

    closePopupMap();
  });
})();
