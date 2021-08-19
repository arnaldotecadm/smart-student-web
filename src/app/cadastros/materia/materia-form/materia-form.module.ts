import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MateriaFormComponent } from "./materia-form.component";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatTabsModule } from "@angular/material/tabs";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [MateriaFormComponent],
  imports: [
    CommonModule,
    MatTabsModule,
    MatExpansionModule,
    ReactiveFormsModule,
  ],
  exports: [MateriaFormComponent],
})
export class MateriaFormModule {}
