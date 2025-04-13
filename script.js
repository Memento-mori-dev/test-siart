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


// form
document.querySelectorAll('.confirmation').forEach(checkbox => {
    checkbox.onclick = function () {
        checkbox.classList.toggle('active');
    }
})

document.querySelectorAll('form').forEach(form => {
    form.querySelector('input[type="submit"]').onclick = function () {
        let validity = Array.from(form.querySelectorAll('input')).find(e => {
            if (e.checkValidity()) return true;
        })
        
        if (validity) {
            form.classList.add('check');
        }else{
            form.classList.remove('check');
        }
    }
})