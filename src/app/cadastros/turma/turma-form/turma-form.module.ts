import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TurmaFormComponent } from "./turma-form.component";
import { MatTabsModule } from "@angular/material/tabs";
import { MatExpansionModule } from "@angular/material/expansion";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [TurmaFormComponent],
  imports: [
    CommonModule,
    MatTabsModule,
    MatExpansionModule,
    ReactiveFormsModule,
  ],
  exports: [TurmaFormComponent],
})
export class TurmaFormModule {}
