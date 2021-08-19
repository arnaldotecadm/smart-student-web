import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MateriaListComponent } from "./materia-list.component";
import { TabelasModule } from "app/shared/tabelas/tabelas.module";
import { ModalsModule } from "app/shared/modals/modals.module";

@NgModule({
  declarations: [MateriaListComponent],
  imports: [CommonModule, TabelasModule, ModalsModule],
  exports: [MateriaListComponent],
})
export class MateriaListModule {}
