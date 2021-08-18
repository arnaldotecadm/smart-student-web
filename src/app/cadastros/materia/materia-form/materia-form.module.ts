import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MateriaFormComponent } from "./materia-form.component";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatTabsModule } from "@angular/material/tabs";

@NgModule({
  declarations: [MateriaFormComponent],
  imports: [CommonModule, MatTabsModule, MatExpansionModule],
  exports: [MateriaFormComponent],
})
export class MateriaFormModule {}
