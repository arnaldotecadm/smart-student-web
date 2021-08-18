import { Location } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
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
    public location: Location
  ) {}

  ngOnInit(): void {
    this.carregarDados();
  }

  carregarDados() {
    this.identifier = +this.route.snapshot.paramMap.get("identificador");
    this.obj$ = this.service.getById(this.identifier);
  }
}
