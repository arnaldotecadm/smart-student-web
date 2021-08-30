import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from "@angular/router";
import * as firebase from "firebase/app";
import * as jwt_decode from "jwt-decode";
import { BehaviorSubject, of } from "rxjs";
import { map } from "rxjs/operators";
import { environment } from "../../../environments/environment";
import { TokenService } from "../token/token.service";
import { User } from "./user";

@Injectable({ providedIn: "root" })
export class UserService {
  private userSubject = new BehaviorSubject<User>(null);

  constructor(
    private tokenService: TokenService,
    private firebaseAuth: AngularFireAuth,
    private router: Router,
    private http: HttpClient
  ) {
    this.tokenService.hasToken();
    this.decodeAndNotify();
  }

  setToken(token: string) {
    this.tokenService.setToken(token);
  }

  getUser() {
    return this.userSubject.asObservable();
  }

  private decodeAndNotify() {
    const token = this.tokenService.getToken();
    if (token) {
      const user = jwt_decode(token) as User;
      this.userSubject.next(user);
    } else {
      this.logout();
    }
  }

  logout() {
    this.tokenService.removeToken();
    localStorage.removeItem("isNewUser");
    this.userSubject.next(null);
    this.firebaseAuth.signOut();

    this.stopRefreshTokenTimer();
    this.router.navigate(["/sigin-in"]);
  }

  public isLogged() {
    return this.tokenService.hasToken();
  }

  private refreshTokenTimeout;

  public startRefreshTokenTimer() {
    this.refreshTokenTimeout = setTimeout(
      () => this.refreshToken().subscribe(),
      1 * 1000 * 60 * 10 // 10 minutos
    );
  }

  refreshToken() {
    const user = firebase.default.auth().currentUser;

    user.getIdToken(true).then((token) => {
      this.tokenService.setToken(token);
    });

    this.startRefreshTokenTimer();

    return of("token atualizado com sucesso");
  }

  private stopRefreshTokenTimer() {
    clearTimeout(this.refreshTokenTimeout);
  }
}
