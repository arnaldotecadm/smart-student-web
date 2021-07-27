import { Component, OnInit } from "@angular/core";
import * as firebase from "firebase/app";
import { environment } from "../environments/environment";
import { UserService } from "./core/user/user.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  constructor(private userService: UserService) {}

  selectedItem = "home";

  ngOnInit() {
    firebase.default.initializeApp(environment.firebaseConfig);
  }

  isLoggedIn(): boolean {
    return this.userService.isLogged();
  }
}
