

let burger = document.querySelector('.header__burger');
let menu = document.querySelector('.header__menu');
const body = document.body;

let links = document.querySelectorAll('.header__link');

// Бургер меню
burger.onclick = function() {
    burger.classList.toggle('active');
    menu.classList.toggle('active');
    body.classList.toggle('lock');

    for(let i = 0; i < links.length; i++) {
        links[i].onclick = function() {

            burger.classList.remove('active');
            menu.classList.remove('active');
            body.classList.remove('lock');


        }
    }

}

// Скролл
let header = document.querySelector('.header');

window.addEventListener('scroll', function() {

    if(this.pageYOffset > 80 && header.classList.contains('default')) {
        header.classList.remove('default');
        header.classList.add('fixed');
    }

    if(this.pageYOffset <= 80 && header.classList.contains('fixed')) {
        header.classList.remove('fixed');
        header.classList.add('default');
    }
})


$(document).ready(function () {
  //initialize swiper when document ready
  let mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    spaceBetween: 80,

    // Navigation arrows
    navigation: {
      nextEl: '.arrow__next',
      prevEl: '.arrow__prev',
    },

    observer: true,
    observeParents: true,

  })
});

