import { Route } from "@angular/compiler/src/core";
import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { ActivatedRoute, Router } from "@angular/router";
import { UsuarioService } from "app/cadastros/usuario/usuario.service";

@Component({
  selector: "app-atividades-submetidas-list",
  templateUrl: "./atividades-submetidas-list.component.html",
  styleUrls: ["./atividades-submetidas-list.component.css"],
})
export class AtividadesSubmetidasListComponent implements OnInit {
  data$;
  itemSelecionado;
  identifier;

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
    { head: "Descrição", el: "usuario" },
    { head: "Ações", el: "actions", botoes: this.botoes },
  ];

  constructor(
    private router: Router,
    private usuarioService: UsuarioService,
    protected dialog: MatDialog,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.identifier = this.route.snapshot.paramMap.get("identificador");
    this.loadData();
  }

  loadData() {
    this.data$ = this.usuarioService.getAlunosQueJaEnviaramAtividades(
      this.identifier
    );
  }

  onRowSelect($event) {
    if (!$event) {
      return;
    }

    this.router.navigate([
      "atividades-submetidas/atividades-submetida/" +
        this.identifier +
        "/" +
        $event.usuario,
    ]);
  }

  executarAcao(acaoPropagate) {
    this.itemSelecionado = acaoPropagate.item;
    switch (acaoPropagate.acao) {
      case "add-new":
        this.router.navigate(["turmas/turma/0"]);
        break;
      case "excluir":
    }
  }
}
