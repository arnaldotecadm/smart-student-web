import { Component, OnInit } from "@angular/core";

import * as firebase from "firebase/app";
import { Observable, Subject } from "rxjs";
import { UserService } from "../user/user.service";

@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.css"],
})
export class MenuComponent implements OnInit {
  currentUser$ = new Subject();
  selectedItem = "home";

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    firebase.default.auth().onAuthStateChanged((data) => {
      this.currentUser$.next(firebase.default.auth().currentUser);
    });
  }

  logout() {
    this.userService.logout();
  }

  isLoggedIn(): boolean {
    return this.userService.isLogged();
  }
}
