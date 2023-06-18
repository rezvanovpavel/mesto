const showInputError = (formElement, inputElement, errorMessage,validation) => {
    // Находим элемент ошибки внутри самой функции
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    // Остальной код такой же
    inputElement.classList.add(validation.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(validation.errorClass);
};

const hideInputError = (formElement, inputElement,validation) => {
    // Находим элемент ошибки
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    // Остальной код такой же
    inputElement.classList.remove(validation.inputErrorClass);
    errorElement.classList.remove(validation.errorClass);
    errorElement.textContent = '';
}; 

const isValid = (formElement, inputElement,validation) => {
    if (!inputElement.validity.valid) {
      // showInputError теперь получает параметром форму, в которой
      // находится проверяемое поле, и само это поле
      showInputError(formElement, inputElement, inputElement.validationMessage,validation);
    } else {
      // hideInputError теперь получает параметром форму, в которой
      // находится проверяемое поле, и само это поле
      hideInputError(formElement, inputElement,validation);
    }
}; 

// Функция принимает массив полей

const hasInvalidInput = (inputList) => {
    // проходим по этому массиву методом some
    return inputList.some((inputElement) => {
      // Если поле не валидно, колбэк вернёт true
      // Обход массива прекратится и вся функция
      // hasInvalidInput вернёт true
  
      return !inputElement.validity.valid;
    })
};

// Функция принимает массив полей ввода
// и элемент кнопки, состояние которой нужно менять

const toggleButtonState = (inputList, buttonElement,validation) => {
    // Если есть хотя бы один невалидный инпут
    if ((hasInvalidInput(inputList))) {
      // сделай кнопку неактивной
      buttonElement.classList.add(validation.inactiveButtonClass);
      buttonElement.setAttribute('disabled', true);
    } else {
      // иначе сделай кнопку активной
      buttonElement.classList.remove(validation.inactiveButtonClass);
      buttonElement.removeAttribute('disabled');
    }
}; 

const setEventListeners = (formElement,validation) => {
    // Находим все поля внутри формы,
    // сделаем из них массив методом Array.from
    const inputList = Array.from(formElement.querySelectorAll(validation.inputSelector));
    const buttonElement = formElement.querySelector(validation.submitButtonSelector);
    
    toggleButtonState(inputList, buttonElement,validation);

    // Обойдём все элементы полученной коллекции
    inputList.forEach((inputElement) => {
      // каждому полю добавим обработчик события input
      inputElement.addEventListener('input', () => {
        // Внутри колбэка вызовем isValid,
        // передав ей форму и проверяемый элемент
        isValid(formElement, inputElement,validation)
        toggleButtonState(inputList, buttonElement,validation);
      });
    });
}; 

const enableValidation = (validation) => {
    // Найдём все формы с указанным классом в DOM,
    // сделаем из них массив методом Array.from
    const formList = Array.from(document.querySelectorAll(validation.formSelector));
  
    // Переберём полученную коллекцию
    formList.forEach((formElement) => {
      // Для каждой формы вызовем функцию setEventListeners,
      // передав ей элемент формы
      setEventListeners(formElement,validation);
    });
};

const disableSubmitButton = (button,validation) => {
  button.classList.add(validation.inactiveButtonClass);
};

const enableSubmitButton = (button,validation) => {
  button.classList.remove(validation.inactiveButtonClass);
};

const removeValidationErrors = (formElement, validation) => {
  const inputList = Array.from(formElement.querySelectorAll(validation.inputSelector));
  inputList.forEach((inputElement) => {
    hideInputError (formElement, inputElement, validation);
  });
}