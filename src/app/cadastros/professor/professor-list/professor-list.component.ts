import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ProfessorService } from "../professor.service";

@Component({
  selector: "app-professor-list",
  templateUrl: "./professor-list.component.html",
  styleUrls: ["./professor-list.component.css"],
})
export class ProfessorListComponent implements OnInit {
  data$;

  displayedColumns = [
    { head: "Código", el: "id" },
    { head: "Nome", el: "nome" },
    { head: "Idade", el: "idade" },
  ];

  constructor(private router: Router, private service: ProfessorService) {}

  ngOnInit(): void {
    this.data$ = this.service.getAll();
  }

  onRowSelect($event) {
    if (!$event) {
      return;
    }
    this.router.navigate(["professores/professor/" + $event.id]);
  }
}
