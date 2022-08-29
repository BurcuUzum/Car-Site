const swiper = new Swiper('.main-swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    spaceBetween: 20,

    breakpoints: {  
      '1024': {
        slidesPerView: 1,
        spaceBetween: 20,}
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
    pagination: {
      el: '.swiper-pagination',
      clickable:true
    },
  });