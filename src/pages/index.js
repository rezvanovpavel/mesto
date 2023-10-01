import {openPopupButtonEl,nameInputEl,vocationInputEl,editFormEl,openPopupButtonPlaceEl,formAddPlaceEl,formUpdateAvatarEl,validationConfig,profileNameEl,profileProfessionEl,profileAvatarEl,openPopupButtonAvatarEl,buttonSaveProfileEl,buttonSavePlaceEl,buttonSaveAvatarEl} from '../utils/constants.js';
import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card.js";
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupConsent from '../components/PopupConsent.js';
import UserInfo from '../components/UserInfo.js';
import Api from '../components/Api.js';
import './index.css';

const userInfo = new UserInfo({nameEl: profileNameEl, textEl: profileProfessionEl, avatarEl: profileAvatarEl});

const cardsSection = new Section({renderer: createCard, containerSelector: '.elements'});

const api = new Api({
 baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-76',
 headers: {
   authorization: '2b52f1b0-3bb6-4cb3-80b0-6964df8bffb9',
   'Content-Type': 'application/json'
 }
});

api.getUserInfo()
  .then((result) => {
   userInfo.saveFullInfo(result)
   userInfo.setUserName()
   userInfo.setUserProfession()
   userInfo.setUserAvatar()
  })
  .catch((err) => {
   console.log(err);
  }); 

api.getInitialCards()
  .then((result) => {
   cardsSection.renderItems(result);
  })
  .catch((err) => {
   console.log(err);
  });  

const validatorEditProfile = new FormValidator(validationConfig, editFormEl);
const validatorAddCard = new FormValidator(validationConfig, formAddPlaceEl);
validatorEditProfile.enableValidation()
validatorAddCard.enableValidation()

const cards = {};


function createCard (data) {
  const card = new Card(data, "#element-template", handleCardClick, handleDeleteCard, handleLikeCard, userInfo.id);
  cards[data._id] = card; 
  const cardElement = card.generateCard();
  return cardElement;
}

const popupWithImage = new PopupWithImage(".popup_of_image");
popupWithImage.setEventListeners()

function handleCardClick (name, link) {
  popupWithImage.open(name, link)
};

const popupEditProfile = new PopupWithForm("#edit-popup", (formData) => {
  api.updateUserInfo(formData)
    .then((result) => {
     userInfo.saveFullInfo(result)
     userInfo.setUserName()
     userInfo.setUserProfession()
     
    })
    .catch((err) => {
     console.log(err);
    })
    .finally(() => {
     showLoading(buttonSaveProfileEl)
     popupEditProfile.close()
    });
});

function showLoading (button) {
 button.textContent = "Сохранение..."
}

popupEditProfile.setEventListeners()

openPopupButtonEl.addEventListener("click", function () {
  popupEditProfile.open()
  buttonSaveProfileEl.textContent = "Сохранить"
  const userData = userInfo.getUserInfo();
  nameInputEl.value = userData.name;
  vocationInputEl.value = userData.about;
  validatorEditProfile.removeValidationErrors();
  validatorEditProfile.enableSubmitButton();
});

const popupAddPlace = new PopupWithForm("#edit-popup-place", (formData) => {
  api.addNewCards(formData)
    .then(res => {
     cardsSection.addItem(createCard(res));
    })
    .catch((err) => {
     console.log(err);
    })
    .finally(() => {
     showLoading(buttonSavePlaceEl)
     popupAddPlace.close()
    });  
}); 

popupAddPlace.setEventListeners()

openPopupButtonPlaceEl.addEventListener("click", function () {
  popupAddPlace.open()
  buttonSavePlaceEl.textContent = "Создать"
  validatorAddCard.removeValidationErrors();
  validatorAddCard.disableSubmitButton();
});

const popupConsent = new PopupConsent("#delete-popup-card", (cardId) => {
 api.deleteCard(cardId)
   .then(() => {
    cards[cardId].handleTrashCard()
   })
   .catch((err) => {
    console.log(err);
   });
 popupConsent.close();
})

popupConsent.setEventListeners()

function handleDeleteCard(cardId) {
 popupConsent.open();
 popupConsent.setCardId(cardId);
}

const validatorUpdateAvatar = new FormValidator(validationConfig, formUpdateAvatarEl);
validatorUpdateAvatar.enableValidation()

openPopupButtonAvatarEl.addEventListener("click", function () {
 popupUpdateAvatar.open()
 buttonSaveAvatarEl.textContent = "Сохранить"
 validatorUpdateAvatar.removeValidationErrors();
 validatorUpdateAvatar.disableSubmitButton();
});

const popupUpdateAvatar = new PopupWithForm("#update-popup-аvatar", (formData) => {
 api.editAvatar(formData.link)
   .then(res => {
    userInfo.saveFullInfo(res)
    userInfo.setUserAvatar()
   })
   .catch((err) => {
    console.log(err);
   })
   .finally(() => {
    showLoading(buttonSaveAvatarEl)
    popupUpdateAvatar.close()
   });
}); 

popupUpdateAvatar.setEventListeners()

function handleLikeCard(cardId, isLiked) {
 cards[cardId].blockLikeButton();

 api.toggleLike(cardId, isLiked)
   .then(likes => {
     cards[cardId].setLikes(likes);
   })
   .catch((err) => {
    console.log(err);
   })
   .finally(() => {
     cards[cardId].unlockLikeButton();
   });
}