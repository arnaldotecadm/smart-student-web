import { Component, OnInit } from "@angular/core";
import { UsuarioService } from "app/cadastros/usuario/usuario.service";
import { TokenService } from "app/core/token/token.service";
import * as firebase from "firebase/app";

@Component({
  selector: "app-home",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.css"],
})
export class HomePageComponent implements OnInit {
  constructor(
    private usuarioService: UsuarioService,
    private tokenService: TokenService
  ) {}

  ngOnInit() {
    //Adding the brand new user to the general's user database
    if (localStorage.getItem("isNewUser") == "true") {
      const currentUser = firebase.default.auth().currentUser;
      this.usuarioService
        .createNewUsuario(this.tokenService.getToken())
        .subscribe(() => {
          localStorage.setItem("isNewUser", "false");
        });
    }
  }
}
