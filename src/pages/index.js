import {openPopupButtonEl,nameInputEl,vocationInputEl,editFormEl,openPopupButtonPlaceEl,formAddPlaceEl,cardsContainer,initialCards,validationConfig} from '../utils/constants.js';
import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card.js";
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import './index.css';

const validatorEditProfile = new FormValidator(validationConfig, editFormEl);
const validatorAddCard = new FormValidator(validationConfig, formAddPlaceEl);
validatorEditProfile.enableValidation()
validatorAddCard.enableValidation()

function createCard (data) {
  const card = new Card(data, "#element-template", handleCardClick);
  const cardElement = card.generateCard();
  return cardElement;
}

const popupWithImage = new PopupWithImage(".popup_of_image");
popupWithImage.setEventListeners()

function handleCardClick (name, link) {
  popupWithImage.open(name, link)
};

const cardsSection = new Section({items: initialCards, renderer: createCard}, '.elements');
cardsSection.renderItems()

const userInfo = new UserInfo({nameSelector: ".profile-info__title",textSelector: ".profile-info__text"});

const popupEditProfile = new PopupWithForm("#edit-popup", (formData) => {
  userInfo.setUserInfo({name: formData.name, text: formData.vocation})
  popupEditProfile.close()
});

popupEditProfile.setEventListeners()

const userData = userInfo.getUserInfo();

openPopupButtonEl.addEventListener("click", function () {
  popupEditProfile.open()
  nameInputEl.value = userData.name;
  vocationInputEl.value = userData.text;
  validatorEditProfile.removeValidationErrors();
  validatorEditProfile.enableSubmitButton();
});

const popupAddPlace = new PopupWithForm("#edit-popup-place", (formData) => {
  const cardEl = createCard(formData)
  cardsContainer.prepend(cardEl);
  popupAddPlace.close()
}); 

popupAddPlace.setEventListeners()

openPopupButtonPlaceEl.addEventListener("click", function () {
  popupAddPlace.open()
  validatorAddCard.removeValidationErrors();
  validatorAddCard.disableSubmitButton();
});