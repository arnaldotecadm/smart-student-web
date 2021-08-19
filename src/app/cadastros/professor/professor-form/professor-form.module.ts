import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProfessorFormComponent } from "./professor-form.component";
import { MatTabsModule } from "@angular/material/tabs";
import { MatExpansionModule } from "@angular/material/expansion";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [ProfessorFormComponent],
  imports: [
    CommonModule,
    MatTabsModule,
    MatExpansionModule,
    ReactiveFormsModule,
  ],
  exports: [ProfessorFormComponent],
})
export class ProfessorFormModule {}
