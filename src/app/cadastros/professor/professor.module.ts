import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProfessorFormModule } from "./professor-form/professor-form.module";
import { ProfessorListModule } from "./professor-list/professor-list.module";
import { ProfessorFormComponent } from "./professor-form/professor-form.component";
import { ProfessorListComponent } from "./professor-list/professor-list.component";

@NgModule({
  declarations: [],
  imports: [CommonModule, ProfessorFormModule, ProfessorListModule],
  exports: [ProfessorFormComponent, ProfessorListComponent],
})
export class ProfessorModule {}
