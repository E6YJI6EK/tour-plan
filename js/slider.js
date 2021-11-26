const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: false,
  // Navigation arrows
  navigation: {
    nextEl: '.slider-button__next',
    prevEl: '.slider-button__prev',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  }
});