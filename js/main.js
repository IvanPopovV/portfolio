new WOW().init();

var mySwiper = new Swiper('.swiper-container', {
  pagination: {
    el: '.projects-pagination',
    bulletClass: 'projects-bullet',
    bulletActivClass: 'projects-bullet-active',
    clickable: true
  },
});