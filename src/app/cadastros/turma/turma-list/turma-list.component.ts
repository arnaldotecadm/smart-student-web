import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Router } from "@angular/router";
import { MustConfirm } from "app/decorators/must-confirm.decorators";
import { TurmaService } from "../turma.service";

@Component({
  selector: "app-turma-list",
  templateUrl: "./turma-list.component.html",
  styleUrls: ["./turma-list.component.css"],
})
export class TurmaListComponent implements OnInit {
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
    private service: TurmaService,
    protected dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.data$ = this.service.getAll();
  }

  onRowSelect($event) {
    if (!$event) {
      return;
    }
    this.router.navigate(["turmas/turma/" + $event.documentId]);
  }

  executarAcao(acaoPropagate) {
    this.itemSelecionado = acaoPropagate.item;
    switch (acaoPropagate.acao) {
      case "add-new":
        this.router.navigate(["turmas/turma/0"]);
        break;
      case "excluir":
        this.excluirItem();
    }
  }

  @MustConfirm("Deseja realemnte excluir este registro?")
  excluirItem() {
    this.service
      .deleteById(this.itemSelecionado.documentId)
      .subscribe(() => this.loadData());
  }
}
