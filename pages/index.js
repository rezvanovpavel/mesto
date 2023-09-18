import {openPopupButtonEl,profileTitleEl,profileTextEl,nameInputEl,vocationInputEl,editFormEl,openPopupButtonPLaceEl,editFormPLaceEl,elementsEl,initialCards,validation} from '../utils/constants.js';
import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card.js";
import Section from '../components/Section.js';
import Popup from '../components/Popup.js';
import PopupWithImage from '../components/PopupWithImage.js';

const validatorEditProfile = new FormValidator(validation, editFormEl);
const validatorAddCard = new FormValidator(validation, editFormPLaceEl);
validatorEditProfile.enableValidation()
validatorAddCard.enableValidation()

function createCard (data, selector, handleCardClick) {
  const card = new Card(data, selector, handleCardClick);
  const cardElement = card.generateCard();
  return cardElement;
}

const popupWithImage = new PopupWithImage(".popup_of_image");

function handleCardClick (name, link) {
  popupWithImage.open(name, link)
};

const cardList = new Section({items: initialCards, renderer: createCard}, '.elements');
cardList.renderItems()

const editPopup = new Popup('#edit-popup');
editPopup.close()
editPopup.setEventListeners()

const editPopupPlace = new Popup("#edit-popup-place");
editPopupPlace.close()
editPopupPlace.setEventListeners()

openPopupButtonEl.addEventListener("click", function () {
  editPopup.open()
  nameInputEl.value = profileTitleEl.textContent;
  vocationInputEl.value = profileTextEl.textContent;
  validatorEditProfile.removeValidationErrors();
  validatorEditProfile.enableSubmitButton();
});

editFormEl.addEventListener("submit", function (event) {
  event.preventDefault();
  profileTitleEl.textContent = nameInputEl.value;
  profileTextEl.textContent = vocationInputEl.value;
  editPopup.close()
});

openPopupButtonPLaceEl.addEventListener("click", function () {
  editPopupPlace.open()
  validatorAddCard.removeValidationErrors();
  validatorAddCard.disableSubmitButton();
});

editFormPLaceEl.addEventListener("submit", function (event) {
  event.preventDefault();
  const form = event.target;
  const formData = new FormData(form);
  const values = Object.fromEntries(formData);
  const cardEl = createCard(values, '.card-template', handleCardClick)
  elementsEl.prepend(cardEl);
  form.reset()
  editPopupPlace.close()
});
