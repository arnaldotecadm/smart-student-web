import { Component, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup, NgForm, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Observable } from "rxjs";
import { UsuarioService } from "../usuario.service";

@Component({
  selector: "app-usuario-form",
  templateUrl: "./usuario-form.component.html",
  styleUrls: ["./usuario-form.component.css"],
})
export class UsuarioFormComponent implements OnInit {
  @ViewChild("formUsuario") ngForm: NgForm;

  identifier: string;
  obj$: Observable<any>;
  formulario: FormGroup;
  podeAlterarTipoUsuario = true;

  constructor(
    private service: UsuarioService,
    private route: ActivatedRoute,
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
    this.identifier = this.route.snapshot.paramMap.get("identificador");
    this.service.getById(this.identifier).subscribe((data) => {
      if (data) {
        this.formulario.patchValue(data);
      }
    });
  }

  voltar() {
    this.router.navigate(["usuarios"]);
  }

  private construirFormulario() {
    this.formulario = this.formBuilder.group({
      documentId: [],
      id: [{ value: "", disabled: true }],
      uid: [],
      nome: [{ value: "", disabled: true }],
      email: [{ value: "", disabled: true }],
      isEmailVerified: [{ value: "", disabled: true }],
      issuer: [],
      picture: [],
      ativo: [{ value: "", disabled: true }],
      tipoUsuarioEnum: [{ value: "", disabled: true }],
      statusAprovacaoEnum: [],
    });
  }

  ativarUsuario() {
    this.service.ativarUsuario(this.identifier).subscribe((resposta: any) => {
      this.ngForm.resetForm();
      this.formulario.patchValue(resposta);
    });
  }
  desativarUsuario() {
    this.service
      .desativarUsuario(this.identifier)
      .subscribe((resposta: any) => {
        this.ngForm.resetForm();
        this.formulario.patchValue(resposta);
      });
  }
  marcarUsuarioComoAluno() {
    this.service
      .definirComoAluno(this.formulario.getRawValue())
      .subscribe((resposta: any) => {
        this.ngForm.resetForm();
        this.formulario.patchValue(resposta);
      });
  }
  marcarUsuarioComoProfessor() {
    this.service
      .definirComoProfessor(this.formulario.getRawValue())
      .subscribe((resposta: any) => {
        this.ngForm.resetForm();
        this.formulario.patchValue(resposta);
      });
  }
}
