class MainApi {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _checkResponse(res) {
    return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
  }

  getSkill() {
    return fetch(`${this._baseUrl}/skills`, {
      credentials: "include",
    }).then((res) => this._checkResponse(res));
  }
}

const mainApi = new MainApi({
  // baseUrl: "http://localhost:3001",
  baseUrl: "https://api.ru",
  headers: {
    "Content-Type": "application/json",
  },
});

export default mainApi;
