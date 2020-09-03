let navMain = document.querySelector('.main-nav');
let navToggle = document.querySelector('.main-nav__toggle');
let firstName = document.querySelector('.fieldset__input--firstname');
let lastName = document.querySelector('.fieldset__input--lastname');
let userEmail = document.querySelector('.fieldset__input--email');
let userPhone = document.querySelector('.fieldset__input--phone');
let formSubmit = document.querySelector('.page-form__submit');
let popupMessage = document.querySelector ('.popup');
let failureMessage = document.querySelector ('.popup--failure');
let successMessage = document.querySelector ('.popup--success');
let reEmail = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
let rePhone = /^\d[\d\(\)\ -]{4,14}\d$/;
let email = userEmail.value;
let phone = userPhone.value;

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

formSubmit.addEventListener('submit', function(evt) {
  if (!firstName.value || !lastName.value || (reEmail.test(email) == false) || (rePhone.test(phone) == false)) {
      evt.preventDefault();
      popupMessage.classList.remove('popup__show');
      failureMessage.classList.add('popup__show');
  } else {
      popupMessage.classList.remove('popup__show');
      successMessage.classList.add('popup__show');
  }
});
