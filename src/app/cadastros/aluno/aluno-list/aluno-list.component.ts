import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AlunoService } from "../aluno.service";

@Component({
  selector: "app-aluno-list",
  templateUrl: "./aluno-list.component.html",
  styleUrls: ["./aluno-list.component.css"],
})
export class AlunoListComponent implements OnInit {
  data$;

  displayedColumns = [
    { head: "Código", el: "id" },
    { head: "Nome", el: "nome" },
    { head: "Idade", el: "idade" },
  ];

  constructor(private router: Router, private service: AlunoService) {}

  ngOnInit(): void {
    this.data$ = this.service.getAll();
  }

  onRowSelect($event) {
    if (!$event) {
      return;
    }
    this.router.navigate(["alunos/aluno/" + $event.id]);
  }
}
