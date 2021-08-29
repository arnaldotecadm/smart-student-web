import { InvokeFunctionExpr } from "@angular/compiler";
import { Component, Input, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { ActivatedRoute } from "@angular/router";
import { Calendar, View } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridWeek from "@fullcalendar/timegrid";
import { CalendarioEventInterface } from "app/interfaces/calendar-event.interface";
import moment = require("moment");
import { ModalAgendamentoComponent } from "./modal-agendamento/modal-agendamento.component";

@Component({
  selector: "app-calendario",
  templateUrl: "./calendario.component.html",
  styleUrls: ["./calendario.component.css"],
})
export class CalendarioComponent implements OnInit {
  animal: string;
  name: string;
  dataAtual: Date;
  dataAtualStr: string;

  calendar: Calendar;

  @Input() service: CalendarioEventInterface;
  @Input() idRelacionamento;
  currentDocumentId;

  constructor(public dialog: MatDialog, private route: ActivatedRoute) {}
  ngOnInit() {
    const calendarEl = document.getElementById("calendar");
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
        this.dataAtual = args.event.extendedProps.dataAtual;
        this.currentDocumentId = args.event.extendedProps.currentDocumentId;
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
    const dialogRef = this.dialog.open(ModalAgendamentoComponent, {
      width: "850px",
      data: {
        service: this.service,
        idRelacionamento: this.idRelacionamento,
        documentId: this.currentDocumentId,
        dataSelecionada: this.dataAtual,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result.remove) {
        this.calendar.getEventById(result.documentId).remove();
      } else {
        this.addCalendarEvent(result.data);
      }
    });
  }

  carregarEventos() {
    this.calendar.removeAllEvents();
    this.service
      .getAllCalendarioEvent(this.idRelacionamento)
      .subscribe((data: any[]) => {
        data.forEach((item) => {
          this.addCalendarEvent(item);
        });
      });
  }

  addCalendarEvent(item) {
    if (this.calendar.getEventById(item.documentId)) {
      this.calendar.getEventById(item.documentId).remove();
    }

    const evento = {
      date: moment(item.data).format("YYYY-MM-DD"),
      id: item.documentId,
      title: item.evento,
      backgroundColor: item.idFuncionario === 1 ? "#bc79ff" : "#3788d8",
      editable: false,
      extendedProps: {
        currentDocumentId: item.documentId,
        dataAtual: moment(item.data).format("YYYY-MM-DD"),
      },
    };
    this.calendar.addEvent(evento);
  }
}
