var mainMenu = document.querySelector('.main-nav');
var menuToggle = document.querySelector('.menu-button');
var form = document.querySelector(".form");
var name = form.querySelector("[name=name]");
var nameField = form.querySelector(".cat-info__name");
var weight = form.querySelector("[name=weight]");
var weightField = form.querySelector(".cat-info__weight");
var email = form.querySelector("[name=email]");
var contacts = form.querySelector(".form__contacts-data");
var phone = form.querySelector("[name=phone]");
var error = form.querySelector(".error");

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

form.addEventListener("submit", function (evt) {
  if (!name.value) {
    evt.preventDefault();
    nameField.classList.add("error");
    console.log("Нужно ввести имя кота");
  } if (!weight.value) {
    evt.preventDefault();
    weightField.classList.add("error");
    console.log("Нужно ввести вес кота");
  } if (!email.value || !phone.value) {
    evt.preventDefault();
    contacts.classList.add("error");
    console.log("Нужно ввести контактные данные");
  }
});
