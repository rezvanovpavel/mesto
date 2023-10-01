import Popup from './Popup.js';

export default class PopupConsent extends Popup {
  constructor(popupSelector, handleSubmit) {
    super(popupSelector);
    this._handleSubmit = handleSubmit;
    this._button = this._popup.querySelector('.popup__save-button');
  }

  setEventListeners() {
    super.setEventListeners();
    this._button.addEventListener('click', () => {
      this._handleSubmit(this._cardId);
    });
  }

  setCardId(cardId) {
    this._cardId = cardId;
  }
}
