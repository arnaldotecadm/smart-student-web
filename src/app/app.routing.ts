import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule, Routes } from "@angular/router";
import { AlunoFormComponent } from "./cadastros/aluno/aluno-form/aluno-form.component";
import { AlunoListComponent } from "./cadastros/aluno/aluno-list/aluno-list.component";
import { TipoAtividadeFormComponent } from "./cadastros/tipo-atividade/tipo-atividade-form/tipo-atividade-form.component";
import { TipoAtividadeListComponent } from "./cadastros/tipo-atividade/tipo-atividade-list/tipo-atividade-list.component";
import { ConfiguracaoComponent } from "./cadastros/configuracao/configuracao.component";
import { MateriaFormComponent } from "./cadastros/materia/materia-form/materia-form.component";
import { MateriaListComponent } from "./cadastros/materia/materia-list/materia-list.component";
import { NotificacaoComponent } from "./cadastros/notificacao/notificacao.component";
import { ProfessorFormComponent } from "./cadastros/professor/professor-form/professor-form.component";
import { ProfessorListComponent } from "./cadastros/professor/professor-list/professor-list.component";
import { TurmaFormComponent } from "./cadastros/turma/turma-form/turma-form.component";
import { TurmaListComponent } from "./cadastros/turma/turma-list/turma-list.component";
import { AuthGuard } from "./core/auth/auth.guard";
import { SigninComponent } from "./core/signin/signin.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { CanDeactivateGuard } from "./guards/can-deactivate-guard.service";
import { HomePageComponent } from "./home/home-page/home-page.component";
import { AtividadeListComponent } from "./cadastros/atividade/atividade-list/atividade-list.component";
import { AtividadeFormComponent } from "./cadastros/atividade/atividade-form/atividade-form.component";
import { UsuarioListComponent } from "./cadastros/usuario/usuario-list/usuario-list.component";
import { UsuarioFormComponent } from "./cadastros/usuario/usuario-form/usuario-form.component";
import { MinhasAtividadesListComponent } from "./cadastros/minhas-atividades/minhas-atividades-list/minhas-atividades-list.component";
import { MinhasAtividadesFormComponent } from "./cadastros/minhas-atividades/minhas-atividades-form/minhas-atividades-form.component";
import { AtividadesSubmetidasListComponent } from "./cadastros/atividades-submetidas/atividades-submetidas-list/atividades-submetidas-list.component";
import { AtividadesSubmetidasFormComponent } from "./cadastros/atividades-submetidas/atividades-submetidas-form/atividades-submetidas-form.component";

const routes: Routes = [
  {
    path: "sigin-in",
    component: SigninComponent,
  },

  {
    path: "home",
    component: HomePageComponent,
    canActivate: [AuthGuard],
  },

  {
    path: "dashboard",
    component: DashboardComponent,
    canActivate: [AuthGuard],
  },

  {
    path: "alunos",
    component: AlunoListComponent,
    canActivate: [AuthGuard],
  },

  {
    path: "alunos/aluno/:identificador",
    component: AlunoFormComponent,
    canActivate: [AuthGuard],
    canDeactivate: [CanDeactivateGuard],
  },

  {
    path: "professores",
    component: ProfessorListComponent,
    canActivate: [AuthGuard],
  },

  {
    path: "professores/professor/:identificador",
    component: ProfessorFormComponent,
    canActivate: [AuthGuard],
    canDeactivate: [CanDeactivateGuard],
  },

  {
    path: "turmas",
    component: TurmaListComponent,
    canActivate: [AuthGuard],
  },

  {
    path: "turmas/turma/:identificador",
    component: TurmaFormComponent,
    canActivate: [AuthGuard],
    canDeactivate: [CanDeactivateGuard],
  },

  {
    path: "materias",
    component: MateriaListComponent,
    canActivate: [AuthGuard],
  },

  {
    path: "materias/materia/:identificador",
    component: MateriaFormComponent,
    canActivate: [AuthGuard],
    canDeactivate: [CanDeactivateGuard],
  },

  {
    path: "atividades",
    component: AtividadeListComponent,
    canActivate: [AuthGuard],
  },

  {
    path: "atividades/atividade/:identificador",
    component: AtividadeFormComponent,
    canActivate: [AuthGuard],
    canDeactivate: [CanDeactivateGuard],
  },

  {
    path: "tipo-atividades",
    component: TipoAtividadeListComponent,
    canActivate: [AuthGuard],
  },

  {
    path: "tipo-atividades/atividade/:identificador",
    component: TipoAtividadeFormComponent,
    canActivate: [AuthGuard],
    canDeactivate: [CanDeactivateGuard],
  },

  {
    path: "minhas-atividades",
    component: MinhasAtividadesListComponent,
    canActivate: [AuthGuard],
  },

  {
    path: "minhas-atividades/minha-atividade/:identificador",
    component: MinhasAtividadesFormComponent,
    canActivate: [AuthGuard],
    canDeactivate: [CanDeactivateGuard],
  },

  {
    path: "usuarios",
    component: UsuarioListComponent,
    canActivate: [AuthGuard],
  },

  {
    path: "usuarios/usuario/:identificador",
    component: UsuarioFormComponent,
    canActivate: [AuthGuard],
    canDeactivate: [CanDeactivateGuard],
  },

  {
    path: "configuracoes",
    component: ConfiguracaoComponent,
    canActivate: [AuthGuard],
  },

  {
    path: "notificacoes",
    component: NotificacaoComponent,
    canActivate: [AuthGuard],
  },

  {
    path: "atividades-submetidas/:identificador",
    component: AtividadesSubmetidasListComponent,
    canActivate: [AuthGuard],
    canDeactivate: [CanDeactivateGuard],
  },

  {
    path: "atividades-submetidas/atividades-submetida/:atividade/:usuario",
    component: AtividadesSubmetidasFormComponent,
    canActivate: [AuthGuard],
    canDeactivate: [CanDeactivateGuard],
  },

  {
    path: "**",
    redirectTo: "home",
  },
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, { useHash: true }),
  ],
  exports: [],
  providers: [CanDeactivateGuard],
})
export class AppRoutingModule {}
