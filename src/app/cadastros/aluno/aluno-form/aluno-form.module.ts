import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatTabsModule } from "@angular/material/tabs";
import { AlunoFormComponent } from "./aluno-form.component";
import { MatCheckboxModule } from "@angular/material/checkbox";

@NgModule({
  declarations: [AlunoFormComponent],
  imports: [
    CommonModule,
    MatTabsModule,
    MatExpansionModule,
    ReactiveFormsModule,
    MatCheckboxModule,
  ],
  exports: [AlunoFormComponent],
})
export class AlunoFormModule {}
