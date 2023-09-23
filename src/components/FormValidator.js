export default class FormValidator {
    constructor(validationСlasses, formEl) {
      this._formSelector = validationСlasses.formSelector;
      this._inputSelector = validationСlasses.inputSelector;
      this._submitButtonSelector = validationСlasses.submitButtonSelector;
      this._inactiveButtonClass = validationСlasses.inactiveButtonClass;
      this._inputErrorClass = validationСlasses.inputErrorClass;
      this._errorClass = validationСlasses.errorClass;

      this._formEl = formEl;

      this._inputList = Array.from(this._formEl.querySelectorAll(this._inputSelector));
      this._buttonElement = this._formEl.querySelector(this._submitButtonSelector);
    }

    enableValidation() {
      this._setEventListeners();
    };
    
    _setEventListeners() {

     this._toggleButtonState();

     this._inputList.forEach((inputElement) => {
         // каждому полю добавим обработчик события input
         inputElement.addEventListener('input', () => {
           // Внутри колбэка вызовем isValid,
           // передав ей форму и проверяемый элемент
           this._isValid(inputElement)
           this._toggleButtonState();
         });
     });
    };

    _isValid (inputElement) {
     if (!inputElement.validity.valid) {
       // showInputError теперь получает параметром форму, в которой
       // находится проверяемое поле, и само это поле
       this._showInputError(inputElement, inputElement.validationMessage);
     } else {
       // hideInputError теперь получает параметром форму, в которой
       // находится проверяемое поле, и само это поле
       this._hideInputError(inputElement);
     }
    }; 
    
    _showInputError (inputElement, errorMessage) {
     // Находим элемент ошибки внутри самой функции
     const errorElement = this._formEl.querySelector(`.${inputElement.id}-error`);
     // Остальной код такой же
     inputElement.classList.add(this._inputErrorClass);
     errorElement.textContent = errorMessage;
     errorElement.classList.add(this._errorClass);
    };

    _hideInputError (inputElement) {
     // Находим элемент ошибки
     const errorElement = this._formEl.querySelector(`.${inputElement.id}-error`);
     // Остальной код такой же
     inputElement.classList.remove(this._inputErrorClass);
     errorElement.classList.remove(this._errorClass);
     errorElement.textContent = '';
    };
    
    _toggleButtonState () {
     // Если есть хотя бы один невалидный инпут
     if (this._hasInvalidInput()) {
       // сделай кнопку неактивной
       this.disableSubmitButton()
     } else {
       // иначе сделай кнопку активной
       this.enableSubmitButton()
     }
    };
    
    _hasInvalidInput () {
     return this._inputList.some((inputElement) => {
       return !inputElement.validity.valid;
     })
    };

    disableSubmitButton () {
     this._buttonElement.classList.add(this._inactiveButtonClass);
     this._buttonElement.setAttribute('disabled', true);
    };

    enableSubmitButton () {
     this._buttonElement.classList.remove(this._inactiveButtonClass);
     this._buttonElement.removeAttribute('disabled');
   };

   removeValidationErrors () {
    this._inputList.forEach(inputElement => {
      this._hideInputError (inputElement);
    });
   }
}