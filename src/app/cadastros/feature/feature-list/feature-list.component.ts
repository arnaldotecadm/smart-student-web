import { Component, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup, NgForm, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { MustConfirm } from "app/decorators/must-confirm.decorators";
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
  pageSizeOptions = [20, 30, 40, 50];

  featureList$: Observable<any>;

  botoes = [
    {
      nome: "excluir",
      acao: "excluir",
      icone: "apagar.svg",
      title: "Excluir Feature",
      expression: "element['featureStatusEnum'] != 'DONE'",
    },
    {
      nome: "fazendo",
      acao: "markInProgress",
      icone: "fazendo.svg",
      title: "Desenvolvendo Feature",
      expression:
        "element['featureStatusEnum'] == 'CREATED' || element['featureStatusEnum'] == null",
    },
    {
      nome: "resolver",
      acao: "markAsDone",
      icone: "icons-ok.svg",
      title: "Concluir Feature",
      expression: "element['featureStatusEnum'] == 'IN_PROGRESS'",
    },
  ];

  displayedColumns = [
    { head: "Código", el: "id", clazz: "featureStatusEnum" },
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
      case "markAsDone":
        this.markAsDone();
        break;
      case "excluir":
        this.markAsAbondoned();
        break;
      case "markInProgress":
        this.markInProgress();
    }
  }

  @MustConfirm("Deseja mesmo abandonar esta tarefa?")
  markAsAbondoned() {
    this.service.deleteById(this.itemSelecionado.documentId).subscribe(() => {
      this.carregarDados();
    });
  }

  @MustConfirm("Deseja mesmo iniciar esta tarefa?")
  markInProgress() {
    this.service
      .markInProgress(this.itemSelecionado.documentId)
      .subscribe(() => {
        this.carregarDados();
      });
  }

  @MustConfirm("Deseja mesmo marcar esta tarefa como concluida?")
  markAsDone() {
    this.service.markAsDone(this.itemSelecionado.documentId).subscribe(() => {
      this.carregarDados();
    });
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
