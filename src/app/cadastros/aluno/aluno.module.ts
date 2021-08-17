import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AlunoListModule } from "./aluno-list/aluno-list.module";
import { AlunoFormModule } from "./aluno-form/aluno-form.module";
import { AlunoListComponent } from "./aluno-list/aluno-list.component";
import { AlunoFormComponent } from "./aluno-form/aluno-form.component";

@NgModule({
  declarations: [],
  imports: [CommonModule, AlunoListModule, AlunoFormModule],
  exports: [AlunoListComponent, AlunoFormComponent],
})
export class AlunoModule {}
