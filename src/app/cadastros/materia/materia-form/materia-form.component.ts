import { Location } from "@angular/common";
import { Component, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup, NgForm, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { FormCanDeactivate } from "app/guards/form-can-deactivate.component";
import { Observable } from "rxjs";
import { MateriaService } from "../materia.service";

@Component({
  selector: "app-materia-form",
  templateUrl: "./materia-form.component.html",
  styleUrls: ["./materia-form.component.css"],
})
export class MateriaFormComponent extends FormCanDeactivate implements OnInit {
  @ViewChild("formMateria") ngForm: NgForm;

  identifier: string;
  obj$: Observable<any>;
  formulario: FormGroup;

  constructor(
    private service: MateriaService,
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
    this.router.navigate(["materias"]);
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
}
