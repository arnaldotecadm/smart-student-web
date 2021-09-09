import { Component, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup, NgForm, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { AtividadeService } from "app/cadastros/atividade/atividade.service";
import { MinhasAtividadesService } from "app/cadastros/minhas-atividades/minhas-atividades.service";
import { FormCanDeactivate } from "app/guards/form-can-deactivate.component";
import { Observable } from "rxjs";

@Component({
  selector: "app-atividades-submetidas-form",
  templateUrl: "./atividades-submetidas-form.component.html",
  styleUrls: ["./atividades-submetidas-form.component.css"],
})
export class AtividadesSubmetidasFormComponent
  extends FormCanDeactivate
  implements OnInit
{
  @ViewChild("formTipoAtividade") ngForm: NgForm;

  identifier: string;
  usuario: string;
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
    this.identifier = this.route.snapshot.paramMap.get("atividade");
    this.usuario = this.route.snapshot.paramMap.get("usuario");
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
