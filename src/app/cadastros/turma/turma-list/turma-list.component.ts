import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { TurmaService } from "../turma.service";

@Component({
  selector: "app-turma-list",
  templateUrl: "./turma-list.component.html",
  styleUrls: ["./turma-list.component.css"],
})
export class TurmaListComponent implements OnInit {
  data$;

  botoes = [
    {
      nome: "excluir",
      acao: "excluir",
      icone: "apagar.svg",
      title: "Excluir Turma",
    },
  ];

  displayedColumns = [
    { head: "Código", el: "documentId" },
    { head: "Nome", el: "nome" },
    { head: "Descrição", el: "descricao" },
    { head: "Ações", el: "actions", botoes: this.botoes },
  ];

  constructor(private router: Router, private service: TurmaService) {}

  ngOnInit(): void {
    this.data$ = this.service.getAll();
  }

  onRowSelect($event) {
    if (!$event) {
      return;
    }
    this.router.navigate(["turmas/turma/" + $event.documentId]);
  }

  executarAcao(acaoPropagate) {
    console.log("Acao selecionada: " + acaoPropagate.acao);
    console.log("Item selecionado: " + JSON.stringify(acaoPropagate.item));
    switch (acaoPropagate.acao) {
      case "add-new":
        this.router.navigate(["turmas/turma/0"]);
        break;
      case "exibirDetalhe":
    }
  }
}
