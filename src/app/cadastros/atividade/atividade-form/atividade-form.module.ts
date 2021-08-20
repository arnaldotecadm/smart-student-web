import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AtividadeFormComponent } from "./atividade-form.component";
import { ReactiveFormsModule } from "@angular/forms";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatTabsModule } from "@angular/material/tabs";
import { FileModule } from "app/shared/file/file.module";

@NgModule({
  declarations: [AtividadeFormComponent],
  imports: [
    CommonModule,
    MatTabsModule,
    MatExpansionModule,
    ReactiveFormsModule,
    FileModule,
  ],
  exports: [AtividadeFormComponent],
})
export class AtividadeFormModule {}
