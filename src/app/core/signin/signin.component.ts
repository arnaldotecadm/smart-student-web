import { Component, NgZone, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import * as firebase from "firebase/app";
import "firebaseui/dist/firebaseui.css";
import { AuthService } from "../auth/auth.service";
import { TokenService } from "../token/token.service";
import { UserService } from "../user/user.service";
import firebaseui = require("firebaseui");

@Component({
  templateUrl: "./signin.component.html",
  styleUrls: ["./signin.component.css"],
})
export class SigninComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private formBuider: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private userService: UserService,
    private tokenService: TokenService,
    private ngZone: NgZone
  ) {}

  ngOnInit() {
    if (this.userService.isLogged()) {
      this.router.navigate(["home"]);
    }

    this.loginForm = this.formBuider.group({
      username: ["teste@teste.com", Validators.required],
      password: ["123456", Validators.required],
    });

    this.loginForm.valueChanges.subscribe(() => {
      if (this.loginForm.get("username").value) {
        this.loginForm.get("username").setErrors(null);
      }

      if (this.loginForm.get("password").value) {
        this.loginForm.get("password").setErrors(null);
      }
    });

    var config = {
      callbacks: {
        signInSuccessWithAuthResult: (authResult) => this.goHome(authResult),
      },
      signInOptions: [
        firebase.default.auth.EmailAuthProvider.PROVIDER_ID,
        firebase.default.auth.FacebookAuthProvider.PROVIDER_ID,
        firebase.default.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.default.auth.GithubAuthProvider.PROVIDER_ID,
      ],
      signInFlow: "popup",
    };

    let ui: any;

    if (firebaseui.auth.AuthUI.getInstance()) {
      ui = firebaseui.auth.AuthUI.getInstance();
    } else {
      ui = new firebaseui.auth.AuthUI(firebase.default.auth());
    }

    ui.start("#firebaseui-auth-container", config);
  }

  goHome(authResult): boolean {
    authResult.user.getIdToken().then((token) => {
      localStorage.setItem(
        "isNewUser",
        authResult.additionalUserInfo.isNewUser
      );
      this.tokenService.setToken(token);
    });
    this.ngZone.run(() => {
      this.router.navigate(["home"]);
    });
    return false;
  }

  login() {
    const userName = this.loginForm.get("username").value;
    const password = this.loginForm.get("password").value;

    this.authService.authenticate(userName, password);
  }
}
