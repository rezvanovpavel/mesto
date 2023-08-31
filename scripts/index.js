import {Card} from "./Card.js";
import {FormValidator} from "./FormValidator.js";

const openPopupButtonEl = document.querySelector("#open-popup-button");
const editPopupEl = document.querySelector("#edit-popup");
const closePopupButtonEl = document.querySelectorAll(".popup__close-button");
const profileTitleEl = document.querySelector(".profile-info__title");
const profileTextEl = document.querySelector(".profile-info__text");
const nameInputEl = document.querySelector("#name-input");
const vocationInputEl = document.querySelector("#vocation-input");
const editFormEl = document.querySelector("#edit-form");
const saveButtonProfileEL = document.querySelector("#save-button-profile");

const validation = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
}

Array.from(document.querySelectorAll(validation.formSelector)).forEach(function (item) {
  const form = new FormValidator(validation, item);
  const validForm = form.enableValidation();
})

function closePopupEscape (event) {
  if (event.key === "Escape") {
    const openedPopup = document.querySelector(".popup_is-opened");
    closePopup(openedPopup);
  }
};

function closePopupClick (event) {
  if (event.target === event.currentTarget) {
    const openedPopup = document.querySelector(".popup_is-opened");
    closePopup(openedPopup);
  }
};

export function openPopup(popup) {
  popup.classList.add("popup_is-opened");
  document.addEventListener('keydown', closePopupEscape);
  popup.addEventListener('click', closePopupClick);
}

function closePopup(popup) {
  popup.classList.remove("popup_is-opened");
  document.removeEventListener('keydown', closePopupEscape);
  popup.removeEventListener('click', closePopupClick);
}

openPopupButtonEl.addEventListener("click", function () {
  openPopup(editPopupEl);
  nameInputEl.value = profileTitleEl.textContent;
  vocationInputEl.value = profileTextEl.textContent;
  const form = new FormValidator(validation, editFormEl);
  const removalValidationErrors = form.removeValidationErrors();
  const enablingSubmitButton = form.enableSubmitButton();
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

export const elementsEl = document.querySelector(".elements");
export const popupImageEl = document.querySelector("#edit-popup-image");
export const imageZoomedEl = popupImageEl.querySelector(".popup__image");
export const imageCaptionEl = popupImageEl.querySelector(".popup__title_of_image");

initialCards.forEach(function (item) {
  const card = new Card(item, '.card-template');
  const cardElement = card.generateCard();
  elementsEl.prepend(cardElement);
})

const openPopupButtonPLaceEl = document.querySelector("#open-popup-button-place");
const editPopupPlaceEl = document.querySelector("#edit-popup-place");
const editFormPLaceEl = document.querySelector("#edit-form-place");
const saveButtonPlaceEl = document.querySelector("#save-button-place");

openPopupButtonPLaceEl.addEventListener("click", function () {
  openPopup(editPopupPlaceEl);
  const form = new FormValidator(validation, editFormPLaceEl);
  const removalValidationErrors = form.removeValidationErrors();
  const disablingSubmitButton = form.disableSubmitButton();
});

editFormPLaceEl.addEventListener("submit", function (event) {
  event.preventDefault();
  const form = event.target;
  const formData = new FormData(form);
  const values = Object.fromEntries(formData);
  const card = new Card(values, '.card-template');
  const cardElement = card.generateCard();
  elementsEl.prepend(cardElement);
  form.reset()
  closePopup(editPopupPlaceEl);
});
