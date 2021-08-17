import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProfessorListComponent } from "./professor-list.component";

@NgModule({
  declarations: [ProfessorListComponent],
  imports: [CommonModule],
  exports: [ProfessorListComponent],
})
export class ProfessorListModule {}
