import { Component, Inject, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import moment = require("moment");
import { TurmaService } from "../../turma.service";

@Component({
  selector: "app-chamada-modal",
  templateUrl: "./chamada-modal.component.html",
  styleUrls: ["./chamada-modal.component.css"],
})
export class ChamadaModalComponent implements OnInit {
  alunoList;
  dataSelecionada;

  constructor(
    private turmaService: TurmaService,
    public dialogRef: MatDialogRef<ChamadaModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    dialogRef.disableClose = true;
    this.alunoList = data.alunoList;
    this.dataSelecionada = moment(this.data.dataSelecionada).format(
      "DD/MM/yyyy"
    );
  }
  ngOnInit() {}

  imprimirListaPresenca(alunoList) {
    let listaAlunos = [];
    if (alunoList) {
      alunoList.forEach((element) => {
        let alunoPresenca = {
          aluno: element["usuario"],
          presente: !!element["presenca"],
        };
        listaAlunos.push(alunoPresenca);
      });
    }

    let listaPresenca = {
      data: this.dataSelecionada,
      turma: this.data.turma,
      alunoList: listaAlunos,
    };

    this.turmaService.savePresenceList(listaPresenca).subscribe((data) => {
      this.dialogRef.close(true)
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
