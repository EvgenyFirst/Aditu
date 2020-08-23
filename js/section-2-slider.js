'use strict';

var ENTER_CODE = 'Enter';

var mainSlideOptionOne = document.querySelector('.section-2__option-one'); // первая кнопка
var slideOptionTwo = document.querySelector('.section-2__option-two'); // вторая кнопка
var slideOptionThree = document.querySelector('.section-2__option-three'); // третья кнопка
var slideOptionFour = document.querySelector('.section-2__option-four'); // четвертая кнопка
var slideOptionFive = document.querySelector('.section-2__option-five'); // пятая кнопка

var mainSlideOne = document.querySelector('.section-2__container-one'); // первый слайд
var slideTwo = document.querySelector('.section-2__container-two'); // второй слайд
var slideThree = document.querySelector('.section-2__container-three'); // третий слайд
var slideFour = document.querySelector('.section-2__container-four'); // четвертый слайд
var slideFive = document.querySelector('.section-2__container-five'); // пятый слайд

/*
    — По умелчанию по общему счету первый слайд (четвертая кнопка),
    второй слайд (первая кнопка), третий слайд (вторая кнопка),
    четвертый слайд (третья кнопка), пятый слайд (пятая кнопка);
    — По умолчанию скрип первому слайду добавляет окрашивание активного слайда;
    — панель с кнопками переключения выше всех во второй секции слайдера;
    — Любой слайд можно выбрать нажатием кнопки Enter при условии, что она 
    выбрана с помощью клавиатуры, также при выборе кнопки с помозью клавиши Enter 
    удаяются обработчики событий;
    — При нажатии на кнопку:
        — Появляется нужный слайд путем добавления класса, где указан z-index, то есть активны слайд 
        выше всех остальных сладов.
        — Удаляется класс окрашивания активной кнопки и добавляется данный класс нажатой кнопке.
        — удаляются обработчики событий.
*/

mainSlideOptionOne.classList.add('section-2__option-active'); // по умолчанию скрип первому слайду добавляет окрашивание активного слайда

var openMainSlideOne = function () { // первый слайд
    mainSlideOne.classList.add('section-2__slide-top');
    slideTwo.classList.remove('section-2__slide-top');
    slideThree.classList.remove('section-2__slide-top');
    slideFour.classList.remove('section-2__slide-top');
    slideFive.classList.remove('section-2__slide-top');

    mainSlideOptionOne.classList.add('section-2__option-active');
    slideOptionTwo.classList.remove('section-2__option-active');
    slideOptionThree.classList.remove('section-2__option-active');
    slideOptionFour.classList.remove('section-2__option-active');
    slideOptionFive.classList.remove('section-2__option-active');
};
mainSlideOptionOne.addEventListener('click', function () {
    openMainSlideOne();
    removeEventListenerOpenMainSlideOne();
    removeEventListenerOpenSlideTwo();
    removeEventListenerOpenSlideFour();
    removeEventListenerOpenSlideOptionFive();
});
mainSlideOptionOne.addEventListener('keydown', function (evt) {
    if (evt.key === ENTER_CODE) {
        openMainSlideOne();
        removeEventListenerOpenMainSlideOne();
        removeEventListenerOpenSlideTwo();
        removeEventListenerOpenSlideFour();
        removeEventListenerOpenSlideOptionFive();
    }
});

var openSlideTwo = function () { // второй слайд
    mainSlideOne.classList.remove('section-2__slide-top');
    slideTwo.classList.add('section-2__slide-top');
    slideThree.classList.remove('section-2__slide-top');
    slideFour.classList.remove('section-2__slide-top');
    slideFive.classList.remove('section-2__slide-top');

    mainSlideOptionOne.classList.remove('section-2__option-active');
    slideOptionTwo.classList.add('section-2__option-active');
    slideOptionThree.classList.remove('section-2__option-active');
    slideOptionFour.classList.remove('section-2__option-active');
    slideOptionFive.classList.remove('section-2__option-active');
};
slideOptionTwo.addEventListener('click', function () {
    openSlideTwo();
    removeEventListenerOpenMainSlideOne();
    removeEventListenerOpenSlideTwo();
    removeEventListenerOpenSlideFour();
    removeEventListenerOpenSlideOptionFive();
});
slideOptionTwo.addEventListener('keydown', function (evt) {
    if (evt.key === ENTER_CODE) {
        openSlideTwo();
        removeEventListenerOpenMainSlideOne();
        removeEventListenerOpenSlideTwo();
        removeEventListenerOpenSlideFour();
        removeEventListenerOpenSlideOptionFive();
    }
});

