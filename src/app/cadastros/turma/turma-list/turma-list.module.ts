import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TurmaListComponent } from "./turma-list.component";
import { TabelasModule } from "app/shared/tabelas/tabelas.module";
import { ModalsModule } from "app/shared/modals/modals.module";

@NgModule({
  declarations: [TurmaListComponent],
  imports: [CommonModule, TabelasModule, ModalsModule],
  exports: [TurmaListComponent],
})
export class TurmaListModule {}
