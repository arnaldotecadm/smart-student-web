import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Router } from "@angular/router";
import { NotaService } from "../nota.service";

@Component({
  selector: "app-nota-list",
  templateUrl: "./nota-list.component.html",
  styleUrls: ["./nota-list.component.css"],
})
export class NotaListComponent implements OnInit {
  data$;
  itemSelecionado;

  botoes = [];

  displayedColumns = [
    { head: "Código", el: "id" },
    { head: "Nome", el: "nome" },
    { head: "Descrição", el: "descricao" },
    { head: "Ações", el: "actions", botoes: this.botoes },
  ];

  constructor(
    private router: Router,
    private service: NotaService,
    protected dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.data$ = this.service.getAllTurmas();
  }

  onRowSelect($event) {
    if (!$event) {
      return;
    }
    this.router.navigate(["notas/nota/" + $event.documentId]);
  }

  executarAcao(acaoPropagate) {
    this.itemSelecionado = acaoPropagate.item;
    switch (acaoPropagate.acao) {
      case "add-new":
        //this.router.navigate(["turmas/turma/0"]);
        break;
      case "excluir":
      //this.excluirItem();
    }
  }
}
