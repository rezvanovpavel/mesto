export function openPopup(popup) {
    popup.classList.add("popup_is-opened");
    document.addEventListener('keydown', closePopupEscape);
    popup.addEventListener('click', closePopupClick);
}

export function closePopup(popup) {
    popup.classList.remove("popup_is-opened");
    document.removeEventListener('keydown', closePopupEscape);
    popup.removeEventListener('click', closePopupClick);
  }

function closePopupEscape (event) {
    if (event.key === "Escape") {
      const openedPopup = document.querySelector(".popup_is-opened");
      closePopup(openedPopup);
    }
};

function closePopupClick (event) {
    if (event.target === event.currentTarget) {
      const openedPopup = document.querySelector(".popup_is-opened");
      closePopup(openedPopup);
    }
};