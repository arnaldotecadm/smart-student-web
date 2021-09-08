import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ChamadaCalendarioModule } from "./chamada-calendario/chamada-calendario.module";
import { ChamadaModalModule } from "./chamada-modal/chamada-modal.module";
import { ChamadaModalComponent } from "./chamada-modal/chamada-modal.component";
import { ChamadaCalendarioComponent } from "./chamada-calendario/chamada-calendario.component";

@NgModule({
  declarations: [],
  imports: [CommonModule, ChamadaCalendarioModule, ChamadaModalModule],
  exports: [ChamadaModalComponent, ChamadaCalendarioComponent],
})
export class ChamadaModule {}
