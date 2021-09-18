import {
  Component,
  ElementRef,
  OnInit,
  QueryList,
  ViewChildren
} from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { AlunoService } from "app/cadastros/aluno/aluno.service";
import { AtividadeService } from "app/cadastros/atividade/atividade.service";
import { TurmaService } from "../../turma.service";

@Component({
  selector: "app-nota-turma-form",
  templateUrl: "./nota-turma-form.component.html",
  styleUrls: ["./nota-turma-form.component.css"],
})
export class NotaTurmaFormComponent implements OnInit {
  @ViewChildren("divlist") divs!: QueryList<ElementRef>;

  identifier;
  alunoList;
  atividadeList;

  constructor(
    private alunoService: AlunoService,
    private route: ActivatedRoute,
    private atividadeService: AtividadeService,
    private turmaService: TurmaService
  ) {}

  ngOnInit(): void {
    this.identifier = this.route.snapshot.paramMap.get("identificador");
    this.alunoService.getAlunosPorTurma(this.identifier).subscribe((data) => {
      this.alunoList = data;
      const timer = setInterval(() => {
        clearTimeout(timer);
        this.carregarNotas();
      }, 1000);
    });

    this.atividadeService
      .getAtividadesPorTurma(this.identifier)
      .subscribe((data) => {
        this.atividadeList = data;
      });
  }

  carregarNotas() {
    this.turmaService.getBoletimByTurma(this.identifier)
    .subscribe( (notas) =>{
      if(notas.length > 0){
        const notasJson = notas[0];

        notasJson.notas.forEach((nota) => {
          let el: any;
          el = $(
            "input[data-usuario=" +
              nota.usuario +
              "][data-atividade=" +
              nota.atividade +
              "]"
          )[0];
          el.value = nota.nota;
        });
      }
    })
  }

  registrarNotas() {
    const notas = [];
    let notasObj = {};
    this.divs.forEach((item) => {
      const element = item.nativeElement.querySelectorAll("input");
      element.forEach((el) => {
        const usuario = el.attributes["data-usuario"].value;
        const atividade = el.attributes["data-atividade"].value;
        const nota = el.value;
        notas.push({
          usuario: usuario,
          atividade: atividade,
          nota: nota,
        });

        notasObj = {
          turma: this.identifier,
          data: new Date(),
          notas: notas,
        };
      });
    });

    this.turmaService.saveBoletim(notasObj).subscribe( () => this.carregarNotas());
  }
}
