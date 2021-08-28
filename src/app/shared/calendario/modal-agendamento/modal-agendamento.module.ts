import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { ModalAgendamentoComponent } from "./modal-agendamento.component";

@NgModule({
  declarations: [ModalAgendamentoComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [ModalAgendamentoComponent],
  entryComponents: [ModalAgendamentoComponent],
})
export class ModalAgendamentoModule {}
