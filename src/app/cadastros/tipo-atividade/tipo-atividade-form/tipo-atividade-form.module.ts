import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AtividadeFormComponent } from "./tipo-atividade-form.component";
import { MatTabsModule } from "@angular/material/tabs";
import { MatExpansionModule } from "@angular/material/expansion";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [AtividadeFormComponent],
  imports: [
    CommonModule,
    MatTabsModule,
    MatExpansionModule,
    ReactiveFormsModule,
  ],
  exports: [AtividadeFormComponent],
})
export class AtividadeFormModule {}
