import { Component, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup, NgForm, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { MateriaService } from "app/cadastros/materia/materia.service";
import { ProfessorService } from "app/cadastros/professor/professor.service";
import { TipoAtividadeService } from "app/cadastros/tipo-atividade/tipo-atividade.service";
import { TurmaService } from "app/cadastros/turma/turma.service";
import { ConfirmationMessageAfterOperation } from "app/decorators/confirmimation-message-after-operation.decorators";
import { FormCanDeactivate } from "app/guards/form-can-deactivate.component";
import { Observable } from "rxjs";
import { AtividadeService } from "../atividade.service";

@Component({
  selector: "app-atividade-form",
  templateUrl: "./atividade-form.component.html",
  styleUrls: ["./atividade-form.component.css"],
})
export class AtividadeFormComponent
  extends FormCanDeactivate
  implements OnInit
{
  @ViewChild("formAtividade") ngForm: NgForm;

  identifier: string;
  obj$: Observable<any>;
  formulario: FormGroup;

  todasTurmas$: Observable<any>;
  todasMaterias$: Observable<any>;
  todosProfessores$: Observable<any>;
  todosTipoAtividade$: Observable<any>;

  constructor(
    private service: AtividadeService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router,
    private turmaService: TurmaService,
    private materiaService: MateriaService,
    private professorService: ProfessorService,
    private tipoAtividadeService: TipoAtividadeService
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

    this.todasTurmas$ = this.turmaService.getAll();
    this.todasMaterias$ = this.materiaService.getAll();
    this.todosProfessores$ = this.professorService.getAll();
    this.todosTipoAtividade$ = this.tipoAtividadeService.getAll();

    this.service.getById(this.identifier).subscribe((data) => {
      if (data) {
        this.formulario.patchValue(data);
      }
    });
  }

  voltar() {
    this.router.navigate(["atividades"]);
  }

  @ConfirmationMessageAfterOperation()
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
        // carregar os dados mais atuais, se necessario
        this.form.resetForm();
        this.formulario.patchValue(resposta);
      });
  }

  disponibilizarAtividade() {
    this.service
      .disponibilizarAtividade(this.identifier)
      .subscribe((resposta) => {
        this.form.resetForm();
        this.formulario.patchValue(resposta);
      });
  }

  indisponibilizarAtividade() {
    this.service
      .indisponibilizarAtividade(this.identifier)
      .subscribe((resposta) => {
        this.form.resetForm();
        this.formulario.patchValue(resposta);
      });
  }

  private construirFormulario() {
    this.formulario = this.formBuilder.group({
      documentId: [],
      id: [{ value: "", disabled: true }],
      nome: ["", Validators.required],
      descricao: [""],
      turma: [],
      materia: [],
      professor: [],
      tipoAtividade: [],
      notaMaxima: [],
      statusAtividadeEnum: [{ value: "INDISPONIBILIZADA", disabled: true }],
    });
  }
}
