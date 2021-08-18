import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule, Routes } from "@angular/router";
import { AlunoFormComponent } from "./cadastros/aluno/aluno-form/aluno-form.component";
import { AlunoListComponent } from "./cadastros/aluno/aluno-list/aluno-list.component";
import { ProfessorFormComponent } from "./cadastros/professor/professor-form/professor-form.component";
import { ProfessorListComponent } from "./cadastros/professor/professor-list/professor-list.component";
import { AuthGuard } from "./core/auth/auth.guard";
import { SigninComponent } from "./core/signin/signin.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { HomePageComponent } from "./home/home-page/home-page.component";

const routes: Routes = [
  {
    path: "sigin-in",
    component: SigninComponent,
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
})
export class AppRoutingModule {}
