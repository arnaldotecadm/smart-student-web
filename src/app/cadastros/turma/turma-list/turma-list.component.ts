import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { TurmaService } from "../turma.service";

@Component({
  selector: "app-turma-list",
  templateUrl: "./turma-list.component.html",
  styleUrls: ["./turma-list.component.css"],
})
export class TurmaListComponent implements OnInit {
  data$;

  displayedColumns = [
    { head: "Código", el: "id" },
    { head: "Nome", el: "nome" },
    { head: "Idade", el: "idade" },
  ];

  constructor(private router: Router, private service: TurmaService) {}

  ngOnInit(): void {
    this.data$ = this.service.getAll();
  }

  onRowSelect($event) {
    if (!$event) {
      return;
    }
    this.router.navigate(["turmas/turma/" + $event.id]);
  }
}
