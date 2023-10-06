(()=>{"use strict";var e=document.querySelector("#open-popup-button"),t=(document.querySelectorAll(".popup__close-button"),document.querySelector(".profile-info__title"),document.querySelector(".profile-info__text"),document.querySelector("#name-input")),n=document.querySelector("#vocation-input"),r=document.querySelector("#edit-form"),o=document.querySelector("#open-popup-button-place"),i=document.querySelector("#edit-form-place"),u=(document.querySelector(".elements"),document.querySelector("#edit-popup-image")),a=(u.querySelector(".popup__image"),u.querySelector(".popup__title_of_image"),{formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__save-button",inactiveButtonClass:"popup__save-button_inactive",inputErrorClass:"popup__input_type_error",errorClass:"popup__input-error_active"}),c=document.querySelector(".profile-info__title"),l=document.querySelector(".profile-info__text"),s=document.querySelector(".avatar"),f=document.querySelector("#update-form-аvatar"),p=document.querySelector(".avatar-button__edit-button"),y=document.querySelector("#save-button-profile"),h=document.querySelector("#save-button-place"),v=document.querySelector("#save-button-аvatar");function d(e){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d(e)}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==d(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==d(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===d(o)?o:String(o)),r)}var o}var b=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._formSelector=t.formSelector,this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._formEl=n,this._inputList=Array.from(this._formEl.querySelectorAll(this._inputSelector)),this._buttonElement=this._formEl.querySelector(this._submitButtonSelector)}var t,n;return t=e,(n=[{key:"enableValidation",value:function(){this._setEventListeners()}},{key:"_setEventListeners",value:function(){var e=this;this._toggleButtonState(),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._isValid(t),e._toggleButtonState()}))}))}},{key:"_isValid",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e,e.validationMessage)}},{key:"_showInputError",value:function(e,t){var n=this._formEl.querySelector(".".concat(e.id,"-error"));e.classList.add(this._inputErrorClass),n.textContent=t,n.classList.add(this._errorClass)}},{key:"_hideInputError",value:function(e){var t=this._formEl.querySelector(".".concat(e.id,"-error"));e.classList.remove(this._inputErrorClass),t.classList.remove(this._errorClass),t.textContent=""}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?this.disableSubmitButton():this.enableSubmitButton()}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"disableSubmitButton",value:function(){this._buttonElement.classList.add(this._inactiveButtonClass),this._buttonElement.setAttribute("disabled",!0)}},{key:"enableSubmitButton",value:function(){this._buttonElement.classList.remove(this._inactiveButtonClass),this._buttonElement.removeAttribute("disabled")}},{key:"removeValidationErrors",value:function(){var e=this;this._inputList.forEach((function(t){e._hideInputError(t)}))}}])&&m(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function _(e){return _="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_(e)}function S(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==_(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==_(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===_(o)?o:String(o)),r)}var o}var k=function(){function e(t,n,r,o,i,u){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=t.name,this._link=t.link,this._id=t._id,this.ownerId=t.owner._id,this._likes=t.likes,this._templateSelector=n,this._handleCardClick=r,this._handleDeleteCard=o,this._handleLikeCard=i,this._userInfoId=u,this._isLiked=this._checkLike()}var t,n;return t=e,(n=[{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".element").cloneNode(!0)}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._landscapeEl=this._element.querySelector(".element__landscape"),this._likeButton=this._element.querySelector(".element__button"),this._trashButton=this._element.querySelector(".element__trash"),this._cardImage=this._element.querySelector("#open-popup-image-button"),this._numberLikesEl=this._element.querySelector(".element__number"),this._setEventListeners(),this._setRemovalIcon(),this.setLikes(),this._element.querySelector(".element__title").textContent=this._name,this._landscapeEl.alt=this._name,this._landscapeEl.src=this._link,this._element}},{key:"_setEventListeners",value:function(){var e=this;this._trashButton.addEventListener("click",(function(){return e._handleDelete()})),this._cardImage.addEventListener("click",(function(){return e._handleImageClick()})),this._likeButton.addEventListener("click",(function(){return e._likeCard()}))}},{key:"_likeCard",value:function(){this._handleLikeCard(this._id,this._isLiked)}},{key:"handleTrashCard",value:function(){this._element.remove()}},{key:"_handleImageClick",value:function(){this._handleCardClick(this._name,this._link)}},{key:"_handleDelete",value:function(){this._handleDeleteCard(this._id)}},{key:"_setRemovalIcon",value:function(){this.ownerId!==this._userInfoId&&this._trashButton.remove()}},{key:"blockLikeButton",value:function(){this._likeButton.disabled=!0}},{key:"unlockLikeButton",value:function(){this._likeButton.disabled=!1}},{key:"_checkLike",value:function(){var e=this;return this._likes.some((function(t){return t._id===e._userInfoId}))}},{key:"setLikes",value:function(e){var t=this._element.querySelector(".element__button"),n=this._element.querySelector(".element__number");e&&(this._likes=e,this._isLiked=this._checkLike()),n.textContent=this._likes.length,this._isLiked?t.classList.add("element__button_active"):t.classList.remove("element__button_active")}}])&&S(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function g(e){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},g(e)}function E(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==g(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==g(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===g(o)?o:String(o)),r)}var o}var w=function(){function e(t){var n=t.renderer,r=t.containerSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=n,this._container=document.querySelector(r)}var t,n;return t=e,(n=[{key:"renderItems",value:function(e){var t=this;e.forEach((function(e){t._renderer(e)}))}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&E(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function O(e){return O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},O(e)}function j(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==O(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==O(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===O(o)?o:String(o)),r)}var o}var P=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this._closeButton=this._popup.querySelector(".popup__close-button"),this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_is-opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_is-opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._closeButton.addEventListener("click",(function(){e.close()})),this._popup.addEventListener("mousedown",(function(t){t.target===t.currentTarget&&e.close()}))}}])&&j(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function C(e){return C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},C(e)}function L(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==C(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==C(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===C(o)?o:String(o)),r)}var o}function I(){return I="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=B(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},I.apply(this,arguments)}function q(e,t){return q=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},q(e,t)}function B(e){return B=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},B(e)}var R=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&q(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=B(r);if(o){var n=B(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===C(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._imageElement=t._popup.querySelector(".popup__image"),t._captionElement=t._popup.querySelector(".popup__title_of_image"),t}return t=u,(n=[{key:"open",value:function(e,t){I(B(u.prototype),"open",this).call(this),this._imageElement.src=t,this._imageElement.alt=e,this._captionElement.textContent=e}}])&&L(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(P);function T(e){return T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},T(e)}function U(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==T(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==T(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===T(o)?o:String(o)),r)}var o}function x(){return x="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=D(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},x.apply(this,arguments)}function A(e,t){return A=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},A(e,t)}function D(e){return D=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},D(e)}var V=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&A(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=D(r);if(o){var n=D(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===T(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,e))._handleSubmit=t,n._popupForm=n._popup.querySelector(".popup__form"),n._inputs=n._popupForm.querySelectorAll(".popup__input"),n}return t=u,(n=[{key:"close",value:function(){x(D(u.prototype),"close",this).call(this),this._popupForm.reset()}},{key:"_getInputValues",value:function(){var e={};return this._inputs.forEach((function(t){e[t.name]=t.value})),e}},{key:"setEventListeners",value:function(){var e=this;x(D(u.prototype),"setEventListeners",this).call(this),this._popupForm.addEventListener("submit",(function(t){t.preventDefault(),e._handleSubmit(e._getInputValues())}))}}])&&U(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(P);function N(e){return N="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},N(e)}function F(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==N(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==N(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===N(o)?o:String(o)),r)}var o}function J(){return J="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=H(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},J.apply(this,arguments)}function G(e,t){return G=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},G(e,t)}function H(e){return H=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},H(e)}var z=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&G(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=H(r);if(o){var n=H(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===N(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,e))._handleSubmit=t,n._button=n._popup.querySelector(".popup__save-button"),n}return t=u,(n=[{key:"setEventListeners",value:function(){var e=this;J(H(u.prototype),"setEventListeners",this).call(this),this._button.addEventListener("click",(function(){e._handleSubmit(e._cardId)}))}},{key:"setCardId",value:function(e){this._cardId=e}}])&&F(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(P);function M(e){return M="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},M(e)}function K(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==M(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==M(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===M(o)?o:String(o)),r)}var o}var Q=function(){function e(t){var n=t.nameEl,r=t.textEl,o=t.avatarEl;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._nameEl=n,this._textEl=r,this._avatarEl=o}var t,n;return t=e,(n=[{key:"saveFullInfo",value:function(e){var t=e.name,n=e.about,r=e.avatar,o=e.cohort,i=e._id;this._name=t,this._about=n,this._avatar=r,this._cohort=o,this.id=i}},{key:"getUserInfo",value:function(){return{name:this._name,about:this._about}}},{key:"setUserName",value:function(){this._nameEl.textContent=this._name}},{key:"setUserProfession",value:function(){this._textEl.textContent=this._about}},{key:"setUserAvatar",value:function(){this._avatarEl.src=this._avatar}}])&&K(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function W(e){return W="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},W(e)}function X(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==W(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==W(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===W(o)?o:String(o)),r)}var o}var Y=function(){function e(t){var n=t.baseUrl,r=t.headers;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._baseUrl=n,this._headers=r}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){var e=this,t="".concat(this._baseUrl,"/users/me");return fetch(t,{method:"GET",headers:this._headers}).then((function(t){return e._checkResponseStatusServer(t)}))}},{key:"getInitialCards",value:function(){var e=this,t="".concat(this._baseUrl,"/cards");return fetch(t,{method:"GET",headers:this._headers}).then((function(t){return e._checkResponseStatusServer(t)}))}},{key:"updateUserInfo",value:function(e){var t=this,n=e.name,r=e.about,o="".concat(this._baseUrl,"/users/me");return fetch(o,{method:"PATCH",headers:this._headers,body:JSON.stringify({name:n,about:r})}).then((function(e){return t._checkResponseStatusServer(e)}))}},{key:"addNewCards",value:function(e){var t=this,n=e.name,r=e.link,o="".concat(this._baseUrl,"/cards");return fetch(o,{method:"POST",headers:this._headers,body:JSON.stringify({name:n,link:r})}).then((function(e){return t._checkResponseStatusServer(e)}))}},{key:"deleteCard",value:function(e){var t=this,n="".concat(this._baseUrl,"/cards/").concat(e);return fetch(n,{method:"DELETE",headers:this._headers}).then((function(e){return t._checkResponseStatusServer(e)}))}},{key:"_deleteLike",value:function(e){var t=this,n="".concat(this._baseUrl,"/cards/").concat(e,"/likes");return fetch(n,{method:"DELETE",headers:this._headers}).then((function(e){return t._checkResponseStatusServer(e)})).then((function(e){return e.likes}))}},{key:"_putLike",value:function(e){var t=this,n="".concat(this._baseUrl,"/cards/").concat(e,"/likes");return fetch(n,{method:"PUT",headers:this._headers}).then((function(e){return t._checkResponseStatusServer(e)})).then((function(e){return e.likes}))}},{key:"toggleLike",value:function(e,t){return t?this._deleteLike(e):this._putLike(e)}},{key:"editAvatar",value:function(e){var t=this,n="".concat(this._baseUrl,"/users/me/avatar");return fetch(n,{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e})}).then((function(e){return t._checkResponseStatusServer(e)}))}},{key:"_checkResponseStatusServer",value:function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}}])&&X(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function Z(e,t){e?t.textContent="Сохранение...":t==document.querySelector("#save-button-place")?t.textContent="Создать":t.textContent="Сохранить"}var $=new Q({nameEl:c,textEl:l,avatarEl:s}),ee=new w({renderer:ie,containerSelector:".elements"}),te=new Y({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-76",headers:{authorization:"2b52f1b0-3bb6-4cb3-80b0-6964df8bffb9","Content-Type":"application/json"}});Promise.all([te.getUserInfo(),te.getInitialCards()]).then((function(e){$.saveFullInfo(e[0]),$.setUserName(),$.setUserProfession(),$.setUserAvatar(),ee.renderItems(e[1].reverse())})).catch((function(e){console.log(e)}));var ne=new b(a,r),re=new b(a,i);ne.enableValidation(),re.enableValidation();var oe={};function ie(e){var t=new k(e,"#element-template",ae,fe,he,$.id);oe[e._id]=t;var n=t.generateCard();return ee.addItem(n),n}var ue=new R(".popup_of_image");function ae(e,t){ue.open(e,t)}ue.setEventListeners();var ce=new V("#edit-popup",(function(e){Z(!0,y),te.updateUserInfo(e).then((function(e){$.saveFullInfo(e),$.setUserName(),$.setUserProfession(),ce.close()})).catch((function(e){console.log(e)})).finally((function(){Z(!1,y)}))}));ce.setEventListeners(),e.addEventListener("click",(function(){ce.open();var e=$.getUserInfo();t.value=e.name,n.value=e.about,ne.removeValidationErrors(),ne.enableSubmitButton()}));var le=new V("#edit-popup-place",(function(e){Z(!0,h),te.addNewCards(e).then((function(e){ee.addItem(ie(e)),le.close()})).catch((function(e){console.log(e)})).finally((function(){Z(!1,h)}))}));le.setEventListeners(),o.addEventListener("click",(function(){le.open(),re.removeValidationErrors(),re.disableSubmitButton()}));var se=new z("#delete-popup-card",(function(e){te.deleteCard(e).then((function(){oe[e].handleTrashCard(),se.close()})).catch((function(e){console.log(e)}))}));function fe(e){se.open(),se.setCardId(e)}se.setEventListeners();var pe=new b(a,f);pe.enableValidation(),p.addEventListener("click",(function(){ye.open(),pe.removeValidationErrors(),pe.disableSubmitButton()}));var ye=new V("#update-popup-аvatar",(function(e){Z(!0,v),te.editAvatar(e.link).then((function(e){$.saveFullInfo(e),$.setUserAvatar(),ye.close()})).catch((function(e){console.log(e)})).finally((function(){Z(!1,v)}))}));function he(e,t){oe[e].blockLikeButton(),te.toggleLike(e,t).then((function(t){oe[e].setLikes(t)})).catch((function(e){console.log(e)})).finally((function(){oe[e].unlockLikeButton()}))}ye.setEventListeners()})();