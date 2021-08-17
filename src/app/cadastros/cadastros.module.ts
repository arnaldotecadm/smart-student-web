import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AlunoFormComponent } from "./aluno/aluno-form/aluno-form.component";
import { AlunoListComponent } from "./aluno/aluno-list/aluno-list.component";
import { AlunoModule } from "./aluno/aluno.module";

@NgModule({
  declarations: [],
  imports: [CommonModule, AlunoModule],
  exports: [AlunoListComponent, AlunoFormComponent],
})
export class CadastrosModule {}
