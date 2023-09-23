export default class UserInfo {
  constructor({nameSelector,textSelector}) {
    this._name = document.querySelector(nameSelector);
    this._text = document.querySelector(textSelector);
  }

  getUserInfo() {
    const info = {
        name: this._name.textContent,
        text: this._text.textContent
    }
   return info
  }

  setUserInfo({name,text}) {
    this._name.textContent = name;
    this._text.textContent = text;
  }
}
