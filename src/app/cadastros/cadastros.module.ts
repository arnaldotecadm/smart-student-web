import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AlunoFormComponent } from "./aluno/aluno-form/aluno-form.component";
import { AlunoListComponent } from "./aluno/aluno-list/aluno-list.component";
import { AlunoModule } from "./aluno/aluno.module";
import { AtividadeFormComponent } from "./atividade/atividade-form/atividade-form.component";
import { AtividadeListComponent } from "./atividade/atividade-list/atividade-list.component";
import { AtividadeModule } from "./atividade/atividade.module";
import { AtividadesSubmetidasFormComponent } from "./atividades-submetidas/atividades-submetidas-form/atividades-submetidas-form.component";
import { AtividadesSubmetidasListComponent } from "./atividades-submetidas/atividades-submetidas-list/atividades-submetidas-list.component";
import { AtividadesSubmetidasModule } from "./atividades-submetidas/atividades-submetidas.module";
import { ConfiguracaoComponent } from "./configuracao/configuracao.component";
import { ConfiguracaoModule } from "./configuracao/configuracao.module";
import { MateriaFormComponent } from "./materia/materia-form/materia-form.component";
import { MateriaListComponent } from "./materia/materia-list/materia-list.component";
import { MateriaModule } from "./materia/materia.module";
import { MinhasAtividadesFormComponent } from "./minhas-atividades/minhas-atividades-form/minhas-atividades-form.component";
import { MinhasAtividadesListComponent } from "./minhas-atividades/minhas-atividades-list/minhas-atividades-list.component";
import { MinhasAtividadesModule } from "./minhas-atividades/minhas-atividades.module";
import { NotaFormComponent } from "./nota/nota-form/nota-form.component";
import { NotaListComponent } from "./nota/nota-list/nota-list.component";
import { NotaModule } from "./nota/nota.module";
import { NotificacaoComponent } from "./notificacao/notificacao.component";
import { NotificacaoModule } from "./notificacao/notificacao.module";
import { ProfessorFormComponent } from "./professor/professor-form/professor-form.component";
import { ProfessorListComponent } from "./professor/professor-list/professor-list.component";
import { ProfessorModule } from "./professor/professor.module";
import { TipoAtividadeFormComponent } from "./tipo-atividade/tipo-atividade-form/tipo-atividade-form.component";
import { TipoAtividadeListComponent } from "./tipo-atividade/tipo-atividade-list/tipo-atividade-list.component";
import { TipoAtividadeModule } from "./tipo-atividade/tipo-atividade.module";
import { TurmaFormComponent } from "./turma/turma-form/turma-form.component";
import { TurmaListComponent } from "./turma/turma-list/turma-list.component";
import { TurmaModule } from "./turma/turma.module";
import { UsuarioFormComponent } from "./usuario/usuario-form/usuario-form.component";
import { UsuarioListComponent } from "./usuario/usuario-list/usuario-list.component";
import { UsuarioModule } from "./usuario/usuario.module";

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
    TipoAtividadeModule,
    NotaModule,
    UsuarioModule,
    MinhasAtividadesModule,
    AtividadesSubmetidasModule,
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
    TipoAtividadeFormComponent,
    TipoAtividadeListComponent,
    NotaFormComponent,
    NotaListComponent,
    UsuarioFormComponent,
    UsuarioListComponent,
    MinhasAtividadesFormComponent,
    MinhasAtividadesListComponent,
    AtividadesSubmetidasListComponent,
    AtividadesSubmetidasFormComponent,
  ],
})
export class CadastrosModule {}
