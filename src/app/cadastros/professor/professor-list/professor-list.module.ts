import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProfessorListComponent } from "./professor-list.component";
import { TabelasModule } from "app/shared/tabelas/tabelas.module";

@NgModule({
  declarations: [ProfessorListComponent],
  imports: [CommonModule, TabelasModule],
  exports: [ProfessorListComponent],
})
export class ProfessorListModule {}
