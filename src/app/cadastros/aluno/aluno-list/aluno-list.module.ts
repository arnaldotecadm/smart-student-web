import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AlunoListComponent } from "./aluno-list.component";
import { TabelasModule } from "app/shared/tabelas/tabelas.module";

@NgModule({
  declarations: [AlunoListComponent],
  imports: [CommonModule, TabelasModule],
  exports: [AlunoListComponent],
})
export class AlunoListModule {}
