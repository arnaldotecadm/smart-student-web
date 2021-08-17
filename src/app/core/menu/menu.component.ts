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
  selectedItem = "home";

  MENU_ITEMS = [
    { routerLink: "home", icon: "home", label: "Home" },
    { routerLink: "dashboard", icon: "dashboard", label: "Dashboard" },
    { routerLink: "alunos", icon: "people", label: "Alunos" },
    { routerLink: "professores", icon: "people", label: "Professores" },
    { routerLink: "", icon: "subject", label: "Materias" },
    { routerLink: "", icon: "grade", label: "Notas" },
    { routerLink: "", icon: "local_activity", label: "Atividades" },
    { routerLink: "", icon: "settings", label: "Configurações" },
  ];

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
