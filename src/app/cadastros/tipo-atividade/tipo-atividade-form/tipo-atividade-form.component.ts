import { Component, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup, NgForm, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { FormCanDeactivate } from "app/guards/form-can-deactivate.component";
import { Observable } from "rxjs";
import { TipoAtividadeService } from "../tipo-atividade.service";

@Component({
  selector: "app-atividade-form",
  templateUrl: "./tipo-atividade-form.component.html",
  styleUrls: ["./tipo-atividade-form.component.css"],
})
export class TipoAtividadeFormComponent
  extends FormCanDeactivate
  implements OnInit
{
  @ViewChild("formAtividade") ngForm: NgForm;

  identifier: string;
  obj$: Observable<any>;
  formulario: FormGroup;

  constructor(
    private service: TipoAtividadeService,
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
    this.router.navigate(["tipo-atividades"]);
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
