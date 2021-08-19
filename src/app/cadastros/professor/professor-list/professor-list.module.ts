import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProfessorListComponent } from "./professor-list.component";
import { TabelasModule } from "app/shared/tabelas/tabelas.module";
import { ModalsModule } from "app/shared/modals/modals.module";

@NgModule({
  declarations: [ProfessorListComponent],
  imports: [CommonModule, TabelasModule, ModalsModule],
  exports: [ProfessorListComponent],
})
export class ProfessorListModule {}
