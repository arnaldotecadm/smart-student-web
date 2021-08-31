import { Component, OnInit } from "@angular/core";
import { Router, RoutesRecognized } from "@angular/router";
import * as firebase from "firebase/app";
import { environment } from "../environments/environment";
import { UserService } from "./core/user/user.service";
import { LoadingService } from "./services/loading-service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  visible = false;
  selectedItem = "home";

  constructor(
    private userService: UserService,
    public loadingService: LoadingService,
    router: Router
  ) {
    router.events.subscribe((event) => {
      if (event instanceof RoutesRecognized) {
        const activatedRoute = event.state.root.firstChild;
        const title =
          activatedRoute && activatedRoute.data ? activatedRoute.data.nome : "";

        this.visible = !(activatedRoute && activatedRoute.data.hideMenu);
      }
    });
  }

  ngOnInit() {
    firebase.default.initializeApp(environment.firebaseConfig);
  }

  isLoggedIn(): boolean {
    return this.userService.isLogged();
  }
}
