import { Location } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Observable } from "rxjs";
import { AlunoService } from "../aluno.service";

@Component({
  selector: "app-aluno-form",
  templateUrl: "./aluno-form.component.html",
  styleUrls: ["./aluno-form.component.css"],
})
export class AlunoFormComponent implements OnInit {
  identifier: number;
  obj$: Observable<any>;

  constructor(
    private service: AlunoService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.carregarDados();
  }

  voltar() {
    this.router.navigate(["turmas"]);
  }

  carregarDados() {
    this.identifier = +this.route.snapshot.paramMap.get("identificador");
    this.obj$ = this.service.getById(this.identifier);
  }
}
