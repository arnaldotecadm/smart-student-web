import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatTabsModule } from "@angular/material/tabs";
import { AtividadesSubmetidasModule } from "app/cadastros/atividades-submetidas/atividades-submetidas.module";
import { FileModule } from "app/shared/file/file.module";
import { AtividadeFormComponent } from "./atividade-form.component";

@NgModule({
  declarations: [AtividadeFormComponent],
  imports: [
    CommonModule,
    MatTabsModule,
    MatExpansionModule,
    ReactiveFormsModule,
    FileModule,
    AtividadesSubmetidasModule,MatCheckboxModule
  ],
  exports: [AtividadeFormComponent],
})
export class AtividadeFormModule {}
