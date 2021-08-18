import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MateriaFormModule } from "./materia-form/materia-form.module";
import { MateriaListModule } from "./materia-list/materia-list.module";
import { MateriaFormComponent } from "./materia-form/materia-form.component";
import { MateriaListComponent } from "./materia-list/materia-list.component";

@NgModule({
  declarations: [],
  imports: [CommonModule, MateriaFormModule, MateriaListModule],
  exports: [MateriaFormComponent, MateriaListComponent],
})
export class MateriaModule {}
