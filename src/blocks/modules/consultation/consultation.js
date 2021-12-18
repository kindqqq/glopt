import "jquery";
import "jquery-validation";
import "owl.carousel";
//Validate Form

// Phone Mask
$("document").ready(function () {
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
  // Phone mask
  $("#phone").mask("+7(999)999-99-99");

  $(".owl-carousel").owlCarousel({
    // stagePadding: 330,
    loop: true,
    margin: 0,
    items: 1,
    lazyLoad: true,
    responsive: {
      0: {
        stagePadding: 60,
      },
      600: {
        stagePadding: 100,
      },
      1000: {
        stagePadding: 200,
      },
      1200: {
        stagePadding: 250,
      },
      1400: {
        stagePadding: 250,
      },
      1600: {
        stagePadding: 250,
      },
      1800: {
        stagePadding: 250,
      },
    },
  });

  var owl = $(".owl-carousel");
  $(".owl-next").click(function () {
    owl.trigger("next.owl.carousel", [500]);
  });

  $(".owl-prev").click(function () {
    owl.trigger("prev.owl.carousel", [500]);
  });

});
