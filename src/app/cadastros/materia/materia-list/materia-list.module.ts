import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MateriaListComponent } from "./materia-list.component";

@NgModule({
  declarations: [MateriaListComponent],
  imports: [CommonModule],
  exports: [MateriaListComponent],
})
export class MateriaListModule {}
