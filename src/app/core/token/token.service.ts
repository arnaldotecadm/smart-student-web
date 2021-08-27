import { Injectable } from "@angular/core";

const KEY = "authToken";
const REFRESH_TOKEN = "refreshToken";

@Injectable({ providedIn: "root" })
export class TokenService {
  hasToken() {
    return !!this.getToken();
  }

  setToken(token) {
    window.localStorage.setItem(KEY, token);
  }

  setRefreshToken(token) {
    window.localStorage.setItem(REFRESH_TOKEN, token);
  }

  getToken() {
    return window.localStorage.getItem(KEY);
  }

  getRefreshToken() {
    return window.localStorage.getItem(REFRESH_TOKEN);
  }

  removeToken() {
    window.localStorage.removeItem(KEY);
    window.localStorage.removeItem(REFRESH_TOKEN);
  }
}
