const heroSwiper = new Swiper('.hero__slider', {
  loop: true,
  speed: 500,

  navigation: {
    nextEl: '.hero__navigation--next',
    prevEl: '.hero__navigation--prev',
  },

  pagination: {
    el: '.hero__pagination',
    clickable: true,
  },
});
