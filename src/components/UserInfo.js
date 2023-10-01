export default class UserInfo {
  constructor({nameEl,textEl,avatarEl}) {
    this._nameEl = nameEl;
    this._textEl = textEl;
    this._avatarEl = avatarEl;
  }

  saveFullInfo({name, about, avatar, cohort, _id}) {
    this._name = name;
    this._about = about;
    this._avatar = avatar;
    this._cohort = cohort;
    this.id = _id;
  }

  getUserInfo() {
    const info = {
        name: this._name,
        about: this._about,
    }
   return info
  }

  setUserName() {
    this._nameEl.textContent = this._name
  }
  
  setUserProfession() {
    this._textEl.textContent = this._about
  }

  setUserAvatar() {
    this._avatarEl.src = this._avatar
  }
}
