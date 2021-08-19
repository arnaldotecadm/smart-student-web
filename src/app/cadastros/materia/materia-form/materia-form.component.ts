import { Location } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Observable } from "rxjs";
import { MateriaService } from "../materia.service";

@Component({
  selector: "app-materia-form",
  templateUrl: "./materia-form.component.html",
  styleUrls: ["./materia-form.component.css"],
})
export class MateriaFormComponent implements OnInit {
  identifier: number;
  obj$: Observable<any>;

  constructor(
    private service: MateriaService,
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
