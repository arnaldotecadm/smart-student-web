import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule, Routes } from "@angular/router";
import { AlunoFormComponent } from "./cadastros/aluno/aluno-form/aluno-form.component";
import { AlunoListComponent } from "./cadastros/aluno/aluno-list/aluno-list.component";
import { AtividadeFormComponent } from "./cadastros/atividade/atividade-form/atividade-form.component";
import { AtividadeListComponent } from "./cadastros/atividade/atividade-list/atividade-list.component";
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
