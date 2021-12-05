import "jquery";
import "jquery-validation";


window.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector(".menu"),
    menuItem = document.querySelectorAll(".menu__item"),
    hamburger = document.querySelector(".hamburger");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("hamburger__active");
    menu.classList.toggle("menu__active");
  });

  menuItem.forEach((item) => {
    item.addEventListener("click", () => {
      hamburger.classList.toggle("hamburger__active");
      menu.classList.toggle("menu__active");
    });
  });

  $(".menu").on("click", "li:not(.menu__item__active)", function () {
    $(this)
      .addClass("menu__item__active")
      .siblings()
      .removeClass("menu__item__active");
  });

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
});
