import "jquery";
import "jquery-validation";
import "jquery.maskedinput";
//Validate Form

function validForm(form) {
  $(form).validate({
    rules: {
      name: {
        required: true,
        minlength: 2,
      },
      phone: "required",
      email: {
        required: true,
        email: true,
      },
    },
    messages: {
      name: {
        required: "Введите свое имя",
        minlength: jQuery.validator.format(
          "Имя должно быть не менне {0} знаков!"
        ),
      },
      phone: "Пожалуйста, укажите ваш номер телефона",
      email: {
        required: "Пожалуйста, укажите вашу почту",
        email:
          "Ваш адрес электронной почты должен быть в формате name@domain.com",
      },
    },
  });
}
validForm("#validForm");

//Phone Mask
// $('document').ready(function() {
//     $("#name").mask("99/99/9999");
// });

