"use strict";

;
(function () {
  var ESC_KEYCODE = 27;

  var modal = document.querySelector(".modal");
  var link = document.querySelector(".featured__price-add");
  var background = document.querySelector(".modal__background");

  var onEscPress = function (evt) {
    if (evt.keyCode === ESC_KEYCODE) {
      closeModal();
    }
  };

  var openModal = function () {
    modal.classList.add("modal--showed");
  };

  var closeModal = function () {
    modal.classList.remove("modal--showed");
    window.removeEventListener('keydown', onEscPress);
  };

  link.addEventListener("click", function (event) {
    event.preventDefault();

    openModal();
    window.addEventListener("keydown", onEscPress);
  });

  background.addEventListener("click", function () {
    closeModal();
  });
})();
