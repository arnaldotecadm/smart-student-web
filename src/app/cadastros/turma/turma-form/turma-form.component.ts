import { Component, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup, NgForm, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { AlunoService } from "app/cadastros/aluno/aluno.service";
import { AtividadeService } from "app/cadastros/atividade/atividade.service";
import { FormCanDeactivate } from "app/guards/form-can-deactivate.component";
import { Observable } from "rxjs";
import { TurmaService } from "../turma.service";

@Component({
  selector: "app-turma-form",
  templateUrl: "./turma-form.component.html",
  styleUrls: ["./turma-form.component.css"],
})
export class TurmaFormComponent extends FormCanDeactivate implements OnInit {
  @ViewChild("formTurma") ngForm: NgForm;

  identifier: string;
  obj$: Observable<any>;
  formulario: FormGroup;
  alunos$: Observable<any>;
  atividades$: Observable<any>;
  alunoList;
  itemSelecionado;

  botoes = [
    {
      nome: "excluir",
      acao: "excluir",
      icone: "apagar.svg",
      title: "Remover Aluno",
    },
  ];

  displayedColumnsAlunoList = [
    { head: "Código", el: "id" },
    { head: "Nome", el: "nome" },
    { head: "Matrícula", el: "matricula" },
    { head: "Telefone", el: "telefone" },
    { head: "Ações", el: "actions", botoes: this.botoes },
  ];

  displayedColumnsAtividadeList = [
    { head: "Código", el: "id" },
    { head: "Nome", el: "nome" },
    { head: "Descrição", el: "descricao" },
    { head: "Ações", el: "actions", botoes: this.botoes },
  ];

  constructor(
    private service: TurmaService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router,
    private alunoService: AlunoService,
    private atividadeService: AtividadeService
  ) {
    super();
  }

  ngOnInit(): void {
    this.construirFormulario();
    this.carregarDados();
  }

  get form(): NgForm {
    return this.ngForm;
  }

  carregarDados() {
    this.identifier = this.route.snapshot.paramMap.get("identificador");
    this.alunos$ = this.alunoService.getAlunosPorTurma(this.identifier);
    this.atividades$ = this.atividadeService.getAtividadesPorTurma(
      this.identifier
    );
    this.service.getById(this.identifier).subscribe((data) => {
      if (data) {
        this.formulario.patchValue(data);
      }
    });
  }

  voltar() {
    this.router.navigate(["turmas"]);
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
        this.ngForm.resetForm();
        this.voltar();
      });
  }

  private construirFormulario() {
    this.formulario = this.formBuilder.group({
      documentId: [],
      id: [{ value: "", disabled: true }],
      nome: ["", Validators.required],
      descricao: [""],
    });
  }

  onRowSelect($event) {
    if (!$event) {
      return;
    }
    this.router.navigate(["atividades-submetidas/" + $event.documentId]);
  }

  onRowSelectAtividade($event) {
    if (!$event) {
      return;
    }
    this.router.navigate(["atividades/atividade/" + $event.documentId]);
  }

  imprimirListaPresenca(alunoList) {
    if (alunoList) {
      alunoList.forEach((element) => {
        console.log(
          element["nome"] +
            " - " +
            (!!element["presenca"] ? "Presente" : "Ausente")
        );
      });
    }
  }
}
