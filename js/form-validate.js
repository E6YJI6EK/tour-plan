$(document).ready(function() {
    // Валидация форм (модальное и футер)
    $(".modal__form").validate({
        errorClass: "invalid",
        messages: {
            name: {
                required: "You forgot to say us your name, sir.",
                minlength: "Your name must be a more then two letters."
            },
            phone: {
                required: "Also we need your phone.",
            },
            mail: {
                required: "And an email address wouldn't hurt either."
            } 
        },
    });

    $('.footer__form').validate({
        errorClass: "invalid",
        messages: {
            name: {
                required: "You forgot to say us your name, sir.",
                minlength: "Your name must be a more then two letters."
            },
            phone: {
                required: "Also we need your phone.",
            }
        },
    });
    // Маска на форму с телефоном
    $('.modal__phone').mask('+7 (000) 000-00-00');
    $('.footer__phone').mask('+7 (000) 000-00-00');
});

