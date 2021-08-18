import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AlunoFormComponent } from "./aluno/aluno-form/aluno-form.component";
import { AlunoListComponent } from "./aluno/aluno-list/aluno-list.component";
import { AlunoModule } from "./aluno/aluno.module";
import { MateriaFormComponent } from "./materia/materia-form/materia-form.component";
import { MateriaListComponent } from "./materia/materia-list/materia-list.component";
import { MateriaModule } from "./materia/materia.module";
import { ProfessorFormComponent } from "./professor/professor-form/professor-form.component";
import { ProfessorListComponent } from "./professor/professor-list/professor-list.component";
import { ProfessorModule } from "./professor/professor.module";

@NgModule({
  declarations: [],
  imports: [CommonModule, AlunoModule, ProfessorModule, MateriaModule],
  exports: [
    AlunoListComponent,
    AlunoFormComponent,
    ProfessorFormComponent,
    ProfessorListComponent,
    MateriaFormComponent,
    MateriaListComponent,
  ],
})
export class CadastrosModule {}
