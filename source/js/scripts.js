window.addEventListener("load", function () {
  var mainMenu = document.querySelector('.main-nav');
  var menuToggle = document.querySelector('.menu-button');
  var form = document.querySelector(".form");
  var infoInputs = document.querySelectorAll(".info-input");

  if (menuToggle) {
    mainMenu.classList.remove('main-nav--no-js');
    menuToggle.classList.remove('menu-button--none');

    menuToggle.addEventListener('click', function () {
      if (mainMenu.classList.contains('main-nav--closed')) {
        mainMenu.classList.remove('main-nav--closed');
        mainMenu.classList.add('main-nav--open');
        menuToggle.classList.add('menu-button--open');
      } else {
        mainMenu.classList.add('main-nav--closed');
        mainMenu.classList.remove('main-nav--open');
        menuToggle.classList.remove('menu-button--open');
        menuToggle.classList.add('menu-button--closed');
      }
    });
  }

  if (infoInputs && form) {
    infoInputs.forEach(function (input) {
      input.addEventListener("blur", function (evt) {
        if (!input.value) {
          input.parentNode.classList.add("error");
        } else {
          input.parentNode.classList.remove("error");
        }
      });
    });
    form.addEventListener("submit", function (evt) {
      evt.preventDefault();
    });
  }
});
