'use strict';

;
(function () {
  var FIRST_ELEMENT_NUM = 0;
  var FINAL_ELEMENT_NUM = window.data.length - 1;
  var elementNumber = FIRST_ELEMENT_NUM;

  var reviewsList = document.querySelector('.reviews__list');
  var buttonsWrap = document.querySelector('.reviews__toggle-wrapper');
  var buttonPrev = document.querySelector('.reviews__toggle--prev');
  var buttonNext = document.querySelector('.reviews__toggle--next');

  var reviewTemplate = document.querySelector('#template')
    .content.querySelector('.reviews__item');

  var renderReview = function (element) {
    while (reviewsList.firstChild) {
      reviewsList.removeChild(reviewsList.firstChild);
    }

    var item = reviewTemplate.cloneNode(true);

    item.querySelector('.reviews__author-text').textContent = element.text;
    item.querySelector('.reviews__author-name').textContent = element.name;
    item.querySelector('.reviews__author-link').textContent = element.link;

    reviewsList.appendChild(item);
  };


  buttonsWrap.classList.remove('visually-hidden');

  renderReview(window.data[0]);

  buttonPrev.addEventListener('click', function () {
    if (elementNumber === 0) {
      elementNumber = FINAL_ELEMENT_NUM;
      renderReview(window.data[elementNumber]);
    } else {
      elementNumber--;
      renderReview(window.data[elementNumber]);
    }
  });

  buttonNext.addEventListener('click', function () {
    if (elementNumber === FINAL_ELEMENT_NUM) {
      elementNumber = 0;
      renderReview(window.data[elementNumber]);
    } else {
      elementNumber++;
      renderReview(window.data[elementNumber]);
    }
  });
}());
