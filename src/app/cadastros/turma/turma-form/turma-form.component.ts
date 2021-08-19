import { Component, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup, NgForm, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
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

  constructor(
    private service: TurmaService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router
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
        console.log("Resposta do servidor: " + resposta.message);
        this.router.navigate(["turmas"]);
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
}
