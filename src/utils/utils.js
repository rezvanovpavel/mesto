export function showLoading(isLoading,buttonSaveEl) {
    if (isLoading) {
        buttonSaveEl.textContent = "Сохранение...";
    } else {
        if (buttonSaveEl == document.querySelector("#save-button-place")) {
            buttonSaveEl.textContent = "Создать";
        } else {
         buttonSaveEl.textContent = "Сохранить"
        }
    }
}