import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AlunoFormComponent } from "./aluno-form.component";

@NgModule({
  declarations: [AlunoFormComponent],
  imports: [CommonModule],
  exports: [AlunoFormComponent],
})
export class AlunoFormModule {}
