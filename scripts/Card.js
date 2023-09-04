import {openPopup} from './utils/utils.js';
import {elementsEl,popupImageEl,imageZoomedEl,imageCaptionEl} from './utils/constants.js';

export class Card {
  constructor(data, templateSelector) {
    this._name = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector;
  }

  _getTemplate() {
   // забираем разметку из HTML и клонируем элемент
   const cardElement = document
   .querySelector("#element-template")
   .content
   .querySelector('.element')
   .cloneNode(true);
   
 // вернём DOM-элемент карточки
   return cardElement;
  }

  generateCard() {
   // Запишем разметку в приватное поле _element. 
   // Так у других элементов появится доступ к ней.
   this._element = this._getTemplate();
   this._landscapeEl = this._element.querySelector('.element__landscape')
   this._setEventListeners();
 
   // Добавим данные
   this._element.querySelector('.element__title').textContent = this._name;
   this._landscapeEl.alt = this._name;
   this._landscapeEl.src = this._link;
   
   // Вернём элемент наружу
   return this._element;
  }

  _setEventListeners() {
   this._element.querySelector('.element__trash').addEventListener('click', () => {
    elementsEl.removeChild(this._element);
   });
   this._element.querySelector(".element__button").addEventListener('click', (event) => {
    event.target.classList.toggle('element__button_active');
   });
   this._element.querySelector("#open-popup-image-button").addEventListener("click", () => {
    openPopup(popupImageEl);
    imageZoomedEl.src = this._link;
    imageZoomedEl.alt = this._name;
    imageCaptionEl.textContent = this._name;
   });
  }
}

