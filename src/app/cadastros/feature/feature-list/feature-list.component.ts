import { Component, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup, NgForm, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { FeatureService } from "../feature.service";

@Component({
  selector: "app-feature-list",
  templateUrl: "./feature-list.component.html",
  styleUrls: ["./feature-list.component.css"],
})
export class FeatureListComponent implements OnInit {
  @ViewChild("formFeature") ngForm: NgForm;

  identifier: string;
  obj$: Observable<any>;
  formulario: FormGroup;
  itemSelecionado;

  featureList$: Observable<any>;

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
    private service: FeatureService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.construirFormulario();
    this.carregarDados();
  }

  get form(): NgForm {
    return this.ngForm;
  }

  carregarDados() {
    this.featureList$ = this.service.getAll();
  }

  update() {
    Object.keys(this.formulario.controls).forEach((field) => {
      const control = this.formulario.get(field);
      control.markAsTouched({ onlySelf: true });
    });

    if (this.formulario.invalid) {
      return;
    }
    this.service
      .salvarRegistro(this.formulario.getRawValue())
      .subscribe((resposta: any) => {
        this.form.resetForm();
        this.carregarDados();
      });
  }

  executarAcao(acaoPropagate) {
    this.itemSelecionado = acaoPropagate.item;
    switch (acaoPropagate.acao) {
      case "add-new":
        break;
      case "excluir":
    }
  }

  private construirFormulario() {
    this.formulario = this.formBuilder.group({
      documentId: [],
      id: [{ value: "", disabled: true }],
      nome: ["", Validators.required],
      descricao: [],
    });
  }
}
