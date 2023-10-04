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
import {showLoading} from '../utils/utils.js';

const userInfo = new UserInfo({nameEl: profileNameEl, textEl: profileProfessionEl, avatarEl: profileAvatarEl});

const cardsSection = new Section({renderer: createCard, containerSelector: '.elements'});

const api = new Api({
 baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-76',
 headers: {
   authorization: '2b52f1b0-3bb6-4cb3-80b0-6964df8bffb9',
   'Content-Type': 'application/json'
 }
});

Promise.all([
  api.getUserInfo(),
  api.getInitialCards()
])
  .then((results) => {
   userInfo.saveFullInfo(results[0])
   userInfo.setUserName()
   userInfo.setUserProfession()
   userInfo.setUserAvatar()
   
   cardsSection.renderItems(results[1].reverse());
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
  cardsSection.addItem(cardElement);
  return cardElement;
}

const popupWithImage = new PopupWithImage(".popup_of_image");
popupWithImage.setEventListeners()

function handleCardClick (name, link) {
  popupWithImage.open(name, link)
};

const popupEditProfile = new PopupWithForm("#edit-popup", (formData) => {
  showLoading(true,buttonSaveProfileEl)
  api.updateUserInfo(formData)
    .then((result) => {
     userInfo.saveFullInfo(result)
     userInfo.setUserName()
     userInfo.setUserProfession()
     popupEditProfile.close()
    })
    .catch((err) => {
     console.log(err);
    })
    .finally(() => {
     showLoading(false,buttonSaveProfileEl)
    });
});

popupEditProfile.setEventListeners()

openPopupButtonEl.addEventListener("click", function () {
  popupEditProfile.open()
  const userData = userInfo.getUserInfo();
  nameInputEl.value = userData.name;
  vocationInputEl.value = userData.about;
  validatorEditProfile.removeValidationErrors();
  validatorEditProfile.enableSubmitButton();
});

const popupAddPlace = new PopupWithForm("#edit-popup-place", (formData) => {
  showLoading(true,buttonSavePlaceEl)
  api.addNewCards(formData)
    .then(res => {
     cardsSection.addItem(createCard(res));
     popupAddPlace.close();
    })
    .catch((err) => {
     console.log(err);
    })
    .finally(() => {
     showLoading(false,buttonSavePlaceEl)
    });  
}); 

popupAddPlace.setEventListeners()

openPopupButtonPlaceEl.addEventListener("click", function () {
  popupAddPlace.open()
  validatorAddCard.removeValidationErrors();
  validatorAddCard.disableSubmitButton();
});

const popupConsent = new PopupConsent("#delete-popup-card", (cardId) => {
 api.deleteCard(cardId)
   .then(() => {
    cards[cardId].handleTrashCard();
    popupConsent.close();
   })
   .catch((err) => {
    console.log(err);
   });
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
 validatorUpdateAvatar.removeValidationErrors();
 validatorUpdateAvatar.disableSubmitButton();
});

const popupUpdateAvatar = new PopupWithForm("#update-popup-аvatar", (formData) => {
 showLoading(true,buttonSaveAvatarEl)
 api.editAvatar(formData.link)
   .then(res => {
    userInfo.saveFullInfo(res)
    userInfo.setUserAvatar()
    popupUpdateAvatar.close()
   })
   .catch((err) => {
    console.log(err);
   })
   .finally(() => {
    showLoading(false,buttonSaveAvatarEl)
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