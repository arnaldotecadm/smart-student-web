import { Location } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import * as firebase from "firebase/app";
import { Subject } from "rxjs";
import { UserService } from "../user/user.service";

@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.css"],
})
export class MenuComponent implements OnInit {
  currentUser$ = new Subject();
  selectedItem = "Home";

  MENU_ITEMS = [
    { routerLink: "home", icon: "home", label: "Home" },
    { routerLink: "dashboard", icon: "dashboard", label: "Dashboard" },
    { routerLink: "alunos", icon: "people", label: "Alunos" },
    { routerLink: "professores", icon: "people", label: "Professores" },
    { routerLink: "materias", icon: "subject", label: "Materias" },
    { routerLink: "", icon: "grade", label: "Notas" },
    { routerLink: "", icon: "local_activity", label: "Atividades" },
    { routerLink: "configuracoes", icon: "settings", label: "Configurações" },
    { routerLink: "", icon: "notification_important", label: "Notifações" },
  ];

  constructor(private userService: UserService, private location: Location) {}

  ngOnInit(): void {
    firebase.default.auth().onAuthStateChanged((data) => {
      this.currentUser$.next(firebase.default.auth().currentUser);
    });

    let itemFromUrl = this.location.path().split("/");

    if (itemFromUrl.length == 0) {
      this.selectedItem = "Home";
    } else {
      let item = this.MENU_ITEMS.filter(
        (item) => item.routerLink === itemFromUrl[1]
      );
      if (item && item.length > 0) {
        this.selectedItem = item[0].label;
      }
    }
  }

  logout() {
    this.userService.logout();
  }

  isLoggedIn(): boolean {
    return this.userService.isLogged();
  }
}
