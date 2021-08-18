import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatTabsModule } from "@angular/material/tabs";
import { AlunoFormComponent } from "./aluno-form.component";

@NgModule({
  declarations: [AlunoFormComponent],
  imports: [CommonModule, MatTabsModule, MatExpansionModule],
  exports: [AlunoFormComponent],
})
export class AlunoFormModule {}
