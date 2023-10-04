export default class Api {
    constructor({baseUrl, headers}) {
      this._baseUrl = baseUrl;
      this._headers = headers;
    }

    getUserInfo() {
     const url = `${this._baseUrl}/users/me`;
 
     return fetch(url, {
       method: 'GET',
       headers: this._headers,
     })
     .then(res => this._checkResponseStatusServer(res));
    }

    getInitialCards() {
     const url = `${this._baseUrl}/cards`;
 
     return fetch(url, {
       method: 'GET',
       headers: this._headers,
     })
     .then(res => this._checkResponseStatusServer(res));
    }
   
    updateUserInfo({name,about}) {
     const url = `${this._baseUrl}/users/me`;
     return fetch(url, {
       method: 'PATCH',
       headers: this._headers,
       body: JSON.stringify({
        name: name,
        about: about
      })
     })
     .then(res => this._checkResponseStatusServer(res));
    }

    addNewCards({name,link}) {
     const url = `${this._baseUrl}/cards`;
 
     return fetch(url, {
       method: 'POST',
       headers: this._headers,
       body: JSON.stringify({
        name: name,
        link: link
      })
     })
     .then(res => this._checkResponseStatusServer(res));
    }

    deleteCard(cardId) {
     const url = `${this._baseUrl}/cards/${cardId}`;
 
     return fetch(url, {
       method: 'DELETE',
       headers: this._headers
     })
     .then(res => this._checkResponseStatusServer(res));
   }
   
   _deleteLike(cardId) {
    const url = `${this._baseUrl}/cards/${cardId}/likes`;

    return fetch(url, {
      method: 'DELETE',
      headers: this._headers
    })
    .then(res => this._checkResponseStatusServer(res))
    .then(res => {
      return res.likes;
    });
   }

   _putLike(cardId) {
     const url = `${this._baseUrl}/cards/${cardId}/likes`;

     return fetch(url, {
       method: 'PUT',
       headers: this._headers
     })
     .then(res => this._checkResponseStatusServer(res))
     .then(res => {
       return res.likes;
     });
   }

   toggleLike(cardId, isLiked) {
     if (isLiked) {
       return this._deleteLike(cardId);
     } else {
       return this._putLike(cardId);
     }
   }

   editAvatar(link) {
    const url = `${this._baseUrl}/users/me/avatar`;

    return fetch(url, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: link
      })
    })
    .then(res => this._checkResponseStatusServer(res));
   }

   _checkResponseStatusServer(res) {
      if (res.ok) {
       return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    };
}