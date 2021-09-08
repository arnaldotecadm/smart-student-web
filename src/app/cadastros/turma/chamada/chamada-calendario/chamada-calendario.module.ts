import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FullCalendarModule } from "@fullcalendar/angular";
import { ChamadaModalModule } from "../chamada-modal/chamada-modal.module";
import { ChamadaCalendarioComponent } from "./chamada-calendario.component";

@NgModule({
  declarations: [ChamadaCalendarioComponent],
  imports: [CommonModule, FullCalendarModule, ChamadaModalModule],
  exports: [ChamadaCalendarioComponent],
})
export class ChamadaCalendarioModule {}
