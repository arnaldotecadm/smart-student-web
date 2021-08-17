import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProfessorFormComponent } from "./professor-form.component";

@NgModule({
  declarations: [ProfessorFormComponent],
  imports: [CommonModule],
  exports: [ProfessorFormComponent],
})
export class ProfessorFormModule {}
