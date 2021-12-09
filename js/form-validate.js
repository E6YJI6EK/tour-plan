$(document).ready(function () {
  $(".newsletter__subscribe").validate({
    errorClass: "newsletter__invalid",
    messages: {
      mail: { 
        required: "Please enter a email address.",
        email: "Please enter a valid email address. For example: john@abc.com"
      },
    },
  });
  $(".modal__form").validate({
    errorClass: "invalid",
    messages: {
      name: {
        required: "You forgot to say us your name.",
        minlength: "Your name must be a more then two letters.",
      },
      phone: { required: "Also we need your phone." },
      mail: {
        required: "And an email address wouldn't hurt either.",
        email: "Please enter a valid email address. For example: john@abc.com"
      },
    },
  }),
    $(".footer__form").validate({
      errorClass: "invalid",
      messages: {
        name: {
          required: "You forgot to say us your name.",
          minlength: "Your name must be a more then two letters.",
        },
        phone: { required: "Also we need your phone." },
      },
    }),
    $(".modal__phone").mask("+7 (000) 000-00-00"),
    $(".footer__phone").mask("+7 (000) 000-00-00");
});
