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
    { routerLink: "alunos", icon: "people", label: "Alunos" },
    { routerLink: "professores", icon: "people", label: "Professores" },
    { routerLink: "turmas", icon: "people", label: "Turmas" },
    { routerLink: "materias", icon: "subject", label: "Materias" },
    {
      routerLink: "atividades",
      icon: "local_activity",
      label: "Atividades",
    },
    {
      routerLink: "tipo-atividades",
      icon: "local_activity",
      label: "Tipos de Atividades",
    },

    {
      routerLink: "minhas-atividades",
      icon: "local_activity",
      label: "Minhas Atividades",
    },

    { routerLink: "usuarios", icon: "people", label: "Usuários" },
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
