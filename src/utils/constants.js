export const initialCards = [
    {
      title: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      title: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      title: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      title: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      title: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      title: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
]; 

export const openPopupButtonEl = document.querySelector("#open-popup-button");
export const closePopupButtonEl = document.querySelectorAll(".popup__close-button");
export const profileTitleEl = document.querySelector(".profile-info__title");
export const profileTextEl = document.querySelector(".profile-info__text");
export const nameInputEl = document.querySelector("#name-input");
export const vocationInputEl = document.querySelector("#vocation-input");
export const editFormEl = document.querySelector("#edit-form");

export const openPopupButtonPlaceEl = document.querySelector("#open-popup-button-place");
export const formAddPlaceEl = document.querySelector("#edit-form-place");

export const cardsContainer = document.querySelector(".elements");

export const popupImageEl = document.querySelector("#edit-popup-image");
export const imageZoomedEl = popupImageEl.querySelector(".popup__image");
export const imageCaptionEl = popupImageEl.querySelector(".popup__title_of_image");

export const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
}

export const profileNameEl = document.querySelector(".profile-info__title");
export const profileProfessionEl = document.querySelector(".profile-info__text");
export const profileAvatarEl = document.querySelector(".avatar");