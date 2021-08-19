import { Location } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Observable } from "rxjs";
import { ProfessorService } from "../professor.service";

@Component({
  selector: "app-professor-form",
  templateUrl: "./professor-form.component.html",
  styleUrls: ["./professor-form.component.css"],
})
export class ProfessorFormComponent implements OnInit {
  identifier: number;
  obj$: Observable<any>;

  constructor(
    private service: ProfessorService,
    private route: ActivatedRoute,
    public router: Router
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
