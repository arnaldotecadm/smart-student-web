import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProfessorFormComponent } from "./professor-form.component";
import { MatTabsModule } from "@angular/material/tabs";
import { MatExpansionModule } from "@angular/material/expansion";

@NgModule({
  declarations: [ProfessorFormComponent],
  imports: [CommonModule, MatTabsModule, MatExpansionModule],
  exports: [ProfessorFormComponent],
})
export class ProfessorFormModule {}
