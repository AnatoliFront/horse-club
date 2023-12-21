var qs = (selector) => document.querySelector(selector);
var qsa = (selector) => document.querySelectorAll(selector);

document.addEventListener('DOMContentLoaded', function() {
    var menuBtn = qs('.burger-button');
    var  menu = qs('.header__navigation');

    menuBtn.addEventListener('click', function(){
        menuBtn.classList.toggle('active');
        menu.classList.toggle('active');
    })
    
    
    var openPoupButton = qsa('.feedback-link');

    openPoupButton.forEach(btn => {
        btn.addEventListener('click', function() {
            document.body.classList.add('modal-open');
        })
    });


    var closeModalButton = qs('.close_modal');
    var modalBackground = qs('.modal_window_background');
    
    var closeModalWindow = function() {
        document.body.classList.remove('modal-open');
    }

    closeModalButton.addEventListener('click', closeModalWindow);
    modalBackground.addEventListener('click', closeModalWindow);

    var feedbackForm = qs('.feedback_form');

    feedbackForm.addEventListener('submit', function(e) {
        e.preventDefault();
       
        new Promise((res, rej) => {
                qs('.form_loader').classList.add('active');
                setTimeout(() => res(true), 2000) 
            }).then(result => {
                qs('.form_loader').classList.remove('active');
                if (result) {
                    alert('Форма отправлена успешно');
                    document.body.classList.remove('modal-open');
                } else {
                    alert('Форма не отправлена, попробуйте еще раз');
                }
            });        
    })

    var phoneInput = qs('.form-control.phone-input');
    IMask(
        phoneInput,
        {
            mask: '+{375}(00)000-00-00',
        }
    )

    var fioInput = qs('.form-control.text-input');

    fioInput.oninvalid = function() { 
        this.setCustomValidity('Введите ФИО'); 
    }

    phoneInput.oninvalid = function() { 
        this.setCustomValidity('Введите номер телефона'); 
    }

    fioInput.oninput = function() { 
        this.setCustomValidity(''); 
    }

    phoneInput.oninput = function() { 
        this.setCustomValidity(''); 
    }    


    if (qs('.reviews')) {
        new Splide( '.reviews', {
            type: 'loop',
            perPage: 4,
            perMove: 1,
            gap: 20,
            breakpoints: {
                720: {
                    perPage: 3,
                },
                540: {
                    perPage: 2,
                },
                420: {
                    perPage: 1,
                },
          }
        }).mount();
    }
})