export default class Card {
  constructor(data, templateSelector,handleCardClick) {
    this._title = data.title;
    this._link = data.link;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
  }

  _getTemplate() {
   // забираем разметку из HTML и клонируем элемент
   const cardElement = document
   .querySelector(this._templateSelector)
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
   this._likeButton = this._element.querySelector(".element__button");
   this._trashButton = this._element.querySelector('.element__trash');
   this._cardImage = this._element.querySelector("#open-popup-image-button") 
   this._setEventListeners();
 
   // Добавим данные
   this._element.querySelector('.element__title').textContent = this._title;
   this._landscapeEl.alt = this._title;
   this._landscapeEl.src = this._link;
   
   // Вернём элемент наружу
   return this._element;
  }

  _setEventListeners() {
   this._trashButton.addEventListener('click', () => this._handleTrashCard());
   
   this._cardImage.addEventListener("click", () => this._handleInfoCard());

   this._likeButton.addEventListener('click', () => this._handleLikeCard());
  }

  _handleLikeCard() {
    this._likeButton.classList.toggle('element__button_active');
  }

  _handleTrashCard() {
   this._element.remove();
  }
  
  _handleInfoCard() {
   this._handleCardClick(this._title,this._link);
  }
}

