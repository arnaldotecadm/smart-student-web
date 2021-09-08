import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatTabsModule } from "@angular/material/tabs";
import { CalendarioModule } from "app/shared/calendario/calendario.module";
import { TabelasModule } from "app/shared/tabelas/tabelas.module";
import { ChamadaCalendarioModule } from "../chamada-calendario/chamada-calendario.module";
import { ChamadaModalComponent } from "./chamada-modal.component";

@NgModule({
  declarations: [ChamadaModalComponent],
  imports: [
    CommonModule,
    MatTabsModule,
    MatExpansionModule,
    ReactiveFormsModule,
    TabelasModule,
    CalendarioModule,
    MatSlideToggleModule,
  ],
  exports: [ChamadaModalComponent],
  entryComponents: [ChamadaModalComponent],
})
export class ChamadaModalModule {}
