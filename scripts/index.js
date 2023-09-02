import {Card} from "./Card.js";
import {FormValidator} from "./FormValidator.js";
import {openPopup,closePopup} from './utils/utils.js';
import {elementsEl, initialCards} from './utils/constants.js';

const openPopupButtonEl = document.querySelector("#open-popup-button");
const editPopupEl = document.querySelector("#edit-popup");
const closePopupButtonEl = document.querySelectorAll(".popup__close-button");
const profileTitleEl = document.querySelector(".profile-info__title");
const profileTextEl = document.querySelector(".profile-info__text");
const nameInputEl = document.querySelector("#name-input");
const vocationInputEl = document.querySelector("#vocation-input");
const editFormEl = document.querySelector("#edit-form");

const validation = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
}

const exemplarEditFormEl = new FormValidator(validation, editFormEl);
exemplarEditFormEl.enableValidation()

openPopupButtonEl.addEventListener("click", function () {
  openPopup(editPopupEl);
  nameInputEl.value = profileTitleEl.textContent;
  vocationInputEl.value = profileTextEl.textContent;
  exemplarEditFormEl.removeValidationErrors();
  exemplarEditFormEl.enableSubmitButton();
});

closePopupButtonEl.forEach((button) => { 
  const popup = button.closest('.popup');
  button.addEventListener('click', () => {
    closePopup(popup);
  });
});

editFormEl.addEventListener("submit", function (event) {
  event.preventDefault();
  profileTitleEl.textContent = nameInputEl.value;
  profileTextEl.textContent = vocationInputEl.value;
  closePopup(editPopupEl);
});

function createCard (data, selector) {
  const card = new Card(data, selector);
  const cardElement = card.generateCard();
  return cardElement;
}

initialCards.forEach(function (item) {
  const cardEl = createCard(item, '.card-template')
  elementsEl.prepend(cardEl);
})

const openPopupButtonPLaceEl = document.querySelector("#open-popup-button-place");
const editPopupPlaceEl = document.querySelector("#edit-popup-place");
const editFormPLaceEl = document.querySelector("#edit-form-place");

const exemplarEditFormPLaceEl = new FormValidator(validation, editFormPLaceEl);
exemplarEditFormPLaceEl.enableValidation()

openPopupButtonPLaceEl.addEventListener("click", function () {
  openPopup(editPopupPlaceEl);
  exemplarEditFormPLaceEl.removeValidationErrors();
  exemplarEditFormPLaceEl.disableSubmitButton();
});

editFormPLaceEl.addEventListener("submit", function (event) {
  event.preventDefault();
  const form = event.target;
  const formData = new FormData(form);
  const values = Object.fromEntries(formData);
  const cardEl = createCard(values, '.card-template')
  elementsEl.prepend(cardEl);
  form.reset()
  closePopup(editPopupPlaceEl);
});
