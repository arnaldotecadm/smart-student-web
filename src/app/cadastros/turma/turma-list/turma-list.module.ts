import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TurmaListComponent } from "./turma-list.component";
import { TabelasModule } from "app/shared/tabelas/tabelas.module";

@NgModule({
  declarations: [TurmaListComponent],
  imports: [CommonModule, TabelasModule],
  exports: [TurmaListComponent],
})
export class TurmaListModule {}
