const prevBtn = document.querySelector('#categories .swiper-button-prev');
const categorySection = document.querySelector('#categories');

// Swiper
var swiper = new Swiper('.mySwiperNewest', {
  slidesPerView: 1,
  spaceBetween: 25,
  slidesPerGroup: 1,
  loop: true,
  grabCursor: true,
  centeredSlides: true,
  loopFillGroupWithBlank: false,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2.758,
      spaceBetween: 30,
      slidesPerGroup: 3,
    },
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

var swiperCategories = new Swiper('.mySwiperCategories', {
  spaceBetween: 28,
  centeredSlides: true,
  grabCursor: true,
  navigation: {
    nextEl: '.swiper-button-next-categories',
    prevEl: '.swiper-button-prev-categories',
  },
});

// New Product Card
function generateCard(num) {}
