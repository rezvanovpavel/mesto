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

function openPopup(popup) {
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
  removeValidationErrors(editFormEl,validation);
  enableSubmitButton(saveButtonProfileEL,validation);
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

const template = document.querySelector("#element-template"); 
const templateContent = template.content;
const elementEl = templateContent.querySelector('.element');
const elementsEl = document.querySelector(".elements");

const popupImageEl = document.querySelector("#edit-popup-image");
const imageZoomedEl = popupImageEl.querySelector(".popup__image");
const imageCaptionEl = popupImageEl.querySelector(".popup__title_of_image");

function createElement (item) {
  const newElement = elementEl.cloneNode(true);
  const elementTitleEl = newElement.querySelector('.element__title');
  elementTitleEl.textContent = item.name;
  const elementLandscapeEl = newElement.querySelector('.element__landscape');
  elementLandscapeEl.src = item.link;
  elementLandscapeEl.alt = item.name;

  const deleteButton = newElement.querySelector('.element__trash');
  deleteButton.addEventListener("click", function () {
    elementsEl.removeChild(newElement);
  })
  
  const likeButtonEl = newElement.querySelector(".element__button");
  likeButtonEl.addEventListener("click", function (event) {
    event.target.classList.toggle('element__button_active');
  });
  
  const openPopupButtonImageEl = newElement.querySelector("#open-popup-image-button");

  openPopupButtonImageEl.addEventListener("click", function () {
    openPopup(popupImageEl);
    imageZoomedEl.src = item.link;
    imageZoomedEl.alt = item.name;
    imageCaptionEl.textContent = item.name;
  });

  return newElement;
};

initialCards.forEach(function (item) {
  const newElement = createElement(item);
  elementsEl.prepend(newElement);
})

const openPopupButtonPLaceEl = document.querySelector("#open-popup-button-place");
const editPopupPlaceEl = document.querySelector("#edit-popup-place");
const nameInputPLaceEl = document.querySelector("#name-input-place");
const linkInputPLaceEl = document.querySelector("#link-input-place");
const editFormPLaceEl = document.querySelector("#edit-form-place");
const saveButtonPlaceEl = document.querySelector("#save-button-place");

openPopupButtonPLaceEl.addEventListener("click", function () {
  openPopup(editPopupPlaceEl);
  removeValidationErrors(editFormPLaceEl,validation);
  disableSubmitButton(saveButtonPlaceEl,validation);
});

editFormPLaceEl.addEventListener("submit", function (event) {
  event.preventDefault();
  const form = event.target;
  const formData = new FormData(form);
  const values = Object.fromEntries(formData);
  const newElement = createElement(values);
  elementsEl.prepend(newElement);
  form.reset()
  closePopup(editPopupPlaceEl);
});

enableValidation(validation);