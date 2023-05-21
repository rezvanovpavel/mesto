const openPopupButtonEl = document.querySelector("#open-popup-button");
const editPopupEl = document.querySelector("#edit-popup");
const closePopupButtonEl = document.querySelector("#close-popup-button");
const profileTitleEl = document.querySelector(".profile-info__title");
const profileTextEl = document.querySelector(".profile-info__text");
const nameInputEl = document.querySelector("#name-input");
const vocationInputEl = document.querySelector("#vocation-input");
const editFormEl = document.querySelector("#edit-form");

function openPopup(popup) {
  popup.classList.add("popup_is-opened");
}

function closePopup(popup) {
  popup.classList.remove("popup_is-opened");
}

openPopupButtonEl.addEventListener("click", function () {
  openPopup(editPopupEl);
  nameInputEl.value = profileTitleEl.textContent;
  vocationInputEl.value = profileTextEl.textContent;
});

closePopupButtonEl.addEventListener("click", function () {
  closePopup(editPopupEl);
});

editFormEl.addEventListener("submit", function (event) {
  event.preventDefault();
  profileTitleEl.textContent = nameInputEl.value;
  profileTextEl.textContent = vocationInputEl.value;
  closePopup(editPopupEl);
});
