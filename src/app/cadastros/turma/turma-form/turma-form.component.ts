import { Location } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";
import { TurmaService } from "../turma.service";

@Component({
  selector: "app-turma-form",
  templateUrl: "./turma-form.component.html",
  styleUrls: ["./turma-form.component.css"],
})
export class TurmaFormComponent implements OnInit {
  identifier: number;
  obj$: Observable<any>;

  constructor(
    private service: TurmaService,
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
