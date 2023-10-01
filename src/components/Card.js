export default class Card {
  constructor(data, templateSelector,handleCardClick,handleDeleteCard,handleLikeCard,userInfoId) {
    this._name = data.name;
    this._link = data.link;
    this._id = data._id;
    this.ownerId = data.owner._id;
    this._likes = data.likes;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._handleDeleteCard = handleDeleteCard;
    this._handleLikeCard = handleLikeCard;
    this._userInfoId = userInfoId;
    this._isLiked = this._checkLike();
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
   this._numberLikesEl = this._element.querySelector(".element__number") 
   this._setEventListeners();
   this._setRemovalIcon();
   this.setLikes()
 
   // Добавим данные
   this._element.querySelector('.element__title').textContent = this._name;
   this._landscapeEl.alt = this._name;
   this._landscapeEl.src = this._link;
   
   // Вернём элемент наружу
   return this._element;
  }

  _setEventListeners() {

   this._trashButton.addEventListener('click', () => this._handleDelete());
   
   this._cardImage.addEventListener("click", () => this._handleImageClick());

   this._likeButton.addEventListener('click', () => this._likeCard());
  }
  
  _likeCard () {
    this._handleLikeCard(this._id, this._isLiked)
  }

  handleTrashCard() {
   this._element.remove();
  }
  
  _handleImageClick() {
   this._handleCardClick(this._name,this._link);
  }

  _handleDelete () {
    this._handleDeleteCard(this._id);
  }

  _setRemovalIcon () {
    if (this.ownerId !== this._userInfoId) {
      this._trashButton.remove();
    }
  }

  blockLikeButton() {
    this._likeButton.disabled = true;
  }

  unlockLikeButton() {
    this._likeButton.disabled = false;
  }

  _checkLike() {
    return this._likes.some(item => item._id === this._userInfoId);
  }

  setLikes(likes) {
    const likeButton = this._element.querySelector(".element__button");
    const numberLikesEl = this._element.querySelector(".element__number")

    if (likes) {
      this._likes = likes;
      this._isLiked = this._checkLike();
    }

    numberLikesEl.textContent = this._likes.length;

    if (this._isLiked) {
      likeButton.classList.add('element__button_active');
    } else {
      likeButton.classList.remove('element__button_active');
    }
  }
}

