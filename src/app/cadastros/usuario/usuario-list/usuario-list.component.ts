import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Router } from "@angular/router";
import { MustConfirm } from "app/decorators/must-confirm.decorators";
import { UsuarioService } from "../usuario.service";

@Component({
  selector: "app-usuario-list",
  templateUrl: "./usuario-list.component.html",
  styleUrls: ["./usuario-list.component.css"],
})
export class UsuarioListComponent implements OnInit {
  dataAprovados$;
  dataPendentes$;
  dataReprovados$;
  itemSelecionado;

  botoes = [
    {
      nome: "excluir",
      acao: "excluir",
      icone: "apagar.svg",
      title: "Excluir Usuario",
    },
  ];

  botoesAprovacao = [
    {
      nome: "aprovar",
      acao: "aprovar",
      classe: "btn-success",
      titulo: "Aprovar",
    },
    {
      nome: "reprovar",
      acao: "reprovar",
      classe: "btn-danger",
      titulo: "Reprovar",
    },
  ];

  botaoAprovar = [
    {
      nome: "aprovar",
      acao: "aprovar",
      classe: "btn-success",
      titulo: "Aprovar",
    },
  ];

  displayedColumns = [
    { head: "Código", el: "id" },
    { head: "Nome", el: "nome" },
    { head: "Email", el: "email" },
    {
      head: "Ações",
      el: "actions",
      botoes: this.botoes,
    },
  ];

  displayedColumnsAprovacao = [
    { head: "Código", el: "id" },
    { head: "Nome", el: "nome" },
    { head: "Email", el: "email" },
    {
      head: "Ações",
      el: "actions",
      botoes: this.botoesAprovacao,
      tipo: "botao",
    },
  ];

  displayedColumnsReprovados = [
    { head: "Código", el: "id" },
    { head: "Nome", el: "nome" },
    { head: "Email", el: "email" },
    {
      head: "Ações",
      el: "actions",
      botoes: this.botaoAprovar,
      tipo: "botao",
    },
  ];

  constructor(
    private router: Router,
    private service: UsuarioService,
    protected dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.dataAprovados$ = this.service.getAllAprovados();
    this.dataPendentes$ = this.service.getAllPendentes();
    this.dataReprovados$ = this.service.getAllReprovados();
  }

  onRowSelect($event) {
    if (!$event) {
      return;
    }
    this.router.navigate(["usuarios/usuario/" + $event.documentId]);
  }

  executarAcao(acaoPropagate) {
    this.itemSelecionado = acaoPropagate.item;
    console.log(acaoPropagate);

    /*switch (acaoPropagate.acao) {
      case "add-new":
        this.router.navigate(["usuarios/usuario/0"]);
        break;
      case "excluir":
        this.excluirItem();
    }*/
  }

  @MustConfirm("Deseja realemnte excluir este registro?")
  excluirItem() {
    this.service
      .deleteById(this.itemSelecionado.documentId)
      .subscribe(() => this.loadData());
  }
}
