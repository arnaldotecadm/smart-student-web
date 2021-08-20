import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Router } from "@angular/router";
import { MustConfirm } from "app/decorators/must-confirm.decorators";
import { AtividadeService } from "../atividade.service";

@Component({
  selector: "app-atividade-list",
  templateUrl: "./atividade-list.component.html",
  styleUrls: ["./atividade-list.component.css"],
})
export class AtividadeListComponent implements OnInit {
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
    private service: AtividadeService,
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
    this.router.navigate(["atividades/atividade/" + $event.documentId]);
  }

  executarAcao(acaoPropagate) {
    this.itemSelecionado = acaoPropagate.item;
    switch (acaoPropagate.acao) {
      case "add-new":
        this.router.navigate(["atividades/atividade/0"]);
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
