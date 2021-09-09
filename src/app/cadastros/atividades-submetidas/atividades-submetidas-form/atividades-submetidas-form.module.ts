import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AtividadesSubmetidasFormComponent } from "./atividades-submetidas-form.component";
import { MatTabsModule } from "@angular/material/tabs";
import { MatExpansionModule } from "@angular/material/expansion";
import { ReactiveFormsModule } from "@angular/forms";
import { FileModule } from "app/shared/file/file.module";

@NgModule({
  declarations: [AtividadesSubmetidasFormComponent],
  imports: [
    CommonModule,
    MatTabsModule,
    MatExpansionModule,
    ReactiveFormsModule,
    FileModule,
  ],
  exports: [AtividadesSubmetidasFormComponent],
})
export class AtividadesSubmetidasFormModule {}
