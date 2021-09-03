import { Component, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup, NgForm, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { AtividadeService } from "app/cadastros/atividade/atividade.service";
import { FormCanDeactivate } from "app/guards/form-can-deactivate.component";
import { Observable } from "rxjs";
import { MinhasAtividadesService } from "../minhas-atividades.service";

@Component({
  selector: "app-minhas-atividades-form",
  templateUrl: "./minhas-atividades-form.component.html",
  styleUrls: ["./minhas-atividades-form.component.css"],
})
export class MinhasAtividadesFormComponent
  extends FormCanDeactivate
  implements OnInit
{
  @ViewChild("formTipoAtividade") ngForm: NgForm;

  identifier: string;
  obj$: Observable<any>;
  atividade$: Observable<any>;
  formulario: FormGroup;

  constructor(
    private service: MinhasAtividadesService,
    private atividadeService: AtividadeService,
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
    this.atividade$ = this.atividadeService.getById(this.identifier);
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
