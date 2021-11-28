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

  $(function () {
    $(".menu a").each(function () {
      var location = window.location.href;
      var link = this.href;
      if (location == link) {
        $(this).addClass("menu__item__active");
      }
    });
  });
});
