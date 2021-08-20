import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AlunoFormComponent } from "./aluno/aluno-form/aluno-form.component";
import { AlunoListComponent } from "./aluno/aluno-list/aluno-list.component";
import { AlunoModule } from "./aluno/aluno.module";
import { AtividadeFormComponent } from "./atividade/atividade-form/atividade-form.component";
import { AtividadeListComponent } from "./atividade/atividade-list/atividade-list.component";
import { AtividadeModule } from "./atividade/atividade.module";
import { ConfiguracaoComponent } from "./configuracao/configuracao.component";
import { ConfiguracaoModule } from "./configuracao/configuracao.module";
import { MateriaFormComponent } from "./materia/materia-form/materia-form.component";
import { MateriaListComponent } from "./materia/materia-list/materia-list.component";
import { MateriaModule } from "./materia/materia.module";
import { NotificacaoComponent } from "./notificacao/notificacao.component";
import { NotificacaoModule } from "./notificacao/notificacao.module";
import { ProfessorFormComponent } from "./professor/professor-form/professor-form.component";
import { ProfessorListComponent } from "./professor/professor-list/professor-list.component";
import { ProfessorModule } from "./professor/professor.module";
import { TurmaFormComponent } from "./turma/turma-form/turma-form.component";
import { TurmaListComponent } from "./turma/turma-list/turma-list.component";
import { TurmaModule } from "./turma/turma.module";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AlunoModule,
    ProfessorModule,
    MateriaModule,
    ConfiguracaoModule,
    NotificacaoModule,
    TurmaModule,
    AtividadeModule,
  ],
  exports: [
    AlunoListComponent,
    AlunoFormComponent,
    ProfessorFormComponent,
    ProfessorListComponent,
    MateriaFormComponent,
    MateriaListComponent,
    ConfiguracaoComponent,
    NotificacaoComponent,
    TurmaListComponent,
    TurmaFormComponent,
    AtividadeFormComponent,
    AtividadeListComponent,
  ],
})
export class CadastrosModule {}
