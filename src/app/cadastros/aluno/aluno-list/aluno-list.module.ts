import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AlunoListComponent } from "./aluno-list.component";
import { TabelasModule } from "app/shared/tabelas/tabelas.module";
import { ModalsModule } from "app/shared/modals/modals.module";

@NgModule({
  declarations: [AlunoListComponent],
  imports: [CommonModule, TabelasModule, ModalsModule],
  exports: [AlunoListComponent],
})
export class AlunoListModule {}
