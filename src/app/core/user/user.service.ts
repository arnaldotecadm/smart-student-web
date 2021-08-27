import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from "@angular/router";
import * as jwt_decode from "jwt-decode";
import { BehaviorSubject } from "rxjs";
import { TokenService } from "../token/token.service";
import { User } from "./user";
import { environment } from "../../../environments/environment";
import { map } from "rxjs/operators";

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

  public startRefreshTokenTimer(token: string) {
    this.refreshTokenTimeout = setTimeout(
      () => this.refreshToken().subscribe(),
      1 * 1000 * 60 * 10
    );
  }

  refreshToken() {
    const payLoad = {
      grant_type: "refresh_token",
      refresh_token: this.tokenService.getRefreshToken(),
    };

    return this.http
      .post<any>(
        `https://securetoken.googleapis.com/v1/token?key=${environment.firebaseConfig.apiKey}`,
        { payLoad },
        {
          headers: {
            "Access-Control-Allow-Credentials": "true",
            "Access-Control-Allow-Origin": "*",
          },
          withCredentials: true,
        }
      )
      .pipe(
        map((token) => {
          this.tokenService.setToken(token.id_token);
          this.startRefreshTokenTimer(token.id_token);
        })
      );
  }

  private stopRefreshTokenTimer() {
    clearTimeout(this.refreshTokenTimeout);
  }
}
