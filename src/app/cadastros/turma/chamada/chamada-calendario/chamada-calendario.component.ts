import { Component, Input, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";
import { ActivatedRoute } from "@angular/router";
import { Calendar, View } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridWeek from "@fullcalendar/timegrid";
import { AlunoService } from "app/cadastros/aluno/aluno.service";
import { CalendarioEventInterface } from "app/interfaces/calendar-event.interface";
import moment = require("moment");
import { Observable } from "rxjs";
import { TurmaService } from "../../turma.service";
import { ChamadaModalComponent } from "../chamada-modal/chamada-modal.component";

@Component({
  selector: "app-chamada-calendario",
  templateUrl: "./chamada-calendario.component.html",
  styleUrls: ["./chamada-calendario.component.css"],
})
export class ChamadaCalendarioComponent implements OnInit {
  animal: string;
  name: string;
  dataAtual: Date;
  dataAtualStr: string;

  calendar: Calendar;

  identifier: string;
  obj$: Observable<any>;
  formulario: FormGroup;
  alunoList;

  presencaList;

  @Input() service: CalendarioEventInterface;
  @Input() idRelacionamento;
  currentDocumentId;

  constructor(
    public dialog: MatDialog,
    private route: ActivatedRoute,
    private alunoService: AlunoService,
    private turmaService: TurmaService
  ) {}
  ngOnInit() {
    const calendarEl = document.getElementById("calendar-chamada");
    const plug = [dayGridPlugin, interactionPlugin];
    const now = moment(new Date()); // add this 2 of 4
    const dataMoment = moment(new Date());

    const utcWeek = new Date().getUTCDay();
    dataMoment.add(8 - utcWeek, "days");

    this.calendar = new Calendar(calendarEl, {
      plugins: [dayGridPlugin, timeGridWeek, interactionPlugin],
      height: 600,

      selectAllow: function (select) {
        return select.start.getUTCDay() !== 5 && select.start.getUTCDay() !== 6; //moment(new Date()).diff(select.start) <= 0;
      },
      showNonCurrentDates: true,
      selectable: true,
      themeSystem: "Lux",
      defaultView: "dayGridMonth",
      /*customButtons: {
        myCustomButton: {
          text: 'Data Sugerida',
          click: (args) => {
            //this.addEvento();
          },
        },
      },*/
      editable: true,
      buttonText: {
        today: "Hoje",
        month: "Mês",
        week: "Semana",
        day: "Dia",
        list: "Lista",
      },
      dateClick: (args) => {
        this.currentDocumentId = "";
        this.dayClick(args.date, args.dateStr, args.jsEvent, args.view);
      },
      eventClick: (args) => {
        this.currentDocumentId = args.event.extendedProps.currentDocumentId;
        this.dataAtual = args.event.extendedProps.dataAtual;
        this.openDialog();
      },
      header: {
        left: "prev,next today myCustomButton",
        center: "title",
        right: "dayGridMonth,dayGridWeek,dayGridDay",
      },
      titleFormat: { year: "numeric", month: "short", day: "numeric" },

      businessHours: {
        daysOfWeek: [1, 2, 3, 4, 5],
      },
    });

    this.calendar.render();

    this.carregarEventos();
  }

  dayClick(date: Date, dateStr, jsEvent, activeView: View) {
    if (date.getUTCDay() === 5 || date.getUTCDay() === 6) {
      this.calendar.unselect();
    } else {
      this.dataAtualStr = dateStr;
      this.dataAtual = date;
      this.openDialog();
    }
  }

  openDialog(): void {
    this.alunoList.forEach((el) => {
      el.presenca = false;
    });

    let presenca;
    let dataComparar = this.dataAtualStr;
    if (this.currentDocumentId != "") {
      presenca = this.presencaList.filter(
        (item) => item.documentId === this.currentDocumentId
      );
    } else {
      presenca = this.presencaList.filter(
        (item) =>
          moment(item.data, "DD/MM/YYYY").format("YYYY-MM-DD") == dataComparar
      );
    }

    if (presenca && presenca.length > 0) {
      this.alunoList.forEach((el) => {
        const aluno = presenca[0].alunoList.filter(
          (item) => item.aluno == el.usuario
        );
        if (aluno.length > 0) {
          el.presenca = aluno[0].presente;
        }
      });
    }

    const dialogRef = this.dialog.open(ChamadaModalComponent, {
      width: "850px",
      data: {
        service: this.service,
        idRelacionamento: this.idRelacionamento,
        documentId: this.currentDocumentId,
        dataSelecionada: this.dataAtual,
        turma: this.identifier,
        alunoList: this.alunoList,
        presenca: presenca,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if(result){this.carregarEventos()}
    });
  }

  carregarEventos() {
    this.calendar.removeAllEvents();

    this.identifier = this.route.snapshot.paramMap.get("identificador");
    this.alunoService.getAlunosPorTurma(this.identifier).subscribe((data) => {
      this.alunoList = data;
    });

    this.turmaService
      .getListaPresencaByTurmaId(this.identifier)
      .subscribe((data) => {
        this.presencaList = data;
        data.forEach((item) => {
          this.addCalendarEvent(item);
        });
      });
  }

  addCalendarEvent(item) {
    if (this.calendar.getEventById(item.id)) {
      this.calendar.getEventById(item.id).remove();
    }

    const evento = {
      date: moment(item.data, "DD/MM/YYYY").format("YYYY-MM-DD"),
      id: item.documentId,
      title: "Chamada",
      backgroundColor: item.idFuncionario === 1 ? "#bc79ff" : "#3788d8",
      editable: false,
      extendedProps: {
        currentDocumentId: item.documentId,
        dataAtual: moment(item.data, "DD/MM/YYYY").format("YYYY-MM-DD"),
      },
    };
    this.calendar.addEvent(evento);
  }
}
