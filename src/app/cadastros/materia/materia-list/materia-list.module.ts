import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MateriaListComponent } from "./materia-list.component";
import { TabelasModule } from "app/shared/tabelas/tabelas.module";

@NgModule({
  declarations: [MateriaListComponent],
  imports: [CommonModule, TabelasModule],
  exports: [MateriaListComponent],
})
export class MateriaListModule {}
