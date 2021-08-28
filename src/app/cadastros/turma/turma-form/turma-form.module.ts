import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TurmaFormComponent } from "./turma-form.component";
import { MatTabsModule } from "@angular/material/tabs";
import { MatExpansionModule } from "@angular/material/expansion";
import { ReactiveFormsModule } from "@angular/forms";
import { TabelasModule } from "app/shared/tabelas/tabelas.module";
import { CalendarioModule } from "app/shared/calendario/calendario.module";

@NgModule({
  declarations: [TurmaFormComponent],
  imports: [
    CommonModule,
    MatTabsModule,
    MatExpansionModule,
    ReactiveFormsModule,
    TabelasModule,
    CalendarioModule,
  ],
  exports: [TurmaFormComponent],
})
export class TurmaFormModule {}
