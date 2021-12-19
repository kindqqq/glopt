$("document").ready(function () {
  const menu = document.querySelector(".menu"),
    menuItem = document.querySelectorAll(".menu__item"),
    overCloseElem = document.querySelector(".menu__overlay"),
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

  overCloseElem.addEventListener("click", () => {
    menu.classList.toggle("menu__active");
    hamburger.classList.toggle("hamburger__active");
  });

  $(".menu").on("click", "li:not(.menu__item__active)", function () {
    $(this)
      .addClass("menu__item__active")
      .siblings()
      .removeClass("menu__item__active");
  });

});
