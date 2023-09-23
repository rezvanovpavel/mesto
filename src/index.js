import {openPopupButtonEl,nameInputEl,vocationInputEl,editFormEl,openPopupButtonPLaceEl,editFormPLaceEl,elementsEl,initialCards,validation} from '../utils/constants.js';
import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card.js";
import Section from '../components/Section.js';
import Popup from '../components/Popup.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import '../pages/index.css';

const validatorEditProfile = new FormValidator(validation, editFormEl);
const validatorAddCard = new FormValidator(validation, editFormPLaceEl);
validatorEditProfile.enableValidation()
validatorAddCard.enableValidation()

function createCard (data, selector) {
  const card = new Card(data, selector, handleCardClick);
  const cardElement = card.generateCard();
  return cardElement;
}

const popupWithImage = new PopupWithImage(".popup_of_image");
popupWithImage.close()
popupWithImage.setEventListeners()

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

const userInfo = new UserInfo({nameSelector: ".profile-info__title",textSelector: ".profile-info__text"});

const formEdit = new PopupWithForm("#edit-popup", function handleSubmit (formData) {
  userInfo.setUserInfo({name: formData.name, text: formData.vocation})
  formEdit.close()
});

formEdit.setEventListeners()

openPopupButtonEl.addEventListener("click", function () {
  editPopup.open()
  nameInputEl.value = userInfo.getUserInfo().name;
  vocationInputEl.value = userInfo.getUserInfo().text;
  validatorEditProfile.removeValidationErrors();
  validatorEditProfile.enableSubmitButton();
});

const formEditPlace = new PopupWithForm("#edit-popup-place", function handleSubmit (formData) {
  const cardEl = createCard(formData, '.card-template')
  elementsEl.prepend(cardEl);
  formEditPlace.close()
}); 

formEditPlace.setEventListeners()

openPopupButtonPLaceEl.addEventListener("click", function () {
  editPopupPlace.open()
  validatorAddCard.removeValidationErrors();
  validatorAddCard.disableSubmitButton();
});