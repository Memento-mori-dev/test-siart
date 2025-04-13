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

document.querySelectorAll('.add-cart').forEach(cart => {
    addEventBtnCart(cart)
})

function addEventBtnCart(cartBtn) {
    cartBtn.onclick = function () {
        let counter = document.querySelector('#template-counter').content.cloneNode(true);

        cartBtn.replaceWith(counter);

        addControllerCounter(document.querySelector('.counter.ready'));
    }

    cartBtn.classList.remove('ready')
}

function addControllerCounter(counter) {
    let prev = counter.querySelector('.counter-prev'),
        add = counter.querySelector('.counter-add'),
        input = counter.querySelector('.counter-input');

    prev.onclick = function () {
        let value = input.value;
        
        if (value <= 1) {
            let buttonCart = document.querySelector('#template-cart').content.cloneNode(true);

            counter.replaceWith(buttonCart);

            addEventBtnCart(document.querySelector('.add-cart.ready'));
        }

        input.value -= 1;
    }

    add.onclick = function () {
        let value = input.value;
        
        input.value = ++value;
    }

    counter.classList.remove('ready')
}