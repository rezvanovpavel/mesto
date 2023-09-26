import {openPopupButtonEl,nameInputEl,vocationInputEl,editFormEl,openPopupButtonPlaceEl,formAddPlaceEl,cardsContainer,initialCards,validationConfig,profileNameEl,profileProfessionEl,profileAvatarEl} from '../utils/constants.js';
import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card.js";
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import './index.css';

fetch('https://mesto.nomoreparties.co/v1/cohort-76/users/me', {
  headers: {
    authorization: '2b52f1b0-3bb6-4cb3-80b0-6964df8bffb9'
  }
})
  .then(res => res.json())
  .then((result) => {
    profileNameEl.textContent = result.name;
    profileProfessionEl.textContent = result.about;
    profileAvatarEl.src = result.avatar;
  }); 


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

openPopupButtonEl.addEventListener("click", function () {
  popupEditProfile.open()
  const userData = userInfo.getUserInfo();
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