var openSlideThree = function () { // третий слайд
    mainSlideOne.classList.remove('section-2__slide-top');
    slideTwo.classList.remove('section-2__slide-top');
    slideThree.classList.add('section-2__slide-top');
    slideFour.classList.remove('section-2__slide-top');
    slideFive.classList.remove('section-2__slide-top');

    mainSlideOptionOne.classList.remove('section-2__option-active');
    slideOptionTwo.classList.remove('section-2__option-active');
    slideOptionThree.classList.add('section-2__option-active');
    slideOptionFour.classList.remove('section-2__option-active');
    slideOptionFive.classList.remove('section-2__option-active');
};
slideOptionThree.addEventListener('click', function () {
    openSlideThree();
    removeEventListenerOpenMainSlideOne();
    removeEventListenerOpenSlideTwo();
    removeEventListenerOpenSlideFour();
    removeEventListenerOpenSlideOptionFive();
});
slideOptionThree.addEventListener('keydown', function (evt) {
    if (evt.key === ENTER_CODE) {
        openSlideThree();
        removeEventListenerOpenMainSlideOne();
        removeEventListenerOpenSlideTwo();
        removeEventListenerOpenSlideFour();
        removeEventListenerOpenSlideOptionFive();
    }
});

var openSlideFour = function () { // четвертый слайд
    mainSlideOne.classList.remove('section-2__slide-top');
    slideTwo.classList.remove('section-2__slide-top');
    slideThree.classList.remove('section-2__slide-top');
    slideFour.classList.add('section-2__slide-top');
    slideFive.classList.remove('section-2__slide-top');

    mainSlideOptionOne.classList.remove('section-2__option-active');
    slideOptionTwo.classList.remove('section-2__option-active');
    slideOptionThree.classList.remove('section-2__option-active');
    slideOptionFour.classList.add('section-2__option-active');
    slideOptionFive.classList.remove('section-2__option-active');
};
slideOptionFour.addEventListener('click', function () {
    openSlideFour();
    removeEventListenerOpenMainSlideOne();
    removeEventListenerOpenSlideTwo();
    removeEventListenerOpenSlideFour();
    removeEventListenerOpenSlideOptionFive();
});
slideOptionFour.addEventListener('keydown', function (evt) {
    if (evt.key === ENTER_CODE) {
        openSlideFour();
        removeEventListenerOpenMainSlideOne();
        removeEventListenerOpenSlideTwo();
        removeEventListenerOpenSlideFour();
        removeEventListenerOpenSlideOptionFive();
    }
});

var openSlideOptionFive = function () { // пятый слайд
    mainSlideOne.classList.remove('section-2__slide-top');
    slideTwo.classList.remove('section-2__slide-top');
    slideThree.classList.remove('section-2__slide-top');
    slideFour.classList.remove('section-2__slide-top');
    slideFive.classList.add('section-2__slide-top');

    mainSlideOptionOne.classList.remove('section-2__option-active');
    slideOptionTwo.classList.remove('section-2__option-active');
    slideOptionThree.classList.remove('section-2__option-active');
    slideOptionFour.classList.remove('section-2__option-active');
    slideOptionFive.classList.add('section-2__option-active');
};
slideOptionFive.addEventListener('click', function () {
    openSlideOptionFive();
    removeEventListenerOpenMainSlideOne();
    removeEventListenerOpenSlideTwo();
    removeEventListenerOpenSlideFour();
    removeEventListenerOpenSlideOptionFive();
});
slideOptionFive.addEventListener('keydown', function (evt) {
    if (evt.key === ENTER_CODE) {
        openSlideOptionFive();
        removeEventListenerOpenMainSlideOne();
        removeEventListenerOpenSlideTwo();
        removeEventListenerOpenSlideFour();
        removeEventListenerOpenSlideOptionFive();
    }
});

// Для удаления обработчиков событий (start)
var removeEventListenerOpenMainSlideOne = function () {
    document.removeEventListener('keydown', openMainSlideOne);
};
var removeEventListenerOpenSlideTwo = function () {
    document.removeEventListener('keydown', openSlideTwo);
};
var removeEventListenerOpenSlideThree = function () {
    document.removeEventListener('keydown', openSlideThree);
};
var removeEventListenerOpenSlideFour = function () {
    document.removeEventListener('keydown', openSlideFour);
};

var removeEventListenerOpenSlideOptionFive = function () {
    document.removeEventListener('keydown', openSlideOptionFive);
};
// Для удаления обработчиков событий (end)