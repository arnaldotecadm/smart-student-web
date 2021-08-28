import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CalendarioComponent } from "./calendario.component";
import { FullCalendarModule } from "@fullcalendar/angular";
import { ModalAgendamentoModule } from "./modal-agendamento/modal-agendamento.module";

@NgModule({
  declarations: [CalendarioComponent],
  imports: [CommonModule, FullCalendarModule, ModalAgendamentoModule],
  exports: [CalendarioComponent],
})
export class CalendarioModule {}
