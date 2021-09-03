import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Router } from "@angular/router";
import { MinhasAtividadesService } from "../minhas-atividades.service";
import * as firebase from "firebase/app";

@Component({
  selector: "app-minhas-atividades-list",
  templateUrl: "./minhas-atividades-list.component.html",
  styleUrls: ["./minhas-atividades-list.component.css"],
})
export class MinhasAtividadesListComponent implements OnInit {
  data$;
  itemSelecionado;

  botoes = [
    {
      nome: "excluir",
      acao: "excluir",
      icone: "apagar.svg",
      title: "Excluir Turma",
    },
  ];

  displayedColumns = [
    { head: "Código", el: "id" },
    { head: "Nome", el: "nome" },
    { head: "Descrição", el: "descricao" },
    { head: "Ações", el: "actions", botoes: this.botoes },
  ];

  constructor(
    private router: Router,
    private service: MinhasAtividadesService,
    protected dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.data$ = this.service.getAtividadesByAluno();
  }

  onRowSelect($event) {
    if (!$event) {
      return;
    }
    this.router.navigate(["atividades/atividade/" + $event.documentId]);
  }

  executarAcao(acaoPropagate) {
    this.itemSelecionado = acaoPropagate.item;
  }
}
