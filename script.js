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

    breakpoints: {
        640: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 4,
        },
    }
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


// modal

openModal(document.querySelector('#thank-form'), document.querySelector('#thank'));

function openModal(form, modal) {
    form.addEventListener('submit', function() {
        document.querySelector('.modal').classList.add('active');
        modal.classList.add('active');
        form.reset();
        form.classList.remove('check');
    })
}

closeModal(document.querySelectorAll('.close'));
closeModal(document.querySelectorAll('.ready-modal'));

function closeModal(buttons) {
    buttons.forEach(button => {
        button.onclick = function () {
            document.querySelector('.modal.active').classList.remove('active');
            document.querySelector('.modal__item.active').classList.remove('active');
        }
    })
}


// mask phone
document.querySelectorAll('input[type=phone]').forEach(phoneInput => {
    phoneInput.onfocus = function (event) {
        let value = phoneInput.value;

        if (value.length == 0) {
            phoneInput.value = '+7 '
        }
    }

    phoneInput.addEventListener('input', function(event) {
        let value = phoneInput.value,
            data = event.data,
            length = value.length;

        if (value.charAt(0) == '+' && length == 1) return;

        if (isNaN(data)) {
            phoneInput.value = value.slice(0, -1);
        }
    
        if (typeof data != 'object') {
            if (length == 2 || length == 6 || length == 10) {
                phoneInput.value = value + ' ';
            }
            if (length == 3 || length == 7 || length == 11) {
                if (data != ' ') {
                    phoneInput.value = value.slice(0, -1) + ' ' + data;
                }
            }
        }
        
        if (length <= 3) {
            phoneInput.value = '+7 '
        }
    });
})