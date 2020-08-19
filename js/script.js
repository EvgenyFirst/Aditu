'use strict';

// Cлайдер секции 3

var ENTER_CODE = 'Enter';

var navMain = document.querySelector('.flex-slider-two');
var navToggleRight = document.querySelector('.section-3__arrow-right');
var navToggleRightCloser = document.querySelector('.section-3__arrow-right-closer');
var containerMain = document.querySelector('.section-3__container-main');
var navToggleLeft = document.querySelector('.section-3__arrow-left');
var navToggleLeftCloser = document.querySelector('.section-3__arrow-left-closer');

/* 
   Gри нажатии стрелки вправо: 
    — появляется слайд с новыми товарами; 
    — на месте первой стрелки вправо появляется 
        такая же стрелка (при нажатии будет убирать второй слайд 
        и возвращать высоту всего блока в первоначальную);
    — при отклрытии второго слайда изменяется 
        высота всего блока до нормальной высоты;
    — оригинальная стрека влево заменяется на другую стрелку 
        при нажатии стрелки вправо (будет закрывать 
        новый слайдер, отображая новый).
*/

/* 
    Gри нажатии стрелки влево: 
    — появляется слайд с новыми товарами; 
    — на месте первой стрелки влево появляется 
        такая же стрелка (при нажатии будет убирать второй слайд 
        и возвращать высоту всего блока в первоначальную);
    — при отклрытии второго слайда изменяется 
        высота всего блока до нормальной высоты;
    — оригинальная стрека вправо заменяется на другую стрелку 
        при нажатии стрелки влево (будет закрывать 
        новый слайдер, отображая новый).
*/

/* 
    Dсе стрелки влево и вправо:
    — удаляют друг у друга обработчики событий
        по клику и нажатию на кнопку Enter;
    — переключают слайдеры нажатем кнопки Enter;
*/

// Действия правой стрелки (start)
var openCloseNewSlideRight = function () {
    navMain.classList.remove('hidden');
    navToggleRight.classList.add('hidden');
    navToggleLeft.classList.add('hidden');
    navToggleRightCloser.classList.remove('hidden-closer');
    navToggleLeftCloser.classList.remove('hidden-closer');
    containerMain.classList.add('section-3__container-fix');
};
navToggleRight.addEventListener('click', function () {
    openCloseNewSlideRight();
});
navToggleRight.addEventListener('keydown', function (evt) {
    if (evt.key === ENTER_CODE) {
        openCloseNewSlideRight();
        removeEventListenerRightOpenClose();
        removeEventListenerLeftCloseOpen();
        removeEventListenerRightCloseOpen();
    }
});

var closeOpenNewSlideRight = function () {
    navMain.classList.add('hidden');
    navToggleRight.classList.remove('hidden');
    navToggleLeft.classList.remove('hidden');
    navToggleRightCloser.classList.add('hidden-closer');
    navToggleLeftCloser.classList.add('hidden-closer');
    containerMain.classList.remove('section-3__container-fix');
};
navToggleRightCloser.addEventListener('click', function () {
    closeOpenNewSlideRight();
    removeEventListenerRightOpenClose();
    removeEventListenerLeftCloseOpen();
    removeEventListenerRightCloseOpen();
});
navToggleRightCloser.addEventListener('keydown', function (evt) {
    if (evt.key === ENTER_CODE) {
        closeOpenNewSlideRight();
        removeEventListenerRightOpenClose();
        removeEventListenerLeftCloseOpen();
        removeEventListenerRightCloseOpen();
    }
});
// Действия правой стрелки (end)
//
// Действия левой стрелки (start)
var openCloseNewSlideLeft = function () {
    navMain.classList.remove('hidden');
    navToggleRight.classList.add('hidden');
    navToggleLeft.classList.add('hidden');
    navToggleRightCloser.classList.remove('hidden-closer');
    navToggleLeftCloser.classList.remove('hidden-closer');
    containerMain.classList.add('section-3__container-fix');
}
navToggleLeft.addEventListener('click', function () {
    openCloseNewSlideLeft();
    removeEventListenerRightCloseOpen();
    removeEventListenerRightOpenClose();
});
navToggleLeft.addEventListener('keydown', function (evt) {
    if (evt.key === ENTER_CODE) {
        openCloseNewSlideLeft();
        removeEventListenerRightOpenClose();
        removeEventListenerRightCloseOpen();
    }
});

var closeOpenNewSlideLeft = function () {
    navMain.classList.add('hidden');
    navToggleRight.classList.remove('hidden');
    navToggleLeft.classList.remove('hidden');
    navToggleRightCloser.classList.add('hidden-closer');
    navToggleLeftCloser.classList.add('hidden-closer');
    containerMain.classList.remove('section-3__container-fix');
}
navToggleLeftCloser.addEventListener('click', function () {
    closeOpenNewSlideLeft();
});
navToggleLeftCloser.addEventListener('keydown', function (evt) {
    if (evt.key === ENTER_CODE) {
        closeOpenNewSlideLeft();
        removeEventListenerRightOpenClose();
        removeEventListenerLeftCloseOpen();
        removeEventListenerRightCloseOpen();
    }
});

// Действия левой стрелки (end)


// Для удаления обработчиков событий (start)
var removeEventListenerLeftCloseOpen = function () {
    document.removeEventListener('keydown', closeOpenNewSlideLeft);
};
var removeEventListenerRightOpenClose = function () {
    document.removeEventListener('keydown', openCloseNewSlideRight);
};
var removeEventListenerRightOpenClose = function () {
    document.removeEventListener('keydown', openCloseNewSlideLeft);
};
var removeEventListenerRightCloseOpen = function () {
    document.removeEventListener('keydown', closeOpenNewSlideRight);
};
// Для удаления обработчиков событий (end)