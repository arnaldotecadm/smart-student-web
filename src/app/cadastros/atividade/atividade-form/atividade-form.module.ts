import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AtividadeFormComponent } from "./atividade-form.component";
import { ReactiveFormsModule } from "@angular/forms";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatTabsModule } from "@angular/material/tabs";
import { FileModule } from "app/shared/file/file.module";
import { AtividadesSubmetidasModule } from "app/cadastros/atividades-submetidas/atividades-submetidas.module";

@NgModule({
  declarations: [AtividadeFormComponent],
  imports: [
    CommonModule,
    MatTabsModule,
    MatExpansionModule,
    ReactiveFormsModule,
    FileModule,
    AtividadesSubmetidasModule,
  ],
  exports: [AtividadeFormComponent],
})
export class AtividadeFormModule {}
