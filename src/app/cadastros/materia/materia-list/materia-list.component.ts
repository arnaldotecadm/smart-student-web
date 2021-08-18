import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MateriaService } from "../materia.service";

@Component({
  selector: "app-materia-list",
  templateUrl: "./materia-list.component.html",
  styleUrls: ["./materia-list.component.css"],
})
export class MateriaListComponent implements OnInit {
  data$;

  displayedColumns = [
    { head: "Código", el: "id" },
    { head: "Nome", el: "nome" },
    { head: "Idade", el: "idade" },
  ];

  constructor(private router: Router, private service: MateriaService) {}

  ngOnInit(): void {
    this.data$ = this.service.getAll();
  }

  onRowSelect($event) {
    if (!$event) {
      return;
    }
    this.router.navigate(["materias/materia/" + $event.id]);
  }
}
