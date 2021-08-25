import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from "@angular/router";
import * as jwt_decode from "jwt-decode";
import { BehaviorSubject } from "rxjs";
import { TokenService } from "../token/token.service";
import { User } from "./user";

@Injectable({ providedIn: "root" })
export class UserService {
  private userSubject = new BehaviorSubject<User>(null);

  constructor(
    private tokenService: TokenService,
    private firebaseAuth: AngularFireAuth,
    private router: Router
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

    this.router.navigate(["/sigin-in"]);
  }

  public isLogged() {
    return this.tokenService.hasToken();
  }
}
