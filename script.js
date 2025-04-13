'use strict';

const receiptsSwiper = new Swiper('.swiper-receipts', {
    // Optional parameters
    slidesPerView: 2,
    spaceBetween: 8,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-next',
      prevEl: '.swiper-prev',
    },
});