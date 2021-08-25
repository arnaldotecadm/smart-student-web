import { Component, OnInit } from "@angular/core";
import { AlunoService } from "app/cadastros/aluno/aluno.service";
import * as firebase from "firebase/app";

@Component({
  selector: "app-home",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.css"],
})
export class HomePageComponent implements OnInit {
  constructor(private alunoService: AlunoService) {}

  ngOnInit() {
    if (localStorage.getItem("isNewUser") == "true") {
      const currentUser = firebase.default.auth().currentUser;
      debugger;
      this.alunoService
        .salvarRegistro(
          this.getNewUser(currentUser.displayName, currentUser.email)
        )
        .subscribe();
    }
  }

  private getNewUser(userName, email) {
    return {
      documentId: null,
      id: null,
      nome: userName,
      matricula: "",
      turma: "",
      cpf: "",
      cep: "",
      tipoCep: "",
      endereco: "",
      numero: "",
      uf: "",
      bairro: "",
      cidade: "",
      complemento: "",
      telefone: "",
      contato: "",
      email: email,
    };
  }
}
